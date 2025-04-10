import React from 'react';
import { FaLinkedin, FaCode, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import './Home.css';
import lakshya from './assets/Photo 1.jpeg'

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section glass-morph">
        <img src={lakshya} alt="Profile" className="profile-image" />
        <h1>Lakshya</h1>
        <p className="description">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lakshya-choudhary-881a4b31a/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://leetcode.com/u/lakshya_choudhary/" target="_blank" rel="noopener noreferrer" className="social-link">
            <SiLeetcode className="social-icon" />
          </a>
          <a href="https://codeforces.com/profile/lakshyalamba" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaCode className="social-icon" />
          </a>
          <a href="https://github.com/Lakshyalamba" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub className="social-icon" />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Home;
