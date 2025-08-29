export default function BrandBar() {
  return (
    <section
      aria-label="Brand"
      className="relative w-screen max-w-none bg-black text-white overflow-hidden mt-0"
    >
      {/* break out of parent container if one exists */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="min-h-[56vh] sm:min-h-[60vh] md:min-h-[64vh] grid place-items-center">
          <h2
            className="whitespace-nowrap font-black leading-[0.85] tracking-tight
                       text-[clamp(96px,20vmin,400px)]"
            style={{ fontFamily: "Inter Tight, Inter, system-ui, sans-serif" }}
          >
            NEXGEN
          </h2>
        </div>
      </div>
    </section>
  );
}
