'use client';

import { Calendar, Clock, Mail, Phone, Star, CheckCircle2, Quote } from 'lucide-react';

export default function ContactInfo({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Contact information"
      className={`
        rounded-2xl bg-white dark:bg-[#0F1115] ring-1 ring-black/5 dark:ring-white/10
        p-6 sm:p-7 shadow-sm 2xl:sticky 2xl:top-24
        flex flex-col justify-between gap-5
        h-full
        ${className}
      `}
    >
      {/* TOP */}
      <div className="flex flex-col gap-5">
        {/* Human touch */}
        <div className="flex items-center gap-3">
          <img
            src="/images/founder.jpg"
            alt="NexGen"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-black/5 dark:ring-white/10"
          />
          <div>
            <p className="text-xs text-black/60 dark:text-white/60 leading-tight">Talk to a real person</p>
            <p className="font-medium leading-tight">We reply within 24 hours.</p>
          </div>
        </div>

        {/* Contact list */}
        <div className="grid gap-2.5">
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

        {/* What happens next */}
        <div>
          <div className="text-[11px] uppercase tracking-wide text-black/50 dark:text-white/60 mb-1.5">What happens next</div>
          <ul className="space-y-1.5">
            {[
              "We review your details and send a simple plan.",
              "Optional 15-min call to align on goals and budget.",
              "We start with quick wins that move the needle.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-[2px] text-green-600/90" />
                <span className="text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Proof chips */}
        <div className="flex flex-wrap gap-2">
          {["+42% calls in 60 days", "<2s load time", "Local SEO wins"].map((c) => (
            <span key={c} className="rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-1 text-xs font-medium">
              {c}
            </span>
          ))}
        </div>

        {/* Hours & rating */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/15 px-2.5 py-1.5">
            <Clock className="h-4 w-4 opacity-70" />
            <span className="text-sm">M–F 9–5 ET</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/15 px-2.5 py-1.5">
            <Star className="h-4 w-4 opacity-70" />
            <span className="text-sm">4.9 ★ Google</span>
          </div>
        </div>

        {/* Mini testimonial */}
        <figure className="rounded-lg bg-black/[.03] dark:bg-white/[.06] p-3.5 ring-1 ring-black/5 dark:ring-white/10">
          <blockquote className="text-sm leading-relaxed">
            "NexGen got our phones ringing. We saw real results within the first month."
          </blockquote>
          <figcaption className="mt-1.5 text-xs text-black/60 dark:text-white/60">Owner, CVX Electric</figcaption>
          <Quote className="h-4 w-4 opacity-20 absolute -mt-6 -ml-2" />
        </figure>
      </div>

      {/* BOTTOM CTA */}
      <div className="flex flex-col gap-2">
        <a
          href="https://calendly.com/your-handle/intro-call"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/15
                     px-4 font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          <Calendar className="h-4 w-4" />
          Schedule on Calendly →
        </a>
        <p className="text-[11px] text-black/50 dark:text-white/50">Prefer email? We'll respond within 24 hours.</p>
      </div>
    </aside>
  );
}
