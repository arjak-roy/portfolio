import { projects } from '../../../data/projects';
import { ProjectCard } from '../../../components/ui/ProjectCard';

export default function Work() {
  return (
    <section className="reveal-section px-margin-mobile md:px-margin-desktop py-section-gap" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-2">
          <h2 className="font-label-md text-label-md text-primary mb-1">SELECTED WORKS</h2>
          <h3 className="font-headline-md text-headline-md text-text-primary">Featured Projects</h3>
          <div className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase mt-2">
            2022 — 2026
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
