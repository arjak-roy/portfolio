

export default function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-glass-bg backdrop-blur-md border-t border-glass-border">
      <div className="font-headline-sm text-headline-sm text-primary">ARJAK ROY</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">
        © 2026 Arjak Roy. Built with precision.
      </div>
      <div className="flex gap-8">
        <a
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors"
          href="https://www.linkedin.com/in/arjak-roy-07400524a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors"
          href="https://github.com/arjak-roy"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
