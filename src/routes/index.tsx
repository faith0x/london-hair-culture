import { createFileRoute } from "@tanstack/react-router";
import { SalonHeader } from "@/components/SalonHeader";
import { Hero } from "@/components/Hero";
import { BraidingServices } from "@/components/BraidingServices";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingCTA } from "@/components/BookingCTA";
import { LocationMap } from "@/components/LocationMap";
import { SalonFooter } from "@/components/SalonFooter";
import { salon, fullAddress } from "@/lib/salon";

const title = "Dazzlemehair — Black Hair Braiding in Middlesbrough";
const description =
  "Dazzlemehair is a Middlesbrough braiding studio specialising in box braids, knotless braids, cornrows, twists and protective styles for Black hair. Wigs too. Book on WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: salon.name,
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
    "Box braids",
    "Knotless braids",
    "Cornrows",
    "Twists",
    "Protective styles",
    "Wigs",
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
        <BraidingServices />
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
