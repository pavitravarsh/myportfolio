import React from "react";
import Typewriter from "./Typewriter"; // Import the Typewriter component
import "./styles/Profile.css"; // Assuming CSS is located here
import WaterDropGrid from "./WaterDropGridVideo"; // Make sure WaterDropGrid is imported
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section id="home" className="profile-section relative">
      {/* WaterDropGrid positioned to the right */}
      <div className="absolute top-0 right-0 z-10">
        <WaterDropGrid />
      </div>
      <div className="scroll-indicator">
        <p>Tap for vibes!</p>
        <div className="scroll-line"></div> {/* Vertical line */}
      </div>

      <div className="profile-container relative z-20">
        <div className="profile-image">
          <img src="/images/profile.jpg" alt="Profile" />{" "}
        </div>
        <div className="profile-info">
          <h2>
            {"Hi, I'm a "}
            <Typewriter />
          </h2>
          <h1>Pavitra Varshini</h1>
          <p>
            I'm a Computer Science student specializing in IoT, blending
            innovation with technology. Passionate about crafting sleek,
            responsive web applications using React and JavaScript. Let's create
            digital experiences that inspire!
          </p>
          <div className="cta-buttons">
            <a
              href="/Pavitra_Varshini_CV.pdf" // Path to your CV file in the public folder
              download="Pavitra_Varshini_CV.pdf" // This will prompt the browser to download the file
            >
              <button className="btn-download">Download CV</button>
            </a>
            <Link to="/contact">
              <button className="btn-contact">Contact</button>
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pavitra-varshini-124099259/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/pavitravarsh">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
