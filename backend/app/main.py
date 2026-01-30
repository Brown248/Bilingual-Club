import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.db.session import engine, SessionLocal
from app.models import admin
from app.api.v1.api import api_router
from app.core import security
from app.core.config import settings

# Logging Config
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create Tables
admin.Base.metadata.create_all(bind=engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Create Admin if not exists
    db = SessionLocal()
    try:
        user = db.query(admin.Admin).filter(admin.Admin.username == "admin").first()
        if not user:
            logger.info("Creating initial admin user...")
            new_admin = admin.Admin(
                username="admin",
                hashed_password=security.get_password_hash("1234")
            )
            db.add(new_admin)
            db.commit()
            logger.info("Admin created! (User: admin / Pass: 1234)")
    except Exception as e:
        logger.error(f"Error creating initial admin: {e}")
    finally:
        db.close()
    
    yield
    # Shutdown logic (if any)

app = FastAPI(
    title=settings.PROJECT_NAME, 
    version="1.0.0",
    lifespan=lifespan
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Static Files (สำหรับดูรูปสลิป)
app.mount("/static", StaticFiles(directory="uploads"), name="static")

app.include_router(api_router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Cathy Bilingual Club API is running! 🚀"}