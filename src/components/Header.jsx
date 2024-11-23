import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../components/ThemeContext"; // Import the useTheme hook
import "./styles/Header.css"; // Ensure your styles file is correctly linked

const Header = () => {
  // State to handle the toggle for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Access theme and toggleTheme from the ThemeContext
  const { theme, toggleTheme } = useTheme();

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${theme}`}>
      {/* Logo and Theme Toggle */}
      <div className="logo">
        <h1>Portfolio</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="menu-btn" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuOpen ? "active" : ""} ${theme}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
