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
