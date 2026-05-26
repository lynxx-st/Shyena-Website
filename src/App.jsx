import React, { useState, useEffect } from 'react';
import anime from 'animejs';

// Import components
import Preloader from './components/Preloader';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import ThreatTicker from './components/ThreatTicker';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Industries from './components/Industries';
import WhyShyena from './components/WhyShyena';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('shyena-theme');
    if (saved) return saved;
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return systemPrefersLight ? 'light' : 'dark';
  });

  // 1. Sync theme to HTML data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shyena-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // 2. Preloader lift lifecycle
  const handlePreloaderComplete = () => {
    setIsLoaded(true);
    // Unmount preloader after slide-out transition
    setTimeout(() => {
      setShowPreloader(false);
    }, 1000);
  };

  // 3. Cursor Glow Performance Tracker (direct DOM manipulation to avoid React re-renders)
  useEffect(() => {
    if (!isLoaded) return;
    
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      glow.remove();
    };
  }, [isLoaded]);

  // 4. Scroll Reveal Intersection Observer setup
  useEffect(() => {
    if (!isLoaded) return;

    const revealEls = document.querySelectorAll('.reveal, .service-card, .industry-card, .why-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Calculate dynamic stagger delay based on siblings index
          let delay = 0;
          const parent = entry.target.parentElement;
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll('.service-card, .industry-card, .why-card'));
            if (siblings.length > 0) {
              const idx = siblings.indexOf(entry.target);
              if (idx !== -1) {
                delay = idx * 120;
              }
            }
          }

          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
          } else {
            entry.target.classList.add('active');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <>
      {showPreloader && (
        <Preloader 
          onComplete={handlePreloaderComplete} 
          onProgressUpdate={setProgress} 
        />
      )}
      
      {/* 3D Asset Background */}
      <ThreeCanvas theme={theme} isLoaded={isLoaded} progress={progress} />

      {/* Main Layout */}
      <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Navbar theme={theme} onThemeToggle={toggleTheme} />
        <main>
          <Hero />
          <ThreatTicker />
          <Services />
          <Approach />
          <Industries />
          <WhyShyena />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
