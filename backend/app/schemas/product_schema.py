from pydantic import BaseModel
from typing import Optional
from enum import Enum


class CategoryEnum(str, Enum):
    industrial = "Industrial"
    lab = "Lab"
    retail = "Retail"


class ProductBase(BaseModel):
    name: str
    category: CategoryEnum
    capacity: str
    accuracy: str
    image_url: Optional[str]
    iso_compliant: bool


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    pass