import "../../styles/components/AboutCTA.css";

export default function AboutCTA() {
  return (
    <section className="r4m-about-cta" id="get-started">
      <div className="r4m-about-cta__container">
        
        {/* Header Block */}
        <div className="r4m-about-cta__header">
          <span className="r4m-about-cta__tag">TAKE THE NEXT STEP</span>
          <h2 className="r4m-about-cta__title">Ready to Move Forward?</h2>
          <p className="r4m-about-cta__subtitle">
            Whether you need to strengthen your workforce or advance your professional career, R4M Talent Solutions is here to guide your path.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="r4m-about-cta__grid">
          
          {/* Employer Card */}
          <div className="r4m-about-cta__card r4m-about-cta__card--employer">
            <div className="r4m-about-cta__icon-wrap orange-icon">
              <i className="bi bi-building-fill-gear"></i>
            </div>
            <h3 className="r4m-about-cta__card-title">For Businesses & Employers</h3>
            <p className="r4m-about-cta__card-desc">
              Scaling your team or looking for specialized talent? We deliver custom recruitment, RPO, and manpower solutions tailored to your operational needs.
            </p>

            <ul className="r4m-about-cta__list">
              <li><i className="bi bi-check2-circle orange"></i> Custom Staffing & RPO</li>
              <li><i className="bi bi-check2-circle orange"></i> Vetted & Qualified Candidates</li>
              <li><i className="bi bi-check2-circle orange"></i> End-to-End Workforce Management</li>
            </ul>

            <div className="r4m-about-cta__card-action">
              <a href="#contact" className="r4m-about-cta__btn r4m-about-cta__btn--primary">
                HIRE TALENTS
              </a>
            </div>
          </div>

          {/* Job Seeker Card */}
          <div className="r4m-about-cta__card r4m-about-cta__card--candidate">
            <div className="r4m-about-cta__icon-wrap white-icon">
              <i className="bi bi-briefcase-fill"></i>
            </div>
            <h3 className="r4m-about-cta__card-title">For Job Seekers & Talents</h3>
            <p className="r4m-about-cta__card-desc">
              Ready to unlock your full potential? Discover meaningful opportunities across frontline, skilled, technical, and executive roles with top employers.
            </p>

            <ul className="r4m-about-cta__list">
              <li><i className="bi bi-check2-circle white"></i> Decent & Meaningful Work</li>
              <li><i className="bi bi-check2-circle white"></i> Top Industry Employers</li>
              <li><i className="bi bi-check2-circle white"></i> Career Growth & Support</li>
            </ul>

            <div className="r4m-about-cta__card-action">
              <a href="#jobs" className="r4m-about-cta__btn r4m-about-cta__btn--outline">
                EXPLORE OPPORTUNITIES
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
