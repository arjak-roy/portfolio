import './bubble.css'
import { motion, type Variants } from 'framer-motion';
import { bubble } from './bubble.model';

const bubbleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

function Bubble({ bubbles }: { bubbles: bubble[] }) {
  return (
    <motion.div
      className="tag-container"
      variants={bubbleContainerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.35 }}
    >
      {bubbles.map((b: bubble, index: number) => (
        <motion.span
          key={`${b.name}-${index}`}
          className="tag"
          variants={bubbleVariants}
          whileHover={{ borderColor: 'rgba(212, 165, 116, 0.4)', color: '#D4A574' }}
        >
          #{b.name}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default Bubble;