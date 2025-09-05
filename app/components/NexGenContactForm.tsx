"use client";
import { useState } from "react";

export default function NexGenContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  function formatWebsiteUrl(url: string): string {
    if (!url.trim()) return "";
    
    // If it already has a protocol, return as is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    
    // Add https:// if no protocol is present
    return `https://${url}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Format website URL if provided
    const website = fd.get("website") as string;
    if (website) {
      fd.set("website", formatWebsiteUrl(website));
    }

    const res = await fetch("https://formspree.io/f/xwpnrboe", {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("ok");
      form.reset();
    } else {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="New NexGen Inquiry" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Full Name *"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email *"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="example.com (optional)"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Services Needed *
        </label>
        <div className="inline-flex gap-2 flex-wrap">
          {["Website", "Local SEO / GBP", "Google Ads", "Meta Ads", "AI Answering", "Analytics"].map(
            (service) => (
              <label key={service} className="inline-flex items-center">
                <input type="checkbox" name="services" value={service} className="sr-only peer" />
                <span className="rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm cursor-pointer peer-checked:bg-black peer-checked:text-white dark:peer-checked:bg-white dark:peer-checked:text-black transition-colors">
                  {service}
                </span>
              </label>
            ),
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Budget *
          </label>
          <select
            id="budget"
            name="budget"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select budget</option>
            <option>Undecided</option>
            <option>$2k</option>
            <option>$2k–$5k</option>
            <option>$5k–$10k</option>
            <option>$10k+</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="timeline"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Timeline *
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select timeline</option>
            <option>ASAP</option>
            <option>2–4 weeks</option>
            <option>1–3 months</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Project Details *
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="Tell us about your business, goals, and what you're looking to achieve..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white resize-vertical"
        />
      </div>

      <div>
        <label className="inline-flex items-start gap-3">
          <input
            type="checkbox"
            name="agree"
            required
            className="mt-1 rounded border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            I agree to be contacted by NexGen. *
          </span>
        </label>
      </div>

      {/* Trust chips */}
      <div className="flex flex-wrap gap-3 justify-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-medium">
          <span className="text-yellow-500">★</span> 4.9★ on Google
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
          ⚡ Response in &lt;24h
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-xs font-medium">
          👨‍💼 Owner-led
        </span>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full h-12 px-6 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 active:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">We reply within 24 hours.</p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500 text-center">No long contracts. Start with a one-page plan.</p>
      </div>

      {status === "ok" && (
        <p className="mt-3 text-green-600 dark:text-green-400 text-center" aria-live="polite">
          Thanks! We'll reply within 24 hours.
        </p>
      )}
      {status === "err" && (
        <p className="mt-3 text-red-600 dark:text-red-400 text-center" aria-live="polite">
          Something went wrong — try again or email bryce@nexgensites.com.
        </p>
      )}
    </form>
  );
}