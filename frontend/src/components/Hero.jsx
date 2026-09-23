import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/components/Hero.css";

const HERO_IMAGES = [
  {
    url: "https://res.cloudinary.com/uoueul6i/image/upload/v1790130813/hh-img1-eMydJ.png",
    alt: "R4M Talent Solutions team",
  },
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    alt: "Professional business team collaborating",
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    alt: "Diverse talent solution professionals",
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    alt: "Career growth and hiring consultation",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="r4m-hero">
      {/* Background Image 2 as an <img> tag positioned at the back */}
      <div className="r4m-hero__bg-wrapper">
        <img
          src="https://res.cloudinary.com/uoueul6i/image/upload/v1790130895/hh-bg-idbNW.png"
          alt="Background silhouette"
          className="r4m-hero__bg-img"
        />
        <div className="r4m-hero__bg-overlay"></div>
      </div>

      {/* Main Hero Container */}
      <div className="r4m-hero__container">
        {/* Top Floating Navigation */}
        <Navbar />

        {/* Main Hero Grid */}
        <div className="r4m-hero__main">
          {/* Left: Copy block */}
          <div className="r4m-hero__left">
            <h1 className="r4m-headline">
              <span className="orange">REFORMING</span>
              <span className="white">BUSINESSES.</span>
              <span className="orange">TRANSFORMING</span>
              <span className="white">LIVES.</span>
            </h1>
            <p className="r4m-subtext">
              The right people can reform a business. The right opportunity can transform a life.
            </p>
            <div className="r4m-cta">
              <a href="#talent" className="r4m-btn r4m-btn--solid">Finds Talent</a>
              <a href="#jobs" className="r4m-btn r4m-btn--outline">Find Jobs</a>
            </div>
          </div>

          {/* Right: Animated Image Slideshow */}
          <div className="r4m-hero__right">
            <div className="r4m-hero__slider">
              {HERO_IMAGES.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className={`r4m-hero__photo ${index === activeSlide ? "is-active" : ""}`}
                />
              ))}

              {/* Slider Indicator Dots */}
              <div className="r4m-hero__dots">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`r4m-hero__dot ${index === activeSlide ? "is-active" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Full width edge-to-edge */}
      <div className="r4m-hero__bottom">
        <div className="r4m-bottom-inner">
          <div className="r4m-bottom-left">
            <div className="r4m-feature r4m-feature--1">
              <i className="bi bi-patch-check-fill"></i>
              <p>Connecting businesses with reliable, qualified talent.</p>
            </div>
            <div className="r4m-feature r4m-feature--2">
              <i className="bi bi-patch-check-fill"></i>
              <p>Creating opportunities for career growth.</p>
            </div>
          </div>
          <div className="r4m-bottom-right">
            <div className="r4m-accent-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
}