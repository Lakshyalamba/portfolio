import React from 'react';
import { Award, Code, CheckCircle, Database } from 'lucide-react';

export default function Stats() {
  const problems = [
    { level: 'Easy', count: 250, percent: 50, color: '#ffffff' },
    { level: 'Medium', count: 200, percent: 40, color: '#888888' },
    { level: 'Hard', count: 50, percent: 10, color: '#444444' }
  ];

  return (
    <section id="stats" style={{ position: 'relative', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="radial-glow glow-cyan" style={{ bottom: '-10%', left: '40%' }} />

      <div className="section-container">
        <p className="section-tag">// 03 ⋄ ALGORITHMIC STATS</p>
        <h2 className="section-title">Competitive Programming</h2>

        <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column: Big LeetCode Rating Gauge */}
          <div className="glass-card" style={{ 
            textAlign: 'center', 
            position: 'relative',
            padding: '3.5rem 2rem',
            borderWidth: '1px',
            borderColor: 'rgba(255, 255, 255, 0.15)', // Monochrome border
            background: 'rgba(255, 255, 255, 0.02)'
          }}>
            {/* LeetCode Amber Badge Accent */}
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              Knight Level
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '4px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.15)',
                position: 'relative'
              }}>
                <Code size={40} style={{ color: '#ffffff' }} />
              </div>
            </div>

            <h3 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              1980+
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              LeetCode Contest Rating
            </p>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '350px', margin: '0 auto' }}>
              Ranked in the top 1% globally among millions of active coders. Solving advanced array, graph, dynamic programming, and math challenges under strict time constraints.
            </p>
          </div>

          {/* Right Column: Problem Breakdown and Progress bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                500+ Solved Problems
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Deep understanding of data structures and optimization techniques. Built a habit of analyzing time/space complexities and edge cases. Over 250+ Medium and Hard challenges.
              </p>
            </div>

            {/* Progress Bars Container */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {problems.map((prob, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ fontWeight: '600', color: prob.color }}>{prob.level}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{prob.count} solved</span>
                  </div>
                  
                  {/* Track */}
                  <div style={{ 
                    height: '8px', 
                    background: 'var(--bg-tertiary)', 
                    borderRadius: '4px', 
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    {/* Fill */}
                    <div style={{
                      width: `${prob.percent}%`,
                      height: '100%',
                      background: prob.color,
                      borderRadius: '4px',
                      boxShadow: `0 0 10px ${prob.color}80`
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Metrics Row */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '1.5rem',
              marginTop: '1rem'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-cyan)' }}>250+</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>MED / HARD</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-violet)' }}>Top 1%</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>LC RATING</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-pink)' }}>100%</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>CONSISTENT</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
