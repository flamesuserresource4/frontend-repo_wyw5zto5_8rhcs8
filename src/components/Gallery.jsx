import React from 'react';
import { motion } from 'framer-motion';

const gallery = [
  'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502784444187-359ac186c3b9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Photo Gallery</h2>
        <p className="mt-2 max-w-2xl text-white/80">Real scenes that show the power of nature.</p>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt="Natural event"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
