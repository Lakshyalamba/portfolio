import { Mail, Code } from 'lucide-react';

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

const LinkedinIcon = (props) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="footer" style={{ 
      position: 'relative', 
      background: 'var(--bg-secondary)', 
      borderTop: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }}>
      <div className="radial-glow glow-cyan" style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="section-container" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* CTA Header */}
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '900', 
              tracking: 'tighter',
              lineHeight: '1.0',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: 'var(--text-secondary)' }}>Let's build</span> <br/>
              <span style={{
                background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textFillColor: 'transparent',
                fontWeight: '900'
              }}>
                something intelligent.
              </span>
            </h2>
          </div>

          {/* Contact Details & Links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '400px' }}>
              Currently seeking opportunities in Backend Engineering, Data Engineering, and Applied Generative AI.
            </p>

            <a 
              href="mailto:lakylamba266@gmail.com" 
              className="btn-primary"
              style={{ padding: '1rem 2rem', gap: '0.75rem', fontSize: '0.95rem' }}
            >
              <Mail size={18} />
              Start a Conversation
            </a>

            {/* Socials Row */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a 
                href="https://github.com/Lakshyalamba" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://www.linkedin.com/in/lakshyachoudhary26/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a 
                href="https://leetcode.com/u/lakshya_choudhary/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LeetCode"
              >
                <Code size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div style={{ 
          borderTop: '1px solid var(--border-subtle)', 
          marginTop: '4rem', 
          paddingTop: '2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <p>© 2026 Lakshya. All rights reserved.</p>
          <p style={{ fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
            DESIGNED &amp; ENGINEERED WITH LOGIC
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .footer-social-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .footer-social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.05);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.15);
          transform: translateY(-2px);
        }
      `}} />
    </footer>
  );
}
