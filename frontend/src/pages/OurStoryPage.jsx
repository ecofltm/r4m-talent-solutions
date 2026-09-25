import { useEffect } from 'react';
import OurStoryHero from '../components/OurStory/OurStoryHero';
import OurStoryDetails from '../components/OurStory/OurStoryDetails';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

export default function OurStoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <OurStoryHero />
        <OurStoryDetails />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
