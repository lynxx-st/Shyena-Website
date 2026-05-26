import React from 'react';

export default function WhyShyena() {
  const points = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
        </svg>
      ),
      title: 'Deep OT Expertise',
      desc: 'Our researchers hold GICSP, GRID, and OSCP certifications with 10+ years in industrial environments.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <path d="M6 14l3-6 4 7 5-5M2 17l4 4M22 17l-4 4" />
        </svg>
      ),
      title: 'Hardware Lab',
      desc: 'In-house lab with oscilloscopes, logic analyzers, and custom glitch rigs for silicon-level attacks.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-4z" />
        </svg>
      ),
      title: 'Global Reach',
      desc: 'Operations across 30+ countries. On-site assessments for air-gapped and classified environments.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Zero Downtime Policy',
      desc: 'Proprietary methodology ensures production systems stay operational during testing engagements.'
    }
  ];

  return (
    <section id="why">
      <div className="section-header reveal" style={{ opacity: 1, transform: 'none' }}>
        <span className="section-label">// The Difference</span>
        <h2 className="section-title">Why Shyena?</h2>
        <p className="section-desc">We're not generalists—we are specialists in the physical and industrial cyber domain.</p>
      </div>

      <div className="why-grid">
        {points.map((pt, idx) => (
          <div key={idx} className="why-card">
            <div className="why-icon">
              {pt.icon}
            </div>
            <h4>{pt.title}</h4>
            <p>{pt.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
