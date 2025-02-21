import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatbotPage from "./pages/ChatbotPage";
import SignLanguagePage from "./pages/SignlanguagePage";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/chatbot" element={<ChatbotPage darkMode={darkMode} />} />
        <Route path="/sign-language" element={<SignLanguagePage darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
};

export default App;
