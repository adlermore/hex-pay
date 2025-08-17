import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Hex-Pays | Secure Payment Solutions for Modern Businesses",
  description:
    "Simple, reliable, and fast payment processing. PCI DSS Level 1 compliant with 99.9% uptime, fraud protection, and 24/7 support. Transform your business with our secure payment gateway.",
  keywords:
    "payment processing, payment gateway, secure payments, PCI DSS, fraud protection, business payments, online payments, payment solutions",
  authors: [{ name: "Hex-Pays" }],
  creator: "Hex-Pays",
  publisher: "Hex-Pays",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Hex-Pays | Secure Payment Solutions for Modern Businesses",
    description:
      "Simple, reliable, and fast payment processing. PCI DSS Level 1 compliant with 99.9% uptime, fraud protection, and 24/7 support.",
    siteName: "Hex-Pays",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hex-Pays - Secure Payment Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex-Pays | Secure Payment Solutions for Modern Businesses",
    description:
      "Simple, reliable, and fast payment processing. PCI DSS Level 1 compliant with 99.9% uptime, fraud protection, and 24/7 support.",
    images: ["/logo.png"],
    creator: "@hexpays",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
