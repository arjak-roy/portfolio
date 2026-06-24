
import SelectStarImage from '../../../assets/SelectStar.png';
import mlPlayground from '../../../assets/ml-playground.png';
import sketchNGuessImage from '../../../assets/image.png';

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

          {/* Project 3: Sketch-n-Guess */}
          <div className="glass-panel rounded-3xl p-8 glass-glow transition-all duration-500 group flex flex-col gap-6">
            <div className="w-full aspect-[3.18] rounded-2xl overflow-hidden glass-panel border-glass-border flex items-center justify-center bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={sketchNGuessImage}
                alt="Sketch-n-Guess"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Sketch-n-Guess</h4>
                <div className="flex gap-4">
                  <a href="#" target="_blank" rel="noreferrer" title="GitHub Repo">
                    <span className="material-symbols-outlined text-primary hover:scale-110 transition-transform">code</span>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer" title="Live Website">
                    <span className="material-symbols-outlined text-primary hover:scale-110 transition-transform">arrow_outward</span>
                  </a>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Experience the fun of drawing and guessing with our Skribbl.io-inspired web application! Gather your friends or join players from around the world in a lively online environment. Take turns drawing a secret word while others try to guess it. With room management, a scoring system, and a curated word set of 150 words, it's a simple yet engaging way to have fun and test your artistic and guessing skills.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Flutter</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Dart</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Express.js</span>
                <span className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">Socket.io</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
