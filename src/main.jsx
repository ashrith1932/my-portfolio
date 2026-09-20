import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Gamepad2,
  Layers3,
  Mail,
  Menu,
  Moon,
  Network,
  Orbit,
  RotateCcw,
  ServerCog,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';
import './styles.css';

const EMAIL = 'tummalaashrithreddy1@gmail.com';
const GITHUB = 'https://github.com/ashrith1932';
const LINKEDIN = 'https://linkedin.com/in/tashrithreddy/';
const LEETCODE = 'https://leetcode.com/u/ashrith2391/';
const CODEFORCES = 'https://codeforces.com/profile/tashrreddy';
const CODECHEF = 'https://www.codechef.com/users/ashrith1932';

const RATINGS = {
  leetcode: 1900,
  codechef: 1459,
  codeforces: 1166,
};

function getStored(key, fallback = '') {
  try { return window.localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}

function setStored(key, value) {
  try { window.localStorage.setItem(key, value); } catch { /* storage may be blocked */ }
}

const projects = [
  {
    number: '01', title: 'Nerdding', label: 'PRODUCT / NEXT.JS',
    description: 'Designing the social layer around people who build: profiles, projects, discovery, affiliations and community context.',
    problem: 'Early builders need more than a profile; they need a place where projects, people and opportunities can be discovered together.',
    build: 'The public frontend uses Next.js, React and TypeScript with API-backed authentication and data flows. Guest-readable surfaces keep discovery open while authenticated actions stay protected.',
    outcome: 'The product surface includes project and profile discovery plus launch-ready legal routes, giving the platform a stronger foundation for a real community experience.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Drizzle'], metric: 'Product frontend',
    href: `${GITHUB}/nerddings-frontend`, featured: false,
  },

  {
    number: '02', title: 'Source-Bias Analyzer', label: 'AI / RETRIEVAL',
    description: 'Making news bias explainable by grounding an analysis in evidence from multiple publishers instead of a single model response.',
    problem: 'News stories are fragmented across sources, and a confident answer is not the same as a defensible one.',
    build: 'I orchestrated 39+ RSS/BFS scrapers with an Asyncio producer-consumer pipeline, then combined FAISS semantic search, BM25 lexical matching, publisher credibility weighting and reranking.',
    outcome: 'Claim-level stance analysis produces structured JSON reports with narrative framing, contradictions and supporting evidence. Inference stays local through Ollama for on-device privacy.',
    stack: ['Python', 'FAISS', 'BM25', 'Ollama', 'Streamlit', 'Asyncio'], metric: '39+ sources orchestrated',
    href: `${GITHUB}/Source-Bias-Analyzer`, featured: true,
  },
  {
    number: '03', title: 'CitiSolve', label: 'CIVIC TECH / MERN',
    description: 'Turning a civic complaint into a trackable workflow with clear ownership from report to resolution.',
    problem: 'A complaint is only useful when citizens can submit evidence, the right team can act on it and progress is visible afterwards.',
    build: 'I built a MERN application with Google OAuth 2.0, JWT and bcrypt authentication, Cloudinary uploads, Nodemailer notifications and role-based workflows for citizens and administrators.',
    outcome: 'District-wise tracking, interactive Chart.js dashboards and Gemini image validation connect the citizen report to a more accountable resolution process.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini', 'OAuth 2.0'], metric: 'Multi-role workflow',
    href: `${GITHUB}/CitiSolve`, featured: true,
  },
  
];

const capabilities = [
  { icon: Code2, title: 'Algorithmic foundation', text: 'I use C, Java, data structures and problem-solving practice to break ambiguous challenges into precise, testable steps.' },
  { icon: BrainCircuit, title: 'Intelligent systems', text: 'I understand how to apply search, retrieval, reasoning and machine intelligence when software needs to work with complex information.' },
  { icon: Layers3, title: 'End-to-end product work', text: 'I connect interfaces, APIs, authentication, data models and workflows so an idea becomes a usable, complete product.' },
  { icon: Database, title: 'Systems and data thinking', text: 'I reason about how information moves through software: from inputs and constraints to processing, storage, permissions and output.' },
];

const pipeline = [
  ['01', 'Understand', 'Clarify the problem'],
  ['02', 'Model', 'Shape data and constraints'],
  ['03', 'Build', 'Choose tools intentionally'],
  ['04', 'Refine', 'Test, explain and iterate'],
];

const techSymbols = { C: 'C', Java: '☕', React: '⚛', 'Node.js': 'JS', Express: 'EX', MongoDB: 'DB', Gemini: '✦', Python: '🐍', FAISS: 'F', BM25: 'B', Ollama: 'AI', Streamlit: 'S', Asyncio: '↯', 'OAuth 2.0': '◎', 'Next.js': 'N', TypeScript: 'TS', Supabase: 'SB', Drizzle: 'DR' };

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function BrandMark({ kind, size = 18 }) {
  const path = kind === 'github'
    ? 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.73.084-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.81 1.103.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.575C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
    : 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.969 20.452H3.702V8.999h3.267v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.207 24 24 23.227 24 22.271V1.729C24 .774 23.207 0 22.225 0z';
  return <svg className="brand-mark" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={path} /></svg>;
}

function TechMark({ label }) {
  return <span className="tech-mark" aria-hidden="true">{techSymbols[label] || label.slice(0, 2)}</span>;
}

function SignalDash() {
  const [running, setRunning] = React.useState(false);
  const [seconds, setSeconds] = React.useState(20);
  const [score, setScore] = React.useState(0);
  const [best, setBest] = React.useState(() => Number(getStored('signal-dash-best', '0')));
  const [target, setTarget] = React.useState({ left: 42, top: 42 });
  const [status, setStatus] = React.useState('Ready when you are.');
  const scoreRef = React.useRef(0);

  const moveTarget = React.useCallback(() => setTarget({ left: 10 + Math.random() * 78, top: 12 + Math.random() * 68 }), []);

  React.useEffect(() => {
    if (!running) return undefined;
    const timer = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          setRunning(false);
          setStatus(`Time. You caught ${scoreRef.current} signals.`);
          setBest((current) => {
            const next = Math.max(current, scoreRef.current);
            setStored('signal-dash-best', String(next));
            return next;
          });
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  const startGame = () => {
    scoreRef.current = 0;
    setScore(0);
    setSeconds(20);
    setStatus('Go. Follow the signal.');
    moveTarget();
    setRunning(true);
  };

  const hitTarget = () => {
    if (!running) return;
    scoreRef.current += 1;
    setScore(scoreRef.current);
    moveTarget();
  };

  return <div className="game-card"><div className="game-stats"><div><span>TIME</span><strong>{String(seconds).padStart(2, '0')}s</strong></div><div><span>SCORE</span><strong>{String(score).padStart(2, '0')}</strong></div><div><span>BEST</span><strong>{String(best).padStart(2, '0')}</strong></div></div><div className="game-board" role="application" aria-label="Signal Dash game"><div className="game-grid" />{running && <button className="signal-target" style={{ left: `${target.left}%`, top: `${target.top}%` }} onClick={hitTarget} aria-label="Catch signal"><span>+</span></button>}{!running && <div className="game-overlay"><Gamepad2 size={26} /><b>{seconds === 0 ? 'Run it back?' : 'Catch the signal'}</b><small>Click the moving target as many times as you can in 20 seconds.</small><button className="button primary" onClick={startGame}>{seconds === 0 ? <><RotateCcw size={15} /> Play again</> : 'Start game'}</button></div>}</div><div className="game-footer"><span>{status}</span><span>Works offline · no downloads</span></div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [lightMode, setLightMode] = React.useState(() => getStored('portfolio-theme') === 'light');

  React.useEffect(() => {
    document.documentElement.classList.toggle('theme-light', lightMode);
    document.documentElement.style.colorScheme = lightMode ? 'light' : 'dark';
    setStored('portfolio-theme', lightMode ? 'light' : 'dark');
  }, [lightMode]);

  const themeLabel = lightMode ? 'Switch to dark mode' : 'Switch to light mode';

  return <div className={`site ${lightMode ? 'theme-light' : ''}`}>
    <div className="noise" /><div className="grid-bg" />
    <header className="nav">
      <a className="brand" href="#top" aria-label="Ashrith Reddy home">AR<span>.</span></a>
      <nav className={menuOpen ? 'open' : ''}><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#fun" onClick={() => setMenuOpen(false)}>Play</a></nav>
      <div className="nav-actions"><a className="nav-cta" href={`mailto:${EMAIL}`}>Let&apos;s talk <ArrowUpRight size={15} /></a><button className="theme-toggle" onClick={() => setLightMode((value) => !value)} aria-label={themeLabel} title={themeLabel}>{lightMode ? <Moon size={16} /> : <Sun size={16} />}</button><button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </header>

    <main id="top">
      <section className="hero shell"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> COMPUTER SCIENCE & ENGINEERING <i /> MNNIT ALLAHABAD</div><p className="hero-kicker">BUILDING AT THE INTERSECTION OF <span>AI</span>, WEB & ALGORITHMS</p><h1>Software with a <em>reason</em> to exist.</h1><p className="hero-text">I&apos;m Tummala Ashrith Reddy — a CSE student who likes turning difficult ideas into useful systems. I move between retrieval pipelines, full-stack products and the fundamentals that make both of them work.</p><div className="hero-actions"><a className="button primary" href="#work">Explore the work <ArrowDownRight size={17} /></a><a className="button ghost" href={GITHUB} target="_blank" rel="noreferrer"><BrandMark kind="github" size={16} /> GitHub</a><a className="button ghost" href={LINKEDIN} target="_blank" rel="noreferrer"><BrandMark kind="linkedin" size={16} /> LinkedIn</a></div><div className="hero-note"><span /> Open to internships, collaborations and hard problems.</div></div><Reveal className="hero-visual" delay={0.12}><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-card"><div className="card-top"><span>ASHRITH / BUILD LOG</span><span>2026.09</span></div><div className="card-symbol"><Orbit size={22} /><span>01</span></div><div className="terminal-lines"><div><b>focus</b><span>AI × Web × Algorithms</span></div><div><b>current</b><span>Building + learning in public</span></div><div><b>stack</b><span>Java · React · Node · Python</span></div><div><b>mode</b><span className="live"><i /> shipping</span></div></div><div className="card-bottom"><Terminal size={15} /><span>curiosity-driven engineering</span></div></div><div className="floating-chip chip-top"><Sparkles size={14} /> local-first AI</div><div className="floating-chip chip-bottom"><Network size={14} /> systems thinker</div></Reveal></section>

      <section className="signal-strip shell" aria-label="Highlights"><div><strong>7.92</strong><span>CPI / 4TH SEMESTER</span></div><div><strong>{RATINGS.leetcode}</strong><span>MAX LEETCODE RATING</span></div><div><strong>03</strong><span>FEATURED BUILDS</span></div><div><strong>2024<span className="small-year">—</span>28</strong><span>B.TECH / MNNIT ALLAHABAD</span></div></section>

      <section id="work" className="section shell"><Reveal><div className="section-head"><div><span className="kicker">SELECTED WORK / 01</span><h2>Projects with a point of view.</h2></div><span className="section-index">03 BUILDS</span></div></Reveal><div className="project-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * 0.06} className={project.featured ? 'project featured' : 'project'}><div className="project-meta"><span>{project.number}</span><span>{project.label}</span></div><h3>{project.title}</h3><p className="project-lede">{project.description}</p><div className="project-story"><div><span>THE PROBLEM</span><p>{project.problem}</p></div><div><span>WHAT I BUILT</span><p>{project.build}</p></div><div><span>WHY IT MATTERS</span><p>{project.outcome}</p></div></div><div className="stack">{project.stack.map((item) => <span className="stack-chip" key={item}><TechMark label={item} />{item}</span>)}</div><div className="project-foot"><span>{project.metric}</span><a href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></div></Reveal>)}</div></section>

      <section id="systems" className="section shell systems-section"><Reveal><div className="section-head"><div><span className="kicker">ENGINEERING APPROACH / 02</span><h2>How I turn ideas into useful software.</h2></div><span className="section-index">A GENERAL METHOD</span></div></Reveal><div className="systems-layout"><Reveal className="systems-intro"><div className="system-icon"><ServerCog size={20} /></div><p>I work across the full path from a question to a dependable result: understand what matters, make the complexity manageable and keep the final experience clear.</p><span className="system-caption">A general model for how I think</span></Reveal><Reveal className="pipeline" delay={0.1}>{pipeline.map(([number, title, text], index) => <div className="pipeline-step" key={title}><span className="pipeline-number">{number}</span><div><b>{title}</b><small>{text}</small></div>{index < pipeline.length - 1 && <ArrowUpRight className="pipeline-arrow" size={17} />}</div>)}</Reveal></div></section>

      <section className="section shell capabilities-section"><Reveal><div className="section-head"><div><span className="kicker">CAPABILITIES / 03</span><h2>What I bring to a team.</h2></div><span className="section-index">CONNECTED SKILLS</span></div><p className="capabilities-lede">My strengths are a connected set of habits rather than isolated technologies. I bring structured problem solving, curiosity about how systems work, the ability to move between abstraction levels and a focus on making the final result understandable.</p></Reveal><div className="cap-grid">{capabilities.map((capability, index) => { const Icon = capability.icon; return <Reveal key={capability.title} delay={index * 0.06}><article className="cap"><div className="cap-icon"><Icon size={19} /></div><span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.text}</p></article></Reveal>; })}</div></section>

      <section id="about" className="section shell about-section"><Reveal><div className="section-head"><div><span className="kicker">THE PERSON BEHIND THE CODE / 04</span><h2>Curious enough to go deep. <em>Practical enough to ship.</em></h2></div><span className="section-index">PROFILE</span></div></Reveal><div className="about-grid"><Reveal className="manifesto"><p>My strongest work sits where <b>problem solving</b> meets <b>product thinking</b>.</p><p className="manifesto-small">I enjoy taking an ambiguous idea, breaking it into systems, and learning whatever the implementation demands — from Java and DSA to full-stack applications, retrieval systems and local LLMs.</p><a className="inline-link" href={`mailto:${EMAIL}`}>Say hello <ArrowUpRight size={16} /></a></Reveal><Reveal className="timeline" delay={0.1}><div className="timeline-row"><span>2024—2028</span><div><b>B.Tech · Computer Science & Engineering</b><small>MNNIT Allahabad · Prayagraj · CPI 7.92 through semester 4</small></div></div><div className="timeline-row"><span>2022—2024</span><div><b>Intermediate Education</b><small>Sri Chaitanya College · Telangana · 98.1%</small></div></div><div className="timeline-row"><span>2021—2022</span><div><b>Secondary Education</b><small>Vinner&apos;s High School · Telangana · CGPA 10</small></div></div></Reveal></div></section>

      <section className="section shell proof-section"><Reveal><div className="section-head"><div><span className="kicker">PRACTICE / 05</span><h2>Achievements with context.</h2></div><span className="section-index">COMPETITIVE PROGRAMMING</span></div><p className="proof-lede">Competitive programming is where I practise the habits that support my wider engineering work: reading constraints carefully, finding the right abstraction, and staying precise when the solution has to work under pressure.</p></Reveal><div className="proof-grid"><a href={LEETCODE} target="_blank" rel="noreferrer" className="proof-card"><Trophy /><div><b>LeetCode</b><strong>{RATINGS.leetcode}</strong><span>Max rating. Global rank 1944 in Biweekly Contest 181 — evidence of consistency across timed problem solving.</span></div><ArrowUpRight /></a><a href={CODECHEF} target="_blank" rel="noreferrer" className="proof-card"><Trophy /><div><b>CodeChef</b><strong>{RATINGS.codechef}</strong><span>Max rating. Global rank 1684 in Starters 213 — translating a fresh problem statement into working code quickly.</span></div><ArrowUpRight /></a><a href={CODEFORCES} target="_blank" rel="noreferrer" className="proof-card"><Code2 /><div><b>Codeforces</b><strong>{RATINGS.codeforces}</strong><span>Max rating. A steady practice loop for algorithms, implementation speed and learning from failed approaches.</span></div><ArrowUpRight /></a></div><div className="toolbelt"><span>TOOLBELT</span>{['C', 'Java', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'FAISS', 'Ollama'].map((item) => <b key={item}><TechMark label={item} />{item}</b>)}</div></section>

      <section id="fun" className="section shell game-section"><Reveal><div className="section-head"><div><span className="kicker">A SMALL DETOUR / 06</span><h2>Play with the signal.</h2></div><span className="section-index">OFFLINE GAME</span></div><p className="game-lede">A tiny reaction game built into the portfolio. No server, account or download required — just see how many signals you can catch.</p></Reveal><Reveal delay={0.1}><SignalDash /></Reveal></section>

      <section className="closing shell"><div className="closing-orb" /><Reveal><span className="kicker">LET&apos;S BUILD SOMETHING</span><h2>Have a hard problem?<br /><em>I&apos;m interested.</em></h2><p>Reach out for internships, collaborations or a conversation about building useful software.</p><a className="button primary big" href={`mailto:${EMAIL}`}>Start a conversation <ArrowUpRight size={18} /></a></Reveal></section>
    </main>

    <footer className="shell"><div><b>Tummala Ashrith Reddy</b><span>Computer Science & Engineering · MNNIT Allahabad</span></div><div className="footer-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><BrandMark kind="github" /></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandMark kind="linkedin" /></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={16} /></a></div><span className="made">© 2026 · built with React</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
