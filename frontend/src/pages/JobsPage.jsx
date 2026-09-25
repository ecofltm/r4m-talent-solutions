import { useEffect } from 'react';
import JobsHero from '../components/Jobs/JobsHero';
import JobsDetails from '../components/Jobs/JobsDetails';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

export default function JobsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <JobsHero />
        <JobsDetails />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
