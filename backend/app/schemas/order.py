from pydantic import BaseModel
from typing import List, Optional, Any
from datetime import datetime

class OrderItem(BaseModel):
    id: str | int
    title: str
    price: float
    type: str 

# สำหรับ Response กลับไปหน้าบ้าน
class Order(BaseModel):
    id: int
    customer_name: str
    contact_info: str
    total_price: float
    status: str
    items: List[OrderItem] | Any # รองรับ Any เผื่อ JSON parse
    slip_image: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class OrderUpdate(BaseModel):
    status: str