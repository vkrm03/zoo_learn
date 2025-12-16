import { useState, useEffect } from "react";
import "./Banner.css";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use the same banner image for all slides
  const bannerImage = "/assets/banner/banner.jpeg"; // Path to your local image

  const banners = [
    bannerImage,
    bannerImage,
    bannerImage,
    bannerImage,
    bannerImage
  ];

  const stats = [
    { value: "50+", label: "SPECIES" },
    { value: "100+", label: "QUIZZES" },
    { value: "20+", label: "BADGES" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-container">
      <div className="banner-content">
        {/* Left Content */}
        <div className="banner-left">
          <div className="audience-tag">
            For School Students & NEET Aspirants
          </div>
          
          <h1 className="banner-title">
            Learn Zoology
            <span className="title-highlight"> the Fun Way!</span>
          </h1>
          
          <p className="banner-description">
            Interactive lessons, visual taxonomy trees, 3D animal models, and gamified quizzes — 
            designed specifically for school students and NEET aspirants.
          </p>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="banner-cta">
            <button className="cta-primary">
              Start Learning
            </button>
            <button className="cta-secondary">
              Explore Demo
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="banner-right">
          <div className="slider-container">
            <img 
              src={banners[currentSlide]} 
              alt="ZooLearn Banner"
              className="banner-image"
              onError={(e) => {
                // Fallback to a placeholder if image doesn't load
                e.target.src = "https://via.placeholder.com/600x400/2f7432/ffffff?text=ZooLearn+Banner";
                e.target.alt = "ZooLearn Learning Platform";
              }}
            />
            
            <button className="slider-nav prev-btn" onClick={prevSlide} aria-label="Previous slide">
              ‹
            </button>
            <button className="slider-nav next-btn" onClick={nextSlide} aria-label="Next slide">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}