"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { fadeInOnScroll } from "@/lib/animations";

const values = [
  {
    icon: "🔧",
    title: "Technical Excellence",
    description: "We deliver cutting-edge solutions with precision and expertise in every project.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Pushing boundaries in audio technology to create next-generation products.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "Collaborating closely with clients from concept through production.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About CPH Acoustics
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Audio Engineering Consulting
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Mission
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                CPH Acoustics was formed to support companies in their development requirements 
                in embedded DSP, Bluetooth audio, and hardware design. We provide specialized 
                consulting from concept through production for audio product development.
              </p>
              <p>
                Our team of experts brings decades of combined experience in audio engineering, 
                signal processing, and hardware design. We partner with electronics companies, 
                product managers, and engineering teams to transform challenging audio requirements 
                into market-ready solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-background-alt">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              What drives us to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Founder & Consultant Network
            </h2>
          </motion.div>

          <motion.div className="max-w-2xl mx-auto" {...fadeInOnScroll}>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-accent">
                    <Image
                      src="/1516275341508.jpeg"
                      alt="Ulrik Kjems - Founder"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl">Ulrik Kjems</CardTitle>
                <p className="text-accent font-medium">Founder & Lead Consultant</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Expert in DSP algorithm development, Bluetooth audio solutions, and 
                  hardware design. Based in Copenhagen, Denmark.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/ulrikkjems/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 space-y-4 text-center">
              <h3 className="text-xl font-semibold text-primary">
                Consultant Network Expertise Areas:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• DSP Algorithm Development</li>
                <li>• Bluetooth & Wireless Audio</li>
                <li>• Analog & Digital Hardware Design</li>
                <li>• Acoustic Modeling & Measurement</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Let's discuss your audio development needs
            </h2>
            <Button variant="secondary" size="xl" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

