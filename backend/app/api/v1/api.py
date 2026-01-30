from fastapi import APIRouter
from app.api.v1.endpoints import auth, courses, ebooks, orders

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(courses.router, prefix="/courses", tags=["courses"])
api_router.include_router(ebooks.router, prefix="/ebooks", tags=["ebooks"])
api_router.include_router(orders.router, prefix="/orders", tags=["orders"])