import type { Metadata } from 'next';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import ServicesHero from '@/components/sections/ServicesHero/ServicesHero';
import ServicesGrid from '@/components/sections/ServicesGrid/ServicesGrid';
import PublicMarketsEntry from '@/components/sections/PublicMarketsEntry/PublicMarketsEntry';
import ProcessSteps from '@/components/sections/ProcessSteps/ProcessSteps';
import ServicesGallery from '@/components/sections/ServicesGallery/ServicesGallery';
import WhyUs from '@/components/sections/WhyUs/WhyUs';
import ServicesFAQ from '@/components/sections/ServicesFAQ/ServicesFAQ';
import CTAFinal from '@/components/sections/CTAFinal/CTAFinal';

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
