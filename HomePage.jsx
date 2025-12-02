import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const organisms = [
    {
      name: "Frog",
      scientificName: "Rana tigrina",
      classification: "Class: Amphibia",
      category: "amphibian",
      image: "🐸",
      learnMoreLink: "#",
      complexity: "Intermediate",
      chapters: 8,
      hours: 12
    },
    {
      name: "Rabbit",
      scientificName: "Oryctolagus cuniculus",
      classification: "Class: Mammalia",
      category: "mammal",
      image: "🐰",
      learnMoreLink: "#",
      complexity: "Advanced",
      chapters: 10,
      hours: 15
    },
    {
      name: "Earthworm",
      scientificName: "Pheretima posthuma",
      classification: "Phylum: Annelida",
      category: "invertebrate",
      image: "🪱",
      learnMoreLink: "#",
      taxonomyLink: "#",
      complexity: "Beginner",
      chapters: 6,
      hours: 8
    },
    {
      name: "Cockroach",
      scientificName: "Periplaneta americana",
      classification: "Phylum: Arthropoda",
      category: "insect",
      image: "🪳",
      learnMoreLink: "#",
      complexity: "Intermediate",
      chapters: 7,
      hours: 10
    },
    {
      name: "Human Anatomy",
      scientificName: "Homo sapiens",
      classification: "Class: Mammalia",
      category: "mammal",
      image: "👤",
      learnMoreLink: "#",
      complexity: "Advanced",
      chapters: 15,
      hours: 25
    },
    {
      name: "Fish",
      scientificName: "Pisces",
      classification: "Superclass: Pisces",
      category: "aquatic",
      image: "🐟",
      learnMoreLink: "#",
      complexity: "Beginner",
      chapters: 5,
      hours: 7
    }
  ];

  const curriculumItems = [
    {
      title: "Basic Zoology",
      description: "Fundamentals of animal life, cell biology, and tissues",
      icon: "🧬",
      duration: "15 hours",
      level: "Beginner",
      topics: ["Animal Cell", "Tissues", "Basic Physiology"]
    },
    {
      title: "Classification",
      description: "Taxonomy, phylogeny, and animal kingdom organization",
      icon: "🏷️",
      duration: "20 hours",
      level: "Intermediate",
      topics: ["Linnaean System", "Cladistics", "Dichotomous Keys"]
    },
    {
      title: "Anatomy",
      description: "Detailed study of organ systems and physiological processes",
      icon: "🔬",
      duration: "30 hours",
      level: "Advanced",
      topics: ["Skeletal", "Circulatory", "Nervous System"]
    },
    {
      title: "Ecology",
      description: "Ecosystem dynamics, biomes, and environmental adaptations",
      icon: "🌿",
      duration: "18 hours",
      level: "Intermediate",
      topics: ["Food Webs", "Biogeochemical Cycles", "Adaptations"]
    },
    {
      title: "Evolution",
      description: "Evolutionary biology, speciation, and natural selection",
      icon: "🔄",
      duration: "22 hours",
      level: "Advanced",
      topics: ["Darwinism", "Evidence", "Human Evolution"]
    },
    {
      title: "Diversity",
      description: "Biodiversity, conservation, and species variation",
      icon: "🌈",
      duration: "16 hours",
      level: "Intermediate",
      topics: ["Endangered Species", "Conservation", "Biodiversity Hotspots"]
    }
  ];

  const features = [
    {
      title: "Exam Focused",
      description: "Content tailored for NEET, AIIMS, and competitive examinations",
      icon: "🎯",
      stats: "1000+ PYQs"
    },
    {
      title: "Interactive 3D Models",
      description: "Explore animal anatomy with detailed 3D visualizations and dissections",
      icon: "🧠",
      stats: "50+ Models"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and insights",
      icon: "📊",
      stats: "Real-time Analytics"
    },
    {
      title: "Quiz Mastery",
      description: "Practice with thousands of curated questions and mock tests",
      icon: "🏆",
      stats: "5000+ Questions"
    },
    {
      title: "Expert Guidance",
      description: "Learn from top educators with years of teaching experience",
      icon: "👨‍🏫",
      stats: "50+ Experts"
    },
    {
      title: "Mobile Friendly",
      description: "Access learning materials anytime, anywhere on any device",
      icon: "📱",
      stats: "24/7 Access"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Anjali Sharma",
      role: "NEET Mentor, 12+ years experience",
      content: "ZooLearn revolutionized how students understand complex zoology concepts. The 3D models are exceptional.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "NEET 2023 AIR 45",
      content: "The interactive modules helped me score 180/180 in Zoology. Highly recommended for serious aspirants.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "CBSE Topper 2023",
      content: "Made learning fun and effective. The taxonomy section is particularly helpful for board exams.",
      rating: 4
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Organisms' },
    { id: 'mammal', label: 'Mammals' },
    { id: 'amphibian', label: 'Amphibians' },
    { id: 'invertebrate', label: 'Invertebrates' },
    { id: 'insect', label: 'Insects' }
  ];

  const filteredOrganisms = activeFilter === 'all' 
    ? organisms 
    : organisms.filter(org => org.category === activeFilter);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Master <span className="highlight">Zoology</span> with Interactive Learning
            </h1>
            <p className="hero-subtitle">
              Comprehensive curriculum, 3D models, quizzes, and visual taxonomy designed for 
              NEET, AIIMS, and board examination success
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Practice Questions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">3D Models</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Hours Content</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary">
                <span className="btn-icon">🎯</span>
                Start Free Trial
              </button>
              <button className="btn-secondary">
                <span className="btn-icon">📚</span>
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="overview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Choose ZooLearn</span>
            <h2 className="section-title">Learning Platform for Success</h2>
            <p className="section-subtitle">
              Built with precision for medical and competitive examination aspirants
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-stats">{feature.stats}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Structured Learning Path</h2>
            <p className="section-subtitle">
              Master all aspects of zoology through our scientifically designed curriculum
            </p>
          </div>

          <div className="curriculum-grid">
            {curriculumItems.map((item, index) => (
              <div key={index} className="curriculum-card">
                <div className="card-header">
                  <div className="card-icon">{item.icon}</div>
                  <div className="card-meta">
                    <span className="card-level">{item.level}</span>
                    <span className="card-duration">{item.duration}</span>
                  </div>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-topics">
                  {item.topics.map((topic, idx) => (
                    <span key={idx} className="topic-tag">{topic}</span>
                  ))}
                </div>
                <a href="#" className="card-link">
                  Start Module <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="curriculum-cta">
            <div className="cta-content">
              <h3>Need a Personalized Study Plan?</h3>
              <p>Our AI-powered system creates custom learning paths based on your strengths and weaknesses</p>
            </div>
            <button className="btn-primary">Get Custom Plan</button>
          </div>
        </div>
      </section>

      {/* Organism Mastery */}
      <section className="organisms-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Master Key Organisms</h2>
            <p className="section-subtitle">
              Deep dive into anatomy, physiology, and systems of important model organisms
            </p>
          </div>

          <div className="filter-tabs">
            {filterCategories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="organisms-grid">
            {filteredOrganisms.map((organism, index) => (
              <div key={index} className="organism-card">
                <div className="organism-header">
                  <div className="organism-icon">{organism.image}</div>
                  <div className="organism-info">
                    <h3>{organism.name}</h3>
                    <span className="scientific-name">{organism.scientificName}</span>
                    <span className={`complexity-badge ${organism.complexity.toLowerCase()}`}>
                      {organism.complexity}
                    </span>
                  </div>
                </div>
                
                <div className="organism-details">
                  <div className="classification">{organism.classification}</div>
                  <div className="organism-stats">
                    <div className="stat">
                      <span className="stat-value">{organism.chapters}</span>
                      <span className="stat-label">Chapters</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{organism.hours}h</span>
                      <span className="stat-label">Study Time</span>
                    </div>
                  </div>
                  
                  <div className="action-buttons">
                    <button className="btn-outline">
                      <span className="btn-icon">📖</span>
                      Study Guide
                    </button>
                    <button className="btn-primary">
                      <span className="btn-icon">▶️</span>
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Success Stories</span>
            <h2 className="section-title">Trusted by Students & Educators</h2>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Start Your Zoology Journey Today</h2>
            <p>Join 10,000+ successful students who mastered zoology with our platform</p>
            <div className="cta-features">
              <span>✓ 7-day free trial</span>
              <span>✓ Access to all modules</span>
              <span>✓ Expert doubt support</span>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary btn-large">
                <span className="btn-icon">🚀</span>
                Get Started Free
              </button>
              <button className="btn-outline btn-large">
                <span className="btn-icon">📞</span>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;