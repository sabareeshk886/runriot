import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .cursor-hover')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .cursor-hover')) {
        setIsHovering(false);
      }
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10002]"
            animate={{
              x: position.x - (isHovering ? 24 : 10),
              y: position.y - (isHovering ? 24 : 10),
              width: isHovering ? 48 : 20,
              height: isHovering ? 48 : 20,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            style={{
              borderRadius: '50%',
              border: '2px solid rgba(255, 45, 45, 0.8)',
              mixBlendMode: 'difference',
            }}
          />
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10002]"
            animate={{
              x: position.x - 3,
              y: position.y - 3,
            }}
            transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#FF2D2D',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
