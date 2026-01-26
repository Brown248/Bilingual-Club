from sqlalchemy import Column, Integer, String, Float, JSON
from app.db.session import Base
from datetime import datetime

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String)
    contact_info = Column(String) # เบอร์โทร หรือ Email
    total_price = Column(Float)
    status = Column(String, default="Pending") # Pending, Completed, Cancelled
    
    # เก็บรายการสินค้าเป็น JSON เช่น [{"id": 1, "name": "IELTS", "type": "course"}]
    items = Column(JSON) 
    
    slip_image = Column(String, nullable=True) # รูปสลิปโอนเงิน
    created_at = Column(String, default=datetime.utcnow().isoformat)