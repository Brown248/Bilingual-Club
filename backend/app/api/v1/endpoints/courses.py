from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.course import Course
from app.schemas.course import Course as CourseSchema, CourseCreate, CourseUpdate
from app.api.v1.endpoints.auth import get_current_active_admin

router = APIRouter()

@router.get("/", response_model=List[CourseSchema])
def read_courses(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    return db.query(Course).offset(skip).limit(limit).all()

@router.get("/{course_id}", response_model=CourseSchema)
def read_course(course_id: int, db: Session = Depends(get_db)) -> Any:
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course

@router.post("/", response_model=CourseSchema)
def create_course(
    *, db: Session = Depends(get_db),
    course_in: CourseCreate,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    try:
        course = Course(**course_in.model_dump())
        db.add(course)
        db.commit()
        db.refresh(course)
        return course
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{course_id}", response_model=CourseSchema)
def update_course(
    *, db: Session = Depends(get_db),
    course_id: int,
    course_in: CourseUpdate,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    try:
        update_data = course_in.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(course, field, value)
        db.add(course)
        db.commit()
        db.refresh(course)
        return course
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{course_id}", response_model=CourseSchema)
def delete_course(
    *, db: Session = Depends(get_db),
    course_id: int,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    try:
        db.delete(course)
        db.commit()
        return course
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))