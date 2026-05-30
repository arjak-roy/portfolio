import type { JSX } from "react";
import './experience.css';
import { motion } from 'framer-motion';

type exp = {
  title: string;
  company: string;
  date: string;
  description: JSX.Element;
  logo: string;
};

function Experience({ exp }: { exp: exp }) {
  return (
    <motion.div
      className="exp-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(212, 165, 116, 0.3)' }}
    >
      <div className="exp-header">
        <img src={exp.logo} alt={exp.company} className="exp-logo" />
        <div className="exp-info">
          <h3 className="exp-title">{exp.title}</h3>
          <div className="exp-meta">
            <span className="exp-company">{exp.company}</span>
            <span className="exp-divider">•</span>
            <span className="exp-date">{exp.date}</span>
          </div>
        </div>
      </div>
      <div className="exp-body">
        {exp.description}
      </div>
    </motion.div>
  );
}

export { Experience };
export type { exp };