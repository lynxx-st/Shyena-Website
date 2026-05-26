import React, { useEffect, useState } from 'react';

export default function Navbar({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="nav-brand">
        <div className="nav-logo-icon">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2L36 12V28L20 38L4 28V12L20 2Z" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
            <path d="M20 8L30 14V26L20 32L10 26V14L20 8Z" stroke="url(#logoGrad)" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="20" cy="20" r="4" fill="url(#logoGrad)" opacity="0.8" />
            <defs>
              <linearGradient id="logoGrad" x1="4" y1="2" x2="36" y2="38">
                <stop offset="0%" stopColor="#00f0ff" />
                <stop offset="100%" stopColor="#ff00aa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="nav-logo-text">Shyena</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
        <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
        <li><a href="#approach" onClick={(e) => handleLinkClick(e, '#approach')}>Approach</a></li>
        <li><a href="#industries" onClick={(e) => handleLinkClick(e, '#industries')}>Industries</a></li>
        <li><a href="#why" onClick={(e) => handleLinkClick(e, '#why')}>Why Us</a></li>
        <li><a href="#contact" className="nav-cta" onClick={(e) => handleLinkClick(e, '#contact')}>Get Assessment</a></li>
      </ul>

      <button id="theme-toggle" className="theme-toggle" onClick={onThemeToggle} aria-label="Toggle theme">
        <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: theme === 'dark' ? 'block' : 'none' }}>
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: theme === 'light' ? 'block' : 'none' }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>

      <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
