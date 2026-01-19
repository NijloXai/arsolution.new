import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header/Header';
import AboutHero from '@/components/sections/AboutHero/AboutHero';
import AboutStickyNav from '@/components/sections/AboutStickyNav/AboutStickyNav';
import SectionSkeleton from '@/components/ui/SectionSkeleton/SectionSkeleton';

// Lazy load des composants below-the-fold
const AboutHistory = dynamic(
  () => import('@/components/sections/AboutHistory/AboutHistory'),
  { loading: () => <SectionSkeleton height="600px" /> }
);

const AboutEngagements = dynamic(
  () => import('@/components/sections/AboutEngagements/AboutEngagements'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const AboutMethod = dynamic(
  () => import('@/components/sections/AboutMethod/AboutMethod'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const AboutPublicMarkets = dynamic(
  () => import('@/components/sections/AboutPublicMarkets/AboutPublicMarkets'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const AboutTeam = dynamic(
  () => import('@/components/sections/AboutTeam/AboutTeam'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const AboutProof = dynamic(
  () => import('@/components/sections/AboutProof/AboutProof'),
  { loading: () => <SectionSkeleton height="600px" /> }
);

const CTAFinal = dynamic(
  () => import('@/components/sections/CTAFinal/CTAFinal'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const Footer = dynamic(
  () => import('@/components/layout/Footer/Footer'),
  { loading: () => <SectionSkeleton height="300px" /> }
);

export const metadata: Metadata = {
  title: 'A propos | AR+Solution - Renovation interieure Strasbourg',
  description:
    'Decouvrez AR+Solution, entreprise de renovation interieure a Strasbourg depuis 2006. Equipe certifiee RGE, specialiste platrerie, isolation et finitions. Engagements qualite, methode structuree et garanties completes.',
  keywords: [
    'a propos AR+Solution',
    'entreprise renovation Strasbourg',
    'platrerie Alsace',
    'isolation RGE',
    'artisan Strasbourg',
    'renovation interieure',
    'equipe renovation',
    'garantie decennale',
  ],
  openGraph: {
    title: 'A propos | AR+Solution - Renovation interieure Strasbourg',
    description:
      'Entreprise familiale depuis 2006. Specialistes platrerie, isolation et finitions en Alsace. Certification RGE, garantie decennale.',
    type: 'website',
  },
  alternates: {
    canonical: '/a-propos',
  },
};

// JSON-LD Schema Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AR+Solution',
  description:
    'Entreprise de renovation interieure a Strasbourg. Specialiste platrerie, isolation thermique et phonique, peinture et finitions.',
  url: 'https://www.arsolution.fr',
  logo: 'https://www.arsolution.fr/images/logo.png',
  foundingDate: '2006',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Strasbourg',
    addressRegion: 'Grand Est',
    postalCode: '67000',
    addressCountry: 'FR',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 48.5734,
      longitude: 7.7521,
    },
    geoRadius: '50000',
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de renovation interieure',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Platrerie et faux plafonds',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Isolation thermique et phonique',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Peinture et finitions',
        },
      },
    ],
  },
};

// JSON-LD BreadcrumbList
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.arsolution.fr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'A propos',
      item: 'https://www.arsolution.fr/a-propos',
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main>
        {/* Hero avec H1 SEO */}
        <AboutHero />

        {/* Navigation sticky avec ancres */}
        <AboutStickyNav />

        {/* Histoire et timeline */}
        <AboutHistory />

        {/* Engagements qualite */}
        <AboutEngagements />

        {/* Methode en 6 etapes */}
        <AboutMethod />

        {/* Section Marches Publics (rupture visuelle) */}
        <AboutPublicMarkets />

        {/* Equipe */}
        <AboutTeam />

        {/* Preuves : realisations + avis */}
        <AboutProof />

        {/* CTA final */}
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
