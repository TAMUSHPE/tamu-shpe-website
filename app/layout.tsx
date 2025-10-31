import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import './globals.css';
import type { Viewport } from 'next';

const geistSans = localFont({
  src: './_fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './_fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'tamuSHPE',
  description: 'Leading and Preparing all Aggies',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-fit flex flex-col`}>
        <Navbar />
        <main className="flex-grow mb-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
