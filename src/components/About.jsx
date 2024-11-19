import React from "react";
import "./styles/About.css"; // Make sure you have this CSS file

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          Get To Know More <br /> <span className="highlight">About Me</span>
        </h2>

        {/* Profile Image */}
        <div className="about-image">
          <img
            src="/images/1.jpg" // Replace with the correct path to your image
            alt="About Me"
          />
        </div>

        {/* Education */}
        <div className="about-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-graduation-cap"></i> {/* Education icon */}
            </div>
            <div className="info-content">
              <h3>Education</h3>
              <p>SBOA School And Junior College 2022</p>
              <p>Shiv Nadar University Chennai</p>
              <p>B.Tech CSE (Iot) 2026</p>
            </div>
          </div>
        </div>

        {/* About Description */}
        <div className="about-description">
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
        </div>
      </div>
    </section>
  );
};

export default About;
