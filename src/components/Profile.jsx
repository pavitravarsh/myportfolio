import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Typewriter from "./Typewriter";
import "./styles/Profile.css";
import WaterDropGrid from "./WaterDropGridVideo";
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
        <div className="scroll-line"></div>
      </div>

      <div className="profile-container relative z-20">
        <div className="profile-image">
          <img src="/images/profile.jpg" alt="Profile" />
        </div>

        <div className="profile-info">
          <h2>
            {"Hi, I'm a "}
            <Typewriter />
          </h2>
          <h1>Pavitra Varshini</h1>

          {/* 🟢 Paragraph Slides In from the Left */}
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            I'm a Computer Science student specializing in IoT, blending
            innovation with technology. Passionate about crafting sleek,
            responsive web applications using React and JavaScript. Let's create
            digital experiences that inspire!
          </motion.p>

          {/* 🟢 Buttons Slide In from the Right */}
          <motion.div
            className="cta-buttons"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <a
              href="/Pavitra_Varshini_CV.pdf"
              download="Pavitra_Varshini_CV.pdf"
            >
              <button className="btn-download">Download CV</button>
            </a>

            <Link to="/contact">
              <button className="btn-contact">Contact</button>
            </Link>
          </motion.div>

          {/* Social Icons (No Slide, Just Regular) */}
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
