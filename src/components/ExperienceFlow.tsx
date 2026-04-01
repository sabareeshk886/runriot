import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Activity, Users, Coffee, Camera, Flame } from 'lucide-react';

const steps = [
  { label: 'RUN', icon: Activity, color: '#FF2D2D', desc: 'Hit the streets together' },
  { label: 'CONNECT', icon: Users, color: '#FF4500', desc: 'Meet your people' },
  { label: 'COFFEE', icon: Coffee, color: '#FF5E00', desc: 'Fuel the conversation' },
  { label: 'CONTENT', icon: Camera, color: '#FF7700', desc: 'Capture the moment' },
  { label: 'COMMUNITY', icon: Flame, color: '#FF9500', desc: 'Build the culture' },
];

export default function ExperienceFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            The Flow
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.9] text-center">
            THE <span className="text-gradient">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] origin-left"
            style={{ background: 'linear-gradient(90deg, #FF2D2D, #FF5E00, #FF9500)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full glass-strong flex items-center justify-center mb-4 relative z-10"
                  style={{ boxShadow: `0 0 30px ${step.color}33` }}
                >
                  <span className="text-white">
                    <step.icon size={32} strokeWidth={1.5} />
                  </span>
                </motion.div>

                <h4 className="font-syne text-2xl font-extrabold tracking-[0.1em] mb-1 uppercase" style={{ color: step.color }}>
                  {step.label}
                </h4>
                <p className="text-riot-light-gray text-xs tracking-wider">{step.desc}</p>

                {/* Arrow (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden text-riot-red text-2xl mt-4">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
