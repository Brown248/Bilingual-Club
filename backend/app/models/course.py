from sqlalchemy import Column, Integer, String, Float, Text
from app.db.session import Base

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    price = Column(Float)
    instructor = Column(String)
    category = Column(String)
    image = Column(String, nullable=True)