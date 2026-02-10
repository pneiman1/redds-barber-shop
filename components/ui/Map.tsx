"use client";

import { siteConfig } from "@/config/site";

export function Map() {
  const { business } = siteConfig;
  const address = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border-2 border-foreground/10">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${business.name}`}
      />
    </div>
  );
}
