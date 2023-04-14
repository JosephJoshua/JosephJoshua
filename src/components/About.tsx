'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export type AboutProps = {
  className?: string;
};

const About = ({ className }: AboutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState<number>(0);

  const handleScroll = () => {
    if (ref.current == null) return;

    const offset = window.scrollY - ref.current.scrollTop - 100;
    const max = window.innerHeight + ref.current.scrollHeight;

    setTranslateX((offset / max) * 100);
  };

  useEffect(() => {
    if (window == null) return;

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} className={clsx('relative overflow-hidden py-16', className)}>
      <h2
        className="absolute left-[-15%] top-0 uppercase text-[180px] font-bold text-lightgrey/10 select-none transition-transform ease-out duration-750"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        About Me
      </h2>
      <div className="ml-[40%] mt-8 text-2xl">
        <p>Full-stack developer specializing in building exceptional digital experiences.</p>
        <p>A team player who thrives in collaborating with cross-functional teams.</p>
      </div>
    </section>
  );
};

export default About;
