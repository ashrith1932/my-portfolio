import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Mail,
  Menu,
  Network,
  Orbit,
  ServerCog,
  Sparkles,
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

const projects = [
  {
    number: '01', title: 'Source-Bias Analyzer', label: 'AI / RETRIEVAL',
    description: 'An explainable news-bias analysis system that turns live multi-source evidence into structured, claim-level reports.',
    detail: 'Async producer-consumer orchestration coordinates 39+ RSS/BFS scrapers, while hybrid retrieval combines FAISS, BM25, credibility weighting and cross-encoder reranking.',
    stack: ['Python', 'FAISS', 'BM25', 'Ollama', 'Streamlit', 'Asyncio'], metric: '39+ sources orchestrated',
    href: `${GITHUB}/Source-Bias-Analyzer`, featured: true,
  },
  {
    number: '02', title: 'CitiSolve', label: 'CIVIC TECH / MERN',
    description: 'A citizen complaint management system designed around accountable reporting, district-wise tracking and resolution.',
    detail: 'Role-based workflows, Google OAuth 2.0, JWT and bcrypt secure the product; Cloudinary, Nodemailer, Chart.js and Gemini image validation complete the reporting loop.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini', 'OAuth 2.0'], metric: 'Multi-role workflow',
    href: `${GITHUB}/CitiSolve`, featured: true,
  },
  {
    number: '03', title: 'Nerdding', label: 'PRODUCT / NEXT.JS',
    description: 'A startup-focused social product for profiles, projects, discovery, affiliations and community-led building.',
    detail: 'The public frontend is built with Next.js and TypeScript, backed by an API-driven auth and data layer with guest-readable surfaces and launch-ready legal routes.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Drizzle'], metric: '225 commits in frontend repo',
    href: `${GITHUB}/nerddings-frontend`, featured: false,
  },
  {
    number: '04', title: "TechCrunch '25", label: 'INTERACTIVE WEB',
    description: 'An immersive technical-festival experience built around spatial navigation, motion and a seven-day agenda.',
    detail: 'A React/Vite build using Three.js and GSAP to make event discovery feel closer to exploring a world than scanning a schedule.',
    stack: ['React 19', 'Vite', 'Three.js', 'GSAP', 'Tailwind CSS'], metric: '3D + motion UI',
    href: `${GITHUB}/IIC_WEB_NEW`, featured: false,
  },
];

const capabilities = [
  { icon: Code2, title: 'Algorithmic thinking', text: 'Java, C, DSA and competitive programming habits that keep implementations sharp.' },
  { icon: BrainCircuit, title: 'Applied AI systems', text: 'RAG, semantic search, BM25, local inference and evidence-first reasoning.' },
  { icon: Layers3, title: 'Product engineering', text: 'React interfaces, APIs, authentication, data flows and motion-led interaction.' },
  { icon: Database, title: 'Data infrastructure', text: 'MongoDB, FAISS, retrieval pipelines and pragmatic backend architecture.' },
];

const pipeline = [
  ['01', 'Collect', 'RSS / BFS sources'],
  ['02', 'Retrieve', 'FAISS + BM25'],
  ['03', 'Reason', 'Local LLM ensemble'],
  ['04', 'Explain', 'Structured report'],
];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="site">
      <div className="noise" /><div className="grid-bg" />
      <header className="nav">
        <a className="brand" href="#top" aria-label="Ashrith Reddy home">AR<span>.</span></a>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <a className="nav-cta" href={`mailto:${EMAIL}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> COMPUTER SCIENCE & ENGINEERING <i /> MNNIT ALLAHABAD</div>
            <p className="hero-kicker">BUILDING AT THE INTERSECTION OF <span>AI</span>, WEB & ALGORITHMS</p>
            <h1>Software with a <em>reason</em> to exist.</h1>
            <p className="hero-text">I&apos;m Tummala Ashrith Reddy — a CSE student who likes turning difficult ideas into useful systems. I move between retrieval pipelines, full-stack products and the fundamentals that make both of them work.</p>
            <div className="hero-actions"><a className="button primary" href="#work">Explore the work <ArrowDownRight size={17} /></a><a className="button ghost" href={GITHUB} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a></div>
            <div className="hero-note"><span /> Open to internships, collaborations and hard problems.</div>
          </div>

          <Reveal className="hero-visual" delay={0.12}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="card-top"><span>ASHRITH / BUILD LOG</span><span>2026.09</span></div>
              <div className="card-symbol"><Orbit size={22} /><span>01</span></div>
              <div className="terminal-lines"><div><b>focus</b><span>AI × Web × Algorithms</span></div><div><b>current</b><span>Building + learning in public</span></div><div><b>stack</b><span>Java · React · Node · Python</span></div><div><b>mode</b><span className="live"><i /> shipping</span></div></div>
              <div className="card-bottom"><Terminal size={15} /><span>curiosity-driven engineering</span></div>
            </div>
            <div className="floating-chip chip-top"><Sparkles size={14} /> local-first AI</div><div className="floating-chip chip-bottom"><Network size={14} /> systems thinker</div>
          </Reveal>
        </section>

        <section className="signal-strip shell" aria-label="Highlights"><div><strong>7.92</strong><span>CPI / 4TH SEMESTER</span></div><div><strong>1811</strong><span>MAX LEETCODE RATING</span></div><div><strong>39<span className="plus">+</span></strong><span>NEWS SOURCES ORCHESTRATED</span></div><div><strong>2024<span className="small-year">—</span>28</strong><span>B.TECH / MNNIT ALLAHABAD</span></div></section>

        <section id="work" className="section shell"><Reveal><div className="section-head"><div><span className="kicker">SELECTED WORK / 01</span><h2>Projects with a point of view.</h2></div><span className="section-index">04 BUILDS</span></div></Reveal><div className="project-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * 0.06} className={project.featured ? 'project featured' : 'project'}><div className="project-meta"><span>{project.number}</span><span>{project.label}</span></div><h3>{project.title}</h3><p className="project-lede">{project.description}</p><p className="project-detail">{project.detail}</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-foot"><span>{project.metric}</span><a href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></div></Reveal>)}</div></section>

        <section id="systems" className="section shell systems-section"><Reveal><div className="section-head"><div><span className="kicker">SYSTEMS / 02</span><h2>From raw signals to useful interfaces.</h2></div><span className="section-index">LOCAL-FIRST</span></div></Reveal><div className="systems-layout"><Reveal className="systems-intro"><div className="system-icon"><ServerCog size={20} /></div><p>My favourite problems have multiple layers: messy inputs, meaningful processing and an interface that makes the result legible.</p><span className="system-caption">A working model for how I build</span></Reveal><Reveal className="pipeline" delay={0.1}>{pipeline.map(([number, title, text], index) => <div className="pipeline-step" key={title}><span className="pipeline-number">{number}</span><div><b>{title}</b><small>{text}</small></div>{index < pipeline.length - 1 && <ArrowUpRight className="pipeline-arrow" size={17} />}</div>)}</Reveal></div></section>

        <section className="section shell capabilities-section"><Reveal><div className="section-head"><div><span className="kicker">HOW I WORK / 03</span><h2>Four ways I think about engineering.</h2></div><span className="section-index">FOUNDATIONS</span></div></Reveal><div className="cap-grid">{capabilities.map((capability, index) => { const Icon = capability.icon; return <Reveal key={capability.title} delay={index * 0.06}><article className="cap"><div className="cap-icon"><Icon size={19} /></div><span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.text}</p></article></Reveal>; })}</div></section>

        <section id="about" className="section shell about-section"><Reveal><div className="section-head"><div><span className="kicker">THE PERSON BEHIND THE CODE / 04</span><h2>Curious enough to go deep. <em>Practical enough to ship.</em></h2></div><span className="section-index">PROFILE</span></div></Reveal><div className="about-grid"><Reveal className="manifesto"><p>My strongest work sits where <b>problem solving</b> meets <b>product thinking</b>.</p><p className="manifesto-small">I enjoy taking an ambiguous idea, breaking it into systems, and learning whatever the implementation demands — from Java and DSA to full-stack applications, retrieval systems and local LLMs.</p><a className="inline-link" href={`mailto:${EMAIL}`}>Say hello <ArrowUpRight size={16} /></a></Reveal><Reveal className="timeline" delay={0.1}><div className="timeline-row"><span>2024—2028</span><div><b>B.Tech · Computer Science & Engineering</b><small>MNNIT Allahabad · Prayagraj · CPI 7.92 through semester 4</small></div></div><div className="timeline-row"><span>2022—2024</span><div><b>Intermediate Education</b><small>Sri Chaitanya College · Telangana · 98.1%</small></div></div><div className="timeline-row"><span>2021—2022</span><div><b>Secondary Education</b><small>Vinner&apos;s High School · Telangana · CGPA 10</small></div></div></Reveal></div></section>

        <section className="section shell proof-section"><Reveal><div className="section-head"><div><span className="kicker">PROOF OF WORK / 05</span><h2>Signals I keep improving.</h2></div><span className="section-index">PRACTICE</span></div></Reveal><div className="proof-grid"><a href={LEETCODE} target="_blank" rel="noreferrer" className="proof-card"><Trophy /><div><b>LeetCode</b><strong>1811</strong><span>Max rating · Biweekly Contest 181: global rank 1944</span></div><ArrowUpRight /></a><a href={CODECHEF} target="_blank" rel="noreferrer" className="proof-card"><Trophy /><div><b>CodeChef</b><strong>1459</strong><span>Max rating · Starters 213: global rank 1684</span></div><ArrowUpRight /></a><a href={CODEFORCES} target="_blank" rel="noreferrer" className="proof-card"><Code2 /><div><b>Codeforces</b><strong>1166</strong><span>Max rating · continuous problem-solving practice</span></div><ArrowUpRight /></a></div><div className="toolbelt"><span>TOOLBELT</span><b>C</b><b>Java</b><b>React</b><b>Node.js</b><b>Express</b><b>MongoDB</b><b>FAISS</b><b>Ollama</b><b>GitHub</b></div></section>

        <section className="closing shell"><div className="closing-orb" /><Reveal><span className="kicker">LET&apos;S BUILD SOMETHING</span><h2>Have a hard problem?<br /><em>I&apos;m interested.</em></h2><p>Reach out for internships, collaborations or a conversation about building useful software.</p><a className="button primary big" href={`mailto:${EMAIL}`}>Start a conversation <ArrowUpRight size={18} /></a></Reveal></section>
      </main>

      <footer className="shell"><div><b>Tummala Ashrith Reddy</b><span>Computer Science & Engineering · MNNIT Allahabad</span></div><div className="footer-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={16} /></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network size={16} /></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={16} /></a></div><span className="made">© 2026 · built with React</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
