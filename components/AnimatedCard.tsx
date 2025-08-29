'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export default function AnimatedCard({
  children,
  index = 0,
}: PropsWithChildren<{ index?: number }>) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="will-change-transform transform-gpu"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: '-12% 0px -12% 0px' }} // triggers a bit before fully in view, and allows re-animation
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // smooth pop
        delay: reduce ? 0 : index * 0.08, // subtle stagger
      }}
    >
      {children}
    </motion.div>
  );
}
