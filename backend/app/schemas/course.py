from pydantic import BaseModel
from typing import Optional

class CourseBase(BaseModel):
    title: str
    description: Optional[str] = None
    price: float
    instructor: str
    category: str
    image: Optional[str] = None

class CourseCreate(CourseBase):
    pass

class CourseUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    instructor: Optional[str] = None
    category: Optional[str] = None
    image: Optional[str] = None

class Course(CourseBase):
    id: int
    class Config:
        from_attributes = True