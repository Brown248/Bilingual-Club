from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.course import Course
from app.schemas.course import Course as CourseSchema, CourseCreate, CourseUpdate
from app.api.v1.endpoints.auth import get_current_active_admin # เรียกใช้ Guard

router = APIRouter()

# 1. ดึงข้อมูลคอร์สทั้งหมด (GET /) - ใครๆ ก็ดูได้ (ไม่ต้องล็อกอิน)
@router.get("/", response_model=List[CourseSchema])
def read_courses(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100
) -> Any:
    courses = db.query(Course).offset(skip).limit(limit).all()
    return courses

# 2. ดูรายละเอียดคอร์สตาม ID (GET /{id})
@router.get("/{course_id}", response_model=CourseSchema)
def read_course(
    course_id: int,
    db: Session = Depends(get_db),
) -> Any:
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course

# 3. สร้างคอร์สใหม่ (POST /) - *ต้องเป็น Admin เท่านั้น*
@router.post("/", response_model=CourseSchema)
def create_course(
    *,
    db: Session = Depends(get_db),
    course_in: CourseCreate,
    current_admin: dict = Depends(get_current_active_admin) # ✅ Guard: เช็คว่าเป็น Admin
) -> Any:
    course = Course(
        title=course_in.title,
        description=course_in.description,
        price=course_in.price,
        instructor=course_in.instructor,
        category=course_in.category,
        image=course_in.image
    )
    db.add(course)
    db.commit()
    db.refresh(course)
    return course

# 4. แก้ไขคอร์ส (PUT /{id}) - *ต้องเป็น Admin เท่านั้น*
@router.put("/{course_id}", response_model=CourseSchema)
def update_course(
    *,
    db: Session = Depends(get_db),
    course_id: int,
    course_in: CourseUpdate,
    current_admin: dict = Depends(get_current_active_admin) # ✅ Guard
) -> Any:
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    
    # อัปเดตข้อมูลเฉพาะส่วนที่ส่งมา
    update_data = course_in.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(course, field, value)

    db.add(course)
    db.commit()
    db.refresh(course)
    return course

# 5. ลบคอร์ส (DELETE /{id}) - *ต้องเป็น Admin เท่านั้น*
@router.delete("/{course_id}", response_model=CourseSchema)
def delete_course(
    *,
    db: Session = Depends(get_db),
    course_id: int,
    current_admin: dict = Depends(get_current_active_admin) # ✅ Guard
) -> Any:
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    
    db.delete(course)
    db.commit()
    return course