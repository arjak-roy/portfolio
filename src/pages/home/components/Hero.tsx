
import arjakImage from '../../../assets/arjak.jpeg';

export default function Hero() {
  return (
    <section className="reveal-section min-h-screen flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-section-gap" id="hero">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col items-start gap-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-glass-border font-label-sm text-label-sm text-secondary">
            <span className="material-symbols-outlined text-[14px] mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>fiber_manual_record</span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary tracking-tight">
            Crafting <span className="text-primary text-glow">Digital Experiences</span> with technical precision.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            I am a Computer Science Engineer focused on building scalable digital infrastructures and interfaces that bridge the gap between human intuition and machine logic.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#work">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200 flex items-center gap-2">
                View Projects
                <span className="material-symbols-outlined">arrow_downward</span>
              </button>
            </a>
            <a href="mailto:arjakroy2411@gmail.com">
              <button className="glass-panel text-primary font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-white/5 transition-all duration-200">
                Hire Me
              </button>
            </a>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-panel border-2 border-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src={arjakImage}
                alt="Arjak Roy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
