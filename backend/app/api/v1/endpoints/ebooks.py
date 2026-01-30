from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.ebook import Ebook
from app.schemas.ebook import Ebook as EbookSchema, EbookCreate, EbookUpdate
from app.api.v1.endpoints.auth import get_current_active_admin

router = APIRouter()

@router.get("/", response_model=List[EbookSchema])
def read_ebooks(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    return db.query(Ebook).offset(skip).limit(limit).all()

@router.get("/{ebook_id}", response_model=EbookSchema)
def read_ebook(ebook_id: int, db: Session = Depends(get_db)) -> Any:
    ebook = db.query(Ebook).filter(Ebook.id == ebook_id).first()
    if not ebook:
        raise HTTPException(status_code=404, detail="Ebook not found")
    return ebook

@router.post("/", response_model=EbookSchema)
def create_ebook(
    *, db: Session = Depends(get_db),
    ebook_in: EbookCreate,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    try:
        ebook = Ebook(**ebook_in.model_dump())
        db.add(ebook)
        db.commit()
        db.refresh(ebook)
        return ebook
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{ebook_id}", response_model=EbookSchema)
def update_ebook(
    *, db: Session = Depends(get_db),
    ebook_id: int,
    ebook_in: EbookUpdate,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    ebook = db.query(Ebook).filter(Ebook.id == ebook_id).first()
    if not ebook:
        raise HTTPException(status_code=404, detail="Ebook not found")
    try:
        update_data = ebook_in.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(ebook, field, value)
        db.add(ebook)
        db.commit()
        db.refresh(ebook)
        return ebook
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{ebook_id}", response_model=EbookSchema)
def delete_ebook(
    *, db: Session = Depends(get_db),
    ebook_id: int,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    ebook = db.query(Ebook).filter(Ebook.id == ebook_id).first()
    if not ebook:
        raise HTTPException(status_code=404, detail="Ebook not found")
    try:
        db.delete(ebook)
        db.commit()
        return ebook
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))