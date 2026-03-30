import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// UI Version Flag
const UI_VERSION = 'v2' as 'v1' | 'v2';


// Versioned Imports
import * as V1 from './v1';
import * as V2 from './v2';

const UI = UI_VERSION === "v1" ? V1 : V2;
const { 
  Sidebar, 
  Hero, 
  Philosophy, 
  SupplyChain, 
  AIInnovation, 
  Partners, 
  Directions,
  Footer,
} = UI;


export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-bg">
      {/* Sidebar - Desktop */}
      <Sidebar />

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-dark tracking-tighter">DAESAN</h1>
        <button onClick={toggleMobileMenu} className="text-dark">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white pt-24 px-8 overflow-y-auto">
          <ul className="space-y-8 pb-10">
            {[
              { id: 'hero', label: '홈' },
              { id: 'philosophy', label: '경영 철학' },
              { id: 'supply-chain', label: '공급 시스템' },
              { id: 'ai-innovation', label: 'AI 혁신' },
              { id: 'partners', label: '파트너십' },
              { id: 'directions', label: '오시는 길' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-3xl font-bold text-dark tracking-tight"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:pl-[220px]">
        <Hero />
        <Philosophy />
        <SupplyChain />
        <AIInnovation />
        <Partners />
        <Directions />
        <Footer />
      </main>
    </div>
  );
}
