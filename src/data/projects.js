export const projectList = [
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
      id: 'mcptoolforge',
      title: 'MCPToolForge',
      category: 'Developer Tools',
      description: 'A Python framework for creating, testing, and exposing Model Context Protocol (MCP) servers with minimal boilerplate. Defines tools from typed Python functions and docstrings, supports STDIO and SSE transports, and offers an optional DSPy-powered semantic intelligence layer.',
      bullets: [
        'Automatically derives JSON Schemas from function type annotations and docstrings, with support for MCP tools, resources, and prompt templates.',
        'Provides in-process validation through MCPTestClient and a CLI for project scaffolding, server execution, and registry inspection.',
        'Adds optional DSPy-based semantic tool selection, operational risk classification, and few-shot optimization with deterministic fallback.'
      ],
      result: 'Simplifies MCP server development with automatic schemas, local testing, and optional semantic tool discovery.',
      tags: ['Python', 'MCP', 'DSPy', 'JSON Schema', 'CLI', 'pytest'],
      github: 'https://github.com/Lakshyalamba/toolforge'
    },
    {
      id: 'kyc-setu',
      title: 'KYC Setu',
      category: 'Full Stack',
      description: 'An end-to-end KYC-style identity-verification portfolio demo using synthetic data. Combines mobile-friendly customer onboarding, encrypted document uploads, OCR extraction, explainable risk scoring, officer review, and an auditor console. Selfie, face matching, and liveness are simulated through a development endpoint.',
      bullets: [
        'Built a Next.js customer and staff interface backed by Express, Prisma, and PostgreSQL, with role-based permissions and an explicit application state machine.',
        'Integrated a stateless FastAPI and PaddleOCR service with Redis/BullMQ workers for document extraction, validation, and explainable rule-based risk assessment.',
        'Implemented per-file AES-256-GCM envelope encryption, short-lived document links, and an append-only audit log with a daily hash chain and signed audit packets.'
      ],
      result: 'Demonstrates a customer-to-officer review workflow with encrypted documents, traceable decisions, and verifiable audit history on synthetic data.',
      tags: ['Next.js', 'Express', 'PostgreSQL', 'Prisma', 'FastAPI', 'PaddleOCR', 'Redis', 'BullMQ'],
      github: 'https://github.com/Lakshyalamba/kyc_setu'
    }
  ];
