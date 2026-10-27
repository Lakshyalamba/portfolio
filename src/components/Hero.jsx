import { useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, RotateCcw, Pause, Play } from 'lucide-react';
import './Creative.css';
const modes = [
  { name: 'Backend', label: 'SYSTEMS THAT CONNECT.', text: 'APIs · databases · distributed services', color: '#c4f28a', symbols: ['{ }', 'API', 'SQL'] },
  { name: 'AI & Data', label: 'IDEAS THAT THINK.', text: 'LangGraph · RAG · intelligent workflows', color: '#b5a2ff', symbols: ['AI', 'RAG', 'ML'] },
  { name: 'Full Stack', label: 'EXPERIENCES THAT WORK.', text: 'React · Node.js · end-to-end products', color: '#ffb784', symbols: ['UI', '</>', 'JS'] },
];
function Cube({ className = '', children }) {
  return <div className={`workshop-cube ${className}`}>{['front','back','left','right','top','bottom'].map(face => <div key={face} className={`cube-face ${face}`}>{face === 'front' || face === 'right' ? children : null}</div>)}</div>;
}
export default function Hero() {
  const [mode, setMode] = useState(0);
  const [rotation, setRotation] = useState(-28);
  const [paused, setPaused] = useState(false);
  const drag = useRef(null);
  const active = modes[mode];
  return <section id="hero" className="creative-hero" style={{ '--scene-accent': active.color }}>
    <div className="hero-grain" aria-hidden="true" />
    <div className="creative-topline"><span><i /> CODE. CURIOSITY. A LITTLE CHAOS.</span><span>PORTFOLIO / 2026</span></div>
    <div className="creative-hero-grid">
      <div className="creative-copy"><p className="creative-overline">HELLO WORLD, I’M LAKSHYA CHOUDHARY</p><h1>I build things<br />that <em>make</em><br /><span>things happen.</span></h1><p className="creative-description">Full stack developer. Data science student. Turning complex problems into thoughtful products — with a soft spot for backends and AI.</p><div className="creative-actions"><a href="#projects" className="creative-cta">Explore my work <ArrowUpRight size={19} /></a><a href="#chat" className="creative-chat"><Sparkles size={16} /> Ask my AI</a></div><div className="creative-socials"><a href="https://github.com/Lakshyalamba" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/lakshyachoudhary26/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Full_Stack2.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div>
      <div className="workshop" data-paused={paused}>
        <div className="workshop-title"><span>THE DIGITAL WORKSHOP</span><span>01 — 03</span></div>
        <div className="workshop-viewport" onPointerDown={e => { if(e.pointerType === 'mouse' && e.button !== 0)return; drag.current={x:e.clientX,rotation};e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => {if(drag.current)setRotation(drag.current.rotation+(e.clientX-drag.current.x)*.4);}} onPointerUp={() => {drag.current=null;}} onPointerCancel={() => {drag.current=null;}}>
          <div className="workshop-halo" />
          <div className="workshop-world" style={{transform:`rotateX(58deg) rotateZ(${rotation}deg)`}} aria-hidden="true">
            <div className="workshop-floor"><span className="floor-coordinate">LAKSHYA / BUILD LAB</span></div>
            <div className="workshop-orbit" /><div className="workshop-orbit orbit-two" />
            <div className="cube-anchor anchor-one"><Cube className="cube-main"><span>{active.symbols[0]}</span></Cube></div>
            <div className="cube-anchor anchor-two"><Cube className="cube-small"><span>{active.symbols[1]}</span></Cube></div>
            <div className="cube-anchor anchor-three"><Cube className="cube-small cube-dark"><span>{active.symbols[2]}</span></Cube></div>
            <div className="workshop-wire wire-one" /><div className="workshop-wire wire-two" />
            {Array.from({length:9},(_,i)=><i className="workshop-dot" key={i} style={{'--i':i,left:`${18+(i*23)%70}%`,top:`${12+(i*17)%72}%`}} />)}
          </div>
          <span className="scene-label label-top">✳ IDEAS → SYSTEMS</span><span className="scene-label label-bottom">BUILT TO KEEP EVOLVING</span>
          <span className="scene-drag">↔ DRAG TO ROTATE</span>
        </div>
        <div className="workshop-controls"><label>ROTATION<input aria-label="Rotate 3D workshop" type="range" min="-180" max="180" value={Math.max(-180,Math.min(180,rotation))} onChange={e=>setRotation(Number(e.target.value))}/></label><button onClick={()=>setRotation(-28)} aria-label="Reset scene rotation"><RotateCcw size={15}/></button><button onClick={()=>setPaused(!paused)} aria-label={paused?'Play scene animation':'Pause scene animation'}>{paused?<Play size={15}/>:<Pause size={15}/>}</button></div>
        <div className="workshop-modes" role="group" aria-label="Workshop engineering mode">{modes.map((item,i)=><button key={item.name} aria-pressed={mode===i} onClick={()=>setMode(i)}><span>0{i+1}</span>{item.name}</button>)}</div>
        <div className="workshop-caption" aria-live="polite"><b>{active.label}</b><span>{active.text}</span></div>
      </div>
    </div>
    <div className="creative-bottom"><a href="#about"><ArrowDown size={15}/> KEEP EXPLORING</a><span>THOUGHTFULLY ENGINEERED. ENDLESSLY CURIOUS.</span><button onClick={()=>window.dispatchEvent(new Event('open-project-finder'))}>QUICK JUMP <kbd>⌘ / CTRL K</kbd></button></div>
    <div className="creative-strip" aria-hidden="true"><div>{Array.from({length:2},(_,i)=><span key={i}>CREATIVE THINKING <b>✳</b> BACKEND ENGINEERING <b>✳</b> AGENTIC AI <b>✳</b> REAL-WORLD PRODUCTS <b>✳</b> </span>)}</div></div>
  </section>;
}
