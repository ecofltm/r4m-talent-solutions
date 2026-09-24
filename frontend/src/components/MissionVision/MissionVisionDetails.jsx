import "../../styles/components/MissionVisionDetails.css";

const PILLARS = [
  {
    icon: "bi-shield-check",
    title: "Integrity & Trust",
    desc: "We operate with unwavering transparency, ethics, and accountability in every partnership."
  },
  {
    icon: "bi-award",
    title: "Uncompromising Excellence",
    desc: "We hold our recruitment, manpower, and workforce solutions to the highest quality standards."
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Meaningful Impact",
    desc: "We measure our success by the sustainable growth of businesses and the lives we transform."
  },
  {
    icon: "bi-lightbulb",
    title: "Agile Innovation",
    desc: "We adapt to evolving industry demands with modern, tech-enabled talent solutions."
  }
];

export default function MissionVisionDetails() {
  return (
    <div className="r4m-mv-details">
      
      {/* 1. Mission Section */}
      <section className="r4m-mv-section r4m-mv-mission">
        <div className="r4m-mv-container">
          <div className="r4m-mv-mission__grid">
            
            <div className="r4m-mv-mission__content">
              <span className="r4m-mv__tag">OUR MISSION</span>
              <h2 className="r4m-mv-mission__title">
                Empowering Businesses.<br />Transforming Lives.
              </h2>
              <p className="r4m-mv-mission__desc">
                Our mission is to deliver comprehensive, end-to-end workforce solutions that bridge high-potential talent with industry leaders. We empower organizations to scale efficiently while providing individuals with decent, meaningful, and life-changing career opportunities.
              </p>
              <p className="r4m-mv-mission__desc">
                By understanding the unique challenges of every enterprise we serve, we build tailored strategies in manpower outsourcing, RPO, and specialized staffing that drive long-term productivity and mutual success.
              </p>
            </div>

            <div className="r4m-mv-mission__media">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="R4M Mission Team" 
                className="r4m-mv-mission__img"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Vision Section (Dark Feature Banner) */}
      <section className="r4m-mv-section r4m-mv-vision">
        <div className="r4m-mv-container text-center">
          <span className="r4m-mv__tag orange">OUR VISION</span>
          <h2 className="r4m-mv-vision__title">
            Building <span className="orange-italic">Better Businesses.</span><br />
            Creating <span className="white-italic">Better Futures.</span>
          </h2>
          <p className="r4m-mv-vision__subtitle">
            Our vision is to become a multi-billion-peso talent solutions leader, transforming the lives of more than 20,000 Filipinos through decent and meaningful work.
          </p>
        </div>
      </section>

      {/* 3. Core Pillars Grid */}
      <section className="r4m-mv-section r4m-mv-pillars">
        <div className="r4m-mv-container">
          <div className="text-center mb-5">
            <span className="r4m-mv__tag">OUR CORE PILLARS</span>
            <h2 className="r4m-mv-pillars__title">The Principles That Drive Us</h2>
          </div>

          <div className="r4m-mv-pillars__grid">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="r4m-mv-pillar-card">
                <div className="r4m-mv-pillar-card__icon">
                  <i className={`bi ${pillar.icon}`}></i>
                </div>
                <h3 className="r4m-mv-pillar-card__title">{pillar.title}</h3>
                <p className="r4m-mv-pillar-card__desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
