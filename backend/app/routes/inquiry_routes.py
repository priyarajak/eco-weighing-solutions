from fastapi import APIRouter
from app.core.database import inquiry_collection
from app.schemas.inquiry_schema import InquiryCreate
from app.models.inquiry_model import inquiry_helper

router = APIRouter(prefix="/inquiry", tags=["Inquiry"])


@router.post("/")
async def create_inquiry(inquiry: InquiryCreate):

    new_inquiry = await inquiry_collection.insert_one(inquiry.dict())

    created_inquiry = await inquiry_collection.find_one(
        {"_id": new_inquiry.inserted_id}
    )

    return inquiry_helper(created_inquiry)


@router.get("/inquiries")
async def get_inquiries():

    inquiries = []

    async for inquiry in inquiry_collection.find():
        inquiries.append(inquiry_helper(inquiry))

    return inquiries