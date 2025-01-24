import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        <div className="card">
          <img src="project-image.jpg" alt="Project Name" />
          <h3>Project Name</h3>
          <p>Short description of the project.</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
