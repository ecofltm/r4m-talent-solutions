import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/CoreValuesHero.css';

export default function CoreValuesHero() {
  return (
    <section className="r4m-cv-hero">
      <div className="r4m-cv-hero__container">
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <div className="r4m-cv-hero__content">
          <div className="r4m-cv-hero__breadcrumb">
            <Link to="/" className="r4m-cv-hero__link">Home</Link>
            <span className="r4m-cv-hero__dot">•</span>
            <span className="r4m-cv-hero__current">Core Values</span>
          </div>

          <h1 className="r4m-cv-hero__title">Our Core Values</h1>
          <div className="r4m-cv-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="r4m-cv-hero__accent-grey"></div>
      <div className="r4m-cv-hero__accent-orange"></div>
    </section>
  );
}
