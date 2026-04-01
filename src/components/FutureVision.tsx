import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const points = [
  'Expansion across the UAE & beyond',
  'Building a global community of movers',
  'Large-scale community events & races',
  'Branded collaborations & activations',
];

export default function FutureVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-riot-red/3 rounded-full blur-[300px]" />

      <div className="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-riot-red font-syne font-extrabold tracking-tighter leading-[0.85] uppercase mb-6"
          >
            Future Vision
          </motion.span>

          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.8]">
            WE ARE <span className="text-gradient glow-text">JUST</span>
            <br />
            GETTING STARTED
          </h2>

          <div className="w-full h-16 md:h-24"></div>

          <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-4xl mx-auto">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="glass rounded-full px-6 py-3 hover:border-riot-red/30 transition-all duration-300 cursor-hover shrink-0 whitespace-nowrap"
              >
                <span className="text-riot-light-gray text-sm tracking-wider hover:text-riot-white transition-colors">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
