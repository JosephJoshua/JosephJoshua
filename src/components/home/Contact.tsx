import BaseProps from '@/types/BaseProps';
import PageSection from '../shared/PageSection';
import clsx from 'clsx';
import { GitHub, Linkedin, Mail } from 'react-feather';
import PopupLink from '../shared/PopupLink';

export type ContactProps = BaseProps;

const Contact = ({ id, className }: BaseProps) => {
  return (
    <PageSection id={id} className={clsx('text-center', className)}>
      <h2 className="text-3xl font-bold font-poppins">Don't be shy - hit me up!</h2>
      <p className="mt-2 text-xl">
        I'm interested in freelance opportunities, especially ambitious or large projects.
      </p>

      <div className="flex flex-row justify-center items-center gap-6 mt-8 select-none">
        <PopupLink href="https://github.com/JosephJoshua" aria-label="GitHub">
          <GitHub size={28} />
        </PopupLink>

        <PopupLink href="https://linkedin.com/in/joseph-joshua-anggita" aria-label="LinkedIn">
          <Linkedin size={28} />
        </PopupLink>

        <PopupLink href="mailto:jj.anggita@gmail.com" aria-label="jj.anggita@gmail.com">
          <Mail size={28} />
        </PopupLink>
      </div>
    </PageSection>
  );
};

export default Contact;
