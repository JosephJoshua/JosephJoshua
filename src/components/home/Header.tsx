'use client';

import useWindowEvent from '@/hooks/useWindowEvent';
import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import PopupLink from '../shared/PopupLink';

export type HeaderProps = BaseProps;

const getShouldPopUp = () => {
  if (window == null) return false;

  const THRESHOLD = 50;
  return window.scrollY >= THRESHOLD;
};

const Header = ({ className, id }: HeaderProps) => {
  const [popUp, setPopUp] = useState<boolean>(false);

  const handleScroll = () => {
    setPopUp(getShouldPopUp());
  };

  useEffect(handleScroll, []);
  useWindowEvent('scroll', handleScroll);

  return (
    <header
      id={id}
      className={clsx(
        'flex justify-between sticky top-0 inset-x-0 px-12 py-6 z-10',
        'transition-all duration-300 ease-in-out',
        popUp && 'backdrop-blur-md bg-white/80 shadow',
        className,
      )}
    >
      <h1 className="text-xl font-bold">jjang</h1>

      <nav className="flex justify-end font-semibold text-lg gap-8">
        <PopupLink href="#home">Home</PopupLink>
        <PopupLink href="#about">About</PopupLink>
        <PopupLink href="#projects">Projects</PopupLink>
        <PopupLink href="#contact">Contact</PopupLink>
      </nav>
    </header>
  );
};

export default Header;
