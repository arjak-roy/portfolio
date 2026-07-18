import { skills } from '../../../data/skills';

export default function SkillsSection() {
  return (
    <section className="reveal-section px-margin-mobile md:px-margin-desktop py-section-gap" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-label-md text-label-md text-primary mb-2">TOOLKIT</h2>
          <h3 className="font-headline-md text-headline-md text-text-primary">Skills & Technologies</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 w-32 h-32">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain drop-shadow-lg" />
              <span className="font-label-sm text-label-sm text-on-surface-variant text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
