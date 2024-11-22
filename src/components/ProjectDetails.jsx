import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/ProjectDetails.css";

const projects = [
  {
    id: 1,
    title: "SNAIL: Full Stack Web Application",
    details:
      "This project involved creating a scalable e-commerce platform with a robust backend using MongoDB and an intuitive frontend with React.",
    animation: {
      initial: { x: -200, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 1 },
    },
  },
  {
    id: 2,
    title: "Shape Detection System",
    details:
      "Utilized advanced algorithms in Java to identify and classify various geometric shapes with high accuracy.",
    animation: {
      initial: { scale: 0 },
      animate: { scale: 1 },
      transition: { duration: 1 },
    },
  },
  {
    id: 3,
    title: "Object Tracking System",
    details:
      "This system tracks objects in real-time using OpenCV. It can handle dynamic environments with changes in lighting and background.",
    animation: {
      initial: { y: -200, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 1.5 },
    },
  },
  {
    id: 4,
    title: "Water Level Tracking System",
    details:
      "An IoT-based project that measures water levels using an ultrasonic sensor. The data is displayed on an LCD, offering a practical solution for water resource management.",
    animation: {
      initial: { rotate: -90, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
      transition: { duration: 1 },
    },
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!project) {
      console.error("Project not found!");
    }
  }, [project]);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <motion.section
      className="project-details-section"
      initial={project.animation.initial}
      animate={project.animation.animate}
      transition={project.animation.transition}
    >
      <h2>{project.title}</h2>
      <p>{project.details}</p>
    </motion.section>
  );
};

export default ProjectDetails;
