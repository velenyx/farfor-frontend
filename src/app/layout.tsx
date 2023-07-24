import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const inter = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated by create next app',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico'
    }
  ],
  title: 'Farfor delivery'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={inter.className} lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
