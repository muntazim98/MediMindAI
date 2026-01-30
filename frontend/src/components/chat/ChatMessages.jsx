import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatMessages({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-slate-50">
      {messages.map((m, i) => (
        <MessageBubble key={i} message={m} />
      ))}
      {loading && <TypingIndicator />}
    </div>
  );
}
