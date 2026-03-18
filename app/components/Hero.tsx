"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="glass-card" style={{ 
      gridColumn: 'span 12', 
      padding: '80px 60px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      position: 'relative', 
      overflow: isDropdownOpen ? 'visible' : 'hidden', // Allow dropdown to pop out when open
      zIndex: isDropdownOpen ? 50 : 1 // Stay above other cards when menu is open
    }}>
      <div className="ambient-glow"></div>
      
      <div style={{ zIndex: 1, position: 'relative', flex: 1 }}>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '8px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
          Jehison Bustamante
        </h1>
        <div style={{ width: '80px', height: '4px', background: 'var(--accent-neon-purple)', marginBottom: '24px', borderRadius: '2px' }}></div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.2', color: 'var(--text-primary)' }}>
          Engineering Efficiency through Optimization
        </h2>
        <p className="tech-text" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '32px', lineHeight: '1.6' }}>
          Specialized in Metaheuristics, Fullstack Architecture, and<br/>DevOps Infrastructure.
        </p>
        
        <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="neon-btn"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Download Resume 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div style={{ 
              position: 'absolute', 
              top: 'calc(100% + 8px)', 
              left: 0, 
              background: 'var(--card-bg)', 
              backdropFilter: 'blur(var(--glass-blur))', 
              border: '1px solid var(--accent-neon-purple)', 
              borderRadius: '8px', 
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              minWidth: '180px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(191,0,255,0.2)',
              zIndex: 10
            }}>
              <a 
                href="/Resume _Jehison _Bustamante.pdf" 
                download="Resume_Jehison_Bustamante.pdf"
                className="tech-text"
                style={{
                  padding: '10px 16px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(191,0,255,0.15)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                onClick={() => setIsDropdownOpen(false)}
              >
                <strong style={{ color: 'var(--accent-neon-purple)' }}>EN</strong> English Version
              </a>
              <a 
                href="/CV_Jehison_Bustamante_Molina.pdf" 
                download="CV_Jehison_Bustamante_Molina.pdf"
                className="tech-text"
                style={{
                  padding: '10px 16px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(191,0,255,0.15)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                onClick={() => setIsDropdownOpen(false)}
              >
                <strong style={{ color: 'var(--accent-neon-purple)' }}>ES</strong> Versión Español
              </a>
            </div>
          )}
        </div>
      </div>

      <div style={{ zIndex: 1, position: 'relative', marginLeft: '40px' }}>
        <div className="profile-container">
          <Image 
            src="/Yo.png" 
            alt="Jehison Bustamante" 
            fill
            style={{ objectFit: 'cover', borderRadius: '50%' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
