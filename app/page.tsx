"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroHome } from "@/components/sections/hero-home";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInOnScroll } from "@/lib/animations";

const services = [
  {
    icon: "🔊",
    title: "Embedded DSP Development",
    description: "Custom algorithms, real-time processing, and optimization for embedded platforms.",
  },
  {
    icon: "📡",
    title: "Bluetooth Audio",
    description: "Low-latency transmission, audio codec integration, and certification support.",
  },
  {
    icon: "⚡",
    title: "Hardware & PCB Design",
    description: "Analog/digital circuits, signal routing, and EMC/EMI optimization.",
  },
  {
    icon: "🎙️",
    title: "Acoustic Engineering",
    description: "Microphone arrays, voice control systems, and handsfree communication.",
  },
];

const featuredProjects = [
  {
    title: "Consumer Audio Device",
    category: "Consumer Electronics",
    description: "DSP algorithm development for next-generation headphones",
  },
  {
    title: "Automotive Audio System",
    category: "Automotive",
    description: "Bluetooth audio stack integration for premium vehicle",
  },
  {
    title: "IoT Smart Speaker",
    category: "IoT",
    description: "Complete hardware and software design for voice-activated device",
  },
];

export default function Home() {
  return (
    <>
      <HeroHome />

      {/* Intro Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...fadeInOnScroll}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Your Partner in Audio Product Development
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CPH Acoustics is a network of specialized consultants supporting companies in their audio product development. 
              We bring deep expertise in embedded DSP, Bluetooth audio solutions, and hardware design—from concept through production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing bg-background-alt">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our recent work in audio engineering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-accent">
                  <CardHeader>
                    <div className="text-sm text-accent mb-2">
                      {project.category}
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/projects">View Project</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" {...fadeInOnScroll}>
            <Button variant="primary" size="lg" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive audio engineering expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" {...fadeInOnScroll}>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready to bring your audio product to market?
            </h2>
            <Button variant="secondary" size="xl" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

