import React, { useState } from 'react';
import { Code2, PanelsTopLeft, BrainCircuit, Cloud, Terminal } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      id: 'languages',
      label: 'Languages & Databases',
      icon: <Code2 size={18} />,
      skills: [
        { name: 'Python', desc: 'Core logic, data engineering, ML/AI model pipelines.' },
        { name: 'TypeScript', desc: 'Typed application logic, secure client/server modules.' },
        { name: 'JavaScript', desc: 'Web page mechanics, real-time Socket syncing, full-stack scripting.' },
        { name: 'SQL & NoSQL', desc: 'Structured and non-structured query databases (PostgreSQL, MySQL, MongoDB).' },
        { name: 'Tableau', desc: 'Data visualization, analytics dashboards, business intelligence reporting.' }
      ]
    },
    {
      id: 'frameworks',
      label: 'Frameworks & Libraries',
      icon: <PanelsTopLeft size={18} />,
      skills: [
        { name: 'React & Next.js', desc: 'Polished client UI rendering, static generation, server routing.' },
        { name: 'Node.js & Express', desc: 'Asynchronous server systems, microservices backend scripting.' },
        { name: 'AngularJS', desc: 'Legacy structural web framework for modular frontend interfaces.' },
        { name: 'Django & FastAPI', desc: 'Python-based backend services, quick REST validation, auto Swagger documentation.' },
        { name: 'Prisma ORM', desc: 'Relational data mapping and type-safe query management.' }
      ]
    },
    {
      id: 'ai_ml',
      label: 'AI & Machine Learning',
      icon: <BrainCircuit size={18} />,
      skills: [
        { name: 'Machine & Deep Learning', desc: 'Regression pipelines, neural layers, clustering (PyTorch, TensorFlow, Scikit-learn).' },
        { name: 'NLP & NLTK', desc: 'Natural Language Processing, tokenizers, POS tagging, lexical analysis.' },
        { name: 'GenAI & LangGraph', desc: 'Agentic workflows, prompt loops, multi-agent state management systems.' },
        { name: 'RAG Systems & Vector DBs', desc: 'Chroma/Pinecone retrievals, chunking strategies, semantic indexing.' },
        { name: 'MCP & n8n Integration', desc: 'Model Context Protocol server scripts, low-code workflow automation nodes.' }
      ]
    },
    {
      id: 'cloud_devops',
      label: 'Cloud & DevOps',
      icon: <Cloud size={18} />,
      skills: [
        { name: 'Cloud (AWS, GCP, Azure)', desc: 'Multi-cloud hosting, serverless instances, buckets, data warehouses.' },
        { name: 'Docker & Docker Compose', desc: 'Container orchestration, multi-container layouts, environment replication.' },
        { name: 'Git & GitHub', desc: 'Version tracking, collaborative branches, peer review tracking.' }
      ]
    },
    {
      id: 'core_cs',
      label: 'Core CS & APIs',
      icon: <Terminal size={18} />,
      skills: [
        { name: 'Data Structures', desc: 'Advanced tree/graph modeling, heap allocation, search complexity optimization.' },
        { name: 'APIs & OAuth 2.0', desc: 'Token-based authentication, endpoint security controls, gateway protocols.' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState('languages');
  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section id="skills" style={{ position: 'relative', background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div className="radial-glow glow-violet" style={{ bottom: '-10%', left: '80%' }} />

      <div className="section-container">
        <p className="section-tag">// 04 ⋄ SKILL MATRIX</p>
        <h2 className="section-title">Technical Expertise</h2>

        <div className="skills-grid">
          
          {/* Left Side Tab Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: activeTab === cat.id ? 'var(--bg-tertiary)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeTab === cat.id ? 'var(--border-hover)' : 'transparent',
                  color: activeTab === cat.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontWeight: activeTab === cat.id ? '700' : '500',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {activeTab === cat.id && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    background: 'var(--text-primary)'
                  }} />
                )}
                <span style={{ 
                  color: activeTab === cat.id ? 'var(--text-primary)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Side: Skills Display Panel */}
          <div className="glass-card" style={{ minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '1rem'
            }}>
              <span style={{ color: 'var(--text-primary)' }}>{activeCategory.icon}</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{activeCategory.label}</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {activeCategory.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  style={{
                    background: 'rgba(255, 255, 255, 0.015)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    transition: 'border-color 0.2s'
                  }}
                  className="skill-card-item"
                >
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.5rem' 
                  }}>
                    {skill.name}
                  </h4>
                  <p style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.5' 
                  }}>
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        .skill-card-item:hover {
          border-color: var(--border-hover);
        }
      `}} />
    </section>
  );
}
