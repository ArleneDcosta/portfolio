import React, { useState } from "react";
import "./Experience.css";
import experiences from "../../data/experienceData"; 

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="experience-section">
      <section id="experience" className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`timeline-item ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => toggleExpand(index)}
            >
              <h3>{experience.jobTitle}</h3>
              <h4>{experience.companyName}</h4>
              <span>{experience.dates}</span>
              {expandedIndex === index && (
                <ul className="description-list">
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
