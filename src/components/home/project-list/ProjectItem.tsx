import Image from 'next/image';
import { ExternalLink, GitHub } from 'react-feather';

import { Project } from './types';
import clsx from 'clsx';
import PopupLink from '../../shared/PopupLink';

export type ProjectItemProps = {
  project: Project;
  right?: boolean;
};

const ProjectItem = ({ project, right = false }: ProjectItemProps) => {
  return (
    <li className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 items-center">
      <PopupLink
        className={right ? 'sm:order-2' : 'sm:order-1'}
        href={project.demoLink ?? project.sourceLink}
        title={project.title}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <Image
          src={project.image}
          alt=""
          className="border border-darkgrey rounded-md select-none"
        />
      </PopupLink>

      <div
        className={clsx(
          'flex flex-col items-center text-center sm:items-stretch justify-between py-6 max-w-full',
          right ? 'sm:text-start' : 'sm:text-end',
          right ? 'sm:order-1' : 'sm:order-2',
        )}
      >
        <div>
          <span className="text-sm sm:text-base text-lightgrey font-semibold">{project.type}</span>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
        </div>

        <p className="mt-2 text-sm sm:text-base">{project.description}</p>

        <div
          className={clsx(
            'flex gap-4 text-sm tracking-wider mt-2 mx-w-full',
            right ? 'justify-start' : 'justify-end',
          )}
        >
          {project.skills.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
        </div>

        <div className={clsx('flex gap-4 mt-4', right ? 'justify-start' : 'justify-end')}>
          {project.sourceLink != null ? (
            <PopupLink
              href={project.sourceLink}
              aria-label="GitHub"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <GitHub size={20} />
            </PopupLink>
          ) : null}

          {project.demoLink != null ? (
            <PopupLink
              href={project.demoLink}
              aria-label="Demo"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <ExternalLink size={20} />
            </PopupLink>
          ) : null}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
