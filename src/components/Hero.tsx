import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
          poster=""
        >
          <source src="https://cdn.coverr.co/videos/coverr-runners-in-the-city-1080p/1080p.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-riot-black/80 via-riot-black/50 to-riot-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-riot-black/60 via-transparent to-riot-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-syne text-[clamp(4.5rem,15vw,13rem)] font-extrabold leading-[0.8] tracking-[-0.02em] mb-4 text-white">
            RUN RIOT
          </h1>
          <motion.div
            className="font-syne text-[clamp(1.2rem,3.5vw,3rem)] font-bold tracking-[0.2em] ml-[0.2em] text-riot-red mb-10"
          >
            CHASE MILES
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-base md:text-lg text-riot-light-gray max-w-xl mx-auto mb-20 tracking-wide text-center"
        >
          A movement built through motion, connection, and culture
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-10 py-4 border border-riot-white/20 text-riot-white font-semibold rounded-full hover:bg-white/10 hover:border-riot-white/50 transition-all duration-300 hover:scale-105 text-sm tracking-widest uppercase"
          >
            Explore Community
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-riot-light-gray text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-riot-light-gray/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-riot-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
