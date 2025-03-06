import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "SNAIL: Full Stack Web Application",
    technologies: "React, MongoDB",
    description:
      "Developed an e-commerce platform with features such as user authentication, product listings, and a responsive user interface.",
  },
  {
    id: 2,
    title: "Shape Detection System",
    technologies: "Java",
    description:
      "Implemented shape recognition algorithms to accurately detect and classify geometric shapes using Java.",
  },
  {
    id: 3,
    title: "Object Tracking System",
    technologies: "Python, OpenCV",
    description:
      "Built a real-time object tracking system leveraging Python’s Computer Vision libraries for efficient performance in dynamic environments.",
  },
  {
    id: 4,
    title: "Water Level Tracking System",
    technologies: "Arduino, Ultrasonic Sensor",
    description:
      "Monitored and displayed water levels on an LCD in real-time using IoT components, showcasing efficient water management solutions.",
  },
  {
    id: 5,
    title: "AI Tic-Tac-Toe",
    technologies: "Python, AI Algorithms",
    description:
      "Developed an AI-powered Tic-Tac-Toe game using Minimax algorithm for intelligent decision-making and unbeatable gameplay.",
  },
  {
    id: 6,
    title: "Self-Balancing Robot",
    technologies: "ESP32, MPU6050, Motor Driver",
    description:
      "Designed and built a two-wheel self-balancing robot using an ESP32 microcontroller, MPU6050 sensor, and motor driver for real-time balancing and control.",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hoverLetter">
        {char}
      </span>
    ));
  };

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="projects-section">
      <motion.h2
        className="hoverText"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {splitText("Projects")}
      </motion.h2>
      <div className="projects-container">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="project-title">{splitText(project.title)}</h3>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
