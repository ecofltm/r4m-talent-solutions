import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/components/JobsHero.css';

export default function JobSingleHero({ jobTitle }) {
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
            <Link to="/jobs" className="r4m-jobs-hero__link">Jobs</Link>
            <span className="r4m-jobs-hero__dot">•</span>
            <span className="r4m-jobs-hero__current">{jobTitle || 'Sample Job Details'}</span>
          </div>

          <h1 className="r4m-jobs-hero__title">{jobTitle || 'Sample Job Details'}</h1>
          <div className="r4m-jobs-hero__underline"></div>
        </div>
      </div>

      {/* Geometric Accents */}
      <div className="r4m-jobs-hero__accent-grey"></div>
      <div className="r4m-jobs-hero__accent-orange"></div>
    </section>
  );
}
