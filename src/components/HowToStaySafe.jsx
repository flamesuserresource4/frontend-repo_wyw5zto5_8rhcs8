import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Phone } from 'lucide-react';

const tips = [
  {
    icon: Shield,
    title: 'Be Ready',
    text: 'Make a small kit: water, food, warm clothes, a light, and a first-aid box. Keep it where you can grab it fast.',
  },
  {
    icon: AlertTriangle,
    title: 'Listen to Warnings',
    text: 'Follow news and weather alerts. If people say “evacuate,” leave early. Do not wait.',
  },
  {
    icon: Phone,
    title: 'Have a Plan',
    text: 'Know safe places to go. Share your plan with family and friends. Keep phone numbers written down.',
  },
];

const HowToStaySafe = () => {
  return (
    <section className="bg-neutral-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How to Stay Safe</h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Simple steps you can do before and during an event.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  {React.createElement(tip.icon, { className: 'h-6 w-6 text-white' })}
                </div>
                <h3 className="text-lg font-semibold">{tip.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStaySafe;
