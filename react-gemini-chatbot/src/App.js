import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Send } from "lucide-react";
import axios from "axios";

const GeminiChatbot = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/chat", { message: input });
      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}> 
      <motion.button whileTap={{ scale: 0.9 }} onClick={toggleDarkMode} className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600">
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>
      <div className={`w-full max-w-lg p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-700' : 'bg-white bg-opacity-90 backdrop-blur-md border border-gray-300'}`}>
        <h1 className="text-3xl font-bold text-center mb-4">Gemini Chatbot</h1>
        <div className="h-96 overflow-y-auto p-4 border border-gray-700 rounded-lg space-y-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-xl max-w-xs ${msg.sender === "user" ? "bg-blue-600 text-white ml-auto" : "bg-gray-700 text-gray-200 mr-auto"}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <input
            type="text"
            className={`flex-grow p-3 border ${darkMode ? 'border-gray-700 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-gray-100 text-gray-900 placeholder-gray-500'} rounded-l-lg focus:outline-none`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={sendMessage}
            className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-r-lg"
          >
            <Send size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChatbot;