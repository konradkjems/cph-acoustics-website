import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/CPH Acoustics Icon.svg"
              alt="CPH Acoustics Icon"
              width={48}
              height={48}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">CPH Acoustics</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  Andebakkesti 6<br />
                  2000 Frederiksberg<br />
                  Denmark
                </span>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Embedded DSP Development</li>
              <li>Bluetooth Audio Solutions</li>
              <li>Hardware & PCB Design</li>
              <li>Acoustic Engineering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+4527282817"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+45 27 28 28 17</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cph-acoustics.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@cph-acoustics.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ulrikkjems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © 2025 CPH Acoustics (Ulrik Kjems). All rights reserved. CVR: DK44982889
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

