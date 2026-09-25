import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/JobsHero.css';

export default function JobsHero() {
  return (
    <section className="r4m-jobs-hero">
      <div className="r4m-jobs-hero__container">
        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content Block */}
        <div className="r4m-jobs-hero__content">
          <div className="r4m-jobs-hero__breadcrumb">
            <Link to="/" className="r4m-jobs-hero__link">Home</Link>
            <span className="r4m-jobs-hero__dot">•</span>
            <span className="r4m-jobs-hero__current">Jobs</span>
          </div>

          <h1 className="r4m-jobs-hero__title">Career Opportunities</h1>
          <div className="r4m-jobs-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="r4m-jobs-hero__accent-grey"></div>
      <div className="r4m-jobs-hero__accent-orange"></div>
    </section>
  );
}
