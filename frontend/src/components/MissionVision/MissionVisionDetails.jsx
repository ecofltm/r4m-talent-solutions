import "../../styles/components/MissionVisionDetails.css";

export default function MissionVisionDetails() {
  return (
    <div className="r4m-mv-showcase">
      
      {/* =========================================================
         1. OUR MISSION SECTION (Asymmetric Photo Gallery Design)
      ========================================================= */}
      <section className="r4m-mission-gallery">
        <div className="r4m-mission-gallery__container">
          
          {/* Header Block */}
          <div className="r4m-mission-gallery__header">
            <span className="r4m-mission-gallery__tag">OUR MISSION</span>
            <div className="r4m-mission-gallery__headline-wrap">
              <i className="bx bxs-quote-alt-left r4m-mission-gallery__quote"></i>
              <h2 className="r4m-mission-gallery__title">
                <span className="black">Reforming businesses.</span><br />
                <span className="orange">Transforming lives.</span>
              </h2>
            </div>
          </div>

          {/* Asymmetric Photo Gallery Grid */}
          <div className="r4m-mission-gallery__grid">
            <div className="r4m-mission-gallery__item r4m-mission-gallery__item--1">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Colleagues looking at tablet" 
              />
            </div>
            <div className="r4m-mission-gallery__item r4m-mission-gallery__item--2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" 
                alt="Business meeting" 
              />
            </div>
            <div className="r4m-mission-gallery__item r4m-mission-gallery__item--3">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" 
                alt="Team discussion" 
              />
            </div>
            <div className="r4m-mission-gallery__item r4m-mission-gallery__item--4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="Collaborating around laptop" 
              />
            </div>
            <div className="r4m-mission-gallery__item r4m-mission-gallery__item--5">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
                alt="Corporate presentation" 
              />
            </div>
            <div className="r4m-mission-gallery__item r4m-mission-gallery__item--6">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" 
                alt="Happy office team" 
              />
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
         2. OUR VISION SECTION (Dark Grey Banner with Matching Style)
      ========================================================= */}
      <section className="r4m-vision-clean-banner" id="vision">
        <div className="r4m-vision-clean-banner__container">
          <span className="r4m-vision-clean-banner__tag">OUR VISION</span>

          <div className="r4m-vision-clean-banner__headline-wrap">
            <i className="bx bxs-quote-alt-left r4m-vision-clean-banner__quote"></i>
            <h2 className="r4m-vision-clean-banner__statement">
              To become a multi-billion-peso talent solutions leader, transforming the lives of more than <span className="orange-text">20,000 Filipinos</span> through decent and meaningful work.
            </h2>
          </div>

          <div className="r4m-vision-clean-banner__cta">
            <a href="#about" className="r4m-vision-clean-banner__btn">
              LEARN ABOUT OUR STORY
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
