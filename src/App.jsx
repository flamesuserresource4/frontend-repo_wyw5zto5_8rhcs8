import React from 'react';
import Hero from './components/Hero';
import PhenomenaGrid from './components/PhenomenaGrid';
import HowToStaySafe from './components/HowToStaySafe';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <PhenomenaGrid />
      <HowToStaySafe />
      <Gallery />
      <footer className="border-t border-white/10 bg-neutral-900 py-8 text-center text-white/70">
        Made with care to explain difficult things in simple words.
      </footer>
    </div>
  );
};

export default App;
