import { motion } from "framer-motion";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`px-4 py-3 rounded-2xl max-w-[70%] text-sm
        ${isUser ? "bg-blue-100" : "bg-white border"}`}
      >
        {message.text}
      </div>
    </motion.div>
  );
}
