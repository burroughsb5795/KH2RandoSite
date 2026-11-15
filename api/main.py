from database import engine
from fastapi import FastAPI 
from fastapi.responses import JSONResponse
from models import Base, Seed

Base.metadata.create_all(engine)
app = FastAPI()

@app.get("/health")
def health():
    try: 
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return JSONResponse(status_code=200, content={"status": "Database connection successful"})
    except Exception as e:
        print(f"Database connection failed: {e}")
        return JSONResponse(status_code=503, content={"status": f"Database connection failed."})
