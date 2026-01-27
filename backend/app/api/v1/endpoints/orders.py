from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from app.db.session import get_db
from app.models.order import Order
from app.schemas.order import Order as OrderSchema, OrderCreate
from app.api.v1.endpoints.auth import get_current_active_admin
from app.schemas.order import Order as OrderSchema, OrderCreate, OrderUpdate 

router = APIRouter()

# 1. ลูกค้าสั่งซื้อ (ไม่ต้องล็อกอิน)
@router.post("/", response_model=OrderSchema)
def create_order(
    *,
    db: Session = Depends(get_db),
    order_in: OrderCreate,
) -> Any:
    # แปลง List Items เป็น JSON เพื่อเก็บใน DB (SQLite เก็บ Array ตรงๆ ไม่ได้)
    import json
    items_json = json.dumps([item.dict() for item in order_in.items])

    order = Order(
        customer_name=order_in.customer_name,
        contact_info=order_in.contact_info,
        total_price=order_in.total_price,
        items=items_json, # เก็บเป็น JSON String
        slip_image=order_in.slip_image,
        created_at=datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        status="Pending"
    )
    db.add(order)
    db.commit()
    db.refresh(order)
    
    # แปลงกลับเป็น List เพื่อส่ง Response (Schema คาดหวัง List)
    order.items = order_in.items
    return order

# 2. แอดมินดูออเดอร์ (ต้องล็อกอิน)
@router.get("/", response_model=List[OrderSchema])
def read_orders(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    current_admin: dict = Depends(get_current_active_admin) # ✅ Guard
) -> Any:
    orders = db.query(Order).offset(skip).limit(limit).all()
    
    # แปลง JSON String ใน DB กลับเป็น List ให้ Schema
    import json
    for order in orders:
        if isinstance(order.items, str):
            order.items = json.loads(order.items)
            
    return orders

# 3. อัปเดตสถานะออเดอร์ (PUT /{id}) - *Admin Only*
@router.put("/{order_id}", response_model=OrderSchema)
def update_order_status(
    *,
    db: Session = Depends(get_db),
    order_id: int,
    status_in: OrderUpdate, # รับค่า status มา
    current_admin: dict = Depends(get_current_active_admin) # ✅ Guard
) -> Any:
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    # อัปเดตสถานะ
    order.status = status_in.status
    db.commit()
    db.refresh(order)
    
    # แปลง JSON Items กลับเป็น List เพื่อส่งคืน Frontend
    import json
    if isinstance(order.items, str):
        order.items = json.loads(order.items)
        
    return order