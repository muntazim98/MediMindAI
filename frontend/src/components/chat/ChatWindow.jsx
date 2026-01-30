import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        height: "400px",
        overflowY: "auto",
      }}
    >
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
    </div>
  );
}
