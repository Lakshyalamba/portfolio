import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'ModelSuite AI',
      duration: 'July 2026 - Present',
      location: 'Remote / Delhi NCR',
      description: 'Engineering model evaluation toolkits, agentic workflow architectures, and full-stack testing environments for enterprise-grade LLM applications.',
      bullets: [
        'Architected and deployed backend LLM orchestration layers using FastAPI and LangGraph, cutting multi-turn agent response latency by 30%.',
        'Built interactive React dashboards to visualize real-time model evaluation metrics, drift, and call stack trees.',
        'Optimized Prisma PostgreSQL queries and database schemas, scaling the query throughput of high-volume model audit logs by 3x.'
      ],
      tags: ['React.js', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Prisma', 'Docker']
    },
    {
      role: 'Open Source Contributor',
      company: 'Zulip & Rocket.Chat',
      duration: 'Jan 2025 - Present',
      location: 'GitHub',
      description: 'Actively participating in optimization and synchronization issues across mainstream open-source chat servers.',
      bullets: [
        'Reviewed and optimized server message sync APIs, reducing average packet load overheads by 15%.',
        'Debugged web-socket sync failures on highly-concurrent chat instances, improving thread delivery accuracy.',
        'Refactored legacy backend controller actions into modular, type-safe modules.'
      ],
      tags: ['Python', 'Django', 'TypeScript', 'WebSockets', 'Git']
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <div className="radial-glow glow-cyan" style={{ top: '10%', right: '-10%' }} />

      <div className="section-container">
        <p className="section-tag">// 03 ⋄ PROFESSIONAL PATH</p>
        <h2 className="section-title">Experience</h2>

        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="timeline-item"
              style={{
                display: 'flex',
                gap: '2.5rem',
                position: 'relative',
                paddingBottom: idx === experiences.length - 1 ? 0 : '4rem'
              }}
            >
              {/* Left Side Timeline node connector line */}
              {idx !== experiences.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '11px',
                  top: '24px',
                  bottom: 0,
                  width: '1px',
                  background: 'var(--border-subtle)'
                }} />
              )}

              {/* Timeline dot */}
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: '2px solid var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 2,
                marginTop: '4px'
              }}>
                <Briefcase size={12} style={{ color: 'var(--text-primary)' }} />
              </div>

              {/* Main Card Content */}
              <div className="glass-card" style={{ flexGrow: 1, padding: '2rem' }}>
                {/* Meta details row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {exp.role}
                    </h3>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                      {exp.company}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.25rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)'
                  }} className="timeline-meta-right">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={12} /> {exp.duration}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description Summary */}
                <p style={{
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.25rem'
                }}>
                  {exp.description}
                </p>

                {/* Role Accomplishment Bullet Points */}
                <ul style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  marginBottom: '1.75rem'
                }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li 
                      key={bIdx}
                      style={{
                        fontSize: '0.82rem',
                        lineHeight: '1.45',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--text-primary)',
                        marginTop: '6px',
                        flexShrink: 0
                      }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 600px) {
          .timeline-item {
            flex-direction: column;
            gap: 1rem !important;
          }
          .timeline-item > div:first-child {
            display: none !important; /* Hide connector dot on small mobile */
          }
          .timeline-meta-right {
            align-items: flex-start !important;
          }
        }
      `}} />
    </section>
  );
}
