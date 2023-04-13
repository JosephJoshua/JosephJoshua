import './globals.css';
import { Mulish, Poppins } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
const poppins = Poppins({ subsets: ['latin'], weight: ['700'], variable: '--font-poppins' });

export const metadata = {
  title: 'Joseph Joshua Anggita | Full-stack developer',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${poppins.variable} font-mulish`}>{children}</body>
    </html>
  );
};

export default RootLayout;
