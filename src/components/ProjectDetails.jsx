import React from "react";
import { useParams } from "react-router-dom";
import {
  FaReact,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./styles/ProjectDetails.css";

const projects = [
  {
    id: 1,
    title: "SNAIL: Full Stack Web Application",
    technologies: ["React", "MongoDB"],
    goal: "To build a fully functional e-commerce platform that provides a seamless shopping experience with user authentication, product management, and a responsive UI.",
    currentStatus: {
      frontend: [
        "Designed a modern UI with a structured product details page and improved aesthetics.",
        "Implemented Firebase Authentication for secure user login/signup.",
      ],
      backend: [
        "Integrated MongoDB as the database for storing product and user details.",
        "Backend functionality allows fetching product data dynamically.",
      ],
      completedFeatures: [
        "Product Listing & Details: Users can browse and view product information.",
        "Cart Functionality: Users can add products to the cart.",
        "Authentication: Sign-in and sign-up functionality with Firebase.",
        "Cloud Deployment (host backend using Render/Vercel for live testing).",
      ],
    },
    nextSteps: {
      enhancements: [
        "Checkout & Payment Integration (e.g., Razorpay, Stripe).",
        "Order History & Tracking for users.",
        "User Reviews & Ratings for products.",
      ],
      optimization: [
        "Refine UI/UX with better animations and responsiveness.",
        "Optimize Performance for faster loading and smoother navigation.",
      ],
    },
    github: "https://github.com/pavitravarsh/e-commerse-website",
    live: "https://snailedit.netlify.app/",
    showVideo: false, // No video for Snail
  },
  // Other projects...
];

const techIcons = {
  React: <FaReact title="React" className="tech-icon react" />,
  MongoDB: <FaDatabase title="MongoDB" className="tech-icon mongodb" />,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="error-message">Project not found.</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>

      <div className="tech-stack">
        <strong>Tech Stack: </strong>
        {project.technologies.map((tech, index) => (
          <span key={index}>{techIcons[tech] || tech}</span>
        ))}
      </div>

      <p>
        <strong>Goal:</strong> {project.goal}
      </p>

      <div className="status-section">
        <h3>📌 Current Status:</h3>
        <p>
          <strong>Frontend:</strong>
        </p>
        <ul>
          {project.currentStatus.frontend.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          <strong>Backend & Database:</strong>
        </p>
        <ul>
          {project.currentStatus.backend.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          <strong>Features Completed:</strong>
        </p>
        <ul>
          {project.currentStatus.completedFeatures.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="next-steps">
        <h3>Next Steps:</h3>
        <p>
          <strong>Enhancements & Features to Add:</strong>
        </p>
        <ul>
          {project.nextSteps.enhancements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          <strong>Optimization & UI Improvements:</strong>
        </p>
        <ul>
          {project.nextSteps.optimization.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaExternalLinkAlt /> Live Project
          </a>
        )}
      </div>

      {project.showVideo && (
        <video controls src={project.video} className="project-video"></video>
      )}
    </div>
  );
};

export default ProjectDetails;
