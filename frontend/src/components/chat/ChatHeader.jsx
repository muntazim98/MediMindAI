import { Bot } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="flex items-center gap-3 p-4 border-b bg-white">
      <div className="p-2 bg-primary text-white rounded-xl">
        <Bot size={20} />
      </div>
      <div>
        <h2 className="font-semibold text-lg">MediMind</h2>
        <p className="text-sm text-gray-500">Medical Information Assistant</p>
      </div>
    </div>
  );
}
