from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from uuid import UUID
from google.oauth2 import id_token
from google.auth.transport import requests
import os

from models.user import User
from schemas.user import RegisterRequest, LoginRequest, UserOut, UserIdCheckResponse, GoogleAuthRequest
from utils.database import get_db
from utils.password import hash_password, verify_password

router = APIRouter(prefix="/user", tags=["User"])

@router.post("/register", response_model=UserOut)
def register(payload: RegisterRequest, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == payload.email).first()
    print(existing_user)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered. Please login."
        )

    if payload.provider == "credentials":
        if not payload.password or payload.password != payload.confirmPassword:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Passwords do not match."
            )
        hashed = hash_password(payload.password)
    else:
        hashed = None

    user = User(
        first_name=payload.firstName,
        last_name=payload.lastName,
        email=payload.email,
        hashed_password=hashed,
        provider_account_id=payload.providerAccountId
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


@router.post("/login", response_model=UserOut)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == payload.email).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email or password."
        )
    return user


@router.get("/{user_id}", response_model=UserIdCheckResponse)
def check_userid(user_id: UUID, db: Session = Depends(get_db)):
    user_exists = db.query(User).filter(User.id == user_id).first() is not None
    return UserIdCheckResponse(exists=user_exists)


@router.post("/google-auth", response_model=UserOut)
def google_auth(payload: GoogleAuthRequest, db: Session = Depends(get_db)):
    token = payload.token
    if not token:
        raise HTTPException(status_code=400, detail="Missing token")

    try:
        idinfo = id_token.verify_oauth2_token(
            token,
            requests.Request(),
            os.getenv("GOOGLE_CLIENT_ID")
        )
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Google token")

    email = idinfo["email"]
    first_name = idinfo.get("given_name", "")
    last_name = idinfo.get("family_name", "")
    provider_account_id = idinfo["sub"]


    user = db.query(User).filter(User.email == email).first()
    if user:
        return user


    user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        provider_account_id=provider_account_id
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
