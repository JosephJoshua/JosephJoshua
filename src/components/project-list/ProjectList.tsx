import clsx from 'clsx';
import ProjectItem from './ProjectItem';
import { Project } from './types';

import posad from '@/public/images/posad.jpg';
import psm from '@/public/images/psm.jpg';
import BaseProps from '@/types/BaseProps';
import PageSection from '../PageSection';

const projects = new Array<Project>(
  {
    title: 'Posad',
    description:
      "Web app to remember the expiration dates of the food you buy and remind you when they're about to expire.",
    type: 'Web App',
    skills: ['React', 'Tailwind', 'Firebase', 'Nx'],
    sourceLink: 'https://github.com/JosephJoshua/posad',
    demoLink: 'https://posad.vercel.app',
    image: posad,
  },
  {
    title: 'PSM',
    description: 'POS-like desktop app to manage phone repair orders.',
    type: 'Desktop App',
    skills: ['C#', 'WPF', 'Go', 'PostgreSQL'],
    sourceLink: 'https://github.com/JosephJoshua/Shin-PSMDesktopApp',
    image: psm,
  },
);

export type ProjectListProps = BaseProps;

const ProjectList = (props: ProjectListProps) => {
  return (
    <PageSection {...props}>
      <h2 className="text-3xl font-bold font-poppins">Some Things I've Worked On</h2>
      <ul className="flex flex-col gap-12 mt-8">
        {projects.map((project, idx) => (
          <ProjectItem key={project.title} project={project} right={idx % 2 === 1} />
        ))}
      </ul>
    </PageSection>
  );
};

export default ProjectList;
