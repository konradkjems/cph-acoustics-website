"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInOnScroll } from "@/lib/animations";

const categories = ["All", "Consumer Electronics", "Automotive", "Professional Audio", "IoT", "R&D"];

const projects = [
  {
    title: "Wireless Earbuds DSP",
    category: "Consumer Electronics",
    technologies: ["DSP", "Bluetooth", "Microphone Array"],
    description: "Custom DSP algorithms for active noise cancellation and spatial audio",
  },
  {
    title: "Premium Car Audio System",
    category: "Automotive",
    technologies: ["Bluetooth", "Hardware"],
    description: "Complete Bluetooth audio stack integration with multi-zone control",
  },
  {
    title: "Conference Room System",
    category: "Professional Audio",
    technologies: ["DSP", "Microphone Array", "Hardware"],
    description: "Advanced beamforming and echo cancellation for enterprise conferencing",
  },
  {
    title: "Smart Speaker Platform",
    category: "IoT",
    technologies: ["DSP", "Hardware"],
    description: "Voice-activated speaker with far-field microphone array",
  },
  {
    title: "Studio Monitoring System",
    category: "Professional Audio",
    technologies: ["DSP", "Hardware"],
    description: "High-fidelity audio processing for professional studio monitors",
  },
  {
    title: "Hearing Enhancement Device",
    category: "Consumer Electronics",
    technologies: ["DSP", "Bluetooth"],
    description: "Personal sound amplification with environmental adaptation",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Audio Engineering Excellence in Action
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-background-alt sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:border-accent">
                  <CardHeader>
                    {/* Placeholder image area */}
                    <div className="h-48 bg-gradient-to-br from-accent/20 to-accent-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-6xl opacity-50">🎵</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Project
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInOnScroll}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Interested in working together?
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

