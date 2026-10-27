import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectFinder from './components/ProjectFinder';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Skills from './components/Skills';
import AiChat from './components/AiChat';
import Footer from './components/Footer';

export default function App() {
  // 3. Intersection Observer for Scroll Reveals
  useEffect(() => {
    
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
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div>
        <Navbar />
        <ProjectFinder />
        
        <main id="main-content">
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
