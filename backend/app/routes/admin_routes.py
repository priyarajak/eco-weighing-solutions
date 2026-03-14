from fastapi import APIRouter, HTTPException
from app.core.auth import create_token

router = APIRouter(prefix="/admin", tags=["Admin"])


ADMIN_USER = "admin"
ADMIN_PASS = "eco123"


@router.post("/login")
def login(data: dict):

    if data["username"] == ADMIN_USER and data["password"] == ADMIN_PASS:

        token = create_token({"admin": True})

        return {"token": token}

    raise HTTPException(status_code=401, detail="Invalid credentials")