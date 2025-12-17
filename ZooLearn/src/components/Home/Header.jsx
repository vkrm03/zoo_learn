import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  const navItems = [
    { name: "Home" },
    { name: "Learn" },
    { name: "Taxonomy Tree" },
    { name: "3D Models" },
    { name: "Quizzes" },
    { name: "About" },
    { name : "Logout"}
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-section" onClick={() => handleNavClick("Home")}>
          <div className="logo-wrapper">
            <img src="title.svg" alt="ZooLearn Logo" className="logo" />
            <div className="logo-pulse"></div>
          </div>
          <div className="brand-container">
            <span className="brand">ZooLearn</span>
            <span className="brand-tagline">Explore Zoology</span>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className={`menu-toggle ${menuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </button>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href="#" 
              className={activeLink === item.name ? "active" : ""}
              onClick={() => handleNavClick(item.name)}
              aria-current={activeLink === item.name ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="auth-buttons desktop">
          <button className="login-btn">
            Login
          </button>
          <button className="signup-btn">
            Start Learning
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
     {/* Mobile Auth Buttons (only show when menu is open) */}
      {menuOpen && (
        <div className="auth-buttons mobile">
          <button className="login-btn" onClick={closeMenu}>
            Login
          </button>
          <button className="signup-btn" onClick={closeMenu}>
            Start Learning
          </button>
        </div>
      )}
  
    </header>
  );
}
