import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Send, Sparkles, RotateCcw, Square, Copy, Check, FileText } from 'lucide-react';
import './AiChat.css';

const welcome = { role: 'assistant', content: "Hi, I’m Lakshya’s portfolio assistant. I can walk you through his projects, explain his technical experience, or help you find the work most relevant to your team. What would you like to know?" };
const prompts = [
  ['Meet Lakshya', 'Give me a short introduction to Lakshya.'],
  ['Explore AI projects', 'Which of Lakshya’s projects use AI, and how do they differ?'],
  ['Hiring for backend?', 'What evidence in his projects and experience supports a backend developer role?'],
  ['Compare projects', 'Compare MoneyMind and DailyDrive: purpose, stack, and features.'],
];
function AnswerText({ text }) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part.startsWith('`') ? <code key={i}>{part.slice(1, -1)}</code> : part);
}
export default function AiChat() {
  const [messages, setMessages] = useState([welcome]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [configured, setConfigured] = useState(null);
  const [copied, setCopied] = useState(-1);
  const log = useRef(null);
  const controller = useRef(null);
  const locked = useRef(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const abort = new AbortController();
    fetch('/api/chat/status', { signal: abort.signal }).then(r => r.ok ? r.json() : Promise.reject()).then(data => setConfigured(data.configured)).catch(() => {});
    return () => { abort.abort(); controller.current?.abort(); };
  }, []);
  useEffect(() => { if (log.current) log.current.scrollTop = log.current.scrollHeight; }, [messages, busy, error]);
  async function send(text, retry = false) {
    if (locked.current || !text.trim()) return;
    const content = text.trim();
    if (content.length > 3000) return;
    const next = retry ? messages : [...messages, { role: 'user', content }];
    setMessages(next); setInput(''); setError(''); setBusy(true); locked.current = true;
    const abort = new AbortController(); controller.current = abort;
    const timeout = setTimeout(() => abort.abort('timeout'), 50000);
    try {
      const history = next.slice(1).slice(-19).map(({ role, content }) => ({ role, content }));
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: history }), signal: abort.signal });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not send your message. Please try again.');
      setConfigured(true);
      setMessages(prev => [...prev, { role: 'assistant', content: data.answer, sources: data.sources }]);
    } catch (e) {
      setError(abort.signal.aborted ? (abort.signal.reason === 'timeout' ? 'The response took too long. Please retry.' : 'Response stopped. You can retry your question.') : e.message);
    } finally { clearTimeout(timeout); setBusy(false); locked.current = false; controller.current = null; inputRef.current?.focus(); }
  }
  function reset() { if (locked.current) return; setMessages([welcome]); setError(''); setInput(''); inputRef.current?.focus(); }
  async function copy(text, index) { try { await navigator.clipboard.writeText(text); setCopied(index); setTimeout(() => setCopied(-1), 1800); } catch { setError('Copy is unavailable in this browser. You can select the answer to copy it.'); } }
  return (
    <section id="chat" className="ai-section">
      <div className="section-container">
        <p className="section-tag">// 06 ⋄ A CONVERSATION AWAY</p>
        <div className="ai-layout">
          <aside className="ai-intro">
            <div className="ai-eyebrow"><Sparkles size={15} /> MEET THE PERSON BEHIND THE CODE</div>
            <h2>Good questions.<br /><span>Real context.</span></h2>
            <p>Skip the scrolling. Explore my work, connect the dots between projects, and get a clearer picture of how I build.</p>
            <div className="ai-topics">{prompts.map(([label, question]) => <button key={label} disabled={busy} onClick={() => send(question)}>{label}<ArrowUpRight size={17} /></button>)}</div>
            <a className="ai-resume" href="/Full_Stack2.pdf" target="_blank" rel="noreferrer"><FileText size={17} /> Prefer the full picture? Read my resume <ArrowUpRight size={15} /></a>
            <p className="ai-note">Answers use the information in this portfolio. For availability or anything that isn’t listed, <a href="mailto:lakylamba266@gmail.com">get in touch</a>.</p>
          </aside>
          <div className="ai-window">
            <header className="ai-header"><div className="ai-avatar"><Sparkles size={21} /></div><div><h3>Lakshya’s AI assistant</h3><p><span className={configured ? 'ai-status ready' : 'ai-status'} />{configured === true ? 'NVIDIA Nemotron · Connected' : configured === false ? 'AI connection awaiting setup' : 'Checking AI connection…'}</p></div><button className="ai-icon" aria-label="Start a new chat" title="New chat" onClick={reset} disabled={busy}><RotateCcw size={17} /></button></header>
            <div className="ai-messages" ref={log} role="log" aria-label="Conversation with Lakshya’s assistant" aria-live="polite" aria-relevant="additions">
              {messages.map((message, index) => <article className={`ai-message ${message.role}`} key={index}><span className="ai-message-label">{message.role === 'user' ? 'YOU' : 'LAKSHYA AI'}</span><div className="ai-bubble"><AnswerText text={message.content} /></div>{message.sources && <div className="ai-answer-footer"><div><span>Portfolio context</span>{message.sources.map(source => <a key={source.url} href={source.url}>{source.label}<ArrowUpRight size={11} /></a>)}</div><button className="ai-icon" onClick={() => copy(message.content, index)} aria-label="Copy answer">{copied === index ? <Check size={14} /> : <Copy size={14} />}</button></div>}</article>)}
              {busy && <div className="ai-thinking" role="status"><Sparkles size={15} /><span>Connecting your question to Lakshya’s work…</span><i /><i /><i /></div>}
              {error && <div className="ai-error" role="alert"><p>{error}</p>{messages.at(-1)?.role === 'user' && <button onClick={() => send(messages.at(-1).content, true)} disabled={busy}>Retry question <RotateCcw size={13} /></button>}</div>}
            </div>
            <form className="ai-composer" onSubmit={e => { e.preventDefault(); send(input); }}><label className="sr-only" htmlFor="ai-question">Ask about Lakshya</label><textarea ref={inputRef} id="ai-question" rows={2} maxLength={3000} placeholder="Ask about a project, a skill, or a role…" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); send(input); } }} /><div className="ai-composer-bottom"><span>{input.length > 2500 ? `${input.length}/3000` : 'Enter to send · Shift + Enter for a new line'}</span>{busy ? <button type="button" className="ai-send" onClick={() => controller.current?.abort()} aria-label="Stop response"><Square size={16} /></button> : <button type="submit" className="ai-send" disabled={!input.trim()} aria-label="Send message"><Send size={17} /></button>}</div></form>
            <p className="ai-disclosure">AI can make mistakes. Check details against the portfolio. Messages are sent to NVIDIA to generate answers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
