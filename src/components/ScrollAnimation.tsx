import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'slideUp';
  delay?: number;
  duration?: number;
  once?: boolean;
}

const animations: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  slideUp: {
    hidden: { y: '100%' },
    visible: { y: 0 }
  }
};

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.5,
  once = true
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}