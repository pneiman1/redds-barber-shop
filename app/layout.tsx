import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { getStructuredData } from "@/lib/structured-data";
import { ChatWidget } from "@/components/ui/ChatWidget";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.business.name} | Premium Barbershop in ${siteConfig.business.address.city}`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.business.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.business.name }],
  creator: siteConfig.business.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.business.name,
    description: siteConfig.business.description,
    siteName: siteConfig.business.name,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.business.name,
    description: siteConfig.business.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${bebasNeue.variable} antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
