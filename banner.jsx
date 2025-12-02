import { useState, useEffect } from "react";
import "./banner.css";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Multiple banner images for auto carousel
  const banners = [
    "/assets/banner/banner.jpg",
    "/assets/banner/banner2.jpg",
    "/assets/banner/banner3.jpg",
    "/assets/banner/banner4.jpg",
    "/assets/banner/banner5.jpg"
  ];

  const stats = [
    { value: "50+", label: "SPECIES" },
    { value: "100+", label: "QUIZZES" },
    { value: "20+", label: "BADGES" }
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Manual slide navigation (optional)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="banner-container">
      {/* Auto Background Carousel */}
      <div className="background-carousel">
        {banners.map((banner, index) => (
          <div 
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${banner})`,
            }}
          />
        ))}
        
        {/* Dark overlay for text readability */}
        <div className="carousel-overlay"></div>
      </div>

      {/* Overlay Content */}
      <div className="banner-content">
        <div className="content-wrapper">
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

            {/* Carousel Progress Indicator */}
            <div className="carousel-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{
                    width: `${((currentSlide + 1) / banners.length) * 100}%`,
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
              <div className="slide-counter">
                <span className="current-slide">0{currentSlide + 1}</span>
                <span className="total-slides">/0{banners.length}</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual Element */}
          <div className="banner-right">
            <div className="science-icons">
              <div className="icon-item microscope">
                <span>🔬</span>
              </div>
              <div className="icon-item dna">
                <span>🧬</span>
              </div>
              <div className="icon-item animal">
                <span>🐾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}