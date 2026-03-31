import React from 'react';
import {
  Hero,
  Philosophy,
  SupplyChain,
  AIInnovation,
  Partners,
  Directions,
  Footer,
} from './v2';


export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <main>
        <Hero />
        <Philosophy />
        <SupplyChain />
        <AIInnovation />
        <Partners />
        <Directions />
        <Footer />
      </main>
      <a
        href="https://daesan.ai"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 9999,
          background: '#C9A84C',
          color: '#1a3a28',
          fontSize: '13px',
          fontWeight: 700,
          padding: '12px 20px',
          borderRadius: '40px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
          transition: 'transform 0.2s, opacity 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        쇼핑몰 바로가기
      </a>
    </div>
  );
}
