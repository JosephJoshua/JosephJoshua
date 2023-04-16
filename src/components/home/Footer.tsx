import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';

export type FooterProps = BaseProps;

const Footer = ({ className, id }: FooterProps) => {
  return (
    <footer id={id} className={clsx('text-center font-poppins', className)}>
      Built with &lt;3 by Joseph Joshua Anggita
    </footer>
  );
};

export default Footer;
