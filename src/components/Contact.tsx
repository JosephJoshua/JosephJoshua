import BaseProps from '@/types/BaseProps';
import PageSection from './PageSection';
import clsx from 'clsx';
import { GitHub, Linkedin, Mail } from 'react-feather';

export type ContactProps = BaseProps;

const Contact = ({ id, className }: BaseProps) => {
  return (
    <PageSection id={id} className={clsx('text-center', className)}>
      <h2 className="text-3xl font-bold font-poppins">Don't be shy - hit me up!</h2>
      <p className="mt-2 text-xl">
        I'm interested in freelance opportunities, especially ambitious or large projects.
      </p>

      <div className="flex flex-row justify-center items-center gap-6 mt-8 select-none">
        <a href="https://github.com/JosephJoshua" aria-label="GitHub">
          <GitHub size={28} />
        </a>

        <a href="https://linkedin.com/in/joseph-joshua-anggita" aria-label="LinkedIn">
          <Linkedin size={28} />
        </a>

        <a href="mailto:jj.anggita@gmail.com" aria-label="jj.anggita@gmail.com">
          <Mail size={28} />
        </a>
      </div>
    </PageSection>
  );
};

export default Contact;