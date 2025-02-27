import React from "react";
import { motion } from "framer-motion";
import "./styles/About.css"; // Ensure this file exists

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Heading Animation */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get To Know More <br /> <span className="highlight">About Me</span>
        </motion.h2>

        {/* Profile Image Animation */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src="/images/1.jpg" alt="About Me" />
        </motion.div>

        {/* Education Section Animation */}
        <motion.div
          className="about-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="info-content">
              <h3>Education</h3>
              <p>SBOA School And Junior College 2022</p>
              <p>Shiv Nadar University Chennai</p>
              <p>B.Tech CSE (IoT) 2026</p>
            </div>
          </div>
        </motion.div>

        {/* About Description Animation */}
        <motion.div
          className="about-description"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <p>
            Hello! I'm Pavitra Varshini, a passionate computer science student
            with a deep interest in technology and innovation. I specialize in
            Internet of Things (IoT) and love creating modern web applications.
            With experience in both front-end and back-end development, I aim to
            build solutions that make an impact.
          </p>
          <p>
            My journey into programming started at an early age, and over the
            years, I've honed my skills in various technologies like React,
            JavaScript, Node.js, and Python. I'm constantly learning and
            evolving, and I'm always eager to take on new challenges!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
