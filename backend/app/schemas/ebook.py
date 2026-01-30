from pydantic import BaseModel
from typing import Optional

class EbookBase(BaseModel):
    title: str
    description: Optional[str] = None
    price: float
    author: str
    image: Optional[str] = None
    file_url: Optional[str] = None

class EbookCreate(EbookBase):
    pass

class EbookUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    author: Optional[str] = None
    image: Optional[str] = None
    file_url: Optional[str] = None

class Ebook(EbookBase):
    id: int
    class Config:
        from_attributes = True