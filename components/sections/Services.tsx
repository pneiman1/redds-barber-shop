"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/config/site";
import { Clock, DollarSign, Star } from "lucide-react";

export function Services() {
  return (
    <Section id="services" variant="secondary">
      <Container>
        <ScrollReveal variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Premium grooming services tailored to your style and needs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              variant="fadeInUp"
              delay={index * 0.1}
            >
              <Card hoverable glowOnHover className="h-full">
                <div className="flex flex-col h-full">
                  {service.popular && (
                    <div className="flex items-center gap-2 mb-3">
                      <Star
                        size={16}
                        className="text-red-400 fill-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]"
                      />
                      <span className="text-xs font-semibold text-red-400 uppercase drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
                        Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {service.name}
                  </h3>

                  <p className="text-foreground-muted mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <div className="flex items-center gap-2 text-primary-500">
                      <DollarSign size={18} />
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <Clock size={18} />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
