from sqlalchemy import Column, Integer, String, Float, Text
from app.db.session import Base

class Ebook(Base):
    __tablename__ = "ebooks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    price = Column(Float)
    author = Column(String)
    image = Column(String, nullable=True)
    file_url = Column(String, nullable=True)