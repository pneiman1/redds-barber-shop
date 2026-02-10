"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const galleryImages = [
    { id: 1, src: "/images/gallery-1.jpg", alt: "Premium barbershop experience" },
    { id: 2, src: "/images/gallery-2.jpg", alt: "Skin fade haircut" },
    { id: 3, src: "/images/gallery-3.jpg", alt: "Drop skin fade" },
    { id: 4, src: "/images/gallery-4.jpg", alt: "Kids shadow fade comb over" },
    { id: 5, src: "/images/gallery-5.jpg", alt: "Mid skin fade comb over" },
    { id: 6, src: "/images/barbershop-interior.jpg", alt: "Redd's Barber Shop interior" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/barbershop-interior.jpg"
          alt="Redd's Barber Shop Interior"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark Fade Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
        {/* Subtle red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
      </div>

      <Container className="relative z-10 text-center">
        <FadeIn variant="fadeInScale" duration={0.8}>
          <h1 className="logo-font text-6xl md:text-8xl mb-3 text-foreground tracking-wider">
            {siteConfig.business.name}
          </h1>
          <p className="logo-font text-2xl md:text-3xl text-primary-500 mb-6 tracking-wider">
            Pacific Beach - San Diego
          </p>
        </FadeIn>

        <FadeIn variant="fadeInUp" delay={0.3} duration={0.8}>
          <p className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-2xl mx-auto">
            {siteConfig.business.tagline}
          </p>
        </FadeIn>

        {/* Gallery Grid */}
        <FadeIn variant="fadeInUp" delay={0.6} duration={0.8}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative aspect-square bg-background-secondary rounded-lg overflow-hidden border-2 border-primary-500/30 shadow-glow-red group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(220, 38, 38, 0.6)" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </Container>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
