import "../../styles/components/MoveForwardCTA.css";

export default function MoveForwardCTA() {
  return (
    <section className="r4m-move-forward" id="contact">
      <div className="r4m-move-forward__wrapper">
        
        {/* Top-Right Overlapping Image */}
        <div className="r4m-move-forward__img-card r4m-move-forward__img-card--top-right">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Team collaborating at R4M" 
          />
        </div>

        {/* Central Dark Box */}
        <div className="r4m-move-forward__box">
          <h2 className="r4m-move-forward__title">
            Let's Move Forward<br />Together.
          </h2>

          <p className="r4m-move-forward__subtitle">
            Whether you're building your team or exploring your next opportunity, R4M is here to connect people and businesses and help create meaningful paths forward.
          </p>

          <div className="r4m-move-forward__actions">
            <div className="r4m-move-forward__action-item">
              <a href="#hire" className="r4m-move-forward__btn r4m-move-forward__btn--primary">
                HIRE TALENTS
              </a>
              <span className="r4m-move-forward__note">( for your business )</span>
            </div>

            <div className="r4m-move-forward__action-item">
              <a href="#opportunities" className="r4m-move-forward__btn r4m-move-forward__btn--outline">
                FIND OPPORTUNITIES
              </a>
              <span className="r4m-move-forward__note">( as individual )</span>
            </div>
          </div>
        </div>

        {/* Bottom-Left Overlapping Image */}
        <div className="r4m-move-forward__img-card r4m-move-forward__img-card--bottom-left">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
            alt="Professional individual talent" 
          />
        </div>

      </div>
    </section>
  );
}
