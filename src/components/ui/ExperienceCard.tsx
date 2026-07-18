import React from 'react';
import type { ExperienceData } from '../../data/experience';

interface ExperienceCardProps {
  experience: ExperienceData;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/40 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <img src={experience.logo} alt={`${experience.company} Logo`} className="w-16 h-16 rounded-xl object-cover" />
        <div>
          <p className="font-label-sm text-label-sm text-primary mb-1">{experience.duration}</p>
          <h4 className="font-headline-sm text-headline-sm text-text-primary">{experience.role}</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">{experience.company}</p>
        </div>
      </div>
      <div className="font-label-md text-label-md bg-primary/10 text-primary px-4 py-2 rounded-lg">{experience.type}</div>
    </div>
  );
};
