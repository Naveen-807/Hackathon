import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="box-container">
        <h1>Welcome to ...</h1>
        <p>Our app is designed to assist individuals with dyslexia by converting their handwriting into clearer, more readable text. It enhances communication by refining written content, making it easier to understand.

   Additionally, the app includes: 
   🔹 Chatbot – Provides instant support and interaction.
   🔹 Sign Language Converter – Helps bridge communication gaps for those who use sign language.

   With a user-friendly interface and dark/light mode support, the app ensures an inclusive and seamless experience for all users. 🚀</p>
        <button onClick={() => navigate("/chatbot")}>Go to Chatbot</button>
        <button onClick={() => navigate("/sign-language")}>
          Go to Sign Language
        </button>
      </div>
    </div>
  );
};

export default Home;
