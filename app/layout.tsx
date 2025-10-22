import type { Metadata } from "next";
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
  keywords: ["acoustic consulting", "DSP development", "Bluetooth audio", "hardware design", "PCB design", "microphone arrays", "audio engineering"],
  authors: [{ name: "CPH Acoustics" }],
  openGraph: {
    title: "CPH Acoustics | Expert Audio Development Consulting",
    description: "Specialized consulting in embedded DSP, Bluetooth audio, and hardware design for audio product development.",
    url: "https://www.cph-acoustics.com",
    siteName: "CPH Acoustics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
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

