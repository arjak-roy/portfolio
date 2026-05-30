import './devlog.css';
import { motion } from 'framer-motion';

type DevLogEntry = {
  date: string;
  category: string;
  title: string;
  description: string;
  link?: string;
};

const logVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function DevLog({ entry }: { entry: DevLogEntry }) {
  return (
    <motion.div
      className="devlog-card"
      variants={logVariants}
      whileHover={{ borderColor: 'rgba(212, 165, 116, 0.3)' }}
    >
      <div className="devlog-meta">
        <span className="devlog-date">{entry.date}</span>
        <span className="devlog-separator">/</span>
        <span className="devlog-category">{entry.category}</span>
      </div>
      <h3 className="devlog-title">{entry.title}</h3>
      <p className="devlog-desc">{entry.description}</p>
      {entry.link && (
        <a href={entry.link} className="devlog-link" target="_blank" rel="noreferrer">
          READ_ENTRY →
        </a>
      )}
    </motion.div>
  );
}

export default DevLog;
export type { DevLogEntry };
