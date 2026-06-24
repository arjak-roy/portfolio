import githubLogo from '../../../assets/icons8-github-30.png';

export default function Fab() {
  return (
    <a
      href="https://github.com/Arjak-Roy"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-primary/30 shadow-[0_0_20px_rgba(226,194,136,0.15)] hover:shadow-[0_0_30px_rgba(226,194,136,0.3)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 group bg-surface-container/80 backdrop-blur-xl"
    >
      <img
        src={githubLogo}
        alt="GitHub Logo"
        className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform duration-300"
      />
      <span className="font-label-md text-label-md text-text-primary group-hover:text-primary transition-colors duration-300">
        GitHub
      </span>
    </a>
  );
}
