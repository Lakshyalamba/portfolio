import React from 'react';
import { Award, BookOpen, GitMerge, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="radial-glow glow-cyan" style={{ top: '-10%', left: '80%' }} />
      
      <div className="section-container">
        <div className="grid-2" style={{ alignItems: 'start' }}>
          
          {/* Left Column: Heading */}
          <div>
            <p className="section-tag">// 01 ⋄ ABOUT ME</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', marginBottom: '2rem' }}>
              Bridging Data Science &amp; Backend Engineering
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              I focus on creating scalable, high-performance backends and applying data science methodologies to build smart applications. I like digging into data streams, optimizing query pipelines, and deploying predictive models.
            </p>
            
            {/* Quick Education Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                background: 'rgba(0, 240, 255, 0.1)',
                padding: '0.75rem',
                borderRadius: '12px',
                color: 'var(--accent-cyan)'
              }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Newton School of Technology</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  B.Tech in Data Science (2024 – 2028)
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontFamily: 'var(--font-mono)', 
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0,240,255,0.05)',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    CGPA: 8.0/10.0
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Top 10% of cohort
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Grid */}
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            
            {/* Highlight 1 */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ color: 'var(--accent-cyan)' }}><BookOpen size={22} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Algorithmic Core</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    Solid foundation in Data Structures, Algorithms, and Object-Oriented Programming. Solving complex computation constraints with a 1980+ LeetCode contest rating.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ color: 'var(--accent-violet)' }}><GitMerge size={22} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Open Source Contributor</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    Active contributor to global messaging codebases like <strong>Zulip</strong> and <strong>Rocket.Chat</strong>. Focused on backend synchronization logic and optimizing API endpoints.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ color: 'var(--accent-pink)' }}><Award size={22} /></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>Hackathons &amp; Buildathons</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    Participated in multiple hackathons, including the Smart India Hackathon (SIH) internal rounds. GUVI AI Buildathon certificate earner in python-based Agentic AI systems.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
