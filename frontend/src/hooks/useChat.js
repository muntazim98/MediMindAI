import { useState } from "react";
import { sendMessage } from "../api/chatApi";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function ask(text) {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const res = await sendMessage(text);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: res.answer },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, ask, loading };
}
