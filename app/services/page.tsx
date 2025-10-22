"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeInOnScroll } from "@/lib/animations";

const services = [
  {
    title: "Embedded DSP Development",
    icon: "🔊",
    image: "/circuit board.jpg",
    description: "Custom DSP Algorithm Development",
    features: [
      "Real-time audio processing",
      "Echo cancellation & beamforming",
      "Algorithm optimization",
      "Embedded platform integration",
    ],
  },
  {
    title: "Bluetooth Audio Solutions",
    icon: "📡",
    image: "/bluetooth speaker.jpg",
    description: "Bluetooth Audio Stack",
    features: [
      "Low-latency audio transmission",
      "Audio codec integration",
      "Multi-device connectivity",
      "Power optimization",
      "Certification support",
    ],
  },
  {
    title: "Hardware & PCB Design",
    icon: "⚡",
    image: "/pcb.jpg",
    description: "Audio Hardware Design",
    features: [
      "Analog audio circuit design",
      "Digital signal routing",
      "EMC/EMI optimization",
      "Prototype development",
    ],
  },
  {
    title: "Acoustic Engineering",
    icon: "🎙️",
    image: "/microphoe array.jpg",
    description: "Acoustic Solutions",
    features: [
      "Microphone array design",
      "Voice control systems",
      "Handsfree communication",
      "Acoustic modeling",
      "Audio measurements",
    ],
  },
];

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We work with consumer electronics manufacturers, automotive audio system developers, professional audio equipment companies, IoT device manufacturers, and product development teams across various industries.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical DSP algorithm development project takes 2-4 months, while complete product development from concept to production can take 6-12 months. We work closely with clients to establish realistic timelines.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer maintenance and support services for completed projects. This includes bug fixes, optimization, updates, and technical consultation as needed.",
  },
  {
    question: "Can you work with existing development teams?",
    answer: "Absolutely. We frequently collaborate with in-house engineering teams, providing specialized expertise in audio DSP, Bluetooth, or hardware design to complement existing capabilities.",
  },
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Audio Development Consulting
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeInOnScroll}>
            <p className="text-lg text-muted-foreground">
              We offer specialized consulting in embedded DSP, Bluetooth audio, and hardware 
              design for audio product development—from concept through production.
            </p>
          </motion.div>

          {/* Service Sections */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="space-y-4">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                      <p className="text-xl text-accent font-medium">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                    <Card className="h-64 bg-gradient-to-br from-accent/10 to-accent-secondary/5 overflow-hidden">
                      <CardContent className="p-0 h-full relative">
                        <Image 
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <>
                    <Card className="h-64 bg-gradient-to-br from-accent-secondary/10 to-accent-tertiary/5 overflow-hidden">
                      <CardContent className="p-0 h-full relative">
                        <Image 
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </CardContent>
                    </Card>
                    <div className="space-y-4">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                      <p className="text-xl text-accent font-medium">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-background-alt">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div className="max-w-3xl mx-auto" {...fadeInOnScroll}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg">
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Need help with your audio product development?
            </h2>
            <Button variant="secondary" size="xl" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

