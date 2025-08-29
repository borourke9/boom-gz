'use client';
import { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = PropsWithChildren<{
  label?: string;
  size?: number;              // px of the square (default 72)
  gradient?: string;          // Tailwind bg-[] or inline style
}>;

export default function IosTile({ children, label, size = 72, gradient }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="ios-tile relative rounded-[22px] isolate"
      style={{ width: size, height: size }}
      initial={{ scale: 1, y: 0 }}
      whileHover={reduce ? {} : { scale: 1.03, y: -2 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      aria-label={label}
      role="img"
    >
      {/* Base gradient */}
      <div
        className={`absolute inset-0 rounded-[22px] ${gradient ?? ''}`}
      />
      {/* Subtle vignette + inner shadow */}
      <div className="absolute inset-0 rounded-[22px] pointer-events-none
                      shadow-[inset_0_1px_0_rgba(255,255,255,.18),inset_0_-20px_40px_rgba(0,0,0,.18)]" />
      {/* Border gloss */}
      <div className="absolute inset-0 rounded-[22px] ring-1 ring-white/15" />
      {/* Specular highlight */}
      <div className="absolute -inset-2 rounded-[26px] pointer-events-none
                      bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,.55),rgba(255,255,255,.0)_60%)]" />
      {/* Bottom drop shadow */}
      <div className="absolute -z-10 inset-0 rounded-[22px]
                      shadow-[0_12px_30px_rgba(0,0,0,.15),0_30px_60px_rgba(0,0,0,.10)]" />
      {/* Shimmer on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none">
        <div className="absolute -left-1/3 -top-1/3 h-[180%] w-[60%] rotate-12
                        bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)] 
                        opacity-0 group-hover:opacity-100 animate-ios-shimmer" />
      </div>
      {/* Center glyph */}
      <div className="absolute inset-0 grid place-items-center text-white">
        <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,.35)]">{children}</div>
      </div>
    </motion.div>
  );
}
