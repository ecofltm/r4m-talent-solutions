import { useEffect } from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactDetails from '../components/Contact/ContactDetails';
import AboutCTA from '../components/About/AboutCTA';
import Footer from '../components/Footer';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <ContactHero />
        <ContactDetails />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
