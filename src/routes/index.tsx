import { createFileRoute } from "@tanstack/react-router";
import { SalonHeader } from "@/components/SalonHeader";
import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { HomeServicesToggle } from "@/components/HomeServicesToggle";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingCTA } from "@/components/BookingCTA";
import { LocationMap } from "@/components/LocationMap";
import { SalonFooter } from "@/components/SalonFooter";

import { salon, fullAddress } from "@/lib/salon";

const title = "Dazzle Me — Hair & African Fashion in Middlesbrough";
const description =
  "Dazzle Me is a Middlesbrough atelier blending heritage Black hair — braids, wigs, locs, weaving, extensions — with custom-made African fashion and alterations. Book on WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "ClothingStore"],
  name: salon.fullName,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: salon.addressLine,
    addressLocality: salon.city,
    addressCountry: "GB",
  },
  telephone: `+${salon.phoneIntl}`,
  areaServed: salon.city,
  knowsAbout: [
    "Braiding",
    "Wig making",
    "Wig revamping",
    "Dreadlocks",
    "Weaving",
    "Hair extensions",
    "Custom-made clothing",
    "Alterations",
    "African fashion",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SalonHeader />
      <main>
        <Hero />
        <Divider />
        <HomeServicesToggle />
        <Story />
        <Gallery />
        <Testimonials />
        <BookingCTA />
        <LocationMap />
      </main>
      <SalonFooter />
      <span className="sr-only">{fullAddress}</span>
    </div>
  );
}
