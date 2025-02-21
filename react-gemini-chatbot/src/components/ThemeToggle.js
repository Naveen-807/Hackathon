import React from "react";

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button className="theme-button" onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
