import { useState, useRef } from "react";
import "../../styles/components/WorkforceCTA.css";

const WORKFORCE_FEATURES = [
  {
    id: "scale",
    icon: "bi-graph-up-arrow",
    title: "Scale your workforce",
    description: "Adapt your workforce to changing operational requirements.",
  },
  {
    id: "strengthen",
    icon: "bi-people-fill",
    title: "Strengthen recruitment",
    description: "Extend your recruitment capacity when your team needs additional support.",
  },
  {
    id: "build",
    icon: "bi-rocket-takeoff-fill",
    title: "Build for growth",
    description: "Connect the capabilities you need with the opportunities available.",
  },
];

export default function WorkforceCTA() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="r4m-workforce" id="workforce">
      <div className="r4m-workforce__container">
        {/* Main Title */}
        <h2 className="r4m-workforce__title">
          Need the Right People<br />
          to Move Your <span className="orange">Business</span><br />
          <span className="orange">Forward?</span>
        </h2>

        <div className="r4m-workforce__grid">
          {/* Left Column: Video Player + Consultation CTA */}
          <div className="r4m-workforce__media">
            <div className="r4m-workforce__video-wrapper" onClick={togglePlay}>
              <video
                ref={videoRef}
                className="r4m-workforce__video"
                poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                playsInline
                loop
                onEnded={() => setIsPlaying(false)}
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Play Overlay Button */}
              {!isPlaying && (
                <button className="r4m-workforce__play-btn" aria-label="Play Video">
                  <i className="bi bi-play-fill"></i>
                </button>
              )}
            </div>

            {/* Request Consultation Button */}
            <div className="r4m-workforce__cta">
              <a href="#contact" className="r4m-workforce__btn">
                REQUEST A CONSULTATION
              </a>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="r4m-workforce__cards">
            {WORKFORCE_FEATURES.map((item) => (
              <div className="r4m-workforce-card" key={item.id}>
                <div className="r4m-workforce-card__icon-wrapper">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="r4m-workforce-card__text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
