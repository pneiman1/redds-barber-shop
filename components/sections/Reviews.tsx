"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Reviews() {
  return (
    <Section id="reviews">
      <Container>
        <ScrollReveal variant="fadeInUp">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={32}
                    className={
                      i < Math.floor(siteConfig.business.rating.value)
                        ? "text-accent-500 fill-accent-500"
                        : "text-accent-500/30 fill-accent-500/30"
                    }
                  />
                ))}
              </div>
              <span className="text-4xl font-bold text-foreground">
                {siteConfig.business.rating.value}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Based on {siteConfig.business.rating.count} reviews from our
              valued customers
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeInUp" delay={0.2}>
          <div className="bg-background-secondary rounded-xl border-2 border-primary-500/30 overflow-hidden shadow-glow-red">
            <div className="p-6 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-b border-foreground/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Customer Reviews
                </h3>
                <a
                  href="https://www.yelp.com/biz/redds-barber-shop-club-san-diego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
                >
                  <Star size={20} className="fill-white" />
                  Read Reviews on Yelp
                </a>
              </div>
            </div>

            {/* Yelp Reviews Embed */}
            <div className="relative w-full min-h-[600px] bg-background">
              <iframe
                src="https://www.yelp.com/biz/redds-barber-shop-club-san-diego"
                className="w-full h-[700px] md:h-[800px]"
                style={{ border: 0 }}
                loading="lazy"
                title="Redd's Barber Shop Yelp Reviews"
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-t border-foreground/10 text-center">
              <p className="text-foreground-muted">
                Love our service? Leave us a review on{" "}
                <a
                  href="https://www.yelp.com/biz/redds-barber-shop-club-san-diego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 font-semibold"
                >
                  Yelp
                </a>
                !
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
