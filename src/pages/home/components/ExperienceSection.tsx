import { experiences } from '../../../data/experience';
import { ExperienceCard } from '../../../components/ui/ExperienceCard';

export default function ExperienceSection() {
  return (
    <section className="reveal-section px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest/50" id="experience">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-label-md text-label-md text-primary mb-2">JOURNEY</h2>
          <h3 className="font-headline-md text-headline-md text-text-primary">Professional Path</h3>
        </div>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
