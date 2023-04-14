'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const [popUp, setPopUp] = useState<boolean>(false);

  const handleScroll = () => {
    const THRESHOLD = 50;
    const shouldPopUp = window.scrollY >= THRESHOLD;

    setPopUp(shouldPopUp);
  };

  useEffect(() => {
    if (window == null) return;

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'flex justify-between sticky top-0 inset-x-0 px-12 py-6 z-10',
        'transition-all duration-300 ease-in-out',
        popUp && 'backdrop-blur-md bg-white/80 shadow',
        className,
      )}
    >
      <h1 className="text-xl font-bold">Joseph</h1>

      <nav className="flex justify-end font-semibold text-lg gap-6">
        <Link href="#home">Home</Link>
        <Link href="#home">About</Link>
        <Link href="#home">Projects</Link>
        <Link href="#home">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
