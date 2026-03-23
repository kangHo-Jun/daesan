import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from './lib/utils';

// UI Version Flag
const UI_VERSION: "v1" | "v2" = "v2";


// Versioned Imports
import * as V1 from './v1';
import * as V2 from './v2';

const UI = UI_VERSION === "v1" ? V1 : V2;
const { 
  Sidebar, 
  Hero, 
  Philosophy, 
  SupplyChain, 
  Business, 
  AIInnovation, 
  Partners, 
  Vision, 
  Directions 
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
              { id: 'business', label: '사업 영역' },
              { id: 'ai-innovation', label: 'AI 혁신' },
              { id: 'vision', label: '미래 비전' },
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
        <Business />
        <AIInnovation />
        <Partners />
        <Vision />
        <Directions />

        {/* Footer */}
        <footer className="py-20 bg-dark text-white/30 text-center border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-white text-2xl font-bold tracking-tighter mb-8">DAESAN WOODLAND</h2>
            <div className="grid md:grid-cols-3 gap-8 text-xs uppercase tracking-widest mb-12">
              <div>
                <h4 className="text-white/60 mb-4">Address</h4>
                <p>경기도 광주시 초월읍 경충대로 1234-56</p>
              </div>
              <div>
                <h4 className="text-white/60 mb-4">Contact</h4>
                <p>T. 1588-0000 | F. 031-000-0000</p>
              </div>
              <div>
                <h4 className="text-white/60 mb-4">Legal</h4>
                <p>사업자등록번호 123-45-67890</p>
              </div>
            </div>
            <p className="text-[10px]">© 2026 DAESAN WOODLAND. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
