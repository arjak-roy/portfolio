import './home.css';
import Nav from './components/nav/nav';
import { type JSX } from 'react';
import { motion, type Variants } from 'framer-motion';
import { bubble } from './components/bubble/bubble.model';
import Project from './components/project/project';
import { Experience } from './components/experience/experience';
import DevLog from './components/devlog/devlog';
import type { DevLogEntry } from './components/devlog/devlog';
import Terminal from './components/terminal/terminal';
import Bubble from './components/bubble/bubble';

import arjakImage from '../../assets/arjak.jpeg';
import comsimage from '../../assets/2coms_logo.jpg';
import SelectStarImage from '../../assets/SelectStar.png';
import mlPlayground from '../../assets/ml-playground.png';

/* ─── animation variants ─── */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

/* ─── tech stack data ─── */
type SkillEntry = { name: string; level: number };

const coreSkills: SkillEntry[] = [
  { name: 'Data Structures', level: 91 },
  { name: 'Algorithms', level: 82 },
  { name: 'System Design', level: 75 },
];

const frontendSkills: SkillEntry[] = [
  { name: 'React / TypeScript', level: 90 },
  { name: 'HTML / CSS', level: 88 },
  { name: 'Flutter', level: 65 },
];

const backendSkills: SkillEntry[] = [
  { name: 'Node.js / Python', level: 85 },
  { name: 'PostgreSQL / NoSQL', level: 78 },
  { name: 'Docker / DevOps', level: 68 },
];

/* ─── dev logs data ─── */
const devLogs: DevLogEntry[] = [
  {
    date: '2026.MAY.15',
    category: 'PERFORMANCE',
    title: 'Optimizing Kernel Latency',
    description:
      'A deep dive into memory-mapped rendering and scheduler overhead in custom RTOS builds.',
    link: '#',
  },
  {
    date: '2026.APR.28',
    category: 'ACCESSIBILITY',
    title: 'The Reach Protocol: A UI Case Study',
    description:
      'How high-contrast warm palettes improve accessibility in terminal-themed interfaces.',
    link: '#',
  },
  {
    date: '2026.MAR.12',
    category: 'ARCHITECTURE',
    title: 'Distributed Consensus in Rust',
    description:
      'Implementing Raft from scratch with memory safety and high-throughput networking.',
    link: '#',
  },
];

/* ─── skill bar component ─── */
function SkillBar({ skill }: { skill: SkillEntry }) {
  return (
    <div className="skill-row">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: skill.level / 100 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

/* ─── skill category component ─── */
function SkillCategory({
  icon,
  title,
  skills,
}: {
  icon: string;
  title: string;
  skills: SkillEntry[];
}) {
  return (
    <motion.div className="skill-category" variants={staggerItem}>
      <div className="skill-category-header">
        <span className="skill-icon">{icon}</span>
        <h3 className="skill-category-title">{title}</h3>
      </div>
      <div className="skill-list">
        {skills.map((s) => (
          <SkillBar key={s.name} skill={s} />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── main page ─── */
function Home(): JSX.Element {
  return (
    <div className="page">
      <Nav />

      {/* ─── DOT GRID BACKGROUND ─── */}
      <div className="dot-grid" aria-hidden="true" />

      {/* ─── HERO ─── */}
      <motion.section
        id="hero"
        className="hero"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-inner">
          <div className="hero-content">
            <motion.div
              className="hero-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="status-dot" />
              <span className="status-text">[SYSTEM_ACTIVE]</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="hero-prefix">SYSTEM_ARCHITECT:</span>
              <br />
              <span className="hero-name">ARJAK ROY</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              Computer Science Engineer | Building
              <br />
              Scalable Digital Infrastructures
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a href="#projects" className="btn btn--primary">
                INITIALIZE_PROTOCOL
              </a>
              <a href="#" className="btn btn--outline">
                DOWNLOAD_V_CARD
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="hero-photo-frame">
              <img
                src={arjakImage}
                alt="Arjak Roy"
                className="hero-photo"
              />
            </div>
            <span className="hero-photo-label">[$ @ARJAK_ROY]</span>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── TECH STACK ─── */}
      <motion.section
        id="stack"
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="section-header">
          <h2 className="section-title">TECH_STACK</h2>
          <span className="section-badge">[05 CATEGORIES LOADED]</span>
        </div>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SkillCategory icon="⚙" title="Core Engineering" skills={coreSkills} />
          <SkillCategory icon="◈" title="Frontend" skills={frontendSkills} />
          <SkillCategory icon="☰" title="Backend" skills={backendSkills} />
        </motion.div>
      </motion.section>

      {/* ─── EXPERIENCE ─── */}
      <motion.section
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="section-header">
          <h2 className="section-title">EXPERIENCE_LOG</h2>
        </div>
        <div className="experience-grid">
          <Experience
            exp={{
              title: 'Software Developer Intern',
              description: (
                <p>
                  Worked on a production web application using React.js and Node.js,
                  focused on creating intuitive user interfaces and optimizing backend
                  performance for a growing SaaS platform.
                </p>
              ),
              date: 'February 2026 — July 2026',
              logo: comsimage,
              company: '2Coms',
            }}
          />
        </div>
      </motion.section>

      {/* ─── PROJECTS ─── */}
      <motion.section
        id="projects"
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="section-header">
          <h2 className="section-title">DECOY_PROJECTS</h2>
        </div>

        <div className="projects-grid">
          <Project
            data={{
              name: 'SelectStar',
              description: (
                <>
                  <p>
                    A high-performance, full-stack learning platform bridging
                    theoretical database concepts and practical execution. Secure,
                    sandboxed environment for executing complex relational queries
                    against a live PostgreSQL instance.
                  </p>
                </>
              ),
              link: 'https://seslectstar.web.app/',
              techStack: [
                new bubble('React', ''),
                new bubble('JavaScript', ''),
                new bubble('Node.js', ''),
                new bubble('PostgreSQL', ''),
              ],
              image: SelectStarImage,
              filePath: 'SRC/PLATFORM/SQL.DB',
            }}
          />
          <Project
            data={{
              name: 'ML Playground',
              description: (
                <>
                  <p>
                    A collection of interactive machine learning playgrounds for
                    practicing and learning different ML algorithms with real-time
                    visualizations and parameter tuning.
                  </p>
                </>
              ),
              link: 'https://arjak-roy.github.io/Ml-Playground/',
              techStack: [
                new bubble('Flutter', ''),
                new bubble('Dart', ''),
                new bubble('ML', ''),
              ],
              image: mlPlayground,
              filePath: 'SRC/VISUALIZER/ML.05',
            }}
          />
          <Project
            data={{
              name: 'Portfolio v2',
              description: (
                <>
                  <p>
                    Terminal-inspired personal portfolio built with React,
                    TypeScript, and Framer Motion. Features animated terminal
                    console, skill progress bars, and responsive system-architect
                    aesthetic.
                  </p>
                </>
              ),
              link: '#',
              techStack: [
                new bubble('React', ''),
                new bubble('TypeScript', ''),
                new bubble('Framer Motion', ''),
              ],
              image: '',
              filePath: 'SRC/PORTFOLIO/V2.TSX',
            }}
          />
        </div>
      </motion.section>

      {/* ─── DEV LOGS ─── */}
      <motion.section
        id="logs"
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="section-header">
          <h2 className="section-title">DEV_LOGS</h2>
        </div>

        <motion.div
          className="devlogs-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {devLogs.map((entry, i) => (
            <motion.div key={i} variants={staggerItem}>
              <DevLog entry={entry} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ─── TERMINAL ─── */}
      <section className="section">
        <Terminal />
      </section>

      {/* ─── TECH TAGS (full list) ─── */}
      <motion.section
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="section-header">
          <h2 className="section-title">ALL_TECHNOLOGIES</h2>
        </div>
        <Bubble
          bubbles={[
            new bubble('JavaScript', ''),
            new bubble('TypeScript', ''),
            new bubble('React', ''),
            new bubble('Node.js', ''),
            new bubble('HTML', ''),
            new bubble('CSS', ''),
            new bubble('Flutter', ''),
            new bubble('PostgreSQL', ''),
            new bubble('Git', ''),
            new bubble('Docker', ''),
            new bubble('Postman', ''),
            new bubble('GitHub', ''),
            new bubble('Python', ''),
            new bubble('REST APIs', ''),
          ]}
        />
      </motion.section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-text">
            {'{SYSTEM_READY}'} © 2024 ARJAK_ROY. ALL RIGHTS RESERVED.
          </span>
          <div className="footer-links">
            <a
              href="https://github.com/arjak-roy"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/arjak-roy-07400524a/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a href="mailto:arjakroy2411@gmail.com">CONTACT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;