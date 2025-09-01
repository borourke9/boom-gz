"use client";
import { useRef } from "react";

export default function HoverVideo({
  src, poster, className = "absolute inset-0 h-full w-full object-cover rounded-xl",
}: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0; // Reset to beginning
    }
  };

  return (
    <video 
      ref={ref} 
      muted 
      loop 
      playsInline 
      poster={poster} 
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
