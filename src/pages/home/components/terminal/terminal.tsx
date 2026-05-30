import './terminal.css';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

type LogLine = {
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'system';
};

const LOG_LINES: LogLine[] = [
  { timestamp: '00:01:01', message: 'INITIALIZING SYSTEM CORE...', type: 'info' },
  { timestamp: '00:02:03', message: 'LOADING TYPE_STACK MODULES...', type: 'info' },
  { timestamp: '00:02:06', message: 'SUCCESS: CORE ASSETS LOADED', type: 'success' },
  { timestamp: '00:03:09', message: 'FETCHING PROJECT METADATA...', type: 'info' },
  { timestamp: '00:04:08', message: 'SYNCING GITHUB API v4...', type: 'info' },
  { timestamp: '00:04:18', message: 'CONNECTED TO NODE 04.PARIS', type: 'success' },
  { timestamp: '00:05:11', message: 'LISTENING FOR INCOMING REQUESTS', type: 'system' },
  { timestamp: '00:05:14', message: '[LOG] optimal portfolio dependencies to latest stable...', type: 'warning' },
  { timestamp: '00:06:22', message: 'DEPLOYING ARTIFACT BUILD #2847...', type: 'info' },
  { timestamp: '00:06:35', message: 'SUCCESS: DEPLOYMENT VERIFIED', type: 'success' },
  { timestamp: '00:07:01', message: 'RUNNING INTEGRITY CHECKS...', type: 'system' },
  { timestamp: '00:07:18', message: 'ALL SYSTEMS NOMINAL', type: 'success' },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= LOG_LINES.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 420);

    return () => clearInterval(interval);
  }, [isInView]);

  const getLineClass = (type: LogLine['type']) => {
    switch (type) {
      case 'success': return 'terminal-line--success';
      case 'warning': return 'terminal-line--warning';
      case 'system': return 'terminal-line--system';
      default: return '';
    }
  };

  return (
    <motion.div
      ref={terminalRef}
      className="terminal-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="terminal-title">system_log.sh</span>
        <button
          className="terminal-btn"
          onClick={() => {
            setVisibleLines(0);
            setIsInView(false);
            setTimeout(() => setIsInView(true), 100);
          }}
        >
          [INITIALIZE]
        </button>
      </div>
      <div className="terminal-body">
        {LOG_LINES.slice(0, visibleLines).map((line, index) => (
          <div
            key={index}
            className={`terminal-line ${getLineClass(line.type)}`}
          >
            <span className="terminal-timestamp">[{line.timestamp}]</span>
            <span className="terminal-msg">{line.message}</span>
          </div>
        ))}
        {visibleLines < LOG_LINES.length && (
          <div className="terminal-cursor">
            <span className="cursor-block">█</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Terminal;
