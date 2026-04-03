import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
  { label: 'Experience', href: '#experience' },
  { label: 'Partners', href: '#collaborations' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ width: progressWidth }} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-500 ${
          isScrolled
            ? 'glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center justify-center bg-riot-black border-2 border-riot-white rounded-full w-12 h-12 shrink-0 group-hover:border-riot-red transition-colors duration-300">
              <span className="font-archivo text-[9px] leading-none mb-0.5 text-riot-white">RUN</span>
              <span className="font-archivo text-[9px] leading-none text-riot-white">RIOT</span>
            </div>
            <span className="font-syne text-xl font-extrabold tracking-tight text-white hidden sm:block uppercase">
              RUN RIOT
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-inter text-sm font-medium text-riot-light-gray hover:text-riot-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-riot-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#cta"
              className="px-5 py-2 bg-riot-red text-white text-sm font-semibold rounded-full hover:bg-riot-orange transition-colors duration-300"
            >
              Join Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-riot-white"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-riot-white"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-riot-white"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isMobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden glass-strong"
        >
          <div className="flex flex-col items-center gap-8 py-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="font-inter text-lg text-riot-white hover:text-riot-red transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsMobileOpen(false)}
              className="px-6 py-3 bg-riot-red text-white font-semibold rounded-full"
            >
              Join Us
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
