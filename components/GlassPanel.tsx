export default function GlassPanel({
  children, className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={[
      "relative overflow-hidden rounded-3xl border",
      "bg-white/6 backdrop-blur-2xl border-white/10",
      "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]",
      "isolate", className,
    ].join(" ")}>
      {/* soft top glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      {children}
    </div>
  );
}










