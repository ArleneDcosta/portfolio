import React from "react";
import "./Projects.css";
import projectData from "../../data/projectData"; // Importing project data

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
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
    </section>
  );
}

export default Projects;
