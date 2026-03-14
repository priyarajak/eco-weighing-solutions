from pydantic import BaseModel, EmailStr
from typing import Optional


class InquiryCreate(BaseModel):
    customer_name: str
    email: EmailStr
    machine_id: str
    machine_name: str
    message: Optional[str]