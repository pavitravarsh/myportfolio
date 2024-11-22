import React, { useState } from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // State to handle the toggle for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for light/dark mode
  const [theme, setTheme] = useState("dark");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme; // Update the body class for global theme changes
  };

  return (
    <header className="header">
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
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
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
