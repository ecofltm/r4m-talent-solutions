import "../../styles/components/Vision.css";

export default function Vision() {
  return (
    <section className="r4m-vision" id="vision">
      <div className="r4m-vision__container">
        <h2 className="r4m-vision__title">
          Building <span className="orange-italic">Better Businesses.</span><br />
          Creating <span className="dark-italic">Better Futures.</span>
        </h2>

        <p className="r4m-vision__subtitle">
          Our vision is to become a multi-billion-peso talent solutions leader, transforming the lives of more than 20,000 Filipinos through decent and meaningful work.
        </p>

        <div className="r4m-vision__cta">
          <a href="#about" className="r4m-vision__btn">
            LEARN ABOUT OUR STORY
          </a>
        </div>
      </div>
    </section>
  );
}
