import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cta" className="section-padding relative overflow-hidden flex flex-col items-center justify-center w-full" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-riot-black via-riot-dark to-riot-black" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-riot-red/10 rounded-full blur-[200px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.85] mb-6">
            JOIN THE{' '}
            <span className="text-gradient glow-text">MOVEMENT</span>
          </h2>

          <p className="text-riot-light-gray text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed text-center">
            Ready to feel alive? Join the fastest-growing fitness community in the UAE.
            Be part of something bigger than yourself.
          </p>

          <form 
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 bg-riot-black/50 border border-riot-white/10 rounded-full text-riot-white placeholder:text-riot-light-gray focus:outline-none focus:border-riot-red transition-colors flex-1 text-sm glass"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-riot-red text-white font-semibold rounded-full hover:bg-riot-orange transition-all duration-300 hover:scale-105 glow-red text-sm tracking-wider uppercase shrink-0"
            >
              Join Us
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
