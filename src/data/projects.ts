import SelectStarImage from '../assets/SelectStar.png';
import mlPlayground from '../assets/ml-playground.png';
import sketchNGuessImage from '../assets/image.png';

export interface ProjectData {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectData[] = [
  {
    id: 'select-star',
    title: 'SelectStar Platform',
    image: SelectStarImage,
    description: 'A high-performance, full-stack learning platform bridging theoretical database concepts and practical execution with a secure, sandboxed environment.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://seslectstar.web.app/'
  },
  {
    id: 'ml-playground',
    title: 'ML Playground',
    image: mlPlayground,
    description: 'A collection of interactive machine learning playgrounds for practicing and learning different ML algorithms with real-time visualizations.',
    tags: ['Flutter', 'Dart', 'Machine Learning'],
    liveUrl: 'https://arjak-roy.github.io/Ml-Playground/'
  },
  {
    id: 'sketch-n-guess',
    title: 'Sketch-n-Guess',
    image: sketchNGuessImage,
    description: "Experience the fun of drawing and guessing with our Skribbl.io-inspired web application! Gather your friends or join players from around the world in a lively online environment. Take turns drawing a secret word while others try to guess it. With room management, a scoring system, and a curated word set of 150 words, it's a simple yet engaging way to have fun and test your artistic and guessing skills.",
    tags: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#'
  }
];
