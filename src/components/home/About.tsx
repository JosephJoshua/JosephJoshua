'use client';

import useWindowEvent from '@/hooks/useWindowEvent';
import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import PageSection from '../shared/PageSection';

export type AboutProps = BaseProps;

const About = ({ id, className }: AboutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState<number>(0);

  const handleScroll = () => {
    if (ref.current == null) return;

    const offset = window.scrollY - ref.current.scrollTop - 100;
    const max = window.innerHeight + ref.current.scrollHeight;

    setTranslateX((offset / max) * 100);
  };

  useEffect(handleScroll, []);
  useWindowEvent('scroll', handleScroll);

  return (
    <section id={id} ref={ref} className={clsx('relative overflow-hidden py-16', className)}>
      <h2
        className="absolute left-[-20%] top-1/2 uppercase text-[64px] sm:text-[80px] md:text-[160px] font-bold text-lightgrey/10 select-none transition-transform ease-out duration-750"
        style={{ transform: `translate(${translateX}%, -50%)` }}
      >
        About Me
      </h2>

      <PageSection className="text-lg sm:text-xl md:text-2xl">
        <p>Full-stack developer specializing in building exceptional digital experiences.</p>
        <p>A team player who thrives in collaborating with cross-functional teams.</p>
      </PageSection>
    </section>
  );
};

export default About;
