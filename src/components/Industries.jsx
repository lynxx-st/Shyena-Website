import React from 'react';

export default function Industries() {
  const sectors = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: 'Energy & Utilities',
      desc: 'Power grids, substations, smart meters'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Healthcare',
      desc: 'Medical devices, hospital OT networks'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="13" rx="2" />
          <path d="M4 11h16M12 3v8M8 19l-2 3M16 19l2 3M12 16h.01" />
        </svg>
      ),
      title: 'Transportation',
      desc: 'Rail systems, aviation, maritime'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: 'Manufacturing',
      desc: 'Smart factories, robotics, CNC'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      title: 'Water & Wastewater',
      desc: 'SCADA-driven treatment plants'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-2.239 10-5V7c0-2.761-4.477-5-10-5S2 4.239 2 7v10c0 2.761 4.477 5 10 5z" />
          <path d="M2 7c0 2.761 4.477 5 10 5s10-2.239 10-5" />
          <path d="M2 12c0 2.761 4.477 5 10 5s10-2.239 10-5" />
        </svg>
      ),
      title: 'Oil & Gas',
      desc: 'Pipelines, refineries, offshore rigs'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7h20L12 2zM4 21v-8M8 21v-8M12 21v-8M16 21v-8M20 21v-8M2 21h20" />
        </svg>
      ),
      title: 'Government & Defense',
      desc: 'Classified systems, mil-spec hardware'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22L12 2l8 20M4 22h16M12 2v20M8 12h8" />
          <path d="M5 16h14" />
        </svg>
      ),
      title: 'Telecom',
      desc: '5G infrastructure, core networks'
    }
  ];

  return (
    <section id="industries">
      <div className="section-header reveal" style={{ opacity: 1, transform: 'none' }}>
        <span className="section-label">// Sectors We Protect</span>
        <h2 className="section-title">Critical Infrastructure<br />Across Industries</h2>
        <p className="section-desc">Our team has secured systems across the world's most sensitive environments.</p>
      </div>

      <div className="industries-grid">
        {sectors.map((sec, idx) => (
          <div key={idx} className="industry-card">
            <span className="industry-icon">
              {sec.icon}
            </span>
            <h4>{sec.title}</h4>
            <p>{sec.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
