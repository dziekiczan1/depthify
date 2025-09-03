from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from utils.database import Base, engine
from api.user import router as user_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.PROJECT_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)

@app.get("/")
def root():
    return {"message": "Hello from FastAPI"}
