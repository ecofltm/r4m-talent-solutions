import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/TargetMarketHero.css';

export default function TargetMarketHero() {
  return (
    <section className="r4m-tm-hero">
      <div className="r4m-tm-hero__container">
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <div className="r4m-tm-hero__content">
          <div className="r4m-tm-hero__breadcrumb">
            <Link to="/" className="r4m-tm-hero__link">Home</Link>
            <span className="r4m-tm-hero__dot">•</span>
            <span className="r4m-tm-hero__current">Our Target Market</span>
          </div>

          <h1 className="r4m-tm-hero__title">Our Target Market</h1>
          <div className="r4m-tm-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="r4m-tm-hero__accent-grey"></div>
      <div className="r4m-tm-hero__accent-orange"></div>
    </section>
  );
}
