from dotenv import load_dotenv
import os
from pinecone import Pinecone, ServerlessSpec
from langchain_pinecone import PineconeVectorStore

from src.helper import (
    load_pdf_file,
    filter_to_minimal_docs,
    text_split,
    download_hugging_face_embeddings
)

load_dotenv()

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
os.environ["PINECONE_API_KEY"] = PINECONE_API_KEY

INDEX_NAME = "medimind-embeddings"

# Load and prepare documents
docs = load_pdf_file("data/")
docs = filter_to_minimal_docs(docs)
chunks = text_split(docs)

# Embeddings
embeddings = download_hugging_face_embeddings()

# Pinecone
pc = Pinecone(api_key=PINECONE_API_KEY)

if not pc.has_index(INDEX_NAME):
    pc.create_index(
        name=INDEX_NAME,
        dimension=384,
        metric="cosine",
        spec=ServerlessSpec(cloud="aws", region="us-east-1"),
    )

# Store vectors
PineconeVectorStore.from_documents(
    documents=chunks,
    index_name=INDEX_NAME,
    embedding=embeddings,
)

print("✅ Pinecone index created and documents uploaded")
