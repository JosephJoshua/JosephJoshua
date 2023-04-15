import clsx from 'clsx';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export type PopupLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const PopupLink = ({ children, className, ...props }: PopupLinkProps) => {
  return (
    <a
      {...props}
      className={clsx(
        'transition-transform duration-300 ease-in-out hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </a>
  );
};

export default PopupLink;
