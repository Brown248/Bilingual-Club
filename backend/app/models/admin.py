from sqlalchemy import Column, Integer, String
from app.db.session import Base

class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String) # เก็บพาสเวิร์ดแบบเข้ารหัส