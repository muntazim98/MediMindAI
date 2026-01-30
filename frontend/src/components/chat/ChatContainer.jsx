import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import Disclaimer from "./Disclaimer";

export default function ChatContainer({ messages, loading, onSend }) {
  return (
    <div className="h-screen max-w-3xl mx-auto flex flex-col shadow-xl bg-white">
      <ChatHeader />
      <ChatMessages messages={messages} loading={loading} />
      <ChatInput onSend={onSend} disabled={loading} />
      <Disclaimer />
    </div>
  );
}
