import Bubble from '../bubble/bubble';
import { bubble } from '../bubble/bubble.model';
import './project.css';
import type { JSX } from 'react';
import { motion } from 'framer-motion';

type ProjectProps = {
  name: string;
  image: string;
  description: JSX.Element;
  link: string;
  techStack: bubble[];
  filePath?: string;
  githubLink?: string;
};

function Project({ data }: { data: ProjectProps }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(212, 165, 116, 0.3)' }}
    >
      <div className="project-header">
        <div className="project-dots">
          <span className="pdot pdot--red" />
          <span className="pdot pdot--yellow" />
          <span className="pdot pdot--green" />
        </div>
        {data.filePath && (
          <span className="project-filepath">{data.filePath}</span>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-name">{data.name}</h3>

        {data.image && (
          <motion.div className="project-image" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <img src={data.image} alt={data.name} />
          </motion.div>
        )}

        <div className="project-description">
          {data.description}
        </div>

        <div className="project-tags">
          <Bubble bubbles={data.techStack} />
        </div>

        <div className="project-actions">
          <motion.a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="project-action"
            whileHover={{ color: '#D4A574' }}
          >
            VIEW_REPOSITORY
          </motion.a>
          {data.githubLink && (
            <motion.a
              href={data.githubLink}
              target="_blank"
              rel="noreferrer"
              className="project-action"
              whileHover={{ color: '#D4A574' }}
            >
              SOURCE_CODE
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
export type { ProjectProps };