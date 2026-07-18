import twoComsLogo from '../assets/2coms_logo.jpg';

export interface ExperienceData {
  id: string;
  logo: string;
  duration: string;
  role: string;
  company: string;
  type: string;
}

export const experiences: ExperienceData[] = [
  {
    id: '2coms-intern',
    logo: twoComsLogo,
    duration: 'February 2026 — July 2026',
    role: 'Software Developer Intern',
    company: '2Coms',
    type: 'Internship'
  }
];
