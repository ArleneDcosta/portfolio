import React, { useState } from "react";
import "./Experience.css";
import experiences from "../../data/experienceData"

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`timeline-item ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <h3>{experience.jobTitle}</h3>
            <h4>{experience.companyName}</h4>
            <span>{experience.dates}</span>
            {expandedIndex === index && <p>{experience.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
