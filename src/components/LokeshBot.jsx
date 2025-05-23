import { useState } from "react";

export default function LokeshBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "system", content: "You are LokeshBot, a helpful assistant for Lokesh's portfolio site." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, I ran into an error!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 dark:bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          💬 Chat with LokeshBot
        </button>
      ) : (
        <div className="bg-white dark:bg-[#1f1f1f] text-black dark:text-white w-80 h-96 rounded-xl shadow-xl flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700">
          <div className="bg-blue-600 dark:bg-purple-600 text-white px-4 py-2 font-bold text-sm flex justify-between items-center">
            LokeshBot
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="flex-1 px-3 py-2 overflow-y-auto space-y-2 text-sm">
            {messages.slice(1).map((msg, i) => (
              <div key={i} className={`text-${msg.role === "user" ? "right" : "left"}`}>
                <div className={`p-2 rounded-lg ${msg.role === "user" ? "bg-blue-100 dark:bg-blue-800 ml-auto" : "bg-gray-200 dark:bg-gray-700 mr-auto"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <p className="text-gray-400 italic">Typing...</p>}
          </div>

          <div className="p-2 border-t border-gray-300 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="px-3 py-1 bg-blue-600 dark:bg-purple-500 text-white rounded-md text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
