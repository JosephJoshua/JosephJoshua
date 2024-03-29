import './globals.css';

import { Mulish, Poppins } from 'next/font/google';

import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Joseph Joshua Anggita | Full-stack developer',
  description: 'Full-stack developer specializing in building exceptional digital experiences.',
  keywords: [
    'Joseph Joshua Anggita',
    'software engineer',
    'software engineer in Jakarta',
    'software engineer in Indonesia',
    'software developer in Jakarta',
    'software developer in Indonesia',
    'freelancer in Jakarta',
    'freelancer in Indonesia',
  ],
  openGraph: {
    title: 'Joseph Joshua Anggita | Full-stack developer',
    url: process.env.VERCEL_URL,
    type: 'website',
    locale: 'en_US',
    description: 'Full-stack developer specializing in building exceptional digital experiences.',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${poppins.variable} font-mulish pb-8`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
