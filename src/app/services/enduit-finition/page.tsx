/*
  Ce fichier definit la page du service "Enduit & Finition".
  Il affiche un diagnostic des problemes de surface, le perimetre d'intervention
  (ratissage Q3/Q4, enduit Airless, finitions decoratives), la methode de travail,
  un slider avant/apres, une galerie, l'acces marches publics et une FAQ.
  L'utilisateur peut demander un devis enduit ou acceder a l'espace marches publics.
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
  diagnosticPoints,
  methodSteps,
  enduitProjects,
  enduitFAQ,
  publicMarketsArguments,
  beforeState,
  afterState,
} from '@/data/service-enduit-finition';

// JSON-LD Structured Data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: enduitFAQ.map((faq) => ({
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
  name: 'Enduit & Finition',
  description:
    'Platrerie fine et enduits de finition a Strasbourg et en Alsace. Ratissage Q3/Q4, enduit Airless, finitions decoratives. Intervention site occupe.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AR+Solution',
    priceRange: '$$',
    telephone: '+33388000000',
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
    'Enduit de finition',
    'Ratissage murs',
    'Lissage Q3 Q4',
    'Enduit Airless',
    'Enduit decoratif',
    'Platrerie fine',
  ],
  knowsAbout: [
    'DTU 59.1 preparation supports',
    'Niveaux de finition Q3 Q4',
    'Application mecanisee Airless',
    'Ponceuses aspirantes sans poussiere',
    'Enduit stuc venitien',
    'Enduit a la chaux',
    'Intervention en site occupe',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services enduit et finition',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ratissage et lissage Q3/Q4',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enduit Airless grandes surfaces',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enduits decoratifs (stuc, chaux)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rebouchage et reparation murs',
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
      name: 'Enduit & Finition',
    },
  ],
};

// Lazy load des composants below-the-fold
const EnduitDiagnostic = dynamic(
  () => import('@/components/sections/EnduitDiagnostic/EnduitDiagnostic'),
  { loading: () => <SectionSkeleton height="600px" /> }
);

const ServiceMethod = dynamic(
  () => import('@/components/sections/ServiceMethod/ServiceMethod'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const EnduitBeforeAfter = dynamic(
  () => import('@/components/sections/EnduitBeforeAfter/EnduitBeforeAfter'),
  { loading: () => <SectionSkeleton height="550px" /> }
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
  title: 'Enduit & Finition a Strasbourg | AR+Solution',
  description:
    'Platrerie fine et enduits de finition en Alsace. Ratissage Q3/Q4, enduit Airless, finitions decoratives. Intervention site occupe. Devis gratuit 48h.',
  keywords: [
    'enduit Strasbourg',
    'ratissage Alsace',
    'platrier finition',
    'enduit Q4',
    'lissage murs',
    'enduit decoratif',
    'airless platrerie',
    'enduit stuc',
    'enduit chaux',
    'preparation murs peinture',
    'finition murale Strasbourg',
    'enduit professionnel Alsace',
    'platrerie fine Strasbourg',
    'DTU 59.1 preparation',
    'ponceuse girafe aspiration',
    'ratissage Q3 Q4',
    'rebouchage murs Alsace',
    'enduit site occupe',
  ],
  alternates: {
    canonical: 'https://arsolution.fr/services/enduit-finition',
  },
  openGraph: {
    title: 'Enduit & Finition | AR+Solution Strasbourg',
    description:
      'Platrerie fine et enduits de finition en Alsace. Ratissage Q3/Q4, Airless, finitions decoratives. Devis gratuit 48h.',
    type: 'website',
    url: 'https://arsolution.fr/services/enduit-finition',
    images: [{
      url: '/images/og/enduit-finition.jpg',
      width: 1200,
      height: 630,
      alt: 'Enduit et finition professionnelle AR+Solution',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enduit & Finition a Strasbourg | AR+Solution',
    description:
      'Platrerie fine et enduits de finition a Strasbourg et en Alsace. Ratissage Q3/Q4, enduit Airless, finitions decoratives.',
  },
};

export default function EnduitFinitionPage() {
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
          eyebrow="Platrerie Fine & Enduits"
          title="Platrerie fine et Enduits de finition"
          titleAccent="en Alsace"
          subtitle="Pour Particuliers & Marches Publics. Ratissage Q3/Q4, enduit Airless et finitions decoratives. Poncage sans poussiere, intervention site occupe."
          ctaPrimary={{
            label: 'Demander un devis enduit',
            href: '/contact?service=enduit-finition',
          }}
          ctaSecondary={{
            label: 'Espace Marches Publics',
            href: '/contact?service=marches-publics',
          }}
        />

        {/* Section diagnostic : pourquoi l'enduit change tout */}
        <EnduitDiagnostic points={diagnosticPoints} />

        {/* Ce que nous faisons - 4 cartes */}
        <ServiceScope
          items={scopeItems}
          note="Du ratissage standard (Q3) a la finition miroir (Q4) : le niveau de preparation conditionne directement le rendu final de votre peinture."
        />

        {/* Methode Chantier Serein */}
        <ServiceMethod
          steps={methodSteps}
          highlight="Ponceuses girafes a aspiration integree : 98% de la poussiere captee a la source. Fini les chantiers envahissants."
        />

        {/* Slider avant/apres */}
        <EnduitBeforeAfter
          beforeState={beforeState}
          afterState={afterState}
          projectLabel="Appartement Haussmannien - Strasbourg Neustadt"
        />

        {/* Galerie de realisations */}
        <ServiceGallery
          projects={enduitProjects}
          ctaLabel="Voir toutes nos realisations enduit"
          ctaHref="/realisations?service=enduit"
        />

        {/* Bloc Marches Publics */}
        <ServicePublicMarkets
          arguments={publicMarketsArguments}
          ctaLabel="Contacter le service Pros / Marches Publics"
          ctaHref="/contact?service=marches-publics"
        />

        {/* FAQ specifique enduit */}
        <FAQ
          items={enduitFAQ}
          eyebrow="FAQ Enduit & Finitions"
          title="Questions frequentes sur nos prestations enduit"
          subtitle="Les reponses a vos interrogations sur nos travaux d'enduit et finitions murales."
          variant="alt-background"
          idPrefix="enduit-faq"
        />

        {/* CTA final */}
        <CTAFinal />
      </main>
      <Footer />

      {/* Sticky Bar Mobile */}
      <StickyBarMobile
        label="Devis enduit gratuit"
        href="/contact?service=enduit-finition"
        phoneNumber="03 88 00 00 00"
      />
    </>
  );
}
