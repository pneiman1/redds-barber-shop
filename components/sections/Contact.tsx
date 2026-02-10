"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const { business } = siteConfig;

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: business.phone,
      href: `tel:${business.phone.replace(/\D/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: business.email,
      href: `mailto:${business.email}`,
    },
  ];

  return (
    <Section id="contact">
      <Container>
        <ScrollReveal variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Book Your Appointment
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Ready for a premium grooming experience? Schedule your visit today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <ScrollReveal key={index} variant="fadeInUp" delay={index * 0.1}>
                <div className="bg-background-secondary p-6 rounded-lg border border-foreground/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-500" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground-muted hover:text-primary-500 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground-muted">{info.value}</p>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="fadeInUp" delay={0.3}>
          <div className="mb-12">
            <div className="bg-background-secondary p-6 rounded-lg border border-foreground/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary-500" size={24} />
                <h3 className="text-xl font-semibold text-foreground">
                  Business Hours
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(business.hours).map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between text-foreground-muted"
                  >
                    <span className="capitalize font-medium">{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
