import cssLogo from '../assets/css-3.png';
import dockerLogo from '../assets/docker.png';
import postgresLogo from '../assets/free-postgresql-icon-svg-download-png-1175120.webp';
import htmlLogo from '../assets/html.png';
import flutterLogo from '../assets/icons8-flutter-logo-48.png';
import gitLogo from '../assets/icons8-git-48 (1).png';
import githubLogo from '../assets/icons8-github-30.png';
import postmanLogo from '../assets/icons8-postman-inc-24.png';
import jsLogo from '../assets/js.png';
import nodeLogo from '../assets/nodejs.png';
import reactLogo from '../assets/react.svg';
import tsLogo from '../assets/typescript.png';

export interface SkillData {
  name: string;
  logo: string;
}

export const skills: SkillData[] = [
  { name: 'React', logo: reactLogo },
  { name: 'TypeScript', logo: tsLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'PostgreSQL', logo: postgresLogo },
  { name: 'Flutter', logo: flutterLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'HTML5', logo: htmlLogo },
  { name: 'CSS3', logo: cssLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'Postman', logo: postmanLogo },
];
