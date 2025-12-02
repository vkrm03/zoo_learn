import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Use Cases", href: "#" },
      { name: "Updates", href: "#" }
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Community", href: "#" }
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "YouTube", label: "YT", href: "#" },
    { name: "Twitter", label: "TW", href: "#" },
    { name: "LinkedIn", label: "IN", href: "#" },
    { name: "GitHub", label: "GH", href: "#" },
    { name: "Instagram", label: "IG", href: "#" }
  ];

  return (
    <footer className="footer">
      <div className="footer-top-wave"></div>
      
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo-section">
            <div className="footer-logo-wrapper">
              <img 
                src="/logo.png" 
                alt="ZooLearn Logo" 
                className="footer-logo" 
                width="64"
                height="64"
                loading="lazy"
              />
              <div className="logo-glow" aria-hidden="true"></div>
            </div>
            <div className="footer-brand-text">
              <h2 className="footer-brand-name">ZooLearn</h2>
              <p className="footer-tagline">Master Zoology Visually</p>
            </div>
          </div>

          <p className="footer-description">
            An interactive learning platform designed for students to master 
            biology through engaging quizzes, 3D models, and visual taxonomy trees.
          </p>

          <div className="footer-newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                aria-label="Email for newsletter"
                required
              />
              <button 
                type="submit" 
                className="newsletter-btn" 
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="social-link"
                aria-label={`Visit our ${social.name} page`}
                title={`Follow us on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Link Sections */}
        <div className="footer-links-grid">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer-section">
              <h3 className="footer-section-title">
                {section}
                <span className="title-underline" aria-hidden="true"></span>
              </h3>
              <ul className="footer-links-list">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="footer-link"
                      aria-label={`Go to ${link.name} page`}
                    >
                      <span className="link-icon" aria-hidden="true">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} ZooLearn. Made with <span className="heart" aria-label="love">❤️</span> for biology enthusiasts worldwide.
          </p>
          
          <div className="footer-badges">
            <a href="#" className="badge made-in-india" aria-label="Made in India">
              <span aria-hidden="true">🇮🇳</span> Made in India
            </a>
            <a href="#" className="badge secure" aria-label="Secure and encrypted">
              <span aria-hidden="true">🔒</span> 100% Secure
            </a>
            <a href="#" className="badge a11y" aria-label="Accessibility compliant">
              <span aria-hidden="true">♿</span> WCAG 2.1 AA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}