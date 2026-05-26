import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete, onProgressUpdate }) {
  const [progress, setProgress] = useState(0);
  const [consoleLines, setConsoleLines] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const logs = [
    { p: 10, text: 'SYS_INIT: Booting Shyena Kernel v5.0.0' },
    { p: 30, text: 'HW_SCAN: Enumerating physical interfaces... OK' },
    { p: 60, text: 'MEM_CHK: Verifying firmware integrity... 0x8A verified' },
    { p: 85, text: 'NET_CFG: Initializing protocol analyzers... Ready' },
    { p: 95, text: 'SYS_RDY: Entering secure operational mode.' }
  ];

  useEffect(() => {
    let currentP = 0;
    let logIdx = 0;

    const interval = setInterval(() => {
      currentP += Math.random() * 5 + 1;
      if (currentP >= 100) {
        currentP = 100;
        clearInterval(interval);
      }
      
      setProgress(Math.floor(currentP));
      onProgressUpdate(currentP / 100);

      if (logIdx < logs.length && currentP >= logs[logIdx].p) {
        const textToPush = logs[logIdx].text;
        setConsoleLines(prev => [...prev, textToPush]);
        logIdx++;
      }

      if (currentP === 100) {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => onComplete(), 400); // Wait for fade out
        }, 300);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="preloader" className={isDone ? 'hide' : ''}>
      <div className="preloader-content">
        <div className="preloader-header">
          <span>SHYENA OS</span>
          <span>{Math.floor(progress)}%</span>
        </div>
        
        <div className="preloader-bar-container">
          <div className="preloader-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="preloader-logs">
          {consoleLines.map((line, idx) => (
            <div key={idx} className="preloader-log-line">
              &gt; {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
