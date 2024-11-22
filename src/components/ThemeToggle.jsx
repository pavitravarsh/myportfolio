import React from "react";
import { useTheme } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </div>
  );
};

export default ThemeToggle;
