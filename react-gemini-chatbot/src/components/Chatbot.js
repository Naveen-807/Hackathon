import React, { useState } from "react";
import { Send } from "lucide-react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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
    <div className="box-container">
      <h2>Gemini Chatbot</h2>
      <div className="chat-box" style={{ height: "300px", overflowY: "auto", border: "1px solid gray", padding: "10px", borderRadius: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", marginBottom: "10px" }}>
            <span style={{ padding: "10px", borderRadius: "10px", background: msg.sender === "user" ? "#007bff" : "#444", color: "white" }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px", display: "flex" }}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." style={{ flex: "1", padding: "10px", borderRadius: "5px", border: "1px solid gray" }} />
        <button onClick={sendMessage} className="btn-primary"><Send size={20} /></button>
      </div>
    </div>
  );
};

export default Chatbot;
