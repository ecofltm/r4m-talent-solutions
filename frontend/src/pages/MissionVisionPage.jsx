import { useEffect } from 'react';
import MissionVisionHero from '../components/MissionVision/MissionVisionHero';
import MissionVisionDetails from '../components/MissionVision/MissionVisionDetails';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

export default function MissionVisionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <MissionVisionHero />
        <MissionVisionDetails />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
