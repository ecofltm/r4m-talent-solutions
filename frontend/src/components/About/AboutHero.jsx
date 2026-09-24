import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/AboutHero.css';

export default function AboutHero() {
  return (
    <section className="r4m-about-hero">
      <div className="r4m-about-hero__container">
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <div className="r4m-about-hero__content">
          <div className="r4m-about-hero__breadcrumb">
            <Link to="/" className="r4m-about-hero__link">Home</Link>
            <span className="r4m-about-hero__dot">•</span>
            <span className="r4m-about-hero__current">About Us</span>
          </div>

          <h1 className="r4m-about-hero__title">About Us</h1>
          <div className="r4m-about-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Design Accents matching reference UI */}
      <div className="r4m-about-hero__accent-grey"></div>
      <div className="r4m-about-hero__accent-orange"></div>
    </section>
  );
}
