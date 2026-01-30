import ChatLayout from "../components/chat/ChatLayout";
import { useChat } from "../hooks/useChat";

export default function Chat() {
  const { messages, ask, loading } = useChat();

  return (
    <ChatLayout
      messages={messages}
      loading={loading}
      onSend={ask}
    />
  );
}
