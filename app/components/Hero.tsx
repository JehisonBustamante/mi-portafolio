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
    <section className="glass-card col-span-12 hero-container" style={{
      position: 'relative',
      overflow: isDropdownOpen ? 'visible' : 'hidden', // Allow dropdown to pop out when open
      zIndex: isDropdownOpen ? 50 : 1, // Stay above other cards when menu is open
      padding: 'var(--hero-padding)'
    }}>
      <div className="ambient-glow"></div>

      <div className="hero-content" style={{ zIndex: 1, position: 'relative', flex: 1 }}>
        <h1 className="hero-title" style={{ marginBottom: '8px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
          Jehison Bustamante
        </h1>
        <div style={{ width: '80px', height: '4px', background: 'var(--accent-neon-purple)', marginBottom: '24px', borderRadius: '2px' }}></div>
        <h2 className="hero-subtitle" style={{ marginBottom: '20px', lineHeight: '1.2', color: 'var(--text-primary)' }}>
          Software Engineer • Fullstack Developer • Scrum Master
        </h2>
        <p className="tech-text" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '32px', lineHeight: '1.6' }}>
          Specialized in Metaheuristics, Fullstack Architecture, and<br />DevOps Infrastructure.
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

        {/* Contact Icons Integration */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px', alignItems: 'center' }}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jayjehisonbustamante@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{ width: '38px', height: '38px' }}
            aria-label="Gmail"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px' }}>
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73l-6.545 4.91-6.545-4.91v9.272H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/jehison-bustamante-molina-8b410521a" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ width: '38px', height: '38px' }} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px' }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://github.com/JehisonBustamante" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ width: '38px', height: '38px' }} aria-label="GitHub">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px' }}>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>

      <div className="profile-wrapper" style={{ zIndex: 1, position: 'relative' }}>
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
