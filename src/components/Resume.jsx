import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-content glass-morph">
        <div className="resume-header">
          <h1>Lakshya</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="resume-download">
          <a href="/path-to-your-resume.pdf" download className="download-button glass-morph">
            Download Resume
          </a>
        </div>
        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>DSA</h4>
              <ul>
                <li>Javascript</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Others</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Research</li>
                <li>Social Media</li>
                <li>Finance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <h3>Projects</h3>
          <div className="experience-item">
            <h4>Feedback App</h4>
            <p className="company">Tech-Stacks : HTML, CSS, Javascript</p>
            <p className="duration">12/02/2025 - Present</p>
            <ul>
              <li>Description: The Feedback System is a simple web application built using HTML, CSS, and JavaScript that allows users to submit feedback.</li>
              <li>Features: It features a user-friendly interface.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Mini Calender</h4>
            <p className="company">Tech-Stacks : HTML, CSS, Javascript</p>
            <p className="duration">18/02/2025 - Present</p>
            <ul>
              <li>Description: It displays the current month with days arranged in a grid format, highlighting the current date.</li>
              <li>Features: It displays live date,month and year. </li>
            </ul>
          </div>
        </div>
        <div className="resume-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor of Technology in Computer Science & Data Science</h4>
            <p className="institution">Rishihood University</p>
            <p className="duration">2024 - 2028</p>
          </div>
          <div className="education-item">
            <h4>Class(XII)</h4>
            <p className="institution">NRJ Sr Sec School</p>
            <p className="duration">2022 - 2023</p>
          </div>
          <div className="education-item">
            <h4>Class(X)</h4>
            <p className="institution">NRJ Sr Sec School</p>
            <p className="duration">2020 - 2021</p>
          </div>
        </div>
        <div className="resume-section">
          <h3>Co-curricular & POR</h3>
          <div className="experience-item">
            <h4>State-Level Kabaddi Player</h4>
            <ul>
              <li>Represented my district in state-level kabaddi tournaments, demonstrating teamwork, discipline, and physical endurance.</li>
              <li>Consistently performed in district and inter-college competitions, contributing to team success and leadership.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Gold Medalist – 100m Race & Long Jump (Zonal Level)</h4>
            <ul>
              <li>Won gold medals in both the 100m race and long jump at zonal-level tournaments, reflecting strong athletic ability and a competitive mindset.`</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;