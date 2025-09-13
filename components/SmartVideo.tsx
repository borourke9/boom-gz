"use client";
import { useEffect, useRef } from "react";

export default function SmartVideo({
  src, poster, className = "absolute inset-0 h-full w-full object-cover rounded-xl",
}: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current; if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(()=>{});
      else v.pause();
    }, { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} autoPlay muted loop playsInline poster={poster} className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
}





