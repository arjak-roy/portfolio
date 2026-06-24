
import SelectStarImage from '../../../assets/SelectStar.png';
import mlPlayground from '../../../assets/ml-playground.png';
import portfolioImage from '../../../assets/Gemini_Generated_Image_2f305k2f305k2f30.png';

export default function Work() {
  return (
    <section className="reveal-section px-margin-mobile md:px-margin-desktop py-section-gap" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-label-md text-label-md text-primary mb-2">SELECTED WORKS</h2>
            <h3 className="font-headline-md text-headline-md text-text-primary">Featured Projects</h3>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase">
            2022 — 2026
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1: SelectStar */}
          <div className="glass-panel rounded-3xl p-8 glass-glow transition-all duration-500 group flex flex-col gap-6">
            <div className="w-full aspect-[3.18] rounded-2xl overflow-hidden glass-panel border-glass-border">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={SelectStarImage}
                alt="SelectStar"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h4 className="font-headline-sm text-headline-sm text-text-primary">SelectStar Platform</h4>
                <a href="https://seslectstar.web.app/" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-primary hover:scale-110 transition-transform">arrow_outward</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A high-performance, full-stack learning platform bridging theoretical database concepts and practical execution with a secure, sandboxed environment.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">React</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Project 2: ML Playground */}
          <div className="glass-panel rounded-3xl p-8 glass-glow transition-all duration-500 group flex flex-col gap-6 md:translate-y-12">
            <div className="w-full aspect-[3.18] rounded-2xl overflow-hidden glass-panel border-glass-border">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={mlPlayground}
                alt="ML Playground"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h4 className="font-headline-sm text-headline-sm text-text-primary">ML Playground</h4>
                <a href="https://arjak-roy.github.io/Ml-Playground/" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-primary hover:scale-110 transition-transform">arrow_outward</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A collection of interactive machine learning playgrounds for practicing and learning different ML algorithms with real-time visualizations.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Flutter</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Dart</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Machine Learning</span>
              </div>
            </div>
          </div>

          {/* Project 3: Portfolio v2 (Moved below or next to the others, removing translate-y-12 for odd items if you want a masonry look, let's keep it simple) */}
          <div className="glass-panel rounded-3xl p-8 glass-glow transition-all duration-500 group flex flex-col gap-6">
            <div className="w-full aspect-[3.18] rounded-2xl overflow-hidden glass-panel border-glass-border flex items-center justify-center bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={portfolioImage}
                alt="Portfolio v2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Portfolio v2</h4>
                <a href="#" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined text-primary hover:scale-110 transition-transform">arrow_outward</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Terminal-inspired personal portfolio built with React, TypeScript, and Framer Motion. Features a responsive system-architect aesthetic.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">React</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Framer Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
