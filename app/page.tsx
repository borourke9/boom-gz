"use client"

import { useEffect, useState } from "react"
import AnimatedCard from "../components/AnimatedCard"
import ContactInfoCompact from "../components/ContactInfoCompact"
import ServicesStrip from "../components/ServicesStrip"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [clickedCard, setClickedCard] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCardClick = (cardIndex: number) => {
    setClickedCard(cardIndex)
    setTimeout(() => setClickedCard(null), 2000)
  }

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

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="text-center">
          <style jsx>{`
            @keyframes nxg-bob { 
              0%{transform:translate(-50%,0)} 
              50%{transform:translate(-50%,-4px)} 
              100%{transform:translate(-50%,0)} 
            }
            .nxg-mascot { 
              animation: nxg-bob 3.6s ease-in-out infinite; 
            }
            @media (prefers-reduced-motion: reduce){ 
              .nxg-mascot { 
                animation:none !important; 
              } 
            }
          `}</style>
          <h1
            className="text-[12rem] md:text-[16rem] font-bold text-gray-900 -tracking-[0.05em] leading-none mb-8 transition-all duration-300 ease-out relative"
            style={{
              transform: `scale(${heroScale})`,
              opacity: heroOpacity,
            }}
            data-mascot="on"
          >
            NEXGEN
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gxI6Ot7u7beqbdhFe44zSRvHmmFQSp.png"
              alt="Cartoon character with laptop"
              className="nxg-mascot absolute -top-2 md:-top-4 lg:-top-6 right-4 md:right-8 lg:right-12 w-16 md:w-20 lg:w-24 select-none drop-shadow-lg z-10 cursor-pointer hover:scale-110 transition-transform duration-200 pointer-events-auto"
              style={{
                transform: `scale(${heroScale})`,
                opacity: heroOpacity,
              }}
              onClick={() => {
                console.log("[v0] Mascot clicked!")
                alert("Hello! I'm the NEXGEN mascot! 👋")
              }}
            />
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We build fast, branded sites, run Google & Meta ads, and add AI responders—so more clicks turn into calls
            and jobs.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Let's Talk
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105">
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
        className="py-20 px-6 bg-gray-900 text-white"
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

      {/* Work / Case Studies Section */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white"
        style={{
          transform: servicesTransform,
          opacity: servicesOpacity,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header block */}
          <div className="text-center md:text-left mb-10">
            <div className="uppercase tracking-[0.2em] text-sm text-black/50 dark:text-white/60 mb-4">Work</div>
            <div className="relative">
              <h2
                id="work-heading"
                className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center -tracking-[0.02em] leading-[0.95] mb-5"
                style={{ fontFamily: "Inter Tight, sans-serif" }}
              >
                OUR WORK
              </h2>
              {/* Scribble accent */}
              <svg
                className="absolute -top-6 left-1/2 -translate-x-[42%] hidden md:block opacity-90"
                width="120"
                height="20"
                viewBox="0 0 120 20"
                fill="none"
              >
                <path
                  d="M10 15c20-8 40-2 60-10s40 2 50-5"
                  stroke="#E24A3B"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-[70ch] mx-auto text-center">
              A selection of projects showing how we design, build, and grow service businesses with websites, ads, and
              AI.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-3 mb-10">
            <span className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm">
              All
            </span>
            <span className="rounded-full border border-black/10 dark:border-white/15 px-4 py-2 text-sm">Web</span>
            <span className="rounded-full border border-black/10 dark:border-white/15 px-4 py-2 text-sm">SEO</span>
            <span className="rounded-full border border-black/10 dark:border-white/15 px-4 py-2 text-sm">Ads</span>
            <span className="rounded-full border border-black/10 dark:border-white/15 px-4 py-2 text-sm">AI</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <AnimatedCard index={0}>
              <div
                className="group block cursor-pointer relative"
                onClick={() => handleCardClick(0)}
                aria-label="View case study: Electric"
              >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white dark:bg-[#0F1115] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 transform-gpu ring-1 ring-black/5 dark:ring-white/10">
                <div className="relative h-full">
                  <img
                    src="/electrician-working-on-electrical-panel.png"
                    alt="Electric project showcase"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white/90 text-sm">View case study →</span>
                  </div>
                  {clickedCard === 0 && (
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                      <div className="text-white text-lg font-semibold">Loading...</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-gray-900 font-semibold">Electric</h3>
                <p className="text-sm text-gray-600">Website · Local SEO</p>
              </div>
            </div>
            </AnimatedCard>

            {/* Card 2 */}
            <AnimatedCard index={1}>
              <div
                className="group block cursor-pointer relative"
                onClick={() => handleCardClick(1)}
                aria-label="View case study: Boyne Country HVAC"
              >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white dark:bg-[#0F1115] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 transform-gpu ring-1 ring-black/5 dark:ring-white/10">
                <div className="relative h-full">
                  <img
                    src="/images/hvac.png"
                    alt="Boyne Country HVAC project showcase"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white/90 text-sm">View case study →</span>
                  </div>
                  {clickedCard === 1 && (
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                      <div className="text-white text-lg font-semibold">Loading...</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-gray-900 font-semibold">Boyne Country HVAC</h3>
                <p className="text-sm text-gray-600">Website · Google Ads</p>
              </div>
            </div>
            </AnimatedCard>

            {/* Card 3 */}
            <AnimatedCard index={2}>
              <div
                className="group block cursor-pointer relative"
                onClick={() => handleCardClick(2)}
                aria-label="View case study: Edgewater Dock & Cottage"
              >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white dark:bg-[#0F1115] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 transform-gpu ring-1 ring-black/5 dark:ring-white/10">
                <div className="relative h-full">
                  <img
                    src="/wooden-dock-extending-into-lake-with-cottage-in-ba.png"
                    alt="Edgewater Dock & Cottage project showcase"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white/90 text-sm">View case study →</span>
                  </div>
                  {clickedCard === 2 && (
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                      <div className="text-white text-lg font-semibold">Loading...</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-gray-900 font-semibold">Edgewater Dock & Cottage</h3>
                <p className="text-sm text-gray-600">Website · GBP</p>
              </div>
            </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Who We Serve Video Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center -tracking-[0.02em] leading-[0.95] mb-12 text-gray-900"
            style={{ fontFamily: "Inter Tight, sans-serif" }}
          >
            OUR SOLUTIONS
          </h2>
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe 
                src="https://player.vimeo.com/video/1114113118?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                title="copy_3BF3D8D5-F888-4889-9AE9-5F2202872269"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
          
          <ServicesStrip />
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
            <form
              id="nxg-contact-form"
              method="POST"
              action="https://formspree.io/f/your-id"
              className="rounded-2xl bg-white dark:bg-[#0F1115] p-6 sm:p-8 ring-1 ring-black/5 dark:ring-white/10 shadow-sm"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      required
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9+\-\s()]*"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
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
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select budget</option>
                      <option value="undecided">Undecided</option>
                      <option value="under-2k">$2k</option>
                      <option value="2k-5k">$2k–$5k</option>
                      <option value="5k-10k">$5k–$10k</option>
                      <option value="10k-plus">$10k+</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="2-4-weeks">2–4 weeks</option>
                      <option value="1-3-months">1–3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-details"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="project-details"
                    name="project-details"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent dark:bg-gray-800 dark:text-white resize-vertical"
                    placeholder="Tell us about your business, goals, and what you're looking to achieve..."
                  ></textarea>
                </div>

                <div>
                  <label className="inline-flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 rounded border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      I agree to be contacted by NexGen. *
                    </span>
                  </label>
                </div>

                {/* Anti-spam honeypot */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <button
                    type="submit"
                    className="w-full h-12 px-6 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 active:bg-gray-700 transition-colors"
                  >
                    Send Message
                  </button>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">We reply within 24 hours.</p>
                </div>

                {/* Status messages */}
                <p id="form-success" className="hidden mt-3 text-green-600 dark:text-green-400" aria-live="polite">
                  Thanks! We received your message and will reply within 24 hours.
                </p>
                <p id="form-error" className="hidden mt-3 text-red-600 dark:text-red-400" aria-live="polite">
                  Something went wrong. Please try again or email us directly.
                </p>
              </div>
                          </form>
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
        </div>
      </div>
    </div>
  )
}
