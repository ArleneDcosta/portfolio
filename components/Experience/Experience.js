import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Job Title</h3>
          <h4>Company Name</h4>
          <span>Dates of Employment</span>
          <p>Description of your role and achievements.</p>
        </div>
        <div className="timeline-item">
          <h3>Job Title</h3>
          <h4>Company Name</h4>
          <span>Dates of Employment</span>
          <p>Description of your role and achievements.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
