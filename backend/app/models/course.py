from sqlalchemy import Column, Integer, String, Float
from app.db.session import Base

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, nullable=True)
    price = Column(Float)
    instructor = Column(String)
    category = Column(String) # English, Chinese
    image = Column(String, nullable=True) # เก็บเป็น URL หรือ Base64 Text