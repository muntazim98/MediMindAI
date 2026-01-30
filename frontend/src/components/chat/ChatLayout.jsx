import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import Disclaimer from "./Disclaimer";

export default function ChatLayout({ messages, loading, onSend }) {
  return (
    <div className="flex flex-col h-[calc(100vh-56px)] max-w-4xl mx-auto bg-white shadow-xl">
      <ChatHeader />
      <ChatMessages messages={messages} loading={loading} />
      <ChatInput onSend={onSend} disabled={loading} />
      <Disclaimer />
    </div>
  );
}
