import { siteConfig } from "@/config/site";

export function getStructuredData() {
  const { business, url } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BarberShop",
        "@id": `${url}/#barbershop`,
        name: business.name,
        description: business.description,
        url: url,
        telephone: business.phone,
        email: business.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.state,
          postalCode: business.address.zip,
          addressCountry: business.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.coordinates.latitude,
          longitude: business.coordinates.longitude,
        },
        openingHoursSpecification: Object.entries(business.hours).map(
          ([day, hours]) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
            opens: hours.split(" - ")[0],
            closes: hours.split(" - ")[1],
          })
        ),
        priceRange: "$$",
        image: `${url}/images/hero.jpg`,
        sameAs: Object.values(siteConfig.social),
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: url,
        name: business.name,
        description: business.description,
        publisher: {
          "@id": `${url}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: business.name,
        url: url,
        logo: {
          "@type": "ImageObject",
          url: `${url}/images/logo.png`,
        },
        sameAs: Object.values(siteConfig.social),
      },
    ],
  };
}
