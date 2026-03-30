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
    </div>
  );
}
