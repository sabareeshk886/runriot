import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const images = [
  { src: '/pictures/ANF03425.webp', span: 'col-span-1 row-span-2' },
  { src: '/pictures/ANF03463.webp', span: 'col-span-1 row-span-1' },
  { src: '/pictures/ANF03475.webp', span: 'col-span-1 row-span-1' },
  { src: '/pictures/ANF03490.webp', span: 'col-span-1 row-span-1' },
  { src: '/pictures/ANF03504.webp', span: 'col-span-1 row-span-2' },
  { src: '/pictures/ANF03515.webp', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-riot-red font-inter text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[0.9] mb-4">
            THE <span className="text-gradient">MOMENTS</span>
          </h2>
          <p className="text-riot-light-gray text-base max-w-lg mx-auto">
            Every run writes a story. Every photo captures a feeling.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`${img.span} relative rounded-xl overflow-hidden group cursor-hover`}
            >
              <img
                src={img.src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-riot-black/0 group-hover:bg-riot-black/50 transition-all duration-500" />

              {/* Instagram-style overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-white text-sm font-semibold">❤️</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-riot-light-gray hover:text-riot-white transition-colors duration-300 text-sm tracking-wider"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow @runriot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
