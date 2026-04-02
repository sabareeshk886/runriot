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
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Our Impact
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight uppercase leading-[0.9]">
            THE <span className="text-gradient">NUMBERS</span> SPEAK
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl py-8 px-4 flex flex-col items-center justify-center min-h-[160px] text-center hover:border-riot-red/30 transition-all duration-500 group"
            >
              <div className="font-syne text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-riot-light-gray text-xs md:text-sm font-inter tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
