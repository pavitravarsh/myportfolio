import React from "react";
import { motion } from "framer-motion";
import "./styles/Skills.css"; // Ensure the CSS file is in the correct location

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", proficiency: 90 },
    { name: "CSS", proficiency: 50 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Python", proficiency: 50 },
    { name: "React", proficiency: 75 },
  ];

  const professionalSkills = [
    { name: "Creativity", proficiency: 90 },
    { name: "Communication", proficiency: 65 },
    { name: "Problem Solving", proficiency: 75 },
    { name: "Teamwork", proficiency: 85 },
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My <span className="highlight">Skills</span>
      </motion.h2>
      <div className="skills-container">
        {/* Technical Skills Section */}
        <motion.div
          className="technical-skills"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Skills Section */}
        <motion.div
          className="professional-skills"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>Professional Skills</h3>
          <div className="professional-skill-circles">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="circle-skill"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="circle"
                    strokeDasharray={`${skill.proficiency}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: `${skill.proficiency}, 100` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="skill-percentage">{skill.proficiency}%</div>
                <div className="skill-name">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
