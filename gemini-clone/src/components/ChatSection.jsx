import { React, useState} from "react";
import { Send } from "lucide-react";
import { sendMessageToBackend } from "../store/responseStore.js";
import ReactMarkdown from "react-markdown";

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
      if (input.trim() === "") return;
      setMessages([...messages, { sender: "user", text: input }]);
      console.log(messages);
      setInput("");

      try {
          const reply = await sendMessageToBackend(input);
          setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: reply }]);
      } catch (error) {
          console.error("Error sending message:", error);
      }
  };

  return (
    <div className="bg-gray-800 rounded-l-2xl w-full h-screen p-2 text-white flex flex-col justify-between items-center gap-1">
      {/* chat messages */}
      <div className="flex flex-col space-y-6 w-[900px] hide-scrollbar h-screen overflow-auto flex-1 p-1.5">
        
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 max-w-[60%] rounded-2xl
            ${msg.sender === "user" ? "bg-gray-700 rounded-tr-none self-end" : " self-start"} whitespace-pre-wrap
          `}>
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
      </div>
      {/* chat inputs */}

      <div className="flex flex-col gap-y-0 items-center justify-center w-full">
        <div className="bg-gray-600 p-2 rounded-2xl flex items-center justify-center w-[700px] bottom-0 mb-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 rounded-2xl border-none w-[700px] text-black hide-scrollbar outline-none  max-h-32"
            placeholder="Type your message..."
          />
          <button className="p-2 rounded-full bg-gray-400 ml-2 cursor-pointer" onClick={handleSend}>
            <Send className="text-gray-800" />
          </button>
        </div>
        <p>This is simple Gemini clone it will definitely make mistakes for more project Visit <a href="https://github.com/The-vishnu" rel="noopener noreferrer" className="text-blue-500">my repo</a></p>
      </div>
    </div>
  );
};

export default ChatSection;
