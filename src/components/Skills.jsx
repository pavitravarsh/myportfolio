import React from "react";
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
      <h2 className="skills-title">
        My <span className="highlight">Skills</span>
      </h2>
      <div className="skills-container">
        {/* Technical Skills Section */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.proficiency}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills Section */}
        <div className="professional-skills">
          <h3>Professional Skills</h3>
          <div className="professional-skill-circles">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="circle-skill">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${skill.proficiency}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="skill-percentage">{skill.proficiency}%</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
