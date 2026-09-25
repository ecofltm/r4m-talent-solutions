import { useEffect } from 'react';
import TargetMarketHero from '../components/TargetMarket/TargetMarketHero';
import TargetMarketDetails from '../components/TargetMarket/TargetMarketDetails';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

export default function TargetMarketPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <TargetMarketHero />
        <TargetMarketDetails />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
