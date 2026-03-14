from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.core.database import product_collection
from app.schemas.product_schema import ProductCreate, ProductUpdate
from app.models.product_model import product_helper

router = APIRouter(prefix="/products", tags=["Products"])


# GET ALL PRODUCTS
@router.get("/")
async def get_products():
    products = []
    async for product in product_collection.find():
        products.append(product_helper(product))
    return products


# GET SINGLE PRODUCT
@router.get("/{id}")
async def get_product(id: str):
    product = await product_collection.find_one({"_id": ObjectId(id)})

    if product:
        return product_helper(product)

    raise HTTPException(status_code=404, detail="Product not found")


# CREATE PRODUCT (ADMIN)
@router.post("/")
async def create_product(product: ProductCreate):

    new_product = await product_collection.insert_one(product.dict())

    created_product = await product_collection.find_one(
        {"_id": new_product.inserted_id}
    )

    return product_helper(created_product)


# UPDATE PRODUCT
@router.put("/{id}")
async def update_product(id: str, product: ProductUpdate):

    await product_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": product.dict()}
    )

    updated_product = await product_collection.find_one({"_id": ObjectId(id)})

    if updated_product:
        return product_helper(updated_product)

    raise HTTPException(status_code=404, detail="Product not found")


# DELETE PRODUCT
@router.delete("/{id}")
async def delete_product(id: str):

    result = await product_collection.delete_one({"_id": ObjectId(id)})

    if result.deleted_count == 1:
        return {"message": "Product deleted"}

    raise HTTPException(status_code=404, detail="Product not found")