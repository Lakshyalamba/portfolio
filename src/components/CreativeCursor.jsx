import { useEffect, useRef } from 'react';
export default function CreativeCursor(){
  const cursor=useRef(null);
  useEffect(()=>{
    const media=window.matchMedia('(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)');
    const el=cursor.current;let enabled=true;try{enabled=localStorage.getItem('portfolio-cursor')!=='off';}catch{}
    let frame=0;let x=-100,y=-100,rx=-100,ry=-100,visible=false;let mode='';
    const label=el.querySelector('span');
    function hide(){visible=false;el.classList.remove('is-visible');document.documentElement.classList.remove('creative-cursor-enabled');cancelAnimationFrame(frame);frame=0;}
    function animate(){if(!visible)return;rx+=(x-rx)*.2;ry+=(y-ry)*.2;el.style.setProperty('--cursor-x',`${x}px`);el.style.setProperty('--cursor-y',`${y}px`);el.style.setProperty('--ring-x',`${rx}px`);el.style.setProperty('--ring-y',`${ry}px`);frame=requestAnimationFrame(animate);}
    function move(e){if(!media.matches||!enabled||e.pointerType==='touch')return;x=e.clientX;y=e.clientY;if(!visible){rx=x;ry=y;visible=true;el.classList.add('is-visible');document.documentElement.classList.add('creative-cursor-enabled');frame=requestAnimationFrame(animate);}const target=e.target;const editable=target.closest('input,textarea,[contenteditable=true]');const next=editable?'text':target.closest('.workshop-viewport')?'drag':target.closest('a,button,[role=button],.project-card-interactive')?'link':'';if(mode!==next){mode=next;el.dataset.mode=next;label.textContent=next==='drag'?'DRAG':next==='link'?'EXPLORE':'';}}
    const down=()=>el.classList.add('is-pressed');const up=()=>el.classList.remove('is-pressed');
    const toggle=e=>{enabled=e.detail;if(!enabled)hide();};const preference=()=>{if(!media.matches)hide();};const visibility=()=>{if(document.hidden)hide();};
    document.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerdown',down);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);document.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);document.addEventListener('visibilitychange',visibility);window.addEventListener('portfolio-cursor',toggle);media.addEventListener('change',preference);
    return()=>{hide();document.removeEventListener('pointermove',move);document.removeEventListener('pointerdown',down);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);document.removeEventListener('pointerleave',hide);window.removeEventListener('blur',hide);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('portfolio-cursor',toggle);media.removeEventListener('change',preference);};
  },[]);
  return <div ref={cursor} className="creative-pointer" aria-hidden="true"><div className="pointer-core"/><div className="pointer-ring"><i/><i/><span/></div></div>;
}
