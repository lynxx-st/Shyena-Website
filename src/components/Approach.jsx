import React from 'react';

export default function Approach() {
  const steps = [
    {
      num: '01',
      title: 'Reconnaissance & Scoping',
      desc: 'Asset discovery, threat modeling, and attack surface mapping tailored to your operational environment.'
    },
    {
      num: '02',
      title: 'Active Exploitation',
      desc: 'Real-world attack techniques against hardware, firmware, protocols, and network infrastructure.'
    },
    {
      num: '03',
      title: 'Impact Analysis',
      desc: 'Business-context severity scoring. Every finding mapped to potential operational disruption and safety risk.'
    },
    {
      num: '04',
      title: 'Remediation & Hardening',
      desc: 'Actionable fix guidance, re-testing, and long-term hardening strategies for sustained resilience.'
    }
  ];

  return (
    <section id="approach">
      <div className="section-header reveal">
        <span className="section-label">Methodology</span>
        <h2 className="section-title">Systematic. Relentless.<br />Transparent.</h2>
      </div>

      <div className="about-grid">
        <div className="about-content reveal">
          <ul className="approach-list">
            {steps.map((step, idx) => (
              <li key={idx} className="approach-item">
                <span className="approach-num">{step.num}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
