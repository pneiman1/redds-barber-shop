"use client";

import { Map } from "@/components/ui/Map";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/config/site";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const { business } = siteConfig;
  const address = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <Section id="location" variant="secondary">
      <Container>
        <ScrollReveal variant="fadeInUp">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin size={40} className="text-primary-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Find Us Here
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Located in the heart of Pacific Beach, San Diego
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Map />

            <div className="mt-6 text-center">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
              >
                <Navigation size={20} />
                Get Directions
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">
                {business.address.street}
              </p>
              <p className="text-foreground-muted">
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <p className="text-foreground-muted mt-2">
                Phone:{" "}
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="text-primary-500 hover:text-primary-600 font-semibold"
                >
                  {business.phone}
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
