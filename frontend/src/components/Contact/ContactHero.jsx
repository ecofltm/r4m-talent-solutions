import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/ContactHero.css';

export default function ContactHero() {
  return (
    <section className="r4m-contact-hero">
      <div className="r4m-contact-hero__container">
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <div className="r4m-contact-hero__content">
          <div className="r4m-contact-hero__breadcrumb">
            <Link to="/" className="r4m-contact-hero__link">Home</Link>
            <span className="r4m-contact-hero__dot">•</span>
            <span className="r4m-contact-hero__current">Contact Us</span>
          </div>

          <h1 className="r4m-contact-hero__title">Contact Us</h1>
          <div className="r4m-contact-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="r4m-contact-hero__accent-grey"></div>
      <div className="r4m-contact-hero__accent-orange"></div>
    </section>
  );
}
