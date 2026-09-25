import { useEffect } from 'react';
import InsightsHero from '../components/Insights/InsightsHero';
import InsightsDetails from '../components/Insights/InsightsDetails';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <InsightsHero />
        <InsightsDetails />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
