from fastapi import FastAPI

app = FastAPI(title="Depthify")

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}
