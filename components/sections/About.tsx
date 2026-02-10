"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/config/site";
import { Award, Scissors, Users } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Scissors,
      title: "Expert Craftsmanship",
      description:
        "Our skilled barbers bring years of experience and dedication to every cut and style.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "We take the time to understand your style and deliver results that exceed expectations.",
    },
    {
      icon: Award,
      title: "Premium Experience",
      description:
        "From the moment you walk in, enjoy a classic barbershop atmosphere with modern amenities.",
    },
  ];

  return (
    <Section id="about" variant="secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fadeInUp">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About {siteConfig.business.name}
              </h2>
              <div className="space-y-4 text-foreground-muted">
                <p className="text-lg leading-relaxed">
                  Welcome to {siteConfig.business.name}, where tradition meets
                  modern style. Located in the heart of Pacific Beach,
                  we&apos;ve been providing premium grooming services to discerning
                  gentlemen who appreciate quality and craftsmanship.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team of experienced barbers is passionate about their craft,
                  staying current with the latest trends while honoring classic
                  techniques. Whether you&apos;re looking for a traditional cut, a
                  modern fade, or a relaxing hot shave, we deliver an exceptional
                  experience every time.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe grooming is more than just a service—it&apos;s an art form
                  and a ritual. That&apos;s why we&apos;ve created a welcoming space where
                  you can relax, refresh, and leave looking your absolute best.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.2}>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-background rounded-lg border border-foreground/10"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                        <Icon className="text-primary-500" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
