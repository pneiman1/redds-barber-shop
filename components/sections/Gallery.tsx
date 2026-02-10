"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
  const galleryImages = [
    { id: 1, src: "/images/barbershop-interior.jpg", alt: "Redd's Barber Shop interior" },
    { id: 2, src: "/images/gallery-1.jpg", alt: "Premium barbershop experience" },
    { id: 3, src: "/images/gallery-2.jpg", alt: "Skin fade haircut" },
    { id: 4, src: "/images/gallery-3.jpg", alt: "Drop skin fade" },
    { id: 5, src: "/images/gallery-4.jpg", alt: "Kids shadow fade comb over" },
    { id: 6, src: "/images/gallery-5.jpg", alt: "Mid skin fade comb over" },
  ];

  return (
    <Section id="gallery">
      <Container>
        <ScrollReveal variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gallery
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Step inside our premium barbershop and see the craftsmanship in action
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal
              key={image.id}
              variant="fadeInScale"
              delay={index * 0.1}
            >
              <motion.div
                className="relative aspect-square bg-background-secondary rounded-lg overflow-hidden border border-foreground/10 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
