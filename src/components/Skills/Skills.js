import React from "react";
import "./Skills.css";
import skillsData from "../../data/skillsData"; 

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-content">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div className="skills-category" key={index}>
              <h3>{category}</h3>
              <ul>
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
