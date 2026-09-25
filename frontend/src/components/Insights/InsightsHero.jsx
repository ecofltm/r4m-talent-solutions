import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/InsightsHero.css';

export default function InsightsHero() {
  return (
    <section className="r4m-insights-hero">
      <div className="r4m-insights-hero__container">
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <div className="r4m-insights-hero__content">
          <div className="r4m-insights-hero__breadcrumb">
            <Link to="/" className="r4m-insights-hero__link">Home</Link>
            <span className="r4m-insights-hero__dot">•</span>
            <span className="r4m-insights-hero__current">Insights</span>
          </div>

          <h1 className="r4m-insights-hero__title">Insights & Articles</h1>
          <p className="r4m-insights-hero__subtitle">
            Expert perspectives on recruitment, workforce planning, candidate growth, and industry trends.
          </p>
          <div className="r4m-insights-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="r4m-insights-hero__accent-grey"></div>
      <div className="r4m-insights-hero__accent-orange"></div>
    </section>
  );
}
