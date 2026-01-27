from pydantic import BaseModel
from typing import Optional

# ข้อมูลพื้นฐานที่ต้องมี
class CourseBase(BaseModel):
    title: str
    description: Optional[str] = None
    price: float
    instructor: str
    category: str
    image: Optional[str] = None # ส่งเป็น Base64 หรือ URL

# ตอนสร้าง (รับข้อมูลเหมือน Base)
class CourseCreate(CourseBase):
    pass

# ตอนแก้ไข (ทุกช่องเป็น Optional ไม่แก้ก็ได้)
class CourseUpdate(CourseBase):
    title: Optional[str] = None
    price: Optional[float] = None
    instructor: Optional[str] = None
    category: Optional[str] = None

# ตอนส่งกลับไปหา Frontend (ต้องมี ID)
class Course(CourseBase):
    id: int

    class Config:
        from_attributes = True