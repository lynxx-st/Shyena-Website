import React from 'react';

export default function ThreatTicker() {
  const items = [
    { type: 'red', text: 'CVE-2025-21391 — Windows RCE — Critical' },
    { type: 'amber', text: 'SCADA Protocol Fuzzing Complete — 14 Flaws Found' },
    { type: 'green', text: 'OT Network Segmentation — Verified Secure' },
    { type: 'red', text: 'PLC Firmware Backdoor — Hardware Audit Required' },
    { type: 'amber', text: 'IoT Fleet — 3 Devices Running Deprecated TLS' },
    { type: 'green', text: 'ICS Firewall Rules — Audit Passed' },
    { type: 'red', text: 'Modbus TCP — Unauthenticated Write Detected' },
    { type: 'amber', text: 'JTAG Debug Port Exposed — Board Rev 2.4' }
  ];

  return (
    <div className="threat-ticker">
      <div className="ticker-track">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span className={`ticker-dot ${item.type}`}></span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
