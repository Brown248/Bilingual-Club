import os
from typing import List
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Cathy Bilingual Club API"
    
    # Database (Default เป็น SQLite)
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./bilingual_club.db")
    
    # Security (ควรเปลี่ยนเป็นค่าที่ซับซ้อนใน .env ของจริง)
    SECRET_KEY: str = os.getenv("SECRET_KEY", "YOUR_SUPER_SECRET_KEY_CHANGE_ME_PLEASE")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 1 วัน

    # CORS (รองรับหลายโดเมน คั่นด้วยลูกน้ำ)
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ]

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()