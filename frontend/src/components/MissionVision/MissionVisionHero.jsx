import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/MissionVisionHero.css';

export default function MissionVisionHero() {
  return (
    <section className="r4m-mv-hero">
      <div className="r4m-mv-hero__container">
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <div className="r4m-mv-hero__content">
          <div className="r4m-mv-hero__breadcrumb">
            <Link to="/" className="r4m-mv-hero__link">Home</Link>
            <span className="r4m-mv-hero__dot">•</span>
            <span className="r4m-mv-hero__current">Mission & Vision</span>
          </div>

          <h1 className="r4m-mv-hero__title">Mission & Vision</h1>
          <div className="r4m-mv-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="r4m-mv-hero__accent-grey"></div>
      <div className="r4m-mv-hero__accent-orange"></div>
    </section>
  );
}
