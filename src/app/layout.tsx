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
  metadataBase: new URL('https://arsolution.fr'),
  title: {
    default: 'AR+Solution | Travaux Platrerie, Isolation & Finitions Strasbourg Alsace',
    template: '%s | AR+Solution',
  },
  description:
    'Entreprise certifiee RGE specialisee en platrerie, isolation thermique et phonique, peinture et finitions a Strasbourg et en Alsace. Devis gratuit sous 48h.',
  keywords: [
    'platrerie',
    'isolation thermique',
    'isolation phonique',
    'faux plafonds',
    'peinture',
    'enduits',
    'finitions',
    'renovation interieure',
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
    title: 'AR+Solution | Travaux Platrerie, Isolation & Finitions',
    description:
      'Entreprise certifiee RGE specialisee en platrerie, isolation thermique et phonique a Strasbourg et en Alsace.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AR+Solution - Travaux de renovation interieure',
      },
    ],
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

// JSON-LD Structured Data pour SEO local
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://arsolution.fr',
  name: 'AR+Solution',
  description:
    'Entreprise certifiee RGE specialisee en platrerie, isolation thermique et phonique, peinture et finitions a Strasbourg et en Alsace.',
  url: 'https://arsolution.fr',
  logo: 'https://arsolution.fr/logo.png',
  image: 'https://arsolution.fr/og-image.jpg',
  priceRange: '$$',
  telephone: '+33 3 XX XX XX XX',
  email: 'contact@arsolution.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Strasbourg',
    addressRegion: 'Alsace',
    postalCode: '67000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.5734,
    longitude: 7.7521,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Strasbourg',
    },
    {
      '@type': 'State',
      name: 'Alsace',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bas-Rhin',
    },
  ],
  serviceType: [
    'Platrerie',
    'Isolation thermique',
    'Isolation phonique',
    'Faux plafonds',
    'Peinture',
    'Finitions',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de renovation interieure',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Platrerie & Faux plafonds',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Isolation thermique & phonique',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Peinture & Lissage',
        },
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
