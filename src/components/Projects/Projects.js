import React from "react";
import "./Projects.css";
import projectData from "../../data/projectData"; 

function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="project-cards-container">
          <div className="project-cards">
            {projectData.map((project, index) => (
              <div className="card" key={index}>
                <h3>{project.title}</h3>
                <ul>
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub 🔗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
