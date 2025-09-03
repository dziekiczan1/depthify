from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    PROJECT_NAME: str = "Depthify"
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000"]

settings = Settings()
