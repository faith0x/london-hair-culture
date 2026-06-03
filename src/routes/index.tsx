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
import { ServiceFocusProvider } from "@/components/ServiceFocusContext";

import { salon, fullAddress } from "@/lib/salon";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <ServiceFocusProvider>
      <div className="min-h-screen bg-background">
        <SalonHeader />
        <main>
          <Hero />
          <Divider />
          <Story />
          <HomeServicesToggle />
          <Gallery />
          <Testimonials />
          <BookingCTA />
          <LocationMap />
        </main>
        <SalonFooter />
        <span className="sr-only">{fullAddress}</span>
      </div>
    </ServiceFocusProvider>
  );
}
