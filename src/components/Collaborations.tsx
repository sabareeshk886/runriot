import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  { name: 'SALT', letter: 'S' },
  { name: 'Cadence', letter: 'C' },
  { name: 'Musashi', letter: 'M' },
  { name: 'Atlas Collectif', letter: 'A' },
];

export default function Collaborations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="collaborations" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Collaborations
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9] mb-6">
            BRANDS THAT <span className="text-gradient">MOVE</span> WITH US
          </h2>
          <p className="text-riot-light-gray max-w-2xl mx-auto text-base">
            We partner with brands that align with culture and community — creating authentic
            connections, not ads.
          </p>
        </motion.div>

        {/* Brand logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass rounded-2xl p-10 flex flex-col items-center justify-center hover:border-riot-red/30 transition-all duration-500 group cursor-hover aspect-square"
            >
              <div className="font-syne text-6xl md:text-7xl text-riot-light-gray group-hover:text-gradient transition-all duration-500 mb-3">
                {brand.letter}
              </div>
              <p className="font-inter text-sm text-riot-light-gray tracking-[0.2em] uppercase group-hover:text-riot-white transition-colors duration-300">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Collaboration details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-strong rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-syne text-4xl tracking-wider mb-4">
                RUN RIOT <span className="text-gradient">× SALT</span>
              </h3>
              <p className="text-riot-light-gray leading-relaxed mb-6">
                Runs ending at SALT locations. Post-run coffee & social meetups. SALT as the
                vibe spot for our community. Exclusive runner benefits & discounts.
              </p>
              <div className="flex flex-wrap gap-3">
                {['25+ Regular Runners', 'Consistent Foot Traffic', 'Organic Social Exposure'].map((tag) => (
                  <span key={tag} className="px-4 py-2 glass rounded-full text-xs text-riot-light-gray tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src="/pictures/ANF03301.JPG"
                alt="SALT collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-riot-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
