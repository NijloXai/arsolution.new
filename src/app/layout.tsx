import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'AR+Solution | Travaux Plâtrerie, Isolation & Finitions Strasbourg Alsace',
    template: '%s | AR+Solution',
  },
  description:
    'Entreprise certifiée RGE spécialisée en plâtrerie, isolation thermique et phonique, peinture et finitions à Strasbourg et en Alsace. Devis gratuit sous 48h.',
  keywords: [
    'plâtrerie',
    'isolation thermique',
    'isolation phonique',
    'faux plafonds',
    'peinture',
    'enduits',
    'finitions',
    'rénovation intérieure',
    'RGE',
    'Strasbourg',
    'Alsace',
    'Bas-Rhin',
    'travaux second oeuvre',
  ],
  authors: [{ name: 'AR+Solution' }],
  creator: 'AR+Solution',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'AR+Solution',
    title: 'AR+Solution | Travaux Plâtrerie, Isolation & Finitions',
    description:
      'Entreprise certifiée RGE spécialisée en plâtrerie, isolation thermique et phonique à Strasbourg et en Alsace.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
