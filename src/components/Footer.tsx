import clsx from 'clsx';

export type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={clsx('text-center font-poppins', className)}>
      Built with &lt;3 by Joseph Joshua Anggita
    </footer>
  );
};

export default Footer;
