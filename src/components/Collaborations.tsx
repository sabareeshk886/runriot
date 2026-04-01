import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const brands = [
  { name: 'Cadence', link: 'https://usecadence.com/', textLogo: 'CADENCE', fontClass: 'font-inter font-black tracking-tight text-3xl' },
  { name: 'Musashi', link: 'https://musashi.com/', textLogo: 'MUSASHI', fontClass: 'font-archivo text-4xl tracking-widest' },
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
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Collaborations
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9] mb-6">
            BRANDS THAT <span className="text-gradient">MOVE</span> WITH US
          </h2>
          <p className="text-riot-light-gray max-w-2xl mx-auto text-base text-center text-balance">
            We partner with brands that align with culture and community — creating authentic
            connections, not ads.
          </p>
        </motion.div>

        <div className="w-full h-16 md:h-24"></div>
        {/* Brand logos flex container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16 w-full max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <motion.a
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass rounded-2xl flex items-center justify-center hover:border-riot-red/30 transition-all duration-500 group cursor-hover w-full md:w-80 h-40 md:h-48"
            >
              <div className="flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500">
                <span className={`${brand.fontClass} text-riot-light-gray group-hover:text-riot-white transition-colors duration-500`}>
                  {brand.textLogo}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
