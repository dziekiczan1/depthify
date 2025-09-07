from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from uuid import UUID


class RegisterRequest(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    password: Optional[str] = None
    confirmPassword: Optional[str] = None
    provider: Optional[str] = "credentials"
    providerAccountId: Optional[str] = None


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: UUID
    first_name: str
    last_name: str
    email: EmailStr
    created_at: Optional[datetime]


class UserIdCheckResponse(BaseModel):
    exists: bool


class GoogleAuthRequest(BaseModel):
    token: str


    class Config:
        from_attributes = True
