import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  const { business, social } = siteConfig;

  return (
    <footer className="bg-background-secondary border-t border-foreground/10 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-4">
              {business.name}
            </h3>
            <p className="text-foreground-muted mb-4">{business.tagline}</p>
            <div className="flex gap-4">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-2 text-foreground-muted">
              <p>{business.address.street}</p>
              <p>
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </p>
              <p>{business.phone}</p>
              <p>{business.email}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Hours</h4>
            <div className="space-y-1 text-foreground-muted text-sm">
              {Object.entries(business.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize">{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-foreground-muted text-sm">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
