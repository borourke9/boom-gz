import type React from "react"
import type { Metadata } from 'next'
import { Inter_Tight, Manrope, Playfair_Display, Bebas_Neue } from "next/font/google"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800"],
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
  weight: ["400"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${manrope.variable} ${playfairDisplay.variable} ${bebasNeue.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        
        {/* GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" />
        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-XXXX', { anonymize_ip: true });
        `}} />
        
        {/* Vimeo Player API */}
        <script src="https://player.vimeo.com/api/player.js" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexgensites.com'),
  title: {
    default: 'NEXGEN — Websites, Ads & AI for Service Businesses',
    template: '%s · NEXGEN',
  },
  description:
    'We build fast, branded sites, run Google & Meta ads, and add AI responders—so more clicks turn into calls and jobs in Northern Michigan.',
  keywords: [
    'web design', 'website', 'Google Ads', 'Meta Ads', 'local SEO', 'AI answering',
    'service businesses', 'Northern Michigan', 'Petoskey', 'Traverse City',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.nexgensites.com/',
    title: 'NEXGEN — Websites, Ads & AI for Service Businesses',
    description:
      'More calls, more jobs. Websites, Google & Meta ads, and AI responders for service businesses.',
    siteName: 'NEXGEN',
    images: [{ url: '/og/og-cover.jpg', width: 1200, height: 630, alt: 'NEXGEN' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXGEN — Websites, Ads & AI for Service Businesses',
    description:
      'Websites, Google & Meta ads, and AI responders for service businesses.',
    images: ['/og/og-cover.jpg'],
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};
