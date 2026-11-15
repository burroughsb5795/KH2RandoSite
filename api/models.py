from sqlalchemy import text, create_engine, String, ForeignKey
from typing import List, Optional
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class Seed(Base):
    __tablename__ = "seeds"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(String(255), nullable=False)
    seed_string: Mapped[str] = mapped_column(String(255), nullable=False)
    