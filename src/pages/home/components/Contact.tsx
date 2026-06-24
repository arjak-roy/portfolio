

export default function Contact() {
  return (
    <section className="reveal-section px-margin-mobile md:px-margin-desktop py-section-gap" id="contact">
      <div className="max-w-7xl mx-auto glass-panel rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 text-primary opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[200px]">mail</span>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary max-w-2xl">
            Let's build something <span className="text-primary italic">extraordinary</span> together.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Currently open to freelance opportunities, full-time positions, or just interesting conversations about design and technology.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-6">
            <a
              className="bg-primary text-on-primary font-headline-sm text-headline-sm px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all"
              href="mailto:arjakroy2411@gmail.com"
            >
              Send an Email
              <span className="material-symbols-outlined">send</span>
            </a>
            <div className="flex gap-4 items-center justify-center">
              <a
                className="w-14 h-14 flex items-center justify-center glass-panel rounded-full text-on-surface-variant hover:text-primary transition-colors"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied!');
                }}
              >
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
