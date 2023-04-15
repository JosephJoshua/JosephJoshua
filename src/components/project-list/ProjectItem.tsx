import Image from 'next/image';
import { ExternalLink, GitHub } from 'react-feather';

import { Project } from './types';
import clsx from 'clsx';
import PopupLink from '../PopupLink';

export type ProjectItemProps = {
  project: Project;
  right?: boolean;
};

const ProjectItem = ({ project, right = false }: ProjectItemProps) => {
  return (
    <li className="grid grid-cols-2 gap-x-8">
      <PopupLink
        className={right ? 'order-2' : 'order-1'}
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
          'flex flex-col justify-between py-6',
          right ? 'text-start' : 'text-end',
          right ? 'order-1' : 'order-2',
        )}
      >
        <div>
          <span className="text-lightgrey font-semibold">{project.type}</span>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
        </div>

        <p>{project.description}</p>

        <div
          className={clsx(
            'flex gap-4 text-sm tracking-wider',
            right ? 'justify-start' : 'justify-end',
          )}
        >
          {project.skills.map((skill) => (
            <span>{skill}</span>
          ))}
        </div>

        <div className={clsx('flex gap-4', right ? 'justify-start' : 'justify-end')}>
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
