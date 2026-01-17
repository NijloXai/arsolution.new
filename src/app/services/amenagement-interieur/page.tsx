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
  useCases,
  uniqueInterlocutorPoints,
  methodSteps,
  amenagementProjects,
  amenagementFAQ,
  publicMarketsArguments,
  siteOccupeData,
} from '@/data/service-amenagement-interieur';

// JSON-LD Structured Data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: amenagementFAQ.map((faq) => ({
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
  name: 'Amenagement interieur',
  description:
    'Amenagement interieur a Strasbourg et en Alsace. Redistribution de pieces, cloisons, platrerie et peinture. Un seul interlocuteur pour tous vos travaux de second oeuvre.',
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
    'Amenagement interieur',
    'Redistribution de pieces',
    'Cloisonnement',
    'Platrerie',
    'Peinture',
    'Amenagement de combles',
    'Amenagement bureaux',
  ],
  knowsAbout: [
    'Redistribution de pieces',
    'Cloisons seches BA13',
    'Amenagement de combles',
    'Creation de dressings',
    'Faux-plafonds techniques',
    'Intervention en site occupe',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'RGE - Reconnu Garant de l\'Environnement',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services amenagement interieur',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Redistribution de pieces et cloisons',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Amenagement de combles',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Amenagement bureaux et locaux professionnels',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Creation sur-mesure (dressings, niches)',
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
      name: 'Amenagement interieur',
    },
  ],
};

// Lazy load des composants below-the-fold
const ServiceUseCases = dynamic(
  () => import('@/components/sections/ServiceUseCases/ServiceUseCases'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const UniqueInterlocutor = dynamic(
  () => import('@/components/sections/UniqueInterlocutor/UniqueInterlocutor'),
  { loading: () => <SectionSkeleton height="600px" /> }
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
  title: 'Amenagement interieur a Strasbourg | AR+Solution',
  description:
    'Amenagement interieur a Strasbourg et en Alsace. Redistribution de pieces, cloisons, platrerie, isolation et peinture. Un seul interlocuteur pour tous vos travaux. Entreprise RGE.',
  keywords: [
    'amenagement interieur Strasbourg',
    'amenagement interieur Alsace',
    'redistribution de pieces',
    'cloisonnement',
    'platrerie et peinture',
    'renovation bureaux site occupe',
    'amenagement de combles Strasbourg',
    'entreprise RGE amenagement',
    'appel d\'offre second oeuvre Alsace',
    'renovation interieure Strasbourg',
    'cloisons seches',
    'creation de pieces',
    'amenagement locaux professionnels',
    'agencement sur-mesure',
    'dressing integre',
    'faux-plafonds bureaux',
    'devis amenagement gratuit',
    'interlocuteur unique travaux',
    'platrerie isolation peinture',
  ],
  alternates: {
    canonical: 'https://arsolution.fr/services/amenagement-interieur',
  },
  openGraph: {
    title: 'Amenagement interieur | AR+Solution Strasbourg',
    description:
      'Amenagement interieur en Alsace. Redistribution de pieces, cloisons, platrerie et peinture. Un seul interlocuteur. Devis 48h.',
    type: 'website',
    url: 'https://arsolution.fr/services/amenagement-interieur',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amenagement interieur a Strasbourg | AR+Solution',
    description:
      'Amenagement interieur a Strasbourg et en Alsace. Un seul interlocuteur pour platrerie, isolation et peinture. Entreprise RGE.',
  },
};

export default function AmenagementInterieurPage() {
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
          eyebrow="Amenagement interieur en Alsace"
          title="Repensez vos volumes du sol au plafond"
          titleAccent="a Strasbourg et en Alsace"
          subtitle="Redistribution de pieces, cloisons et finitions. Un seul interlocuteur pour platrerie, isolation et peinture."
          ctaPrimary={{
            label: 'Demander un devis amenagement',
            href: '/contact?service=amenagement-interieur',
          }}
          ctaSecondary={{
            label: 'Espace Marches Publics',
            href: '/contact?service=marches-publics',
          }}
        />

        {/* Types de projets */}
        <ServiceScope
          items={scopeItems}
          note="Nous coordonnons l'ensemble de ces lots pour un chantier unique et un interlocuteur dedie."
        />

        {/* Cas d'usage par cible - Priorite marches publics */}
        <ServiceUseCases useCases={useCases} />

        {/* Argument cle : Interlocuteur unique */}
        <UniqueInterlocutor
          points={uniqueInterlocutorPoints}
          ctaHref="/certifications"
          ctaLabel="Voir nos certifications RGE & Assurances"
        />

        {/* Methode de travail */}
        <ServiceMethod
          steps={methodSteps}
          siteOccupeHighlight={siteOccupeData}
        />

        {/* Galerie de realisations */}
        <ServiceGallery
          projects={amenagementProjects}
          ctaLabel="Voir toutes nos realisations amenagement"
          ctaHref="/realisations?service=amenagement-interieur"
        />

        {/* Bloc Marches Publics */}
        <ServicePublicMarkets
          arguments={publicMarketsArguments}
          ctaLabel="Contacter le service Pros / Marches Publics"
          ctaHref="/contact?service=marches-publics"
        />

        {/* FAQ specifique amenagement */}
        <ServiceFAQ
          items={amenagementFAQ}
          eyebrow="FAQ Amenagement"
          title="Questions frequentes sur l'amenagement interieur"
          subtitle="Les reponses a vos interrogations sur nos travaux d'amenagement et de redistribution de pieces."
        />

        {/* CTA final */}
        <div data-section="cta-final">
          <CTAFinal />
        </div>
      </main>
      <Footer />

      {/* Sticky Bar Mobile */}
      <StickyBarMobile
        label="Devis amenagement gratuit"
        href="/contact?service=amenagement-interieur"
        phoneNumber="03 88 00 00 00"
      />
    </>
  );
}
