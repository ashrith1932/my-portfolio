import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, GithubIcon, LinkedinIcon, Mail, ExternalLink, Code2, Cpu, Database, Sparkles, Terminal, Trophy, GraduationCap, Layers3, ChevronRight } from "lucide-react";
import { motion } from 'motion/react';
import './styles.css';

const GITHUB = 'https://github.com/ashrith1932';
const LINKEDIN = 'https://linkedin.com/in/tashrithreddy/';
const LEETCODE = 'https://leetcode.com/u/ashrith2391/';
const CODEFORCES = 'https://codeforces.com/profile/tashrreddy';
const CODECHEF = 'https://www.codechef.com/users/ashrith1932';

const projects = [
  {
    number:'01', title:'Source-Bias Analyzer', kind:'AI / Retrieval',
    description:'A local-first evidence analysis system that combines multi-source crawling, hybrid retrieval, claim-level stance analysis, contradiction detection and structured LLM reasoning.',
    stack:['Python','FAISS','BM25','Ollama','Streamlit','Asyncio'],
    metric:'39+ source scrapers',
    href:`${GITHUB}/Source-Bias-Analyzer`,
    featured:true
  },
  {
    number:'02', title:'Nerdding', kind:'Product / Full-stack',
    description:'A startup-focused social platform spanning profiles, projects, feeds, discovery, affiliations, verified Agents, fundraising and GitHub-aware project surfaces.',
    stack:['Next.js','React','Express','TypeScript','Supabase','Drizzle'],
    metric:'Full social product surface',
    href:`${GITHUB}/nerddings-frontend`,
    featured:true
  },
  {
    number:'03', title:'CitiSolve', kind:'Civic Tech / MERN',
    description:'A citizen complaint management system for reporting, tracking and resolving municipal issues through role-based workflows and dashboards.',
    stack:['React','Node.js','Express','MongoDB','OAuth 2.0','Gemini'],
    metric:'Multi-role workflow',
    href:`${GITHUB}/CitiSolve`,
    featured:true
  },
  {
    number:'04', title:"TechCrunch '25", kind:'Interactive Web',
    description:'An immersive MNNIT technical-festival experience with a Three.js solar system, GSAP motion, adaptive navigation and an interactive seven-day agenda.',
    stack:['React 19','Vite','Three.js','GSAP','Tailwind CSS'],
    metric:'3D + motion UI',
    href:`${GITHUB}/IIC_WEB_NEW`,
    featured:false
  }
];

const capabilities = [
  {icon:Code2, title:'Problem Solving', text:'DSA, competitive programming, Java and algorithm implementation.'},
  {icon:Cpu, title:'AI Systems', text:'RAG, semantic search, BM25, local LLM inference and evidence pipelines.'},
  {icon:Layers3, title:'Product Engineering', text:'React applications, full-stack APIs, auth, data flows and interactive UI.'},
  {icon:Database, title:'Systems & Data', text:'MongoDB, FAISS, PostgreSQL-oriented backend work and retrieval infrastructure.'}
];

function Reveal({children, delay=0, className=''}){
  return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}

function App(){
  return <div className="site">
    <div className="noise"/><div className="grid-bg"/>
    <header className="nav"><a className="brand" href="#top">AR<span>.</span></a><nav><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#about">About</a></nav><a className="nav-cta" href="mailto:tummalaashrithreddy2391@gmail.com">Let's talk <ArrowUpRight size={15}/></a></header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> COMPUTER SCIENCE & ENGINEERING · MNNIT ALLAHABAD</div>
          <h1>I build <em>systems</em><br/>that make ideas real.</h1>
          <p className="hero-text">I'm Tummala Ashrith Reddy — a CSE student who moves between algorithms, full-stack products and AI systems. I like understanding the machinery underneath a product, then turning it into something people can actually use.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore the work <ArrowUpRight size={17}/></a><a className="button ghost" href={GITHUB} target="_blank" rel="noreferrer"><GithubIcon size={17}/> GitHub</a></div>
        </div>
        <div className="hero-card">
          <div className="card-top"><span>BUILD LOG / 2026</span><span>01—04</span></div>
          <div className="terminal-lines"><div><b>focus</b><span>AI × Web × Algorithms</span></div><div><b>current</b><span>Building + learning in public</span></div><div><b>stack</b><span>Java · React · Node · Python</span></div><div><b>mode</b><span className="live">● shipping</span></div></div>
          <div className="card-bottom"><Terminal size={16}/><span>curiosity-driven engineering</span></div>
        </div>
      </section>

      <section className="signal-strip"><div><strong>7.92</strong><span>CPI · 4th semester</span></div><div><strong>1811</strong><span>Max LeetCode rating</span></div><div><strong>39+</strong><span>News sources orchestrated</span></div><div><strong>3</strong><span>Core build lanes</span></div></section>

      <section id="work" className="section work"><Reveal><div className="section-head"><div><span className="kicker">SELECTED WORK</span><h2>Projects with a point of view.</h2></div><span className="section-index">01 / 04</span></div></Reveal>
        <div className="project-grid">{projects.map((p,i)=><Reveal key={p.title} delay={i*.06} className={p.featured?'project featured':'project'}><div className="project-meta"><span>{p.number}</span><span>{p.kind}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div><div className="project-foot"><span>{p.metric}</span><a href={p.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16}/></a></div></Reveal>)}</div>
      </section>

      <section id="capabilities" className="section capabilities"><Reveal><div className="section-head"><div><span className="kicker">HOW I WORK</span><h2>Four ways I think about engineering.</h2></div><span className="section-index">02 / 04</span></div></Reveal><div className="cap-grid">{capabilities.map((c,i)=>{const I=c.icon;return <Reveal key={c.title} delay={i*.06}><article className="cap"><div className="cap-icon"><I size={19}/></div><span>0{i+1}</span><h3>{c.title}</h3><p>{c.text}</p></article></Reveal>})}</div></section>

      <section id="about" className="section about"><Reveal><div className="section-head"><div><span className="kicker">THE PERSON BEHIND THE CODE</span><h2>Curious enough to go deep.<br/>Practical enough to ship.</h2></div><span className="section-index">03 / 04</span></div></Reveal><div className="about-grid"><Reveal><div className="manifesto"><p>My strongest work sits where <b>problem solving</b> meets <b>product thinking</b>. I enjoy taking an ambiguous idea, breaking it into systems, and learning whatever the implementation demands.</p><p>That has led me from Java and DSA into full-stack applications, then deeper into retrieval systems, local LLMs and the engineering trade-offs behind them.</p></div></Reveal><Reveal delay={.1}><div className="timeline"><div className="timeline-row"><span>2024—2028</span><div><b>B.Tech · Computer Science & Engineering</b><small>MNNIT Allahabad · Prayagraj</small></div></div><div className="timeline-row"><span>2026</span><div><b>AI + Full-stack projects</b><small>Source-Bias Analyzer · CitiSolve · Nerdding</small></div></div><div className="timeline-row"><span>Competitive</span><div><b>Algorithmic problem solving</b><small>LeetCode · CodeChef · Codeforces</small></div></div></div></Reveal></div></section>

      <section className="section proof"><Reveal><div className="section-head"><div><span className="kicker">PROOF OF WORK</span><h2>Signals I keep improving.</h2></div><span className="section-index">04 / 04</span></div></Reveal><div className="proof-grid"><a href={LEETCODE} target="_blank" rel="noreferrer" className="proof-card"><Trophy/><div><b>LeetCode</b><strong>1811</strong><span>Max rating · Biweekly Contest 181: Global Rank 1944</span></div><ArrowUpRight/></a><a href={CODECHEF} target="_blank" rel="noreferrer" className="proof-card"><Trophy/><div><b>CodeChef</b><strong>1459</strong><span>Max rating · Starters 213: Global Rank 1684</span></div><ArrowUpRight/></a><a href={CODEFORCES} target="_blank" rel="noreferrer" className="proof-card"><Code2/><div><b>Codeforces</b><strong>1166</strong><span>Max rating · continuous problem-solving practice</span></div><ArrowUpRight/></a></div></section>

      <section className="closing"><div className="closing-orb"/><Reveal><span className="kicker">LET'S BUILD SOMETHING</span><h2>Have a hard problem?<br/><em>I'm interested.</em></h2><a className="button primary big" href="mailto:tummalaashrithreddy2391@gmail.com">Start a conversation <ArrowUpRight size={18}/></a></Reveal></section>
    </main>

    <footer><div><b>Tummala Ashrith Reddy</b><span>Computer Science & Engineering · MNNIT Allahabad</span></div><div className="footer-links"><a href={GITHUB} target="_blank" rel="noreferrer"><GithubIcon size={16}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><LinkedinIcon size={16}/></a><a href="mailto:tummalaashrithreddy2391@gmail.com"><Mail size={16}/></a></div><span className="made">© 2026 · built with React</span></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
