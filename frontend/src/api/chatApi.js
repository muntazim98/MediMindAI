export async function sendMessage(query) {
    const response = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch response");
    }
  
    return response.json();
  }