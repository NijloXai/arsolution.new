import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Hero from '@/components/sections/Hero/Hero';
import TrustBar from '@/components/sections/TrustBar/TrustBar';
import ProfileCards from '@/components/sections/ProfileCards/ProfileCards';
import ServicesPreview from '@/components/sections/ServicesPreview/ServicesPreview';
import PortfolioPreview from '@/components/sections/PortfolioPreview/PortfolioPreview';
import WhyUs from '@/components/sections/WhyUs/WhyUs';
import ProcessSteps from '@/components/sections/ProcessSteps/ProcessSteps';
import PublicMarkets from '@/components/sections/PublicMarkets/PublicMarkets';
import Reviews from '@/components/sections/Reviews/Reviews';
import InterventionZone from '@/components/sections/InterventionZone/InterventionZone';
import FAQ from '@/components/sections/FAQ/FAQ';
import CTAFinal from '@/components/sections/CTAFinal/CTAFinal';

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
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
