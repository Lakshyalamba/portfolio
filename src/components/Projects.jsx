import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Mini Calender",
      description: "It displays the current month with days arranged in a grid format, highlighting the current date.",
      features: [
        "It displays live date,month and year.",
      ],
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Lakshyalamba/Mini-Calender",
      demo: "https://mini-calender-mu.vercel.app/"
    },
    {
      name: "Feedback App",
      description: "The Feedback System is a simple web application built using HTML, CSS, and JavaScript that allows users to submit feedback.",
      features: [
        "Real-time updates",
        "It features a user-friendly interface where users can rate their experience."
      ],
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Lakshyalamba/Feedback",
      demo: "https://feedback-sable-seven.vercel.app/"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title glass-morph">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-morph">
            <h3 className="project-name">{project.name}</h3>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              <h5>Key Features:</h5>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag glass-morph">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button glass-morph">
                GitHub Repository
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-button glass-morph">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;