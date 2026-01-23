/*
  Ce fichier definit la page "Marches Publics" destinee aux acheteurs publics et collectivites.
  Il affiche les prestations compatibles marches publics, les references du secteur public,
  la methode d'intervention, les certifications et garanties, la zone d'intervention et une FAQ.
  L'utilisateur (acheteur public) peut decouvrir les services adaptes aux marches publics
  et demander un chiffrage ou les pieces administratives.
*/
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Header from '@/components/layout/Header/Header';
import PublicMarketsHero from '@/components/sections/PublicMarketsHero/PublicMarketsHero';
import PublicMarketsPrestations from '@/components/sections/PublicMarketsPrestations/PublicMarketsPrestations';
import SectionSkeleton from '@/components/ui/SectionSkeleton/SectionSkeleton';
import StickyBarMobile from '@/components/ui/StickyBarMobile/StickyBarMobile';
import {
  heroData,
  prestations,
  references,
  methodSteps,
  engagements,
  complianceItems,
  faqItems,
  siteOccupeHighlight,
} from '@/data/marches-publics';

// JSON-LD Structured Data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AR+Solution - Marches Publics',
  description:
    'Entreprise de platrerie et finitions pour marches publics en Alsace. Certifiee RGE, garantie decennale. Intervention en site occupe.',
  image: 'https://arsolution.fr/images/og-marches-publics.jpg',
  telephone: '+33388000000',
  email: 'contact@arsolution.fr',
  address: {
    '@type': 'PostalAddress',
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
    { '@type': 'City', name: 'Strasbourg' },
    { '@type': 'AdministrativeArea', name: 'Alsace' },
    { '@type': 'AdministrativeArea', name: 'Bas-Rhin' },
    { '@type': 'AdministrativeArea', name: 'Haut-Rhin' },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certification RGE',
      credentialCategory: 'certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Qualibat',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Garantie Decennale',
      credentialCategory: 'insurance',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Responsabilite Civile Professionnelle',
      credentialCategory: 'insurance',
    },
  ],
  knowsAbout: [
    'CCTP (Cahier des Clauses Techniques Particulieres)',
    'DPGF (Decomposition du Prix Global Forfaitaire)',
    'Intervention en site occupe',
    'Travaux en ERP (Etablissements Recevant du Public)',
    'Renovation batiments publics',
  ],
  serviceType: [
    'Platrerie',
    'Faux plafonds',
    'Isolation thermique',
    'Isolation phonique',
    'Enduits',
    'Finitions',
    'Peinture',
    'Renovation interieure',
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
      name: 'Marches Publics',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Travaux Marches Publics',
  description:
    'Prestations de platrerie, isolation et finitions pour collectivites et etablissements publics en Alsace.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AR+Solution',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Alsace',
  },
  serviceType: [
    'Platrerie marches publics',
    'Isolation ERP',
    'Faux plafonds collectivites',
    'Renovation batiments publics',
  ],
};

// Lazy load des composants below-the-fold
const PublicMarketsReferences = dynamic(
  () => import('@/components/sections/PublicMarketsReferences/PublicMarketsReferences'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const PublicMarketsMethod = dynamic(
  () => import('@/components/sections/PublicMarketsMethod/PublicMarketsMethod'),
  { loading: () => <SectionSkeleton height="600px" /> }
);

const PublicMarketsCompliance = dynamic(
  () => import('@/components/sections/PublicMarketsCompliance/PublicMarketsCompliance'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const InterventionZone = dynamic(
  () => import('@/components/sections/InterventionZone/InterventionZone'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const FAQ = dynamic(
  () => import('@/components/sections/FAQ/FAQ'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const PublicMarketsCTAFinal = dynamic(
  () => import('@/components/sections/PublicMarketsCTAFinal/PublicMarketsCTAFinal'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const Footer = dynamic(
  () => import('@/components/layout/Footer/Footer'),
  { loading: () => <SectionSkeleton height="300px" /> }
);

export const metadata: Metadata = {
  title: 'Travaux Marches Publics Strasbourg | Platrerie, Isolation RGE | AR+Solution',
  description:
    'Entreprise certifiee RGE pour marches publics en Alsace. Specialiste intervention site occupe : ecoles, mairies, ERP. Dossier technique sous 24h. Garantie decennale.',
  keywords: [
    // Mots-cles prioritaires
    'marches publics platrerie Strasbourg',
    'entreprise RGE marches publics Alsace',
    'travaux site occupe ecole mairie',
    'appel offres travaux renovation Bas-Rhin',
    'CCTP platrerie isolation',
    // Mots-cles locaux
    'travaux collectivites Strasbourg',
    'renovation batiments publics Alsace',
    'faux plafonds ecoles Bas-Rhin',
    'isolation ERP Haut-Rhin',
    // Mots-cles techniques
    'qualibat RGE isolation',
    'garantie decennale travaux publics',
    'levee reserves chantier',
  ],
  alternates: {
    canonical: 'https://arsolution.fr/marches-publics',
  },
  openGraph: {
    title: 'Marches Publics - Travaux Platrerie & Isolation | AR+Solution',
    description:
      'Specialiste marches publics Alsace. Site occupe, dossier 24h.',
    type: 'website',
    url: 'https://arsolution.fr/marches-publics',
    images: [{ url: '/images/og-marches-publics.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travaux Marches Publics Strasbourg | AR+Solution',
    description:
      'Entreprise de platrerie pour marches publics en Alsace. Certifiee RGE, garantie decennale.',
  },
};

export default function MarchesPublicsPage() {
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
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />

      <Header />
      <main>
        {/* Hero - Acheteurs publics */}
        <PublicMarketsHero data={heroData} />

        {/* Prestations compatibles marches publics */}
        <PublicMarketsPrestations
          items={prestations}
          ctaLabel="Demander un chiffrage"
          ctaHref="/contact?service=marches-publics"
        />

        {/* References secteur public */}
        <PublicMarketsReferences
          items={references}
          ctaLabel="Voir toutes les references"
          ctaHref="/realisations"
        />

        {/* Methode & organisation chantier */}
        <PublicMarketsMethod
          steps={methodSteps}
          engagements={engagements}
          siteOccupeHighlight={siteOccupeHighlight}
        />

        {/* Conformite, garanties, certifications */}
        <PublicMarketsCompliance
          items={complianceItems}
          ctaLabel="Demander les pieces administratives"
          ctaHref="/contact?service=documents"
          note="Dossier technique complet sous 24h"
        />

        {/* Zone d'intervention */}
        <InterventionZone />

        {/* FAQ Marches publics */}
        <FAQ
          items={faqItems}
          eyebrow="FAQ Marches Publics"
          title="Questions frequentes"
          subtitle="Les reponses aux interrogations des acheteurs publics et collectivites."
          variant="alt-background"
          idPrefix="marches-publics-faq"
        />

        {/* CTA final - Contact marches publics */}
        <PublicMarketsCTAFinal />
      </main>
      <Footer />

      {/* Sticky Bar Mobile */}
      <StickyBarMobile
        label="Contacter pour marche public"
        href="/contact?service=marches-publics"
        phoneNumber="03 88 00 00 00"
      />
    </>
  );
}
