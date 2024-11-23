import React from "react";
import "./styles/Contact.css"; // Assuming you save the CSS as ContactSection.css

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
