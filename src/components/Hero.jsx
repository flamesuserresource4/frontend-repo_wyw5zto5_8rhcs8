import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fRn7FqMm62bDS630/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center text-white md:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold tracking-tight text-4xl md:text-6xl"
        >
          Powerful Forces of Nature
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-white/90"
        >
          This page shows dangerous natural events using simple English. We use clear words, many images, and smooth animations to help you learn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#phenomena"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm backdrop-blur hover:bg-white/20 transition"
          >
            Explore the events
            <span className="inline-block animate-bounce">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
