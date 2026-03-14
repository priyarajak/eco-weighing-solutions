from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.product_routes import router as product_router
from app.routes.inquiry_routes import router as inquiry_router
from app.routes.admin_routes import router as admin_router

app = FastAPI(
    title="Eco Weighing Solutions API",
    version="1.0"
)

origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://eco-weighing-solutions.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(product_router)
app.include_router(inquiry_router)
app.include_router(admin_router)


@app.get("/")
def root():
    return {"message": "Eco Weighing Solutions API running"}