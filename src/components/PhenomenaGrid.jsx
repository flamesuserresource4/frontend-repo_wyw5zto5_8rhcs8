import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    key: 'volcano',
    title: 'Volcanic Eruption',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
    alt: 'Bright orange lava exploding from a volcano at night',
    desc:
      'Hot melted rock, called magma, bursts out of a mountain. It becomes lava. Ash and gas fill the air. It can burn and cover towns.',
  },
  {
    key: 'tornado',
    title: 'Tornado',
    img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dark funnel-shaped tornado reaching from cloud to ground',
    desc:
      'A fast, spinning column of air touches the ground. It looks like a funnel. It can lift cars, break houses, and move quickly.',
  },
  {
    key: 'flood',
    title: 'Flood',
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop',
    alt: 'City street deeply flooded with water covering cars and roads',
    desc:
      'Water rises and spreads over land. Streets and homes fill with water. It is hard to move and very unsafe.',
  },
  {
    key: 'avalanche',
    title: 'Avalanche',
    img: 'https://images.unsplash.com/photo-1516570161787-2fd917215a03?q=80&w=1600&auto=format&fit=crop',
    alt: 'Large slide of snow rushing down a mountain slope',
    desc:
      'A huge mass of snow slides down a mountain. It moves fast and can bury everything in its path.',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.5 } }),
};

function AnimatedOverlay(props) {
  const { type } = props;
  // Lightweight overlays to hint the motion of each phenomenon
  if (type === 'volcano') {
    return (
      <div className="pointer-events-none absolute inset-0">
        {/* Rising lava sparks */}
        {[...Array(10)].map((_, i) => {
          const delay = i * 0.2;
          const x = 50 + (i - 5) * 6;
          const size = 3 + (i % 3);
          return (
            <motion.span
              key={i}
              className="absolute bottom-2 left-1/2 h-1 w-1 rounded-full"
              style={{ background: 'linear-gradient(180deg,#ff7a18,#ff3d00)', x: x - 50, width: size, height: size }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -90 - i * 6, opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration: 2.6, ease: 'easeOut', delay }}
            />
          );
        })}
        {/* Soft glow near crater */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-10 w-24 rounded-full blur-2xl" style={{ background: 'radial-gradient(closest-side, rgba(255,120,32,0.5), transparent)' }} />
      </div>
    );
  }

  if (type === 'tornado') {
    return (
      <div className="pointer-events-none absolute inset-0">
        {/* Rotating funnel lines */}
        <motion.div
          className="absolute left-1/2 top-6 h-28 w-28 -translate-x-1/2"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/30"
              style={{ width: 100 - i * 12, height: 14 + i * 10, top: 4 + i * 4, opacity: 0.35 }}
            />
          ))}
        </motion.div>
        {/* Swirling dust */}
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bottom-4 h-1 w-1 rounded-full bg-white/60"
            style={{ left: `${15 + i * 10}%` }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -40 - (i % 3) * 10, opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2 + (i % 3), delay: i * 0.15 }}
          />
        ))}
      </div>
    );
  }

  if (type === 'flood') {
    return (
      <div className="pointer-events-none absolute inset-0">
        {/* Moving waves */}
        <motion.svg
          className="absolute bottom-0 left-0 h-16 w-[140%]"
          viewBox="0 0 100 20"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-40%'] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          preserveAspectRatio="none"
        >
          <path d="M0 10 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10" fill="none" stroke="rgba(86,180,255,0.8)" strokeWidth="2.5" />
          <path d="M0 14 Q 10 4 20 14 T 40 14 T 60 14 T 80 14 T 100 14" fill="none" stroke="rgba(56,150,255,0.6)" strokeWidth="3" />
          <path d="M0 18 Q 10 8 20 18 T 40 18 T 60 18 T 80 18 T 100 18" fill="none" stroke="rgba(26,120,255,0.5)" strokeWidth="3.5" />
        </motion.svg>
        {/* Floating debris dots */}
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bottom-8 h-1.5 w-1.5 rounded-full bg-white/70"
            style={{ left: `${10 + i * 14}%` }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 + (i % 3), delay: i * 0.2 }}
          />
        ))}
      </div>
    );
  }

  if (type === 'avalanche') {
    return (
      <div className="pointer-events-none absolute inset-0">
        {/* Sliding snow chunks */}
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-3 rounded-sm bg-white/90 shadow"
            style={{ left: `${5 + i * 12}%`, top: `${-10 + i * 2}%` }}
            initial={{ x: -10, y: -10, opacity: 0 }}
            animate={{ x: 40 + (i % 3) * 10, y: 50 + i * 4, opacity: [0, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 + (i % 3), delay: i * 0.15, ease: 'easeIn' }}
          />
        ))}
        {/* Misty puff */}
        <motion.div
          className="absolute bottom-2 left-2 h-8 w-16 rounded-full bg-white/40 blur-md"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
        />
      </div>
    );
  }

  return null;
}

const PhenomenaGrid = () => {
  return (
    <section id="phenomena" className="relative bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Dangerous Natural Events</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Read simple, short notes. Look at the images. Watch the gentle animations.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={it.key}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className="group overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={it.img}
                  alt={it.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <AnimatedOverlay type={it.key} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <figcaption className="pointer-events-none absolute bottom-2 left-3 rounded-full bg-black/40 px-2 py-1 text-[11px] uppercase tracking-wide text-white/80">
                  {it.title}
                </figcaption>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{it.desc}</p>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhenomenaGrid;
