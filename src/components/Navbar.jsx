import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Stats & CP', id: 'stats' },
    { label: 'Skills', id: 'skills' },
    { label: 'AI Agent', id: 'chat' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setScrolled(window.scrollY > 50);

      // Section active tracking
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{ background: scrolled ? 'rgba(3, 3, 3, 0.85)' : 'rgba(3, 3, 3, 0.5)' }}>
      <div className="nav-container">
        <a href="#hero" className="logo-container" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}>
          <div className="logo-badge">L</div>
          <span style={{ letterSpacing: '1px', fontWeight: '800' }}>LAKSHYA</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ display: 'block', color: 'var(--text-primary)', zIndex: 101 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: '0 top 64px',
          background: 'rgba(3, 3, 3, 0.98)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(20px)',
          animation: 'fadeIn 0.25s ease-out'
        }}>
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                textDecoration: 'none',
                color: activeSection === item.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '1.25rem',
                fontWeight: '600',
                letterSpacing: '1px',
                transition: 'color 0.2s',
                opacity: 0,
                transform: 'translateY(15px)',
                animation: `slideInItem 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards ${idx * 0.06}s`
              }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* CSS injection for fade in */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInItem {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 769px) {
          .menu-btn { display: none !important; }
        }
      `}} />
    </nav>
  );
}
