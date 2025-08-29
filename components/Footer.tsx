export default function Footer() {
  return (
    <footer
      id="site-footer"
      // full-bleed + no padding; break out of any page container
      className="relative w-screen max-w-none bg-black text-white overflow-hidden"
      aria-label="Site footer"
    >
      {/* Break out of parent .container if present */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        {/* Tall fill area for the wordmark */}
        <div className="min-h-[56vh] sm:min-h-[60vh] md:min-h-[64vh] grid place-items-center">
          <h2
            className="
              font-black leading-[0.85] tracking-tight whitespace-nowrap
              text-[clamp(72px,16vmin,320px)]
            "
            style={{ fontFamily: "Inter Tight, Inter, system-ui, sans-serif" }}
          >
            NEXGEN
          </h2>
        </div>

        {/* Tiny copyright (no padding) */}
        <p className="text-center text-[10px] sm:text-xs opacity-70 mb-3">
          © 2025 NEXGEN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
