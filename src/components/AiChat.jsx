import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, User, MessageSquare } from 'lucide-react';

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi there! I'm Lakshya's AI assistant. Ask me anything about my projects, coding stats, open-source work, or education!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef(null);

  // Auto scroll messages container to bottom (without scrolling the main page)
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const scrollTimeout = setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 60);
      return () => clearTimeout(scrollTimeout);
    }
  }, [messages, isTyping]);

  const quickPrompts = [
    { label: 'MoneyMind Project', query: 'Tell me about the MoneyMind project' },
    { label: 'LeetCode Rating', query: 'What is your LeetCode rating?' },
    { label: 'Open Source', query: 'Tell me about your open source contributions' },
    { label: 'Contact Details', query: 'How can I contact you?' }
  ];

  // Comprehensive keyword matching database
  const getAiResponse = (query) => {
    const q = query.toLowerCase();
    
    // 1. MoneyMind
    if (q.includes('moneymind') || q.includes('finance') || q.includes('budget') || q.includes('sip')) {
      return "MoneyMind is a smart Personal Finance Manager built with a React frontend and Node.js + Express backend connected via Prisma to PostgreSQL. It features spend analytics dashboards, custom budget rules, and an integrated Gemini AI advisor that parses transaction statements to offer automated financial recommendations.";
    }
    
    // 2. DailyDrive
    if (q.includes('dailydrive') || q.includes('habit') || q.includes('self-improvement') || q.includes('productivity')) {
      return "DailyDrive is a Unified Self-Improvement & Habit Tracker that helps organizations drive consistency. Shipped with React, Node, Express, and MySQL, it features habit calendars, streak challenges, and community leaderboards backed by over 20 custom RESTful APIs.";
    }

    // 3. AlgoAnalyze AI
    if (q.includes('algoanalyze') || q.includes('dsa visualizer') || q.includes('hinglish dsa')) {
      return "AlgoAnalyze AI is an educational platform designed to conceptualize algorithms. It takes Python DSA code and builds live visual dry runs, execution step annotations, recursion trees, and Gemini-powered Hinglish explanations.";
    }

    // 4. NextFlow
    if (q.includes('nextflow') || q.includes('workflow') || q.includes('react flow') || q.includes('trigger.dev')) {
      return "NextFlow is a visual workflow builder scaffold for orchestrating batch AI models and media processors. Built with Next.js, Prisma, and React Flow, it maps prompt-chains and schedules job pipelines via Trigger.dev.";
    }

    // 5. Likho
    if (q.includes('likho') || q.includes('notes editor') || q.includes('peblo')) {
      return "Likho is a collaborative markdown note-taking workspace. Engineered with Next.js, Express, and PostgreSQL, it uses an LLM pipeline to digest raw meeting notes and generate summarized task lists and actionable checklists, with secure public share links.";
    }

    // 6. Academos
    if (q.includes('academos') || q.includes('newton mcp') || q.includes('supabase auth')) {
      return "Academos is an AI student assistant built on Next.js and Supabase. It uses Newton Model Context Protocol (MCP) servers to pull verified academic logs, using Gemini to draft personalized study calendars, score analyses, and contest reminders.";
    }

    // 7. CardioRisk AI
    if (q.includes('cardiorisk') || q.includes('langgraph') || q.includes('streamlit') || q.includes('chroma') || q.includes('rag')) {
      return "CardioRisk AI is an Agentic Clinical Decision Assistant built with LangGraph, Streamlit, and Chroma DB. It structures medical data retrievals using RAG with safe fallback loops, and incorporates a scikit-learn logistic regression pipeline for risk probability indices.";
    }

    // 8. Rishihood Landing
    if (q.includes('rishihood') || q.includes('landing') || q.includes('reducate') || q.includes('university')) {
      return "Rishihood University Landing Page is a responsive admissions portal built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features scroll-driven layout reveals, hamburger navigation, and a testimonial carousel.";
    }

    // 9. Risk-Reward Calculator
    if (q.includes('risk-reward') || q.includes('trading calculator') || q.includes('jspdf')) {
      return "Trading Risk-Reward Calculator is a production-ready day trading utility built with Next.js, Tailwind, and TypeScript. It calculates stop-loss, margin, and lot sizing requirements in real-time, exporting results via jsPDF.";
    }

    // LeetCode / Stats
    if (q.includes('leetcode') || q.includes('contest') || q.includes('rating') || q.includes('dsa') || q.includes('solve')) {
      return "I have a LeetCode Contest Rating of 1980+ (Knight Level), placing me in the top 1% of coders globally. I've solved over 500+ DSA problems, with more than 250 of them categorized as Medium or Hard challenges in graphs, trees, DP, and search optimization.";
    }

    // Open Source
    if (q.includes('open source') || q.includes('zulip') || q.includes('rocket.chat') || q.includes('contribut')) {
      return "I actively contribute to major open-source communication platforms, specifically Zulip and Rocket.Chat. I focus on optimizing server sync handlers, reviewing code, and resolving backend synchronization issues.";
    }

    // Experience / ModelSuite AI
    if (q.includes('modelsuite') || q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('intern')) {
      return "I work as a Full Stack Developer at ModelSuite AI (July 2026 - Present), where I build model evaluation portals, FastAPI LLM pipelines, and LangGraph multi-agent systems. I also have open-source experience contributing code optimization patches to Zulip and Rocket.Chat!";
    }

    // Contact
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('connect')) {
      return "You can reach me at lakylamba266@gmail.com or call me at +91-9034181961. My social profiles (GitHub, LinkedIn, LeetCode) are linked at the top and bottom of the page!";
    }

    // Education
    if (q.includes('education') || q.includes('school') || q.includes('nst') || q.includes('rishihood') || q.includes('university')) {
      return "I am pursuing a Bachelor of Technology in Data Science (Class of 2028) at the Newton School of Technology, Rishihood University. Currently, my CGPA is 8.0/10.0, placing me in the top 10% of my cohort.";
    }

    // Certificates
    if (q.includes('certificat') || q.includes('agentic') || q.includes('udemy') || q.includes('guvi') || q.includes('ai buildathon')) {
      return "I hold a Udemy certificate in 'Full stack generative and Agentic AI with Python', reflecting my expertise in building LLM and RAG pipelines. I also earned an AI Buildathon Participation Certificate from GUVI, demonstrating practical skills in Agentic AI.";
    }

    // Fallback response list
    return "I can explain any of my projects individually (MoneyMind, DailyDrive, AlgoAnalyze AI, NextFlow, Likho, Academos, CardioRisk AI, Rishihood Landing, or Trading Calculator). I can also tell you about my LeetCode rating (1980+ Knight), open-source work (Zulip), skills, or my developer role at ModelSuite AI!";
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Trigger typing delay
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const aiReply = {
        sender: 'ai',
        text: getAiResponse(textToSend)
      };
      setMessages(prev => [...prev, aiReply]);
    }, 1000); // 1s typing indicator simulation
  };

  return (
    <section id="chat" style={{ position: 'relative', background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div className="radial-glow glow-violet" style={{ top: '-10%', left: '80%' }} />

      <div className="section-container">
        <p className="section-tag">// 06 ⋄ AGENTIC AI CORE</p>
        <h2 className="section-title">Lakshya AI Chat Agent</h2>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          
          {/* Chat Container */}
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            height: '480px'
          }}>
            {/* Header */}
            <div style={{
              background: 'var(--bg-tertiary)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'between',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(0, 240, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>Lakshya AI</h4>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', display: 'inline-block' }} />
                    Active Agent
                  </span>
                </div>
              </div>
              
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                LLM-MOCK-v2
              </span>
            </div>

            {/* Message Area */}
            <div 
              ref={messagesContainerRef}
              style={{
                flexGrow: 1,
                overflowY: 'auto',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                background: 'rgba(10,10,12,0.6)'
              }}
              className="chat-messages-container"
            >
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}
                >
                  {msg.sender === 'ai' && (
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      flexShrink: 0
                    }}>
                      <MessageSquare size={14} />
                    </div>
                  )}

                  <div style={{
                    maxWidth: '80%',
                    padding: '0.75rem 1.25rem',
                    borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                    background: msg.sender === 'user' ? 'var(--text-primary)' : 'var(--bg-tertiary)',
                    border: '1px solid',
                    borderColor: msg.sender === 'user' ? 'var(--text-primary)' : 'var(--border-subtle)',
                    color: msg.sender === 'user' ? 'var(--bg-primary)' : 'var(--text-primary)',
                    fontSize: '0.85rem',
                    lineHeight: '1.5'
                  }}>
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--bg-primary)',
                      flexShrink: 0
                    }}>
                      <User size={14} />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    <MessageSquare size={14} />
                  </div>
                  <div style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '16px 16px 16px 2px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                  }}>
                    <span className="dot" />
                    <span className="dot" style={{ animationDelay: '0.2s' }} />
                    <span className="dot" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}

            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputText); }}
              style={{
                background: 'var(--bg-tertiary)',
                borderTop: '1px solid var(--border-subtle)',
                padding: '1rem',
                display: 'flex',
                gap: '0.75rem'
              }}
            >
              <input
                type="text"
                placeholder="Ask about projects, skills, or LeetCode rating..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping}
                style={{
                  flexGrow: 1,
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '30px',
                  padding: '0.5rem 1.25rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                className="chat-input-field"
              />
              <button 
                type="submit" 
                disabled={isTyping || !inputText.trim()}
                className="btn-primary"
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  padding: 0, 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Quick suggestions */}
          <div style={{
            marginTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center'
          }}>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                disabled={isTyping}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  transition: 'all 0.2s'
                }}
                className="suggestion-chip"
              >
                {p.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--text-secondary);
          display: inline-block;
          animation: bounceDot 1.4s infinite ease-in-out both;
        }
        @keyframes bounceDot {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .chat-input-field:focus {
          border-color: var(--accent-cyan);
        }
        .suggestion-chip:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.03);
        }
        .chat-messages-container::-webkit-scrollbar {
          width: 4px;
        }
        .chat-messages-container::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
          border-radius: 2px;
        }
      `}} />
    </section>
  );
}
