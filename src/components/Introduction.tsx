import Image from 'next/image';

import github from '@/public/icons/github.svg';
import linkedin from '@/public/icons/linkedin.svg';
import envelope from '@/public/icons/envelope.svg';

import portrait from '@/public/images/portrait.png';

import typescript from '@/public/icons/typescript.svg';
import react from '@/public/icons/react.svg';
import tailwind from '@/public/icons/tailwind.svg';
import trpc from '@/public/icons/trpc.svg';
import golang from '@/public/icons/golang.svg';
import postgresql from '@/public/icons/postgresql.svg';
import clsx from 'clsx';

export type IntroductionProps = {
  className?: string;
};

const Introduction = ({ className }: IntroductionProps) => {
  return (
    <section className={clsx('mx-auto max-w-4xl', className)}>
      <div className="flex gap-16 items-center">
        <div>
          <h1 className="font-poppins font-bold text-5xl text-darkgrey leading-tight">
            Full-stack Web Developer 👋
          </h1>
          <p className="mt-4 text-lg text-lightgrey">
            Hi, I'm Joseph Joshua Anggita. A passionate Full-stack Web Developer based in Jakarta,
            Indonesia. 📍
          </p>

          <div className="flex flex-row items-center gap-5 mt-6 select-none">
            <a href="https://github.com/JosephJoshua">
              <Image src={github} alt="Github" title="GitHub" className="w-7" />
            </a>

            <a href="https://linkedin.com/in/joseph-joshua-anggita">
              <Image src={linkedin} alt="LinkedIn" title="LinkedIn" className="w-7" />
            </a>

            <a href="mailto:jj.anggita@gmail.com">
              <Image src={envelope} alt="E-Mail" title="jj.anggita@gmail.com" className="w-7" />
            </a>
          </div>
        </div>

        <Image
          className="w-72 border-3 border-black animate-morph-infinite select-none"
          src={portrait}
          alt=""
        />
      </div>

      <div className="flex items-center mt-16 text-lg">
        <p className="text-darkgrey">Tech Stack</p>
        <span className="text-lightgrey ml-4">|</span>

        <div className="flex ml-8 select-none gap-4">
          <Image src={typescript} alt="TypeScript" title="TypeScript" className="rounded w-8" />
          <Image src={react} alt="React" title="React" className="rounded w-8" />
          <Image src={tailwind} alt="Tailwind" title="Tailwind" className="rounded w-8" />
          <Image src={trpc} alt="tRPC" title="tRPC" className="rounded w-8" />
          <Image src={golang} alt="Go" title="Go" className="rounded w-12" />
          <Image src={postgresql} alt="PostgreSQL" title="PostgreSQL" className="rounded w-8" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
