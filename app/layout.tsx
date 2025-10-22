import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CPH Acoustics | Expert Audio Development Consulting",
  description: "CPH Acoustics provides specialized consulting in embedded DSP development, Bluetooth audio solutions, and hardware design for audio product development.",
  keywords: ["acoustic consulting", "DSP development", "Bluetooth audio", "hardware design", "PCB design", "microphone arrays", "audio engineering", "embedded systems", "signal processing", "audio codecs"],
  authors: [{ name: "CPH Acoustics" }],
  creator: "CPH Acoustics",
  publisher: "CPH Acoustics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.cph-acoustics.com",
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  openGraph: {
    title: "CPH Acoustics | Expert Audio Development Consulting",
    description: "Specialized consulting in embedded DSP, Bluetooth audio, and hardware design for audio product development.",
    url: "https://www.cph-acoustics.com",
    siteName: "CPH Acoustics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.cph-acoustics.com/CPH%20Acoustics%20Logo%20transparent.png",
        width: 1200,
        height: 630,
        alt: "CPH Acoustics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPH Acoustics | Expert Audio Development Consulting",
    description: "Specialized consulting in embedded DSP, Bluetooth audio, and hardware design for audio product development.",
    images: ["https://www.cph-acoustics.com/CPH%20Acoustics%20Logo%20transparent.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1B2B4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CPH Acoustics",
              "description": "Expert audio engineering consulting specializing in embedded DSP development, Bluetooth audio solutions, and hardware design.",
              "url": "https://www.cph-acoustics.vercel.app",
              "logo": "https://www.cph-acoustics.vercel.app/CPH%20Acoustics%20Logo%20transparent.png",
              "image": "https://www.cph-acoustics.vercel.app/CPH%20Acoustics%20Logo%20transparent.png",
              "telephone": "+45 27 28 28 17",
              "email": "info@cph-acoustics.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Andebakkesti 6",
                "addressLocality": "Frederiksberg",
                "postalCode": "2000",
                "addressCountry": "DK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "55.6761",
                "longitude": "12.5683"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Denmark"
              },
              "serviceType": [
                "Embedded DSP Development",
                "Bluetooth Audio Solutions", 
                "Hardware & PCB Design",
                "Acoustic Engineering"
              ],
              "founder": {
                "@type": "Person",
                "name": "Ulrik Kjems",
                "jobTitle": "Founder & Lead Consultant",
                "description": "Expert in DSP algorithm development, Bluetooth audio solutions, and hardware design",
                "url": "https://www.linkedin.com/in/ulrikkjems/"
              },
              "sameAs": [
                "https://www.linkedin.com/in/ulrikkjems/"
              ],
              "openingHours": "Mo-Fr 09:00-17:00",
              "priceRange": "$$",
              "currenciesAccepted": "DKK, EUR, USD"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

