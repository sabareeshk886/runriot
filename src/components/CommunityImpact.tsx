import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 200, suffix: '+', label: 'Members in First Week' },
  { value: 20, suffix: '+', label: 'Runners in First Run' },
  { value: 15, suffix: '+', label: 'Nationalities' },
  { value: 100, suffix: '%', label: 'Community Driven' },
];

const photos = [
  '/pictures/ANF03347.webp',
  '/pictures/ANF03357.webp',
  '/pictures/ANF03413.webp',
];

export default function CommunityImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="community" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-riot-orange/5 rounded-full blur-[200px]" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Our Impact
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9]">
            THE <span className="text-gradient">NUMBERS</span> SPEAK
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:border-riot-red/30 transition-all duration-500 group"
            >
              <div className="font-syne font-extrabold tracking-tight text-gradient mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-riot-light-gray text-sm font-inter tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-square group cursor-hover"
            >
              <img
                src={photo}
                alt={`Community ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-riot-black/0 group-hover:bg-riot-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-syne font-extrabold tracking-wider">RUN RIOT</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
