import os

from fastapi import FastAPI 
from fastapi.responses import JSONResponse
from sqlalchemy import text, create_engine
DB_URL = os.environ["DB_URL"]
engine = create_engine(DB_URL, echo=True)
app = FastAPI()

@app.get("/health")
def health():
    try: 
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return JSONResponse(status_code=200, content={"status": "Database connection successful"})
    except Exception as e:
        return JSONResponse(status_code=503, content={"status": f"Database connection failed."})
        print(f"Database connection failed: {e}")