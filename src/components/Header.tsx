'use client';

import useWindowEvent from '@/hooks/useWindowEvent';
import clsx from 'clsx';
import { useState } from 'react';

export type HeaderProps = {
  className?: string;
};

const getShouldPopUp = () => {
  const THRESHOLD = 50;
  return window.scrollY >= THRESHOLD;
};

const Header = ({ className }: HeaderProps) => {
  const [popUp, setPopUp] = useState<boolean>(getShouldPopUp());

  useWindowEvent('scroll', () => {
    setPopUp(getShouldPopUp());
  });

  return (
    <header
      className={clsx(
        'flex justify-between sticky top-0 inset-x-0 px-12 py-6 z-10',
        'transition-all duration-300 ease-in-out',
        popUp && 'backdrop-blur-md bg-white/80 shadow',
        className,
      )}
    >
      <h1 className="text-xl font-bold">jjang</h1>

      <nav className="flex justify-end font-semibold text-lg gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#home">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
