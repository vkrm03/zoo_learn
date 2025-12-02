import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log("Searching for:", searchQuery);
      // You can add navigation or API call here
    }
  };

  const navItems = [
    { name: "Home" },
    { name: "Learn" },
    { name: "Taxonomy Tree" },
    { name: "3D Models" },
    { name: "Quizzes" },
    { name: "Trees" },
    { name: "About" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-section" onClick={() => handleNavClick("Home")}>
          <div className="logo-wrapper">
            <img src="/logo.png" alt="ZooLearn Logo" className="logo" />
            <div className="logo-pulse"></div>
          </div>
          <div className="brand-container">
            <span className="brand">ZooLearn</span>
            <span className="brand-tagline">Explore Zoology</span>
          </div>
        </a>

        {/* Search Bar */}
        <div className="search-container">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <button type="submit" className="search-button" aria-label="Search">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search animals, topics, quizzes..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="clear-search" 
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>

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

        {/* Removed Desktop Auth Buttons */}
      </div>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      {/* Removed Mobile Auth Buttons */}
    </header>
  );
}