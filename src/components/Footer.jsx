import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowUp, Copy, Check, Mail, Sparkles } from 'lucide-react';
import './Footer.css';
const email='lakylamba266@gmail.com';
const socials=[['GitHub','The code behind the work','https://github.com/Lakshyalamba'],['LinkedIn','Let’s connect professionally','https://www.linkedin.com/in/lakshyachoudhary26/'],['LeetCode','One more problem to solve','https://leetcode.com/u/lakshya_choudhary/']];
export default function Footer(){
 const [copyState,setCopyState]=useState('');const timer=useRef(null);
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 async function copyEmail(){clearTimeout(timer.current);try{await navigator.clipboard.writeText(email);setCopyState('copied');}catch{setCopyState('failed');}timer.current=setTimeout(()=>setCopyState(''),3500);}
 return <footer id="footer" className="studio-footer"><div className="footer-orbit" aria-hidden="true"/><div className="section-container">
  <div className="footer-topline"><span>07 / THE NEXT CHAPTER</span><a href="#hero">BACK TO THE BEGINNING <ArrowUp size={13}/></a></div>
  <div className="footer-invitation"><div><p className="footer-eyebrow"><i/> GOOD THINGS START WITH A CONVERSATION</p><h2>Your next idea.<br/>Our next <em>build.</em><span className="footer-asterisk" aria-hidden="true">✳</span></h2><p className="footer-intro">Exploring opportunities in backend engineering, data engineering, and applied generative AI. Have a role, a project, or an interesting problem?</p></div><a className="footer-mail-stamp" href={`mailto:${email}`} aria-label={`Start a conversation with Lakshya at ${email}`}><span>LET’S MAKE IT HAPPEN</span><ArrowUpRight size={50} strokeWidth={1}/><span>SAY HELLO ↗</span></a></div>
  <div className="footer-contact-strip"><div className="footer-email"><Mail size={20}/><a href={`mailto:${email}`}>{email}</a><button onClick={copyEmail} aria-label={copyState==='copied'?'Email address copied':'Copy email address'} title="Copy email address">{copyState==='copied'?<Check size={17}/>:<Copy size={17}/>}</button></div><span className="footer-copy-status" role="status">{copyState==='copied'?'Copied. Let’s talk soon.':copyState==='failed'?'Select the email to copy, or click to open your mail app.':'ONE EMAIL AWAY FROM SOMETHING GOOD.'}</span></div>
  <div className="footer-destinations">{socials.map(([name,note,url],i)=><a key={name} href={url} target="_blank" rel="noreferrer"><span className="footer-destination-index">0{i+1} / ELSEWHERE</span><div><h3>{name}</h3><ArrowUpRight size={24}/></div><p>{note}</p></a>)}<a className="footer-ai-link" href="#chat"><span className="footer-destination-index">04 / STILL CURIOUS?</span><div><h3>Ask my AI</h3><Sparkles size={22}/></div><p>A shortcut to the person behind the work.</p></a></div>
  <div className="footer-signoff"><a className="footer-wordmark" href="#hero" aria-label="Lakshya — back to home">LAKSHYA<span>↗</span></a><div><span>BUILT WITH INTENT.</span><span>ALWAYS A WORK IN PROGRESS.</span></div></div>
  <div className="footer-colophon"><span>© {new Date().getFullYear()} Lakshya Choudhary</span><a href="/Full_Stack2.pdf" target="_blank" rel="noreferrer">RESUME / PDF <ArrowUpRight size={11}/></a><span>THANKS FOR SCROLLING THIS FAR. <span aria-hidden="true">✳</span></span></div>
 </div></footer>;
}
