import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Header from '@/components/layout/Header/Header';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import IsolationComparison from '@/components/sections/IsolationComparison/IsolationComparison';
import ServiceScope from '@/components/sections/ServiceScope/ServiceScope';
import SectionSkeleton from '@/components/ui/SectionSkeleton/SectionSkeleton';
import StickyBarMobile from '@/components/ui/StickyBarMobile/StickyBarMobile';
import {
  comparisonCards,
  scopeItems,
  benefitItems,
  materialItems,
  methodSteps,
  rgeAides,
  rgeDisclaimer,
  isolationProjects,
  isolationFAQ,
  publicMarketsArguments,
} from '@/data/service-isolation';

// Donnees pour le badge Site Occupe
const siteOccupeData = {
  title: 'Specialistes intervention en site occupe',
  items: [
    'Bureaux et logements habites',
    'Ecoles et etablissements publics',
    'Horaires adaptes, nuisances minimisees',
    'Protection et nettoyage quotidien',
  ],
};

// JSON-LD Structured Data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: isolationFAQ.map((faq) => ({
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
  name: 'Isolation thermique & phonique',
  description:
    'Isolation interieure thermique et acoustique a Strasbourg et en Alsace. Artisan certifie RGE, eligible MaPrimeRenov. Combles, murs, cloisons, plafonds.',
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
    'Isolation thermique',
    'Isolation phonique',
    'Isolation des combles',
    'Isolation des murs',
    'Isolation acoustique',
    'Isolation bureaux site occupe',
  ],
  knowsAbout: [
    'Isolation thermique par l\'interieur (ITI)',
    'Isolation phonique et acoustique',
    'Renovation energetique',
    'Certification RGE',
    'MaPrimeRenov et aides financieres',
    'Intervention en site occupe',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'RGE - Reconnu Garant de l\'Environnement',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services isolation RGE',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Isolation thermique des murs par l\'interieur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Isolation acoustique des cloisons',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Isolation des combles',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Isolation bureaux et ERP en site occupe',
        },
      },
    ],
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
      name: 'Isolation thermique & phonique',
    },
  ],
};

// Lazy load des composants below-the-fold
const IsolationBeforeAfter = dynamic(
  () => import('@/components/sections/IsolationBeforeAfter/IsolationBeforeAfter'),
  { loading: () => <SectionSkeleton height="550px" /> }
);

const IsolationBenefits = dynamic(
  () => import('@/components/sections/IsolationBenefits/IsolationBenefits'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const IsolationMaterials = dynamic(
  () => import('@/components/sections/IsolationMaterials/IsolationMaterials'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const ServiceMethod = dynamic(
  () => import('@/components/sections/ServiceMethod/ServiceMethod'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const IsolationRGE = dynamic(
  () => import('@/components/sections/IsolationRGE/IsolationRGE'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const ServiceGallery = dynamic(
  () => import('@/components/sections/ServiceGallery/ServiceGallery'),
  { loading: () => <SectionSkeleton height="600px" /> }
);

const ServicePublicMarkets = dynamic(
  () => import('@/components/sections/ServicePublicMarkets/ServicePublicMarkets'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const ServiceFAQ = dynamic(
  () => import('@/components/sections/ServiceFAQ/ServiceFAQ'),
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
  title: 'Isolation thermique & phonique a Strasbourg | Certifie RGE | AR+Solution',
  description:
    'Isolation interieure thermique et acoustique en Alsace. Artisan certifie RGE, eligible MaPrimeRenov\'. Murs, combles, cloisons, plafonds. Devis gratuit sous 48h.',
  keywords: [
    'isolation thermique Strasbourg',
    'isolation phonique Alsace',
    'artisan RGE isolation',
    'MaPrimeRenov isolation',
    'isolation interieure',
    'isolation acoustique bureaux',
    'isolation combles Strasbourg',
    'isolation murs Alsace',
    'renovation energetique RGE',
    'isolation Bas-Rhin',
    'isolation laine de roche',
    'isolation phonique appartement',
    'isolation thermique maison',
    'CEE isolation',
    'eco-PTZ isolation',
    'isolation bureaux site occupe',
    'isolation ecole vacances scolaires',
    'isolation parties communes immeuble',
    'devis isolation gratuit Strasbourg',
    'isolation RGE eligible aides',
  ],
  alternates: {
    canonical: 'https://arsolution.fr/services/isolation',
  },
  openGraph: {
    title: 'Isolation thermique & phonique | AR+Solution Strasbourg',
    description:
      'Isolation thermique et acoustique en Alsace. Artisan RGE, eligible aux aides. Murs, combles, cloisons. Devis 48h.',
    type: 'website',
    url: 'https://arsolution.fr/services/isolation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isolation thermique & phonique a Strasbourg | AR+Solution',
    description:
      'Isolation interieure thermique et acoustique en Alsace. Artisan certifie RGE, eligible MaPrimeRenov\'.',
  },
};

export default function IsolationPage() {
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
          eyebrow="Certifie RGE - Eligible aux aides"
          title="Isolation thermique & phonique"
          titleAccent="a Strasbourg et en Alsace"
          subtitle="Ameliorez votre confort et reduisez vos factures. Isolation interieure des murs, combles et cloisons par un artisan certifie RGE."
          ctaPrimary={{
            label: 'Demander un devis isolation (48h)',
            href: '/contact?service=isolation',
          }}
          ctaSecondary={{
            label: 'Acces Marches Publics',
            href: '/contact?service=marches-publics',
          }}
        />

        {/* Comparaison Thermique vs Phonique */}
        <IsolationComparison cards={comparisonCards} />

        {/* Zones d'intervention */}
        <ServiceScope
          items={scopeItems}
          note="Nous assurons l'ensemble des travaux de finition : doublage platre, bandes et preparation avant peinture."
        />

        {/* Slider Avant/Apres */}
        <IsolationBeforeAfter />

        {/* Benefices concrets */}
        <IsolationBenefits items={benefitItems} />

        {/* Materiaux & expertise */}
        <IsolationMaterials items={materialItems} />

        {/* Methode de travail */}
        <ServiceMethod
          steps={methodSteps}
          siteOccupeHighlight={siteOccupeData}
        />

        {/* Section RGE & Aides */}
        <IsolationRGE aides={rgeAides} disclaimer={rgeDisclaimer} />

        {/* Galerie de realisations */}
        <ServiceGallery
          projects={isolationProjects}
          ctaLabel="Voir toutes nos realisations isolation"
          ctaHref="/realisations?service=isolation"
        />

        {/* Bloc Marches Publics */}
        <ServicePublicMarkets
          arguments={publicMarketsArguments}
          ctaLabel="Contacter le service Pros / Marches Publics"
          ctaHref="/contact?service=marches-publics"
        />

        {/* FAQ specifique isolation */}
        <ServiceFAQ
          items={isolationFAQ}
          eyebrow="FAQ Isolation"
          title="Questions frequentes sur l'isolation"
          subtitle="Les reponses a vos interrogations sur nos travaux d'isolation thermique et phonique."
        />

        {/* CTA final */}
        <div data-section="cta-final">
          <CTAFinal />
        </div>
      </main>
      <Footer />

      {/* Sticky Bar Mobile */}
      <StickyBarMobile
        label="Devis isolation gratuit"
        href="/contact?service=isolation"
        phoneNumber="03 88 00 00 00"
      />
    </>
  );
}
