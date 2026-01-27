# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.session import engine, SessionLocal
from app.models import admin, course, ebook, order
from app.api.v1.api import api_router
from app.core import security

# สร้างตาราง
admin.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Cathy Bilingual Club API", version="1.0.0")

# CORS
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ รวม API Router (เส้นทางทั้งหมดจะขึ้นต้นด้วย /api/v1)
app.include_router(api_router, prefix="/api/v1")

# ✅ ฟังก์ชันสร้าง Admin คนแรก (ถ้ายังไม่มี)
@app.on_event("startup")
def create_initial_admin():
    db = SessionLocal()
    # เช็คว่ามี admin หรือยัง?
    user = db.query(admin.Admin).filter(admin.Admin.username == "admin").first()
    if not user:
        print("Creating initial admin user...")
        # สร้าง admin / 1234
        new_admin = admin.Admin(
            username="admin",
            hashed_password=security.get_password_hash("1234")
        )
        db.add(new_admin)
        db.commit()
        print("Admin created! (User: admin / Pass: 1234)")
    db.close()

@app.get("/")
def read_root():
    return {"message": "Hello from Python 3.14 Backend! 🐍"}