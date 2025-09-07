"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EstimatorNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/instant-estimator", label: "Instant Estimator" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          NEXGEN
        </Link>

        {/* Right: Nav pills */}
        <div className="flex gap-3">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:shadow-lg"
                    : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:shadow-sm"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}