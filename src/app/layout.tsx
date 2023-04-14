import './globals.css';

import { Mulish, Poppins } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Joseph Joshua Anggita | Full-stack developer',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${poppins.variable} font-mulish`}>
        <Header />
        {children}
        <Footer className="mb-8" />
      </body>
    </html>
  );
};

export default RootLayout;
