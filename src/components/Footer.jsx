import React from 'react';
import './Footer.css';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer glass-morph">
      <div className="footer-content">
        <div className="footer-contact">
          <p>Email: lakylamba266@gmail.com</p>
          <p>Phone: +91 90341 81961</p>
        </div>
        <nav className="footer-nav">
          <button className="footer-link" onClick={() => setCurrentPage('home')}>Home</button>
          <button className="footer-link" onClick={() => setCurrentPage('projects')}>Projects</button>
          <button className="footer-link" onClick={() => setCurrentPage('resume')}>Resume</button>
          <button className="footer-link" onClick={() => setCurrentPage('contact')}>Contact</button>
        </nav>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;