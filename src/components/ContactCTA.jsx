import React from 'react';

export default function ContactCTA() {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-glow"></div>
      <div className="reveal" style={{ opacity: 1, transform: 'none' }}>
        <span className="section-label">// Let's Talk</span>
        <h2>Secure Your Critical<br /><span className="gradient-text">Infrastructure Today</span></h2>
        <p>Schedule a confidential consultation with our OT/IoT security team. No sales pitch—just a technical conversation about your threat landscape.</p>
        
        <div className="hero-buttons" style={{ opacity: 1, transform: 'none' }}>
          <a href="mailto:contact@shyena.io" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Us
          </a>
          <a href="#services" onClick={handleScrollToServices} className="btn-secondary">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
