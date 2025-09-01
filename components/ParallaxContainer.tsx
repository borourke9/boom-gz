"use client";
import { useEffect, useRef } from "react";

export default function ParallaxContainer({
  children, from = 60, to = -60, className = "",
}: { children: React.ReactNode; from?: number; to?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height))); // 0..1
      const y = from + (to - from) * p;
      el.style.transform = `translateY(${y}px)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [from, to]);

  return <div ref={ref} className={className} style={{ willChange: "transform" }}>{children}</div>;
}
