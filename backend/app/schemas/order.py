from pydantic import BaseModel
from typing import List, Optional, Any

# ข้อมูลสินค้าในตะกร้า (ย่อย)
class OrderItem(BaseModel):
    id: str | int
    title: str
    price: float
    type: str # 'course' หรือ 'ebook'

# ข้อมูลตอนลูกค้าส่งมา (Create)
class OrderCreate(BaseModel):
    customer_name: str
    contact_info: str
    total_price: float
    items: List[OrderItem]
    slip_image: str # Base64 string

# ข้อมูลตอนส่งกลับให้ Admin ดู (Read)
class Order(OrderCreate):
    id: int
    status: str
    created_at: Optional[str] = None

    class Config:
        from_attributes = True

class OrderUpdate(BaseModel):
    status: str