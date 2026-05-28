// Central salon details. PLACEHOLDERS marked TODO — swap with real values.
export const salon = {
  name: "Dazzlemehair",
  tagline: "Black hair braiding in Middlesbrough",
  addressLine: "92 Newport Road",
  city: "Middlesbrough",
  postcode: "TS1", // TODO: confirm full postcode
  // TODO: replace with the real WhatsApp/phone number (international format, no +)
  phoneIntl: "447000000000",
  // Display version of the phone number
  phoneDisplay: "+44 7000 000000",
  // TODO: confirm opening hours
  hours: [
    { day: "Mon – Fri", time: "9:00 — 19:00" },
    { day: "Saturday", time: "9:00 — 18:00" },
    { day: "Sunday", time: "By appointment" },
  ],
} as const;

export const fullAddress = `${salon.addressLine}, ${salon.city}`;

const bookingMessage = encodeURIComponent(
  "Hi Dazzlemehair! I'd love to book a braiding appointment.",
);

export const whatsappUrl = `https://wa.me/${salon.phoneIntl}?text=${bookingMessage}`;
export const telUrl = `tel:+${salon.phoneIntl}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${salon.addressLine}, ${salon.city}`,
)}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${salon.addressLine}, ${salon.city}`,
)}`;
