import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';

import Header from '@/components/header/Header';
import { SessionProvider } from '@/providers/SessionProvider';
import './globals.css';
import { auth } from '@/auth';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Depthify',
  description:
    'Depthify is a modern online logbook for recording your dives. Track your underwater adventures, analyze your statistics, and share your experiences with fellow divers.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <SessionProvider session={session}>
          <Header />
          <main className={`relative pt-20`}>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
