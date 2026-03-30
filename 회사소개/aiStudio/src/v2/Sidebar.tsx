import React, { useEffect, useState } from 'react';
import { cn } from '@/src/lib/utils';

const MENU_ITEMS = [
  { id: 'hero', label: '홈' },
  { id: 'philosophy', label: '경영 철학' },
  { id: 'supply-chain', label: '공급 시스템' },
  { id: 'ai-innovation', label: 'AI 혁신' },
  { id: 'partners', label: '파트너십' },
  { id: 'directions', label: '오시는 길' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    MENU_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-[220px] bg-bg-card border-r border-border z-50 hidden lg:flex flex-col p-8">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-text-dark tracking-tighter">DAESAN</h1>
        <p className="text-[10px] uppercase tracking-widest text-text-gray mt-1">Architecture Studio</p>
      </div>
      
      <ul className="space-y-6 flex-1">
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-base font-semibold transition-all duration-300 hover:text-accent text-left w-full flex items-center",
                activeSection === item.id ? "text-accent translate-x-2" : "text-text-gray"
              )}
            >
              <span className="text-[11px] mr-4 opacity-50 font-mono">
                {MENU_ITEMS.indexOf(item) + 1 < 10 ? `0${MENU_ITEMS.indexOf(item) + 1}` : MENU_ITEMS.indexOf(item) + 1}
              </span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 border-t border-border">
        <p className="text-[10px] text-text-gray leading-relaxed">
          © 2026 DAESAN WOODLAND<br />
          All Rights Reserved.
        </p>
      </div>
    </nav>

  );
}
