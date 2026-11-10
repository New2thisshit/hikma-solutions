export const siteConfig = {
  name: "Hikma Solutions",
  legalName: "HIKMA SOLUTIONS (Pty) Ltd",
  location: "Durban, South Africa",
  email: "contact@hikmasolutions.co.za",
  phone: "+27 61 088 4755",
  whatsapp: "27610884755",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hikmasolutions.co.za",
};

export const whatsappLink = (text?: string) =>
  text
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${siteConfig.whatsapp}`;

/**
 * Redirect, our first app. Its own website, privacy policy and support
 * address are not final yet. Every link to them on this site reads from
 * these constants, so filling them in here updates the whole site.
 * While a value is still a placeholder, pages show a short "coming soon"
 * note instead of a dead link.
 */
export const redirect = {
  name: "Redirect",
  // TODO(owner): set Redirect's public website address.
  url: "https://example.invalid",
  // TODO(owner): set the address of Redirect's privacy policy page.
  privacyUrl: "https://example.invalid/privacy",
  // TODO(owner): set Redirect's support email address.
  supportEmail: "[SUPPORT-EMAIL]",
};

export const isPlaceholder = (value: string) =>
  value.includes("example.invalid") || /^\[.*\]$/.test(value);
