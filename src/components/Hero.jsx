import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge reveal" id="hero-badge">
          System Secure
        </div>
        
        <h1 className="reveal" id="hero-title" style={{ transitionDelay: '100ms' }}>
          We Secure the<br />
          <span className="accent-text">Physical Layer</span>
        </h1>
        
        <p className="hero-sub reveal" id="hero-sub" style={{ transitionDelay: '200ms' }}>
          Elite offensive security for the systems that keep civilization running — industrial control systems, SCADA
          networks, IoT fleets, and hardware at the silicon level.
        </p>
        
        <div className="hero-buttons reveal" id="hero-buttons" style={{ transitionDelay: '300ms' }}>
          <a href="#contact" className="btn-primary">
            Request VAPT
          </a>
          
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>

        <div className="hero-stats reveal" id="hero-stats" style={{ transitionDelay: '400ms' }}>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Assessments Done</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12,000+</div>
            <div className="stat-label">Vulnerabilities Found</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
