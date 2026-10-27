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

  return <section id="skills" className="studio-section skills-studio"><div className="section-container"><div className="studio-heading"><div><p className="studio-kicker">05 / TOOLS OF THE TRADE</p><h2>A toolbox.<br/>Not a <em>buzzword list.</em></h2></div><p>Different problems. Different tools.<br/>Explore what I use and why.</p></div><div className="toolbox-shell"><div className="toolbox-tabs" role="group" aria-label="Skill categories">{categories.map((cat,i)=><button key={cat.id} onClick={()=>setActiveTab(cat.id)} aria-pressed={activeTab===cat.id}><span className="toolbox-tab-icon">{cat.icon}</span><span><small>DRAWER 0{i+1}</small>{cat.label}</span><b>{String(cat.skills.length).padStart(2,'0')}</b></button>)}</div><div className="toolbox-drawer"><div className="drawer-label"><span className="studio-micro">OPEN DRAWER / {activeCategory.label.toUpperCase()}</span><span className="drawer-handle" aria-hidden="true"/></div><div className="toolbox-cards" key={activeTab}>{activeCategory.skills.map((skill,i)=><article className="tool-tile" key={skill.name} style={{'--tile-index':i}}><div className="tool-tile-top"><span>{String(i+1).padStart(2,'0')}</span>{activeCategory.icon}</div><h3>{skill.name}</h3><p>{skill.desc}</p><span className="tool-tile-rule"/></article>)}</div><div className="toolbox-foot"><span>CURIOUS BY DEFAULT.</span><span>ALWAYS ROOM FOR ONE MORE TOOL. ↗</span></div></div></div></div></section>;
}
