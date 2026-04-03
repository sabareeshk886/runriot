import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Footprints, PartyPopper, Coffee, Flame } from 'lucide-react';

const experiences = [
  {
    title: 'Weekly Runs',
    subtitle: 'Every weekend, rain or shine',
    desc: 'Hit the streets with the crew. No pace requirements, just pure energy and good vibes.',
    icon: Footprints,
    rotate: '-rotate-90 scale-[1.8] translate-y-8',
    image: '/pictures/ANF03303.webp',
  },
  {
    title: 'Social Meetups',
    subtitle: 'Beyond the finish line',
    desc: 'Post-run hangs, brunches, and spontaneous adventures that turn strangers into lifelong friends.',
    icon: PartyPopper,
    image: '/pictures/ANF03316.webp',
  },
  {
    title: 'Coffee Culture',
    subtitle: 'Fuel the conversation',
    desc: 'Every run ends at the best local spots. Coffee is the glue that holds this community together.',
    icon: Coffee,
    rotate: '-rotate-90 scale-[1.8] translate-y-8',
    image: '/pictures/ANF03334.webp',
  },
  {
    title: 'Lifestyle Vibes',
    subtitle: 'Identity, not activity',
    desc: 'RUN RIOT is a way of life. The gear, the culture, the people — it\'s all part of who we are.',
    icon: Flame,
    image: '/pictures/ANF03336.webp',
  },
];

export default function RunExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-riot-red/5 rounded-full blur-[200px]" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            The Experience
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.9]">
            WHAT WE <span className="text-gradient">DO</span>
          </h2>
        </motion.div>

        {/* Grid / Horizontal scroll cards */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 snap-x snap-mandatory scrollbar-hide w-full" style={{ scrollbarWidth: 'none' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="min-w-[85vw] sm:min-w-[380px] md:min-w-0 snap-center group cursor-hover w-full flex-shrink-0 md:flex-shrink"
            >
              <div className="glass font-syne font-extrabold tracking-tight uppercase group-hover:text-gradient transition-all duration-300 h-full rounded-2xl overflow-hidden hover:border-riot-red/30">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${exp.rotate || ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-riot-black via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-white glass p-2 rounded-xl">
                    <exp.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-riot-red text-xs tracking-[0.2em] uppercase mb-2 font-semibold">
                    {exp.subtitle}
                  </p>
                  <h3 className="font-syne font-extrabold tracking-tight uppercase">
                    {exp.title}
                  </h3>
                  <p className="text-riot-light-gray text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
