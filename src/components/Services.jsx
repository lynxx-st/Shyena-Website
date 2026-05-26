import React, { useRef } from 'react';

// --- TILT CARD WRAPPER ---
function TiltCard({ children, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    card.style.transition = 'none';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    card.style.transition = 'transform 0.5s ease';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ opacity: 1, transform: 'none' }} // Initialized directly for scroll triggers
    >
      {children}
    </div>
  );
}

// --- SERVICES COMPONENT ---
export default function Services() {
  const servicesList = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      ),
      title: 'Hardware Penetration Testing',
      desc: 'Side-channel analysis, fault injection, JTAG/SWD exploitation, firmware extraction & reverse engineering at the chip level.',
      tags: ['JTAG', 'SPI/I2C', 'Glitching', 'SCA']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10l7 4 6-4 7 4z" />
          <path d="M2 10l7-5 6 5 7-5v5" />
          <circle cx="12" cy="15" r="2" />
        </svg>
      ),
      title: 'OT / ICS Security Assessment',
      desc: 'Deep assessment of industrial control systems, PLCs, DCS, and SCADA HMIs following IEC 62443 and NIST CSF frameworks.',
      tags: ['IEC 62443', 'PLC', 'DCS', 'HMI']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <circle cx="12" cy="20" r="2" />
        </svg>
      ),
      title: 'IoT Security Testing',
      desc: 'End-to-end IoT assessment—radio protocol analysis (BLE, Zigbee, LoRa), cloud API testing, mobile app reversing, and device firmware audit.',
      tags: ['BLE', 'Zigbee', 'MQTT', 'CoAP']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M12 8v8M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        </svg>
      ),
      title: 'SCADA Network Penetration',
      desc: 'Protocol-level fuzzing of Modbus, DNP3, OPC UA, and IEC 104. Network segmentation validation and firewall rule auditing.',
      tags: ['Modbus', 'DNP3', 'OPC UA', 'IEC 104']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      ),
      title: 'Red Team Operations',
      desc: 'Full-spectrum adversary emulation targeting converged IT/OT environments. Social engineering, physical intrusion, and cyber kill-chain execution.',
      tags: ['MITRE ATT&CK', 'Physical', 'Phishing']
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
      title: 'Compliance & Risk Advisory',
      desc: 'Gap analysis and roadmap development for NERC CIP, IEC 62443, NIST 800-82, and sector-specific compliance mandates.',
      tags: ['NERC CIP', 'NIST', 'ISO 27001']
    }
  ];

  return (
    <section id="services">
      <div className="section-header reveal" style={{ opacity: 1, transform: 'none' }}>
        <span className="section-label">// What We Do</span>
        <h2 className="section-title">Offensive Security<br />for Critical Systems</h2>
        <p className="section-desc">From silicon to SCADA — we find the vulnerabilities before adversaries do.</p>
      </div>
      
      <div className="services-grid">
        {servicesList.map((svc, idx) => (
          <TiltCard key={idx} className="service-card">
            <div className="service-icon">
              {svc.icon}
            </div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
            <div className="service-tags">
              {svc.tags.map((tag, tIdx) => (
                <span key={tIdx} className="service-tag">{tag}</span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
