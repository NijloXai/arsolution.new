/*
  Ce fichier definit la page d'accueil du site AR+Solution.
  Il affiche une presentation complete de l'entreprise avec :
  - un hero principal, une barre de confiance, les profils de l'equipe,
  - un apercu des services, un portfolio, les raisons de choisir AR+Solution,
  - les etapes du processus, les marches publics, les avis clients,
  - la zone d'intervention, une FAQ et un appel a l'action final.
  L'utilisateur peut naviguer vers les differentes pages de services et de contact.
*/
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { faqItems } from '@/data/faq';

// Sections above-the-fold (chargement immediat)
import Hero from '@/components/sections/Hero/Hero';
import TrustBar from '@/components/sections/TrustBar/TrustBar';

// Sections below-the-fold (lazy loading)
const ProfileCards = dynamic(() => import('@/components/sections/ProfileCards/ProfileCards'));
const ServicesPreview = dynamic(() => import('@/components/sections/ServicesPreview/ServicesPreview'));
const PortfolioPreview = dynamic(() => import('@/components/sections/PortfolioPreview/PortfolioPreview'));
const WhyUs = dynamic(() => import('@/components/sections/WhyUs/WhyUs'));
const ProcessSteps = dynamic(() => import('@/components/sections/ProcessSteps/ProcessSteps'));
const PublicMarkets = dynamic(() => import('@/components/sections/PublicMarkets/PublicMarkets'));
const Reviews = dynamic(() => import('@/components/sections/Reviews/Reviews'));
const InterventionZone = dynamic(() => import('@/components/sections/InterventionZone/InterventionZone'));
const FAQ = dynamic(() => import('@/components/sections/FAQ/FAQ'));
const CTAFinal = dynamic(() => import('@/components/sections/CTAFinal/CTAFinal'));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProfileCards />
        <ServicesPreview />
        <PortfolioPreview />
        <WhyUs />
        <ProcessSteps />
        <PublicMarkets />
        <Reviews />
        <InterventionZone />
        <FAQ
          items={faqItems}
          title="Questions frequentes"
          subtitle="Retrouvez les reponses aux questions les plus courantes."
        />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
