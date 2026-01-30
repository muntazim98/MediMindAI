from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from src.rag_service import MedicalRAGService

app = FastAPI(title="Medical AI Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

rag_service = MedicalRAGService()


class ChatRequest(BaseModel):
    query: str


class ChatResponse(BaseModel):
    answer: str


@app.get("/")
def health():
    return {"status": "Backend running"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    answer = rag_service.ask(req.query)
    return {"answer": answer}
