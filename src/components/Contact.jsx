import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content glass-morph">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:your.email@example.com" className="contact-link glass-morph">
              lakylamba266@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <a href="tel:+1234567890" className="contact-link glass-morph">
              +91 90341 81961
            </a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/lakshya-choudhary-881a4b31a/" target="_blank" rel="noopener noreferrer" className="contact-link glass-morph">
            LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;