import React from 'react';

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-brand">
            <div className="nav-logo-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2L36 12V28L20 38L4 28V12L20 2Z" stroke="url(#logoGrad2)" strokeWidth="1.5" fill="none" />
                <circle cx="20" cy="20" r="4" fill="url(#logoGrad2)" opacity="0.8" />
                <defs>
                  <linearGradient id="logoGrad2" x1="4" y1="2" x2="36" y2="38">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#ff00aa" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="nav-logo-text">Shyena</span>
          </div>
          <p>Defending the physical layer of critical infrastructure with elite offensive security services.</p>
        </div>

        <div>
          <h5>Services</h5>
          <ul>
            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')}>Hardware VAPT</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')}>OT/ICS Assessment</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')}>IoT Security</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')}>SCADA Pen Test</a></li>
          </ul>
        </div>

        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#approach" onClick={(e) => handleScroll(e, '#approach')}>Methodology</a></li>
            <li><a href="#industries" onClick={(e) => handleScroll(e, '#industries')}>Industries</a></li>
            <li><a href="#why" onClick={(e) => handleScroll(e, '#why')}>Why Shyena</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h5>Resources</h5>
          <ul>
            <li><a href="#">Research Blog</a></li>
            <li><a href="#">CVE Disclosures</a></li>
            <li><a href="#">Whitepapers</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shyena Inc. All rights reserved.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter/X">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="GitHub">⌘</a>
        </div>
      </div>
    </footer>
  );
}
