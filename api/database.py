import os
from sqlalchemy import create_engine

DB_URL = os.environ["DB_URL"]
engine = create_engine(DB_URL, echo=True)

