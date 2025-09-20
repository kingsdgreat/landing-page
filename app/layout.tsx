import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WelcomePopup } from "@/components/welcome-popup"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sundial Lands - Premium Land Investment Properties",
  description:
    "Your trusted partner in finding the perfect land property for your needs. Discover premium land properties for sale across prime locations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans overflow-x-hidden ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <WelcomePopup />
        <Analytics />
      </body>
    </html>
  )
}
