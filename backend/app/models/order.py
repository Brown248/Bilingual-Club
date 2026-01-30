import json
from sqlalchemy import Column, Integer, String, Float, JSON, DateTime
from sqlalchemy.sql import func
from app.db.session import Base

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String)
    contact_info = Column(String)
    total_price = Column(Float)
    status = Column(String, default="Pending")
    
    # เก็บ JSON ดิบใน DB
    items_json = Column("items", JSON) 
    
    # เก็บ Path ของไฟล์รูปสลิป
    slip_image = Column(String, nullable=True)
    
    # เก็บวันที่แบบ Timezone Aware
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    @property
    def items(self):
        """แปลง JSON String/Dict เป็น List อัตโนมัติเวลาเรียกใช้"""
        if isinstance(self.items_json, str):
            try:
                return json.loads(self.items_json)
            except ValueError:
                return []
        return self.items_json or []

    @items.setter
    def items(self, value):
        """แปลง List เป็น JSON ให้อัตโนมัติเวลาบันทึก"""
        self.items_json = value