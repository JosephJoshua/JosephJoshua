'use client';

import useWindowEvent from '@/hooks/useWindowEvent';
import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';
import { Fragment, useEffect, useState } from 'react';
import PopupLink from '../shared/PopupLink';
import { Dialog, Transition } from '@headlessui/react';
import { Menu, X } from 'react-feather';

import logo from '@/public/icons/logo.svg';
import Image from 'next/image';

export type HeaderProps = BaseProps;

const getShouldPopUp = () => {
  if (window == null) return false;

  const THRESHOLD = 50;
  return window.scrollY >= THRESHOLD;
};

type LinksProps = {
  onLinkClick?: () => void;
};

const Links = ({ onLinkClick }: LinksProps) => {
  return (
    <>
      <PopupLink href="#home" onClick={onLinkClick}>
        home
      </PopupLink>

      <PopupLink href="#about" onClick={onLinkClick}>
        about
      </PopupLink>

      <PopupLink href="#projects" onClick={onLinkClick}>
        projects
      </PopupLink>

      <PopupLink href="#contact" onClick={onLinkClick}>
        contact
      </PopupLink>
    </>
  );
};

const Header = ({ className, id }: HeaderProps) => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    setPopUp(getShouldPopUp());
  };

  useEffect(handleScroll, []);
  useWindowEvent('scroll', handleScroll);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      id={id}
      className={clsx(
        'flex justify-between items-center sticky top-0 inset-x-0 px-12 py-5 z-10 gap-6',
        'transition-all duration-300 ease-in-out',
        popUp && 'backdrop-blur-md bg-white/80 shadow',
        className,
      )}
    >
      <Image
        src={logo}
        width="48"
        height="48"
        alt="Joseph Joshua Anggita"
        title="Joseph Joshua Anggita"
      />

      <nav className="hidden md:flex justify-end font-semibold text-lg gap-8">
        <Links />
      </nav>

      <button
        className="block md:hidden"
        aria-label="Menu"
        aria-pressed={isMenuOpen}
        onClick={handleOpenMenu}
      >
        <Menu size={24} />
      </button>

      <Transition appear show={isMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseMenu}>
          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col items-stretch px-10 py-12 w-full h-full transform overflow-hidden bg-white transition-all text-center">
                <div className="flex justify-between">
                  <div></div>

                  <Dialog.Title className="text-2xl font-bold">
                    <Image
                      src={logo}
                      width="48"
                      height="48"
                      alt="Joseph Joshua Anggita"
                      title="Joseph Joshua Anggita"
                    />
                  </Dialog.Title>

                  <button aria-label="Close" onClick={handleCloseMenu}>
                    <X size={28} />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col justify-center gap-4 text-xl">
                  <Links onLinkClick={handleCloseMenu} />
                </nav>

                <div></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
