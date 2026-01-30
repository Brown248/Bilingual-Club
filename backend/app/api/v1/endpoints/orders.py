import shutil
import uuid
import json
from pathlib import Path
from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, File, UploadFile, Form
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.order import Order
from app.schemas.order import Order as OrderSchema, OrderUpdate
from app.api.v1.endpoints.auth import get_current_active_admin

router = APIRouter()

# กำหนดโฟลเดอร์เก็บรูป
UPLOAD_DIR = Path("uploads/slips")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.post("/", response_model=OrderSchema)
def create_order(
    *,
    db: Session = Depends(get_db),
    customer_name: str = Form(...),
    contact_info: str = Form(...),
    total_price: float = Form(...),
    items: str = Form(...), # รับ JSON String จาก Frontend
    slip_image: UploadFile = File(...),
) -> Any:
    try:
        # 1. Save Image
        file_extension = slip_image.filename.split(".")[-1]
        file_name = f"{uuid.uuid4()}.{file_extension}"
        file_path = UPLOAD_DIR / file_name
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(slip_image.file, buffer)
            
        # 2. Save Data to DB
        # แปลง items string เป็น list ก่อนบันทึกผ่าน setter ของ model
        items_list = json.loads(items)

        order = Order(
            customer_name=customer_name,
            contact_info=contact_info,
            total_price=total_price,
            items=items_list, 
            slip_image=f"/static/slips/{file_name}", # เก็บ URL
            status="Pending"
        )
        db.add(order)
        db.commit()
        db.refresh(order)
        return order

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to create order: {str(e)}")

@router.get("/", response_model=List[OrderSchema])
def read_orders(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    orders = db.query(Order).order_by(Order.created_at.desc()).offset(skip).limit(limit).all()
    return orders

@router.put("/{order_id}", response_model=OrderSchema)
def update_order_status(
    *,
    db: Session = Depends(get_db),
    order_id: int,
    status_in: OrderUpdate,
    current_admin: dict = Depends(get_current_active_admin)
) -> Any:
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    try:
        order.status = status_in.status
        db.commit()
        db.refresh(order)
        return order
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to update status: {str(e)}")