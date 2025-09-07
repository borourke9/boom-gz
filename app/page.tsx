"use client"

import { useEffect, useState } from "react"
import AnimatedCard from "../components/AnimatedCard"
import ContactInfoCompact from "../components/ContactInfoCompact"
import GlassPanel from "../components/GlassPanel"
import ParallaxContainer from "../components/ParallaxContainer"
import HoverVideo from "../components/HoverVideo"
import VimeoHoverVideo from "../components/VimeoHoverVideo"
import NexGenContactForm from "./components/NexGenContactForm"

// GA4 type declaration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const heroScale = Math.max(0.3, 1 - scrollY * 0.003)
  const heroOpacity = Math.max(0, 1 - scrollY * 0.005)
  const navOpacity = Math.min(1, scrollY * 0.01)
  const navLogoOpacity = Math.min(1, Math.max(0, (scrollY - 100) * 0.015))

  const cardSectionProgress = Math.max(0, Math.min(1, (scrollY - 400) / 300))
  const cardSectionTransform = `translateY(${(1 - cardSectionProgress) * 100}px) rotateX(${(1 - cardSectionProgress) * 15}deg)`
  const cardSectionOpacity = cardSectionProgress

  const servicesProgress = Math.max(0, Math.min(1, (scrollY - 800) / 300))
  const servicesTransform = `translateY(${(1 - servicesProgress) * 100}px) rotateX(${(1 - servicesProgress) * 15}deg)`
  const servicesOpacity = servicesProgress

  const card1Progress = Math.max(0, Math.min(1, (scrollY - 500) / 400))
  const card2Progress = Math.max(0, Math.min(1, (scrollY - 600) / 400))
  const card3Progress = Math.max(0, Math.min(1, (scrollY - 700) / 400))

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const card1Transform = `translateX(${(1 - easeOutCubic(card1Progress)) * -100}px)`
  const card2Transform = `translateX(${(1 - easeOutCubic(card2Progress)) * -100}px)`
  const card3Transform = `translateX(${(1 - easeOutCubic(card3Progress)) * -100}px)`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 transition-opacity duration-300"
        style={{ opacity: navOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center relative">
            <div
              className="text-2xl font-bold text-gray-900 transition-opacity duration-500"
              style={{ opacity: navLogoOpacity }}
            >
              NEXGEN
            </div>
            <div className="hidden md:flex space-x-8 absolute right-0">
              <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
                Work
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Call Now Button - Mobile Only */}
      {isScrolled && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 md:hidden">
          <a
            href="tel:+12484045768"
            className="group flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-800">Call Now</span>
          </a>
        </div>
      )}

      {/* Floating Instant Estimator Button - All Devices */}
      {isScrolled && (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40">
          <a
            href="/instant-estimator"
            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Instant Estimator</span>
            <span className="sm:hidden">Estimator</span>
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen min-h-svh flex items-center justify-center relative px-0 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
        <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-8 px-4 sm:px-0">
          <h1
            className="hero-title text-7xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[14rem] font-extrabold tracking-tight bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent leading-none mb-2 transition-all duration-300 ease-out relative break-words"
            style={{
              transform: `scale(${heroScale})`,
              opacity: heroOpacity,
            }}
          >
            NEXGEN
          </h1>

          <p className="text-base leading-relaxed max-w-sm mt-2 opacity-90 sm:text-base md:text-lg md:mt-3 md:max-w-md lg:mt-4 lg:max-w-lg xl:mt-6 xl:max-w-xl text-gray-600">
            NEXGEN helps service businesses scale with conversion-focused websites, ad campaigns that generate consistent leads, and AI responders that close the gap between clicks and customers.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center w-full max-w-sm mt-6 sm:gap-3 sm:max-w-xs lg:mt-8 xl:mt-10 2xl:mt-10">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              aria-label="Scroll to contact section to start a conversation"
              className="bg-black text-white px-8 py-5 text-lg rounded-xl font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full md:py-4 md:text-base group relative overflow-hidden"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 group-hover:bg-blue-400 transition-all duration-300"></div>
              Let's Talk
            </button>
            <button 
              onClick={() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const workSection = document.getElementById('work');
                  if (workSection) {
                    workSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              aria-label="Scroll to work section to see our portfolio"
              className="border border-gray-300 text-gray-700 px-8 py-5 text-lg rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full md:py-4 md:text-base"
            >
              See Our Work
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section
        className="py-20 px-6 bg-gradient-to-r from-gray-800 to-black text-white"
        style={{
          transform: cardSectionTransform,
          opacity: cardSectionOpacity,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center -tracking-[0.02em] leading-[0.95] mb-5 text-white"
              style={{ fontFamily: "Inter Tight, sans-serif" }}
            >
              OUR PROCESS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white text-gray-900 rounded-2xl p-8 relative"
              style={{
                transform: card1Transform,
                opacity: card1Progress,
                transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
              }}
            >
              <div className="absolute top-6 left-6 w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="mt-12">
                <h3 className="text-4xl font-bold text-red-500 mb-4">DISCOVERY CALL</h3>
                <p className="text-gray-700">
                  We analyze your business and create a custom strategy tailored to your goals.
                </p>
              </div>
            </div>

            <div
              className="bg-gray-700 text-white rounded-2xl p-8 relative"
              style={{
                transform: card2Transform,
                opacity: card2Progress,
                transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
              }}
            >
              <div className="absolute top-6 left-6 w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="mt-12">
                <h3 className="text-4xl font-bold text-red-500 mb-4">SYSTEM BUILD</h3>
                <p className="text-gray-300">We build your complete growth system with tracking, site, SEO, and ads.</p>
              </div>
            </div>

            <div
              className="bg-gray-400 text-gray-900 rounded-2xl p-8 relative"
              style={{
                transform: card3Transform,
                opacity: card3Progress,
                transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
              }}
            >
              <div className="absolute top-6 left-6 w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="mt-12">
                <h3 className="text-4xl font-bold text-red-500 mb-4">ONGOING OPTIMIZATION</h3>
                <p className="text-gray-700">We continuously monitor and scale to maximize performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="w-full py-16 bg-white"
        style={{
          transform: servicesTransform,
          opacity: servicesOpacity,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2
            id="work-heading"
            className="text-4xl font-bold mb-10 text-center"
          >
            Featured Work
          </h2>
        </div>

        {/* Large Video Block */}
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 xl:px-14 mb-8">
          <div className="aspect-[16/9] rounded-2xl lg:rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden relative">
            <VimeoHoverVideo videoId="1116178377" />
          </div>
        </div>

        {/* Two Column Grid with Gutters */}
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 xl:px-14 mt-10 md:mt-12 xl:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 xl:gap-16">
            {/* Video 2 */}
            <div className="aspect-[9/16] rounded-2xl lg:rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden relative">
              <VimeoHoverVideo videoId="1116184952" />
            </div>

            {/* Video 3 */}
            <div className="aspect-[9/16] rounded-2xl lg:rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden relative">
              <VimeoHoverVideo videoId="1116032411" />
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="pb-16 md:pb-20"></div>
      </section>

            {/* Our Solutions Section */}
      <section id="solutions" className="relative mx-auto my-24 max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="mb-2 text-xs tracking-[.2em] uppercase text-black/40">What We Do</p>
          <h2 className="text-5xl md:text-6xl font-black -tracking-[0.02em] leading-[0.95] text-gray-900" style={{ fontFamily: "Inter Tight, sans-serif" }}>
            OUR SOLUTIONS
          </h2>
        </div>

        {/* Large Video Section */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/8 via-blue-500/6 to-blue-400/4 p-8">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://player.vimeo.com/video/1114113118?autoplay=0&loop=1&muted=1&controls=1&background=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="NEXGEN Solutions Video"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="rounded-3xl border border-white/25 bg-white/18 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.35)] p-8 md:p-12">
          {/* Inner glow overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/14 via-transparent to-white/5" />
          
          {/* Content */}
          <div className="relative z-10">
            <ParallaxContainer from={50} to={-50}>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {/* Websites */}
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Websites</h3>
                  <p className="text-gray-600 mb-4">Fast, branded sites that convert visitors into customers</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Under 2-week build</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Mobile-first design</span>
                  </div>
                </div>

                {/* Google Ads */}
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads</h3>
                  <p className="text-gray-600 mb-4">Targeted PPC campaigns that drive qualified leads</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Avg +42% calls</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">ROAS tracking</span>
                  </div>
                </div>

                {/* AI Solutions */}
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI Solutions</h3>
                  <p className="text-gray-600 mb-4">Smart automation that never misses a lead</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">24/7 lead capture</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Auto follow-up</span>
                  </div>
                </div>

                {/* Local SEO */}
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local SEO</h3>
                  <p className="text-gray-600 mb-4">Dominate local search and Google Business Profile</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Top 3 rankings</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">GBP optimization</span>
                  </div>
                </div>
              </div>
            </ParallaxContainer>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="uppercase tracking-[0.2em] text-xs sm:text-sm text-black/50 dark:text-white/60 text-center mb-4">
              Contact
            </div>
            <h2
              id="contact-heading"
              className="font-black text-4xl sm:text-5xl md:text-6xl text-center -tracking-[0.02em] leading-[1] mb-5"
              style={{ fontFamily: "Inter Tight, sans-serif" }}
            >
              Let's build your growth system
            </h2>
            <p className="text-center max-w-[70ch] mx-auto text-gray-600">
              Tell us about your business and goals. We'll reply within 24 hours with a simple plan and next steps.
            </p>
          </div>

                  {/* Layout */}
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[1.25fr_1fr]
            xl:grid-cols-[1.35fr_1fr]
            gap-8 lg:gap-10
            items-start
            mt-10
          "
        >
            {/* LEFT COLUMN — Compact Info card */}
            <ContactInfoCompact />

                        {/* RIGHT COLUMN — Form */}
            <div className="rounded-2xl bg-white dark:bg-[#0F1115] p-6 sm:p-8 ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
              <NexGenContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* NEXGEN Text Section */}
      <div className="w-screen bg-black text-white py-20">
        <div className="text-center">
          <h2 className="font-['Inter_Tight'] font-black tracking-tight leading-[0.75] text-[20vmin] md:text-[18vmin] lg:text-[16vmin] text-white">
            NEXGEN
          </h2>
          <p className="text-xs opacity-70 mt-4">© 2025 NEXGEN. All rights reserved.</p>
          <div className="mt-6">
            <a 
              href="/privacy" 
              className="text-xs opacity-60 hover:opacity-100 transition-opacity underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"LocalBusiness",
        "name":"NEXGEN",
        "image":"https://www.nexgensites.com/og/og-cover.jpg",
        "url":"https://www.nexgensites.com",
        "telephone":"+1-XXX-XXX-XXXX",
        "areaServed":{"@type":"AdministrativeArea","name":"Northern Michigan"},
        "address":{"@type":"PostalAddress","addressRegion":"MI","addressCountry":"US"},
        "sameAs":[ /* add socials if any */ ],
        "makesOffer":[
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Websites"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Google Ads"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"Local SEO / GBP"}},
          {"@type":"Offer","itemOffered":{"@type":"Service","name":"AI Answering"}}
        ]
      })}} />

      {/* Video schema for your Vimeo section */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"VideoObject",
        "name":"NEXGEN — Who We Serve",
        "description":"Overview of how we help service businesses with websites, ads and AI.",
        "thumbnailUrl":["https://www.nexgensites.com/images/who-we-serve-thumb.jpg"],
        "uploadDate":"2025-08-28",
        "publisher":{"@type":"Organization","name":"NEXGEN"},
        "contentUrl":"https://player.vimeo.com/video/1114113118",
        "embedUrl":"https://player.vimeo.com/video/1114113118"
      })}} />

      {/* Optional FAQ if you add an accordion on Contact */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":[
          {"@type":"Question","name":"How soon will you reply?","acceptedAnswer":{"@type":"Answer","text":"Within 24 hours."}},
          {"@type":"Question","name":"Do you work outside Northern Michigan?","acceptedAnswer":{"@type":"Answer","text":"Yes—remote friendly across the U.S."}}
        ]
      })}} />
    </div>
  )
}
