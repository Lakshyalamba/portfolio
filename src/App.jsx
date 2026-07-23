import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Skills from './components/Skills';
import AiChat from './components/AiChat';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  // 1. Simulate Loading Screen
  useEffect(() => {
    const duration = 1200; // 1.2 seconds total load
    const intervalTime = 12; // Update interval
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setLoadProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300); // Small delay for fade-out
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // 2. Custom Cursor Follower
  useEffect(() => {
    const updateMousePos = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Toggle cursor scaling when hovering over links/buttons
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.type === 'range';
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePos);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // 3. Intersection Observer for Scroll Reveals
  useEffect(() => {
    if (loading) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* 1. Custom Mouse Follower */}
      <div 
        className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* 2. Custom Loading Overlay */}
      {loading && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#030303',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.4s ease-out',
          opacity: loadProgress === 100 ? 0 : 1,
          pointerEvents: 'none'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              animation: 'pulseGlow 1.5s infinite alternate'
            }}>
              LAKSHYA
            </h1>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '3px',
              color: 'var(--text-secondary)',
              marginTop: '0.5rem'
            }}>
              {Math.min(100, Math.floor(loadProgress))}%
            </p>
          </div>
          
          {/* Progress bar track */}
          <div style={{
            width: '180px',
            height: '2px',
            background: 'rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1px'
          }}>
            {/* Progress bar fill */}
            <div style={{
              height: '100%',
              background: 'var(--accent-cyan)',
              width: `${loadProgress}%`,
              transition: 'width 0.05s linear',
              boxShadow: '0 0 8px var(--accent-cyan)'
            }} />
          </div>
        </div>
      )}

      {/* 3. Main Site Layout */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="reveal-on-scroll">
            <About />
          </div>
          
          <div className="reveal-on-scroll">
            <Projects />
          </div>
          
          <div className="reveal-on-scroll">
            <Experience />
          </div>
          
          <div className="reveal-on-scroll">
            <Stats />
          </div>
          
          <div className="reveal-on-scroll">
            <Skills />
          </div>
          
          <div className="reveal-on-scroll">
            <AiChat />
          </div>
        </main>
        
        <Footer />
      </div>

      {/* Style injection for loading screen animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseGlow {
          from { text-shadow: 0 0 10px rgba(255,255,255,0.1); }
          to { text-shadow: 0 0 25px rgba(0, 240, 255, 0.4); }
        }
      `}} />
    </>
  );
}
