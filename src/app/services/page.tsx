import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header/Header';
import ServicesHero from '@/components/sections/ServicesHero/ServicesHero';
import ServicesGrid from '@/components/sections/ServicesGrid/ServicesGrid';
import SectionSkeleton from '@/components/ui/SectionSkeleton/SectionSkeleton';

// Lazy load des composants below-the-fold
const PublicMarketsEntry = dynamic(
  () => import('@/components/sections/PublicMarketsEntry/PublicMarketsEntry'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const ProcessSteps = dynamic(
  () => import('@/components/sections/ProcessSteps/ProcessSteps'),
  { loading: () => <SectionSkeleton height="500px" /> }
);

const ServicesGallery = dynamic(
  () => import('@/components/sections/ServicesGallery/ServicesGallery'),
  { loading: () => <SectionSkeleton height="600px" /> }
);

const WhyUs = dynamic(
  () => import('@/components/sections/WhyUs/WhyUs'),
  { loading: () => <SectionSkeleton height="400px" /> }
);

const ServicesFAQ = dynamic(
  () => import('@/components/sections/ServicesFAQ/ServicesFAQ'),
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
  title: 'Nos Services',
  description:
    'Decouvrez nos services de renovation interieure a Strasbourg et en Alsace : platrerie, isolation thermique et phonique, peinture, amenagement interieur et finitions. Entreprise certifiee RGE.',
  keywords: [
    'services renovation',
    'platrerie Strasbourg',
    'isolation RGE Alsace',
    'peinture interieure',
    'amenagement interieur',
    'faux plafonds',
    'enduits finitions',
    'travaux second oeuvre',
  ],
  openGraph: {
    title: 'Nos Services de Renovation Interieure | AR+Solution',
    description:
      'Platrerie, isolation, peinture et finitions a Strasbourg et en Alsace. Entreprise certifiee RGE.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero avec H1 SEO */}
        <ServicesHero />

        {/* Grille des services detailles */}
        <ServicesGrid />

        {/* Bloc Marches Publics (rupture visuelle) */}
        <PublicMarketsEntry />

        {/* Process - Comment ca se passe */}
        <ProcessSteps />

        {/* Mini portfolio */}
        <ServicesGallery />

        {/* Pourquoi nous choisir */}
        <WhyUs />

        {/* FAQ specifique services */}
        <ServicesFAQ />

        {/* CTA final */}
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
