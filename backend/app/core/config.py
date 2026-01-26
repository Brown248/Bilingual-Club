from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Cathy Bilingual Club API"
    
    # ใช้ SQLite (เป็นไฟล์ .db) ง่ายและไม่ต้องติดตั้งโปรแกรมเพิ่ม
    DATABASE_URL: str = "sqlite:///./bilingual_club.db"
    
    # ⚠️ สำคัญ: ใช้สำหรับสร้าง Token ล็อกอิน (ห้ามให้ใครรู้)
    SECRET_KEY: str = "YOUR_SUPER_SECRET_KEY_CHANGE_ME_PLEASE"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # ล็อกอินค้างไว้ 1 วัน

    class Config:
        env_file = ".env"

settings = Settings()