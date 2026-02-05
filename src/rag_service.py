from langchain_pinecone import PineconeVectorStore
from langchain_google_genai import ChatGoogleGenerativeAI

from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

from src.helper import download_hugging_face_embeddings
from src.prompt import system_prompt
from src.config import GEMINI_API_KEY, INDEX_NAME


class MedicalRAGService:
    def __init__(self):
        # Load embeddings
        embeddings = download_hugging_face_embeddings()

        # Load Pinecone index
        vectorstore = PineconeVectorStore.from_existing_index(
            index_name=INDEX_NAME,
            embedding=embeddings
        )

        retriever = vectorstore.as_retriever(
            search_kwargs={"k": 3}
        )

        # Gemini LLM
        llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-flash",
            google_api_key=GEMINI_API_KEY
        )

        # Prompt
        prompt = ChatPromptTemplate.from_messages([
            ("system", system_prompt),
            ("human", "Context:\n{context}\n\nQuestion:\n{question}")
        ])

        # LCEL RAG chain (NO langchain.chains)
        self.rag_chain = (
            {
                "context": retriever,
                "question": RunnablePassthrough()
            }
            | prompt
            | llm
            | StrOutputParser()
        )

    def ask(self, query: str) -> str:
        return self.rag_chain.invoke(query)
