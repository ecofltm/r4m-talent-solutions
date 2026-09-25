import { useEffect } from 'react';
import CoreValuesHero from '../components/CoreValues/CoreValuesHero';
import CoreValuesDetails from '../components/CoreValues/CoreValuesDetails';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

export default function CoreValuesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <CoreValuesHero />
        <CoreValuesDetails />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
