import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="reveal-section px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest/50" id="experience">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-label-md text-label-md text-primary mb-2">JOURNEY</h2>
          <h3 className="font-headline-md text-headline-md text-text-primary">Professional Path</h3>
        </div>
        <div className="space-y-6">
          {/* Exp Item 1 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/40 transition-colors duration-300">
            <div>
              <p className="font-label-sm text-label-sm text-primary mb-1">February 2026 — July 2026</p>
              <h4 className="font-headline-sm text-headline-sm text-text-primary">Software Developer Intern</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">2Coms</p>
            </div>
            <div className="font-label-md text-label-md bg-primary/10 text-primary px-4 py-2 rounded-lg">Internship</div>
          </div>
        </div>
      </div>
    </section>
  );
}
