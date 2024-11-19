import React from "react";
import "./styles/Projects.css";

const projects = [
  {
    title: "SNAIL: Full Stack Web Application",
    technologies: "React, MongoDB",
    description:
      "Developed an e-commerce platform with features such as user authentication, product listings, and a responsive user interface.",
  },
  {
    title: "Shape Detection System",
    technologies: "Java",
    description:
      "Implemented shape recognition algorithms to accurately detect and classify geometric shapes using Java.",
  },
  {
    title: "Object Tracking System",
    technologies: "Python, OpenCV",
    description:
      "Built a real-time object tracking system leveraging Python’s Computer Vision libraries for efficient performance in dynamic environments.",
  },
  {
    title: "Water Level Tracking System",
    technologies: "Arduino, Ultrasonic Sensor",
    description:
      "Monitored and displayed water levels on an LCD in real-time using IoT components, showcasing efficient water management solutions.",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
