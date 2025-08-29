'use client';

import { Mail, Phone, CalendarDays, Clock, Star } from 'lucide-react';

export default function ContactInfoCompact() {
  return (
    <aside
      aria-label="Contact information"
      className="
        rounded-2xl bg-white dark:bg-[#0F1115] ring-1 ring-black/5 dark:ring-white/10
        p-6 sm:p-7 shadow-sm
        flex flex-col gap-5
      "
    >
      {/* Heading */}
      <div>
        <p className="text-xs uppercase tracking-wide text-black/50 dark:text-white/60">Talk to a real person</p>
        <h3 className="mt-1 font-medium leading-tight">We reply within 24 hours.</h3>
      </div>

      {/* Primary contact */}
      <div className="space-y-2.5">
        <a href="mailto:hello@nexgensites.com" className="flex items-center gap-2.5 hover:underline">
          <Mail className="h-4 w-4 opacity-70" />
          <span className="font-medium">hello@nexgensites.com</span>
        </a>
        <a href="tel:(XXX) XXX-XXXX" className="flex items-center gap-2.5 hover:underline">
          <Phone className="h-4 w-4 opacity-70" />
          <span className="font-medium">(XXX) XXX-XXXX</span>
        </a>
        <p className="text-sm text-black/60 dark:text-white/60">
          Service area: <span className="font-medium text-black/80 dark:text-white/80">Northern Michigan</span>
        </p>
      </div>

      {/* Compact meta row */}
      <div className="flex items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/15 px-2.5 py-1">
          <Clock className="h-4 w-4 opacity-70" /> M–F 9–5 ET
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-black/10 dark:border-white/15 px-2.5 py-1">
          <Star className="h-4 w-4 opacity-70" /> 4.9 ★ Google
        </span>
      </div>

      {/* Optional details (collapsed) */}
      <details className="rounded-xl bg-black/[.03] dark:bg-white/[.06] p-4 ring-1 ring-black/5 dark:ring-white/10">
        <summary className="cursor-pointer select-none text-sm font-medium">What happens next</summary>
        <ul className="mt-3 space-y-2 text-sm">
          <li>• We review your details and send a simple plan.</li>
          <li>• Optional 15-min call to align on goals and budget.</li>
          <li>• We start with quick wins that move the needle.</li>
        </ul>
      </details>

      {/* Tiny testimonial (one line) */}
      <p className="text-sm italic text-black/70 dark:text-white/70">
        "Phones started ringing within the first month." — Owner, CVX Electric
      </p>

      {/* Calendly CTA */}
      <a
        href="https://calendly.com/your-handle/intro-call"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/15
                   px-4 font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
      >
        <CalendarDays className="h-4 w-4" />
        Schedule on Calendly →
      </a>

      {/* Reassurance */}
      <p className="text-[11px] text-black/50 dark:text-white/50">Prefer email? We'll respond within 24 hours.</p>
    </aside>
  );
}
