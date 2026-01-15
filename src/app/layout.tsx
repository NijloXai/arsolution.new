import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
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
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
