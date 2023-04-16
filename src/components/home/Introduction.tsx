import Image from 'next/image';
import { GitHub, Linkedin, Mail } from 'react-feather';

import BaseProps from '@/types/BaseProps';
import PageSection from '../shared/PageSection';

import portrait from '@/public/images/portrait.png';

import typescript from '@/public/icons/typescript.svg';
import react from '@/public/icons/react.svg';
import vuejs from '@/public/icons/vuejs.svg';
import nextjs from '@/public/icons/nextjs.svg';
import tailwind from '@/public/icons/tailwind.svg';
import trpc from '@/public/icons/trpc.svg';
import golang from '@/public/icons/golang.svg';
import postgresql from '@/public/icons/postgresql.svg';

export type IntroductionProps = BaseProps;

const Introduction = (props: IntroductionProps) => {
  return (
    <PageSection {...props}>
      <div className="flex gap-16 items-center">
        <div>
          <h1 className="font-poppins font-bold text-5xl leading-tight">
            Full-stack Web Developer 👋
          </h1>
          <p className="mt-4 text-lg text-lightgrey">
            Hi, I'm Joseph Joshua Anggita. A passionate Full-stack Web Developer based in Jakarta,
            Indonesia. 📍
          </p>
        </div>

        <Image
          className="w-72 border-3 border-black animate-morph-infinite select-none"
          src={portrait}
          alt=""
        />
      </div>

      <div className="flex items-center mt-16 text-lg">
        <p>Tech Stack</p>
        <span className="text-lightgrey ml-4">|</span>

        <div className="flex ml-8 select-none gap-4">
          <Image src={typescript} alt="TypeScript" title="TypeScript" className="rounded w-8" />
          <Image src={react} alt="React" title="React" className="rounded w-8" />
          <Image src={vuejs} alt="Vue" title="Vue" className="rounded w-8" />
          <Image src={nextjs} alt="NextJS" title="Next.JS" className="rounded w-8" />
          <Image src={tailwind} alt="Tailwind" title="Tailwind" className="rounded w-8" />
          <Image src={trpc} alt="tRPC" title="tRPC" className="rounded w-8" />
          <Image src={golang} alt="Go" title="Go" className="rounded w-12" />
          <Image src={postgresql} alt="PostgreSQL" title="PostgreSQL" className="rounded w-8" />
        </div>
      </div>
    </PageSection>
  );
};

export default Introduction;
