import React, { useEffect, useState } from 'react';
import './ZooFooter.css';
// import logo from './assets/logo.png'; // Uncomment if using local file

const ZooFooter = () => {
  // Simple state to trigger entry animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="zoo-footer">
      <div className="footer-bg-animation"></div> {/* Animated Background Layer */}
      
      <div className={`footer-container ${isVisible ? 'fade-in-up' : ''}`}>
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              {/* Replace with your image source */}
              <img 
                src="https://placehold.co/60x60/2ecc71/white?text=Z" 
                alt="ZooLearn Logo" 
                className="logo-img" 
              />
              <span className="logo-text shimmer-text">ZooLearn</span>
            </div>
            
            <p className="footer-desc">
              Interactive zoology learning platform designed for school students and NEET aspirants. 
              Master biology concepts through gamified quizzes, 3D models, and visual taxonomy trees.
            </p>

            <div className="social-icons">
              <a href="#yt" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#ig" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#li" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#mail" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-group">
            <div className="footer-col" style={{ transitionDelay: '0.1s' }}>
              <h4>About</h4>
              <ul>
                <li><a href="#about">About ZooLearn</a></li>
                <li><a href="#mission">Our Mission</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press Kit</a></li>
              </ul>
            </div>

            <div className="footer-col" style={{ transitionDelay: '0.2s' }}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#guides">Study Guides</a></li>
                <li><a href="#videos">Video Tutorials</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
            </div>

            <div className="footer-col" style={{ transitionDelay: '0.3s' }}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookie">Cookie Policy</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 ZooLearn. All rights reserved.</p>
          <p className="built-with">Built with <span className="heart-beat">💚</span> for biology enthusiasts.</p>
          <p className="made-in">Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default ZooFooter;