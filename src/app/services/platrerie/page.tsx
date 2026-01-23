/*
  Ce fichier definit la page du service "Platrerie & Faux plafonds".
  Il affiche le perimetre d'intervention (cloisons, faux plafonds, doublages),
  les cas d'usage par cible (particuliers, professionnels, collectivites),
  la methode de travail, une galerie de realisations, l'acces marches publics et une FAQ.
  L'utilisateur peut demander un devis platrerie ou acceder a l'espace marches publics.
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
  useCases,
  methodSteps,
  platrerieProjects,
  platrerieFAQ,
  publicMarketsArguments,
} from '@/data/service-platrerie';

// JSON-LD Structured Data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: platrerieFAQ.map((faq) => ({
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
  name: 'Plâtrerie & Faux plafonds',
  description:
    'Expert en plâtrerie technique, cloisons et faux plafonds à Strasbourg et en Alsace. Travaux de qualité pour collectivités, professionnels et particuliers.',
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
  areaServed: [
    { '@type': 'City', name: 'Strasbourg' },
    { '@type': 'State', name: 'Alsace' },
    { '@type': 'State', name: 'Bas-Rhin' },
    { '@type': 'State', name: 'Haut-Rhin' },
  ],
  serviceType: [
    'Cloisons sèches',
    'Faux plafonds',
    'Isolation intérieure',
    'Plâtrerie technique',
  ],
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
      name: 'Plâtrerie & Faux plafonds',
    },
  ],
};

// Lazy load des composants below-the-fold
const ServiceUseCases = dynamic(
  () => import('@/components/sections/ServiceUseCases/ServiceUseCases'),
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
  title: 'Plâtrerie & Faux plafonds à Strasbourg | AR+Solution',
  description:
    'Expert en plâtrerie technique, cloisons et faux plafonds à Strasbourg et en Alsace. Travaux de qualité pour collectivités, professionnels et particuliers. Entreprise certifiée RGE.',
  keywords: [
    'plâtrerie Strasbourg',
    'faux plafonds Alsace',
    'cloisons sèches',
    'plaquiste Strasbourg',
    'BA13',
    'plâtrerie marchés publics',
    'faux plafonds acoustiques',
    'aménagement intérieur',
    'plâtrerie RGE',
    'rénovation plâtrerie',
  ],
  alternates: {
    canonical: 'https://arsolution.fr/services/platrerie',
  },
  openGraph: {
    title: 'Plâtrerie & Faux plafonds | AR+Solution Strasbourg',
    description:
      'Plâtrerie technique, cloisons et faux plafonds en Alsace. Expertise marchés publics et particuliers. Entreprise certifiée RGE.',
    type: 'website',
    url: 'https://arsolution.fr/services/platrerie',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plâtrerie & Faux plafonds à Strasbourg | AR+Solution',
    description:
      'Expert en plâtrerie technique, cloisons et faux plafonds à Strasbourg et en Alsace. Entreprise certifiée RGE.',
  },
};

export default function PlatreriePage() {
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
          eyebrow="Expertise platrerie en Alsace"
          title="Platrerie technique, cloisons & faux plafonds"
          titleAccent="a Strasbourg et en Alsace"
          subtitle="De la renovation de l'habitat aux marches publics : expertise acoustique, coupe-feu et amenagement sur-mesure."
          ctaPrimary={{
            label: 'Demander un devis (Reponse 48h)',
            href: '/contact?service=platrerie',
          }}
          ctaSecondary={{
            label: 'Acces Marches Publics',
            href: '/contact?service=marches-publics',
          }}
        />

        {/* Ce que nous realisons */}
        <ServiceScope
          items={scopeItems}
          note="Nous coordonnons l'ensemble de ces lots pour un chantier unique et un interlocuteur dedie."
        />

        {/* Cas d'usage par cible */}
        <ServiceUseCases useCases={useCases} />

        {/* Methode Serenite */}
        <ServiceMethod
          steps={methodSteps}
          highlight="Habitues aux interventions en site occupe : bureaux, logements habites, etablissements scolaires."
        />

        {/* Galerie de realisations */}
        <ServiceGallery
          projects={platrerieProjects}
          ctaLabel="Voir toutes nos realisations platrerie"
          ctaHref="/realisations?service=platrerie"
        />

        {/* Bloc Marches Publics */}
        <ServicePublicMarkets
          arguments={publicMarketsArguments}
          ctaLabel="Contacter le service Pros / Marches Publics"
          ctaHref="/contact?service=marches-publics"
        />

        {/* FAQ specifique platrerie */}
        <FAQ
          items={platrerieFAQ}
          eyebrow="FAQ Platrerie"
          title="Questions frequentes sur nos prestations"
          subtitle="Les reponses a vos interrogations sur nos travaux de platrerie et amenagement interieur."
          variant="alt-background"
          idPrefix="platrerie-faq"
        />

        {/* CTA final */}
        <CTAFinal />
      </main>
      <Footer />

      {/* Sticky Bar Mobile */}
      <StickyBarMobile
        label="Devis platrerie gratuit"
        href="/contact?service=platrerie"
        phoneNumber="03 88 00 00 00"
      />
    </>
  );
}
