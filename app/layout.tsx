import type React from "react"
import { Inter_Tight, Manrope, Playfair_Display } from "next/font/google"
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${manrope.variable} ${playfairDisplay.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
