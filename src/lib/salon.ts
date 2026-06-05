// Central salon details. PLACEHOLDERS marked TODO — swap with real values.
export const salon = {
  name: "Dazzle Me Fashion LTD",
  fullName: "Dazzle Me Fashion LTD",
  tagline: "Hair styling and custom cloth sewing services",
  addressLine: "Unit 19a/24 Dundas Arcade Shopping Centre",
  city: "Middlesbrough",
  postcode: "TS1", // TODO: confirm full postcode
  // TODO: replace with the real WhatsApp/phone number (international format, no +)
  phoneIntl: "447863088786",
  // Display version of the phone number
  phoneDisplay: "+44 7863 088786",
  // TODO: confirm opening hours
  hours: [
    { day: "Mon – Sat", time: "10:00 — 17:00" },
    { day: "Sunday", time: "Closed" },
    { day: "Bank Holidays", time: "Closed" },
  ],
} as const;

export const fullAddress = `${salon.addressLine}, ${salon.city}`;

const bookingMessage = encodeURIComponent(
  "Hi Dazzle Me! I'd love to book an appointment.",
);

export const whatsappUrl = `https://wa.me/${salon.phoneIntl}?text=${bookingMessage}`;
export const telUrl = `tel:+${salon.phoneIntl}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${salon.addressLine}, ${salon.city}`,
)}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${salon.addressLine}, ${salon.city}`,
)}`;

export const hairServices = [
  {
    name: "Braiding",
    blurb:
      "Box braids, knotless, cornrows, feed-ins, twists — neat parts, clean tension, styles that last.",
  },
  {
    name: "Wig Making",
    blurb:
      "Custom wigs built to your measurements, density and texture — natural-looking, comfortable, made to last.",
  },
  {
    name: "Wig Revamping",
    blurb:
      "Bring an old wig back to life — washing, restyling, replacing lace and refreshing the parting.",
  },
  {
    name: "Dreadlocks",
    blurb:
      "Starts, retwists and maintenance for healthy, well-kept locs in styles that suit you.",
  },
  {
    name: "Weaving",
    blurb:
      "Sew-ins and weave installs with a flawless blend and a leave-out that looks effortlessly natural.",
  },
  {
    name: "Hair Extensions",
    blurb:
      "Discreet, secure extensions for added length and volume — fitted with care for your natural hair.",
  },
] as const;

export const fashionServices = [
  {
    name: "Custom-Made Clothing",
    blurb:
      "Bespoke garments designed and tailored to your measurements — every seam considered, every detail intentional.",
  },
  {
    name: "Alterations",
    blurb:
      "Expert reshaping and resizing so the pieces you already love fit you perfectly.",
  },
  {
    name: "African Fashion",
    blurb:
      "Ankara, lace and wax-print pieces — gowns, two-pieces and occasion-wear crafted with heritage and care.",
  },
] as const;
