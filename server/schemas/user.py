from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class RegisterRequest(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    password: str
    confirmPassword: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: EmailStr
    created_at: Optional[datetime]

    class Config:
        from_attributes = True
