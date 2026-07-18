import React from 'react';
import type { ProjectData } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className={`glass-panel rounded-3xl p-8 glass-glow transition-all duration-500 group flex flex-col gap-6 ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}>
      <div className={`w-full aspect-[3.18] rounded-2xl overflow-hidden glass-panel border-glass-border ${!project.liveUrl && project.githubUrl ? 'flex items-center justify-center bg-surface-container-low' : ''}`}>
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h4 className="font-headline-sm text-headline-sm text-text-primary">{project.title}</h4>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" title="GitHub Repo">
                <span className="material-symbols-outlined text-primary hover:scale-110 transition-transform">code</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" title="Live Website">
                <span className="material-symbols-outlined text-primary hover:scale-110 transition-transform">arrow_outward</span>
              </a>
            )}
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {project.description}
        </p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-white/5 border border-glass-border font-label-sm text-label-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
