import './globals.css';

import type { Metadata } from 'next';
import { Cinzel, Manrope } from 'next/font/google';
import Script from 'next/script';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';

const display = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700']
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Daniel Stoican Raj | Amateur Boxer Turning Pro Soon',
  description:
    'Sponsor-focused media kit and promotional site for Daniel Stoican Raj, amateur champion turning pro soon.',
  openGraph: {
    title: 'Daniel Stoican Raj | Amateur Boxer Turning Pro Soon',
    description:
      'Sponsor-focused media kit and promotional site for Daniel Stoican Raj, amateur champion turning pro soon.',
    url: 'https://example.com',
    siteName: 'Daniel Stoican Raj',
    images: [
      {
        url: '/images/IMG_1012.jpg',
        width: 1200,
        height: 630,
        alt: 'Daniel Stoican Raj - Sponsor Media Kit'
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Stoican Raj | Amateur Boxer Turning Pro Soon',
    description:
      'Sponsor-focused media kit and promotional site for Daniel Stoican Raj, amateur champion turning pro soon.',
    images: ['/images/IMG_1012.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Athlete',
  name: 'Daniel Stoican Raj',
  jobTitle: 'Amateur Boxer',
  description: 'Amateur champion turning pro soon.',
  nationality: 'British',
  sport: 'Boxing',
  url: 'https://example.com',
  sameAs: ['TBA']
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-background text-ink">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain-overlay" aria-hidden="true" />
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
