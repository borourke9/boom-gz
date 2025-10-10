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
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    // Set window height on client side
    setWindowHeight(window.innerHeight)

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setScrollY(currentScrollY)
          setIsScrolled(currentScrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
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
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <span className={`w-8 h-0.5 bg-white drop-shadow-lg transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-8 h-0.5 bg-white drop-shadow-lg transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-8 h-0.5 bg-white drop-shadow-lg transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-16 right-4 md:top-20 md:right-6 z-40 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden min-w-[180px] md:min-w-[200px] border border-white/20">
          <nav className="flex flex-col p-3 md:p-4">
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-white font-semibold hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/instant-estimator"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-white font-semibold hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              Instant Estimator
            </a>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
                setMenuOpen(false);
              }}
              className="px-4 py-3 text-white font-semibold hover:bg-white/20 rounded-lg transition-colors duration-200 text-left"
            >
              Contact
            </button>
            <button
              onClick={() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth' });
                }
                setMenuOpen(false);
              }}
              className="px-4 py-3 text-white font-semibold hover:bg-white/20 rounded-lg transition-colors duration-200 text-left"
            >
              Our Work
            </button>
          </nav>
        </div>
      )}


      {/* Hero Section - Fixed Background with Parallax */}
      <section className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden">
        {/* Background Image - Fixed */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero1.png" 
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Mobile View - NEXGEN Centered, Content Bottom-Left */}
        <div 
          className="relative z-10 w-full min-h-screen md:hidden"
          style={{ opacity: Math.max(0.3, 1 - scrollY / 400) }}
        >
          {/* Dark gradient backdrop for text contrast */}
          <div className="absolute top-[45%] inset-x-0 h-[25%] bg-gradient-to-b from-black/40 via-transparent to-black/0 blur-3xl"></div>
          
          {/* NEXGEN Hero Image */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rise-in"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
              mixBlendMode: 'overlay',
              opacity: 0.95
            }}
          >
            <img 
              src="/images/nexgen101.png" 
              alt="NEXGEN" 
              className="w-auto h-auto max-w-[90vw] max-h-[70vh] object-contain"
              style={{
                width: 'clamp(400px, 60vw, 1200px)',
                height: 'auto'
              }}
            />
          </div>

          {/* Subtext + Buttons - Bottom-Left Corner */}
          <div className="absolute bottom-8 left-4 right-4 md:bottom-8 md:left-6 md:right-auto flex flex-col items-start gap-2 md:gap-3 md:max-w-[85%] text-left">
            {/* Subtext */}
            <p className="text-xs md:text-sm text-gray-200 opacity-90 font-light leading-relaxed">
              NEXGEN helps service businesses scale with conversion-focused websites and ad campaigns that generate consistent leads, closing the gap between clicks and customers.
            </p>

            {/* Buttons */}
            <div className="flex flex-col space-y-2 md:space-y-3 w-full mt-1 md:mt-2">
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
                className="px-4 py-2.5 md:px-6 md:py-3 border border-white/80 rounded-md text-white text-xs md:text-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                style={{ backdropFilter: 'blur(8px)' }}
              >
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
                className="px-4 py-2.5 md:px-6 md:py-3 border border-white/80 rounded-md text-white text-xs md:text-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View - NEXGEN Centered, Content Bottom-Left */}
        <div 
          className="hidden md:block relative z-10 w-full min-h-screen"
          style={{ opacity: Math.max(0.3, 1 - scrollY / 400) }}
        >
          {/* Dark gradient backdrop for text contrast */}
          <div className="absolute top-[45%] inset-x-0 h-[25%] bg-gradient-to-b from-black/40 via-transparent to-black/0 blur-3xl"></div>
          
          {/* NEXGEN Hero Image */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rise-in"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
              mixBlendMode: 'overlay',
              opacity: 0.95
            }}
          >
            <img 
              src="/images/nexgen101.png" 
              alt="NEXGEN" 
              className="w-auto h-auto max-w-[90vw] max-h-[70vh] object-contain"
              style={{
                width: 'clamp(600px, 50vw, 1400px)',
                height: 'auto'
              }}
            />
          </div>

          {/* Subtext + Buttons - Bottom-Left Corner */}
          <div className="absolute bottom-12 left-12 flex flex-col items-start gap-4 max-w-md text-left">
            {/* Subtext */}
            <p className="text-gray-200 text-sm sm:text-base md:text-lg opacity-90 font-light leading-relaxed">
              NEXGEN helps service businesses scale with conversion-focused websites and ad campaigns that generate consistent leads, closing the gap between clicks and customers.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
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
                className="px-6 py-3 border border-white/80 rounded-md text-white text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                style={{ backdropFilter: 'blur(8px)' }}
              >
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
                className="px-6 py-3 border border-white/80 rounded-md text-white text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 md:hidden"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Parallax Spacer - Creates scroll space */}
      <div className="relative z-20 h-screen"></div>

      {/* Card Section - Parallax Overlay */}
      <section
        className="parallax-section relative z-20 py-20 px-6 text-white min-h-screen"
        style={{
          backgroundImage: 'url(/images/lake.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-black/80"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
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
                <h3 className="text-4xl font-bold text-blue-500 mb-4">DISCOVERY CALL</h3>
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
              <div className="absolute top-6 left-6 w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="mt-12">
                <h3 className="text-4xl font-bold text-blue-500 mb-4">SYSTEM BUILD</h3>
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
                <h3 className="text-4xl font-bold text-blue-500 mb-4">ONGOING OPTIMIZATION</h3>
                <p className="text-gray-700">We continuously monitor and scale to maximize performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Container - Everything after parallax */}
      <div className="relative z-30">
        {/* Featured Work Section */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="w-full py-16 bg-white"
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
      <section id="solutions" className="relative mx-auto mt-0 mb-0 max-w-7xl px-4 pt-24">
        {/* White Backdrop */}
        <div className="absolute inset-0 -m-4 bg-white rounded-3xl shadow-lg"></div>
        
        {/* Placeholder Backdrop */}
        <div className="absolute inset-0 -m-6 bg-gray-100 rounded-3xl -z-10"></div>
        {/* Section Header */}
        <div className="relative z-10 text-center mb-12">
          <p className="mb-2 text-xs tracking-[.2em] uppercase text-black/40">What We Do</p>
          <h2 className="text-5xl md:text-6xl font-black -tracking-[0.02em] leading-[0.95] text-gray-900" style={{ fontFamily: "Inter Tight, sans-serif" }}>
            OUR SOLUTIONS
          </h2>
        </div>

        {/* Large Video Section */}
        <div className="relative z-10 mb-16">
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

      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        aria-labelledby="contact-heading" 
        className="relative pb-20 sm:pb-24 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/corn.png" 
            alt="Contact background"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>
        {/* Background Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="uppercase tracking-[0.2em] text-xs sm:text-sm text-white/80 text-center mb-4">
              Contact
            </div>
            <h2
              id="contact-heading"
              className="font-black text-4xl sm:text-5xl md:text-6xl text-center -tracking-[0.02em] leading-[1] mb-5 text-white"
              style={{ fontFamily: "Inter Tight, sans-serif" }}
            >
              Let's build your growth system
            </h2>
            <p className="text-center max-w-[70ch] mx-auto text-white/90">
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
      <div className="w-screen bg-black text-white -mx-4 sm:-mx-6 md:mx-0 overflow-x-hidden">
        <div className="text-center flex flex-col items-center">
          <img 
            src="/images/nexgen101.png" 
            alt="NEXGEN" 
            className="w-full h-auto"
            style={{
              filter: 'brightness(0) invert(1)',
              opacity: 0.95
            }}
          />
          <p className="text-xs opacity-70 mt-0.5 pb-1">© 2025 NEXGEN. All rights reserved.</p>
          <div className="pb-1">
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
    </div>
  )
}
