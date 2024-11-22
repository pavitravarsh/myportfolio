import React, { createContext, useState, useContext } from "react";

// Create a Context for theme
const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to provide the current theme and the toggle function
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference to localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
