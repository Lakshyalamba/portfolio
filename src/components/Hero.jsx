import React, { useEffect, useRef } from 'react';
import { ArrowDown, Brain, Database, Terminal, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(150, 150, 150, 0.3)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(3, 3, 3, 0.08)'; // Tail effect
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connecting lines between close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)'
      }}
    >
      {/* Background Interactive Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* Decorative Grid Overlays */}
      <div className="bg-grid" />
      <div className="radial-glow glow-cyan" />
      <div className="radial-glow glow-violet" style={{ bottom: '10%', right: '10%' }} />

      <div className="section-container" style={{ width: '100%', paddingBottom: '3rem' }}>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '850px' }}>
          
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border-subtle)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            marginBottom: '2rem',
            backdropFilter: 'blur(5px)'
          }}>
            <Terminal size={14} className="text-cyan animate-pulse" style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
              // B.TECH DATA SCIENCE & AGENTIC AI
            </span>
          </div>

          <h1 className="kinetic-title" style={{ marginBottom: '1.5rem', lineHeight: '0.85' }}>
            LAKSHYA
          </h1>

          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', 
            fontWeight: '700', 
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px',
            lineHeight: '1.2'
          }}>
            Architecting Scalable Backends. <br/>
            Engineering <span style={{
              background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textFillColor: 'transparent',
              fontWeight: '800'
            }}>Data &amp; Agentic AI Systems</span>.
          </h2>

          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
            color: 'var(--text-secondary)', 
            maxWidth: '650px',
            lineHeight: '1.6',
            marginBottom: '3rem'
          }}>
            Software Engineering student with hands-on experience building cloud-native apps and distributed services. 
            Active open-source contributor to Zulip and Rocket.Chat, passionate about solving algorithmic challenges 
            (1980+ LeetCode rating) and leveraging Agentic AI frameworks.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '4rem' }}>
            <button 
              onClick={() => scrollToSection('chat')}
              className="btn-primary"
            >
              <Brain size={18} />
              Chat with My AI
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-secondary"
            >
              View Work
            </button>
          </div>

          {/* Socials & Resume */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '2.5rem', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.85rem' 
          }}>
            <a href="https://github.com/Lakshyalamba" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              GitHub <ArrowUpRight size={12} />
            </a>
            <a href="https://www.linkedin.com/in/lakshyachoudhary26/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <a href="https://leetcode.com/u/lakshya_choudhary/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              LeetCode <ArrowUpRight size={12} />
            </a>
            <a href="mailto:lakylamba266@gmail.com" className="hero-social-link">
              Email <ArrowUpRight size={12} />
            </a>
            <a href="/Full_Stack2.pdf" target="_blank" rel="noopener noreferrer" className="hero-social-link" style={{ color: 'var(--accent-cyan)' }}>
              Resume [PDF] <ArrowUpRight size={12} />
            </a>
          </div>

        </div>
      </div>

      {/* Down Indicator */}
      <div 
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <span>SCROLL DOWN</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-social-link {
          text-decoration: none;
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.2s ease;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
        }
        .hero-social-link:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          text-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        .animate-bounce {
          animation: bounce 1.6s infinite ease-in-out;
        }
      `}} />
    </section>
  );
}
