import { useEffect } from 'react';
import AboutHero from '../components/About/AboutHero';
import YourBusinessOurPeople from '../components/About/YourBusinessOurPeople';
import Vision from '../components/Home/Vision';
import MoveForwardCTA from '../components/MoveForwardCTA';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <AboutHero />
        <YourBusinessOurPeople />
        <Vision />
        <MoveForwardCTA />
      </main>
      <Footer />
    </>
  );
}
