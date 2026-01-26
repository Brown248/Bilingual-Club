from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.session import engine, Base
# Import Models เพื่อให้ระบบรู้จักตารางก่อนสร้าง
from app.models import admin, course, ebook, order 

# สร้างตารางทั้งหมดใน Database (ถ้ายังไม่มี)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Cathy Bilingual Club API",
    description="Backend for Course & E-Book Store (Admin Only)",
    version="1.0.0"
)

# ... (ส่วน CORS และ Route "/" เหมือนเดิม) ...
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI! Database Created Successfully 🚀"}