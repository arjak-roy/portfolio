

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-3 gap-8 rounded-full mt-6 mx-auto w-fit glass-panel backdrop-blur-xl shadow-[0_0_20px_rgba(226,194,136,0.1)]">
      <div className="font-headline-sm text-headline-sm tracking-tighter text-primary">
        ARJAK ROY
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a
          className="font-label-md text-label-md text-primary font-bold hover:text-primary transition-colors duration-300"
          href="#"
        >
          About
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          href="#work"
        >
          Work
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
          href="#experience"
        >
          Experience
        </a>
      </nav>
      <a href="mailto:arjakroy2411@gmail.com">
        <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200">
          <span className="italic">Let's connect</span>
        </button>
      </a>
    </header>
  );
}
