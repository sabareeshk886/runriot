import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Zap, Users, Globe2 } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Energy', desc: 'We bring the fire to every run' },
  { icon: Users, title: 'Community', desc: 'Strangers become family' },
  { icon: Globe2, title: 'Culture', desc: 'More than fitness — a lifestyle' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-riot-red/5 rounded-full blur-[200px]" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block"
            >
              Who We Are
            </motion.span>

            <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9] mb-8 lg:mb-12">
              MAKING PEOPLE FEEL <span className="text-gradient">ALIVE</span> THROUGH MOVEMENT
            </h2>

            <div className="space-y-6">
              <p className="text-riot-light-gray leading-relaxed text-base md:text-lg">
                RUN RIOT is not a running club. It's a movement born in the UAE — built through
                shared sweat, honest connection, and a refusal to be ordinary. We exist to
                make people feel something real.
              </p>

              <p className="text-riot-light-gray leading-relaxed text-base md:text-lg">
                We're building the strongest social fitness community in the region — connecting
                people through runs, culture, coffee, and shared experiences that go far beyond
                the finish line.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 lg:mt-16">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="glass rounded-xl p-6 text-center hover:border-riot-red/30 transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <div className="text-riot-red mb-4 flex justify-center">
                    <v.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-syne text-lg font-bold tracking-wider text-riot-white">{v.title}</h4>
                  <p className="text-xs text-riot-light-gray mt-1">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] glass p-2">
              <img
                src="/pictures/ANF03358.webp"
                alt="RUN RIOT sprint event"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-riot-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-6 left-6 z-20 glass-strong rounded-xl p-5"
            >
              <p className="font-syne text-3xl font-extrabold text-gradient">UAE BASED</p>
              <p className="text-riot-light-gray text-xs tracking-wider">EST. 2024</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
