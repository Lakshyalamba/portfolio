import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [expandedProjects, setExpandedProjects] = useState({});

  const categories = ['All', 'Full Stack', 'Frontend'];

  const projectList = [
    {
      id: 'moneymind',
      title: 'MoneyMind',
      category: 'Full Stack',
      description: 'A comprehensive personal finance management platform with income/expense tracking, budget management, and financial goal setting. Features interactive dashboards with category-wise analytics and secure authentication.',
      bullets: [
        'Developed a full-stack dashboard with React frontend and Node.js + Express backend connected via Prisma to PostgreSQL.',
        'Integrated Gemini AI to automatically parse transaction statements, offer spending insights, and suggest optimized budget plans.',
        'Implemented secure JWT-based authentication and REST APIs for multi-account transaction synchronization.'
      ],
      result: 'Automated personal budgeting recommendations and generated visual graphs of spending health.',
      tags: ['React.js', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Lakshyalamba/moneymind',
      demo: 'https://moneymind-personalfinance.netlify.app/'
    },
    {
      id: 'dailydrive',
      title: 'DailyDrive',
      category: 'Full Stack',
      description: 'A unified self-improvement platform combining habit tracking, course enrollment, and community engagement. Helps users build consistent habits across fitness, study, and wellness through streak-based tracking.',
      bullets: [
        'Built a full-stack platform using React, Node.js, Express, and MySQL, facilitating habit tracking and data consolidation.',
        'Designed and shipped 20+ RESTful APIs for seamless user statistics, daily challenge completions, and dashboard updates.',
        'Engineered personalized goal tracker algorithms, interactive analytics reports, and community leaderboards.'
      ],
      result: 'Enabled organizations to drive employee consistency, mindfulness, and productivity tracking.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
      github: 'https://github.com/Lakshyalamba/dailydrive',
      demo: 'https://dailydrive-anfy.vercel.app/'
    },
    {
      id: 'algoanalyze',
      title: 'AlgoAnalyze AI',
      category: 'Full Stack',
      description: 'AI-powered DSA visualizer and tutor that turns Python DSA code into step-by-step visualizations, dry runs, short annotations, and Gemini-powered English/Hinglish explanations.',
      bullets: [
        'Designed an interactive dashboard that maps execution lines of standard sorting and search algorithms.',
        'Integrated Gemini AI API to provide real-time translation, explanations, and edge-case tutorials in Hinglish.',
        'Visualized call-stacks and execution trees dynamically for recursion problems.'
      ],
      result: 'Helped students visualize algorithmic execution and debug code structures interactively.',
      tags: ['Python', 'Gemini API', 'React', 'DSA', 'AI'],
      github: 'https://github.com/Lakshyalamba/algoanalyze-ai',
      demo: 'https://algoanalyze-ai.vercel.app/'
    },
    {
      id: 'nextflow',
      title: 'NextFlow',
      category: 'Full Stack',
      description: 'A production-ready scaffold for a full-stack visual workflow builder focused on media and AI processing. It integrates Next.js, Prisma, React Flow, and Gemini API with modular folders, API/server utilities, dashboard previews, and support for future workflow execution, asset management, and Trigger.dev job orchestration.',
      bullets: [
        'Built a visual node graph canvas using React Flow to chain AI prompt nodes and media transformers.',
        'Configured job queues and execution tracking logs with Trigger.dev orchestration.',
        'Created Prisma schemas for persisting workflow states, node metadata, and user assets.'
      ],
      result: 'Provided a high-fidelity visual layout for orchestrating batch AI processes.',
      tags: ['Next.js', 'Prisma', 'React Flow', 'Gemini API', 'Trigger.dev'],
      github: 'https://github.com/Lakshyalamba/NextFlow',
      demo: 'https://next-flow-pi-puce.vercel.app/'
    },
    {
      id: 'likho',
      title: 'Likho',
      category: 'Full Stack',
      description: 'A full-stack AI-powered notes workspace built for the Peblo Full Stack Developer Challenge, featuring secure authentication, a polished notes editor, AI-assisted summaries and action items, public sharing, and a productivity dashboard.',
      bullets: [
        'Engineered an editor interface with real-time word counting, formatting blocks, and automatic local-storage backups.',
        'Integrated an LLM pipeline to digest raw text and extract structured task lists and summary highlights.',
        'Built a secure client-server model using Next.js, Express, and PostgreSQL with Prisma.'
      ],
      result: 'Offered an AI note-taking space with secure public link-sharing options.',
      tags: ['Next.js', 'Express', 'PostgreSQL', 'Prisma', 'AI Summaries'],
      github: 'https://github.com/Lakshyalamba/PEBLO_Assignment',
      demo: 'https://peblo-assignment-client.vercel.app/'
    },
    {
      id: 'academos',
      title: 'Academos',
      category: 'Full Stack',
      description: 'An AI-powered student assistant built with Next.js that turns academic records into clear, structured guidance. It fetches verified student data through Newton MCP, stores a snapshot in Supabase, and uses Gemini to generate readable responses such as summaries, recommended tasks, and academic insights. Features dashboard and chat behind Supabase Auth.',
      bullets: [
        'Created a secure academic portal integrating Supabase Database & Authentication layers.',
        'Interfaced with Newton Model Context Protocol (MCP) servers to pull authenticated student records.',
        'Deployed LLM reasoning agents to identify lagging grades and draft study checklists.'
      ],
      result: 'Consolidated university grades and provided student guidance with Supabase Auth.',
      tags: ['Next.js', 'Supabase', 'Gemini', 'Newton MCP', 'CSS Modules'],
      github: 'https://github.com/Lakshyalamba/academos-ai',
      demo: 'https://academos-ai.onrender.com/'
    },
    {
      id: 'cardiorisk',
      title: 'CardioRisk AI',
      category: 'Full Stack',
      description: 'An Agentic AI Health Support Assistant for cardiovascular-risk support. Preserves the existing logistic-regression risk prediction pipeline and Streamlit user flow, featuring a compiled LangGraph StateGraph, explicit typed shared state, persisted vector-DB RAG with Chroma, structured source-attributed health reports, and graceful fallback behavior.',
      bullets: [
        'Orchestrated clinical agent reasoning cycles using a structured LangGraph StateGraph.',
        'Configured semantic vector storage and RAG retrievals using Chroma DB.',
        'Preserved existing scikit-learn logistic regression logic for cardiovascular risk probability indices.'
      ],
      result: 'Shipped a doctor-assistant bot with structured citation reporting and RAG fallback loops.',
      tags: ['LangGraph', 'Chroma', 'Streamlit', 'Logistic Regression', 'Hugging Face'],
      github: 'https://github.com/Lakshyalamba/GenAI-capstone',
      demo: 'https://huggingface.co/spaces/lakshyalamba/cardiorisk-ai'
    },
    {
      id: 'rishihood',
      title: 'Rishihood University Landing Page',
      category: 'Frontend',
      description: 'A polished, responsive landing page for Rishihood University built with Next.js, Tailwind CSS, Framer Motion, and Lucide icons. Features a strong hero section, program highlights, campus features, student testimonials, and a focused application call to action.',
      bullets: [
        'Designed responsive card sections with smooth scroll reveals and layout transitions.',
        'Built an animated testimonial carousel and mobile hamburger navigation system.',
        'Polished cross-browser layout issues and minimized bundle asset loading times.'
      ],
      result: 'Developed a high-converting admissions portal with fluid web animations.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      github: 'https://github.com/Lakshyalamba/Reducate_Assignment',
      demo: 'https://rishihoodlanding.vercel.app/'
    },
    {
      id: 'trading',
      title: 'Trading Risk-Reward Calculator',
      category: 'Frontend',
      description: 'A production-ready trading utility providing real-time risk-reward analysis and position sizing. Features include trade interpretation panels, success metrics, and professional PDF exports using jsPDF, styled with a custom brand theme.',
      bullets: [
        'Calculated real-time trade ratios, margins, and lot sizing metrics dynamically based on risk parameters.',
        'Integrated client-side PDF template compiler using jsPDF to generate trading plan receipts.',
        'Validated input forms to handle numeric anomalies and prevent calculations errors.'
      ],
      result: 'Enabled day traders to calculate position risk and export trade blueprints.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'jsPDF'],
      github: 'https://github.com/Lakshyalamba/risk-reward-calculator',
      demo: 'https://risk-reward-calculator-beta.vercel.app/'
    }
  ];

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const filteredProjects = filter === 'All' 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ position: 'relative', background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div className="radial-glow glow-violet" style={{ top: '20%', left: '-20%' }} />

      <div className="section-container">
        <p className="section-tag">// 02 ⋄ SELECTED WORK</p>
        <h2 className="section-title">Projects</h2>

        {/* Filter Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '3rem', 
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1rem',
          justifyContent: 'center'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? 'var(--text-primary)' : 'transparent',
                border: '1px solid',
                borderColor: filter === cat ? 'var(--text-primary)' : 'var(--border-subtle)',
                color: filter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                padding: '0.5rem 1.25rem',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: filter === cat ? '700' : '500',
                fontSize: '0.85rem',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects (Custom Responsive 3-Column Grid) */}
        <div className="project-grid-3">
          {filteredProjects.map((project) => {
            const isExpanded = !!expandedProjects[project.id];
            
            return (
              <div 
                key={project.id} 
                onClick={() => toggleProject(project.id)}
                className={`glass-card project-card-interactive ${isExpanded ? 'card-expanded' : ''}`}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  padding: '2rem 1.75rem',
                  cursor: 'pointer'
                }}
              >
                {/* Card Header */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '1.25rem'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.25rem', lineHeight: '1.2' }}>
                      {project.title}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>
                      {project.category}
                    </span>
                  </div>
                  {/* Link icons block stopPropagation to avoid triggering card toggle */}
                  <div 
                    style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-icon-link"
                      title="View Source on GitHub"
                    >
                      <GithubIcon />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-icon-link"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.85rem', 
                  lineHeight: '1.5', 
                  marginBottom: '1.5rem',
                  flexGrow: isExpanded ? 0 : 1
                }}>
                  {project.description}
                </p>

                {/* Bullet Points (Accordion Toggle) */}
                {isExpanded && (
                  <ul style={{ 
                    listStyle: 'none', 
                    paddingLeft: 0, 
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    flexGrow: 1,
                    animation: 'slideDown 0.25s ease-out'
                  }}>
                    {project.bullets.map((b, bIdx) => (
                      <li 
                        key={bIdx} 
                        style={{ 
                          fontSize: '0.8rem', 
                          lineHeight: '1.4', 
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem'
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
                )}

                {/* Key Result Highlight Box */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  marginBottom: '1.25rem'
                }}>
                  <p style={{ fontSize: '0.78rem', lineHeight: '1.35', color: 'var(--text-primary)' }}>
                    <strong style={{ color: 'var(--text-primary)', marginRight: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      RESULT:
                    </strong>
                    {project.result}
                  </p>
                </div>

                {/* Technology Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        fontSize: '0.62rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand/Collapse details indicator */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.25rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.75rem',
                  marginTop: 'auto'
                }}>
                  {isExpanded ? (
                    <>
                      <span>COLLAPSE DETAILS</span>
                      <ChevronUp size={12} />
                    </>
                  ) : (
                    <>
                      <span>EXPAND DETAILS</span>
                      <ChevronDown size={12} />
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .project-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .project-grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .project-grid-3 {
            grid-template-columns: 1fr;
          }
        }
        .project-card-interactive {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card-interactive:hover {
          border-color: var(--text-primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-4px);
        }
        .card-expanded {
          border-color: var(--text-primary);
          box-shadow: var(--shadow-glow);
        }
        .project-icon-link {
          color: var(--text-secondary);
          transition: color 0.2s, transform 0.2s;
        }
        .project-icon-link:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
