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
