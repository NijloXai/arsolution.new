/*
  Ce fichier definit la page du service "Peinture & Lissage".
  Il affiche le perimetre d'intervention (peinture decorative, grands volumes, finitions),
  les details de qualite (peintures Ecolabel A+), la methode de travail,
  une galerie de realisations, l'acces marches publics et une FAQ.
  L'utilisateur peut demander un devis peinture ou acceder a l'espace marches publics.
*/
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Header from '@/components/layout/Header/Header';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import ServiceScope from '@/components/sections/ServiceScope/ServiceScope';
import SectionSkeleton from '@/components/ui/SectionSkeleton/SectionSkeleton';
import StickyBarMobile from '@/components/ui/StickyBarMobile/StickyBarMobile';
import {
  scopeItems,
  qualityDetails,
  methodSteps,
  peintureProjects,
  peintureFAQ,
  publicMarketsArguments,
} from '@/data/service-peinture-lissage';

// JSON-LD Structured Data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: peintureFAQ.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Peinture & Lissage',
  description:
    'Peinture interieure et haute decoration a Strasbourg et en Alsace. Finitions soignees, peintures Ecolabel, intervention en site occupe.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AR+Solution',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Strasbourg',
      addressRegion: 'Alsace',
      addressCountry: 'FR',
    },
  },
  additionalType: 'https://schema.org/HomeAndConstructionBusiness',
  areaServed: [
    { '@type': 'City', name: 'Strasbourg' },
    { '@type': 'State', name: 'Alsace' },
    { '@type': 'State', name: 'Bas-Rhin' },
    { '@type': 'State', name: 'Haut-Rhin' },
  ],
  serviceType: [
    'Peinture interieure',
    'Peinture decorative',
    'Peinture bureaux',
    'Peinture Airless',
    'Finitions peinture',
  ],
  knowsAbout: [
    'Peintures Ecolabel A+',
    'Application Airless',
    'Finitions Mat, Velours, Satin',
    'Peintures lessivables',
    'Peintures depolluantes',
    'Intervention en site occupe',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services peinture et lissage',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Peinture decorative (murs, plafonds, boiseries)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Peinture grands volumes Airless',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Finitions techniques (lessivable, anti-humidite)',
        },
      },
    ],
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'RGE - Reconnu Garant de l\'Environnement',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://arsolution.fr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://arsolution.fr/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Peinture & Lissage',
    },
  ],
};

// Lazy load des composants below-the-fold
const PaintQualityDetails = dynamic(
  () => import('@/components/sections/PaintQualityDetails/PaintQualityDetails'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const ServiceMethod = dynamic(
  () => import('@/components/sections/ServiceMethod/ServiceMethod'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const ServiceGallery = dynamic(
  () => import('@/components/sections/ServiceGallery/ServiceGallery'),
  { loading: () => <SectionSkeleton height="600px" /> }
);

const ServicePublicMarkets = dynamic(
  () => import('@/components/sections/ServicePublicMarkets/ServicePublicMarkets'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const FAQ = dynamic(
  () => import('@/components/sections/FAQ/FAQ'),
  { loading: () => <SectionSkeleton height="400px" /> }
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
  title: 'Peinture & Lissage a Strasbourg | AR+Solution',
  description:
    'Peinture interieure et haute decoration a Strasbourg et en Alsace. Finitions soignees, peintures Ecolabel, intervention en site occupe. Devis gratuit 48h.',
  keywords: [
    'peinture Strasbourg',
    'peintre Alsace',
    'peinture interieure',
    'peinture decorative',
    'peinture bureaux',
    'peinture ecolabel',
    'finitions peinture',
    'peinture airless',
    'peintre professionnel Strasbourg',
    'mise en peinture Alsace',
    'peinture site occupe',
    'peinture A+',
  ],
  alternates: {
    canonical: 'https://arsolution.fr/services/peinture-lissage',
  },
  openGraph: {
    title: 'Peinture & Lissage | AR+Solution Strasbourg',
    description:
      'Peinture interieure et haute decoration en Alsace. Finitions soignees, peintures Ecolabel A+. Devis gratuit 48h.',
    type: 'website',
    url: 'https://arsolution.fr/services/peinture-lissage',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peinture & Lissage a Strasbourg | AR+Solution',
    description:
      'Peinture interieure et haute decoration a Strasbourg et en Alsace. Finitions soignees, peintures Ecolabel A+.',
  },
};

export default function PeintureLissagePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />

      <Header />
      <main>
        {/* Hero avec H1 SEO */}
        <ServiceDetailHero
          eyebrow="Peintures Ecolabel A+"
          title="Peinture interieure & haute decoration"
          titleAccent="a Strasbourg et en Alsace"
          subtitle="De la remise en blanc soignee aux mises en teintes complexes. Bureaux, locaux commerciaux et habitations. Intervention possible en site occupe."
          ctaPrimary={{
            label: 'Demander un devis peinture',
            href: '/contact?service=peinture-lissage',
          }}
          ctaSecondary={{
            label: 'Espace Marches Publics',
            href: '/contact?service=marches-publics',
          }}
        />

        {/* Ce que nous faisons - 3 cartes */}
        <ServiceScope
          items={scopeItems}
          note="Plus qu'un coup de rouleau : une finition durable avec des peintures professionnelles certifiees A+."
        />

        {/* Qualite de finition - NOUVEAU COMPOSANT */}
        <PaintQualityDetails details={qualityDetails} />

        {/* Methode Chantier Serein */}
        <ServiceMethod
          steps={methodSteps}
          highlight="Nous protegens votre interieur comme le notre. Intervention possible en site occupe et meuble."
        />

        {/* Galerie de realisations */}
        <ServiceGallery
          projects={peintureProjects}
          ctaLabel="Voir toutes nos realisations peinture"
          ctaHref="/realisations?service=peinture"
        />

        {/* Bloc Marches Publics */}
        <ServicePublicMarkets
          arguments={publicMarketsArguments}
          ctaLabel="Contacter le service Pros / Marches Publics"
          ctaHref="/contact?service=marches-publics"
        />

        {/* FAQ specifique peinture */}
        <FAQ
          items={peintureFAQ}
          eyebrow="FAQ Peinture"
          title="Questions frequentes sur nos prestations peinture"
          subtitle="Les reponses a vos interrogations sur nos travaux de peinture et finitions."
          variant="alt-background"
          idPrefix="peinture-faq"
        />

        {/* CTA final */}
        <CTAFinal />
      </main>
      <Footer />

      {/* Sticky Bar Mobile */}
      <StickyBarMobile
        label="Devis peinture gratuit"
        href="/contact?service=peinture-lissage"
        phoneNumber="03 88 00 00 00"
      />
    </>
  );
}
