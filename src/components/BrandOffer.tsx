import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Footprints, Smartphone, Video, Gem, HeartHandshake, RefreshCw } from 'lucide-react';

const offers = [
  {
    icon: Footprints,
    title: 'Consistent Foot Traffic',
    desc: 'Every run brings 25+ engaged individuals to your doorstep — real people, real visits.',
  },
  {
    icon: Smartphone,
    title: 'Organic Social Exposure',
    desc: 'Our community creates and shares content naturally. No forced promos — just real stories.',
  },
  {
    icon: Video,
    title: 'Brand Visibility in Content',
    desc: 'Your brand appears in reels, stories, and posts — woven authentically into our narrative.',
  },
  {
    icon: Gem,
    title: 'Authentic Marketing',
    desc: 'Not ads. Real community endorsements that resonate because they\'re genuine.',
  },
  {
    icon: HeartHandshake,
    title: 'Community Association',
    desc: 'Align with fitness, lifestyle, and culture. Be part of something bigger than a transaction.',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Engagement',
    desc: 'Weekly touchpoints mean ongoing visibility — not a one-time campaign, but a partnership.',
  },
];

export default function BrandOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-riot-red/3 rounded-full blur-[200px] -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-0 flex flex-col items-center"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            For Brands
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.9] mb-6">
            WHAT WE <span className="text-gradient">OFFER</span>
          </h2>
          <p className="text-riot-light-gray max-w-xl mx-auto text-center text-balance">
            Partner with a community that delivers real value — not vanity metrics
          </p>
        </motion.div>

        <div className="w-full h-16 md:h-24"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl px-6 py-10 md:px-8 md:py-12 hover:border-riot-red/30 transition-all duration-500 group cursor-hover relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-riot-red/0 group-hover:bg-riot-red/10 rounded-full blur-[60px] transition-all duration-700" />

              <span className="mb-6 block text-riot-white/80 group-hover:text-riot-red transition-colors duration-300">
                <offer.icon size={32} strokeWidth={1.5} />
              </span>
              <h3 className="font-syne text-lg font-extrabold tracking-tight uppercase group-hover:text-gradient transition-all duration-300 mb-3">
                {offer.title}
              </h3>
              <p className="text-riot-light-gray text-sm leading-relaxed relative z-10">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
