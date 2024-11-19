import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p>© 2024 Pavitra Varshini. All rights reserved.</p>
      <button className="back-to-top" onClick={scrollToTop}>
        Back to Top ↑
      </button>
    </footer>
  );
};

export default Footer;
