import React from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar glass-morph">
      <div className="nav-brand" onClick={() => setCurrentPage('home')}>
        Portfolio
      </div>
      <div className="nav-links">
        <button className="nav-button glass-morph" onClick={() => setCurrentPage('projects')}>
          Projects
        </button>
        <button className="nav-button glass-morph" onClick={() => setCurrentPage('resume')}>
          Resume
        </button>
        <button className="nav-button glass-morph" onClick={() => setCurrentPage('contact')}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;