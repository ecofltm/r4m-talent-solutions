import "../../styles/components/AboutCTA.css";

export default function AboutCTA() {
  return (
    <section className="r4m-about-cta">
      <div className="r4m-about-cta__wrapper">
        
        {/* Top-Right Overlapping Image */}
        <div className="r4m-about-cta__img-card r4m-about-cta__img-card--top-right">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Team collaborating at R4M Talent Solutions" 
          />
        </div>

        {/* Central Dark Box */}
        <div className="r4m-about-cta__box">
          <h2 className="r4m-about-cta__title">
            Let's Build Something<br />Great Together.
          </h2>

          <p className="r4m-about-cta__subtitle">
            Whether you're looking for top talent to elevate your organization or seeking your next career milestone, R4M is dedicated to creating meaningful connections and lasting growth.
          </p>

          <div className="r4m-about-cta__actions">
            <div className="r4m-about-cta__action-item">
              <a href="#contact" className="r4m-about-cta__btn r4m-about-cta__btn--primary">
                WORK WITH US
              </a>
              <span className="r4m-about-cta__note">( for your business )</span>
            </div>

            <div className="r4m-about-cta__action-item">
              <a href="#jobs" className="r4m-about-cta__btn r4m-about-cta__btn--outline">
                EXPLORE OPPORTUNITIES
              </a>
              <span className="r4m-about-cta__note">( for job seekers )</span>
            </div>
          </div>
        </div>

        {/* Bottom-Left Overlapping Image */}
        <div className="r4m-about-cta__img-card r4m-about-cta__img-card--bottom-left">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
            alt="Professional talent solutions partner" 
          />
        </div>

      </div>
    </section>
  );
}
