export const siteConfig = {
  name: "Hikma Solutions",
  legalName: "HIKMA SOLUTIONS (Pty) Ltd",
  location: "Durban, South Africa",
  email: "contact@hikmasolutions.co.za",
  phone: "+27 61 088 4755",
  whatsapp: "27610884755",
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;

export type Offer = {
  slug: string;
  name: string;
  price: string;
  timeline: string;
  summary: string;
  includes: string[];
  outcome: string;
  ask: string;
};

/*
 * Prices live here so they can be changed in one place.
 */
export const buildOffers: Offer[] = [
  {
    slug: "website-rescue",
    name: "Website rescue",
    price: "From R3,500",
    timeline: "3–7 days",
    summary:
      "Your site exists but visitors leave without calling. We fix the message, the mobile layout and the path to WhatsApp.",
    includes: [
      "Homepage and messaging review",
      "Rewritten hero and calls to action",
      "Mobile layout fixes",
      "WhatsApp and contact journey",
      "SEO basics and launch checklist",
    ],
    outcome: "A site that gives visitors a reason to get in touch.",
    ask: "Hi Hikma, I'd like a website rescue. My site is: ",
  },
  {
    slug: "website-build",
    name: "Business website",
    price: "From R8,000",
    timeline: "2–4 weeks",
    summary:
      "A new site for a service business, written and built around trust, speed on mobile and getting quote requests.",
    includes: [
      "Home, Services, About, Work and Contact pages",
      "Copywriting and page structure",
      "Responsive Next.js build",
      "Contact form and WhatsApp",
      "Security headers and analytics set up at launch",
    ],
    outcome: "A site you can confidently send to prospects.",
    ask: "Hi Hikma, I need a new business website for: ",
  },
  {
    slug: "systems",
    name: "Business system prototype",
    price: "From R15,000",
    timeline: "1–3 weeks",
    summary:
      "For teams running important work on paper, spreadsheets or WhatsApp groups. We map it and prototype the software.",
    includes: [
      "Workflow mapping session",
      "User roles and data plan",
      "Clickable dashboard or app prototype",
      "Feature list for version one",
      "Fixed-scope quote for the full build",
    ],
    outcome: "A prototype your team can try before you commit to a build.",
    ask: "Hi Hikma, I want to turn this process into a system: ",
  },
];

export const securityOffers: Offer[] = [
  {
    slug: "health-check",
    name: "Security health check",
    price: "From R2,500",
    timeline: "3–5 days",
    summary:
      "A look at your business from the outside, the way an attacker would start: your website, domain, email and anything left exposed.",
    includes: [
      "Website and hosting configuration review",
      "SSL, security headers and outdated software",
      "Email spoofing protection (SPF, DKIM, DMARC)",
      "Exposed admin panels, files and services",
      "Plain-language report with fixes in priority order",
    ],
    outcome: "A short list of what to fix first, and why.",
    ask: "Hi Hikma, I'd like a security health check for: ",
  },
  {
    slug: "pentest",
    name: "Web app penetration test",
    price: "From R12,000",
    timeline: "1–2 weeks",
    summary:
      "Hands-on testing of your web app, portal or API: logins, permissions, payments and the data customers trust you with.",
    includes: [
      "Scoping call and signed authorisation letter",
      "Manual testing guided by the OWASP Top 10",
      "Login, session and access control testing",
      "Injection, file upload and business logic flaws",
      "Report with evidence, risk ratings and one free retest",
    ],
    outcome: "Proof of what can be broken, before someone else finds it.",
    ask: "Hi Hikma, I'd like a penetration test for our web app: ",
  },
  {
    slug: "hardening",
    name: "Fix and harden",
    price: "From R4,500",
    timeline: "2–10 days",
    summary:
      "We fix what the report found, on sites we built or ones we didn't: updates, configuration, access and backups.",
    includes: [
      "Patch and update CMS, plugins and dependencies",
      "Security headers, firewall and Cloudflare setup",
      "Two-factor login and admin access clean-up",
      "Off-site backups with a restore test",
      "Before-and-after evidence for your records",
    ],
    outcome: "The issues closed, with a record of what changed.",
    ask: "Hi Hikma, I have a security report and need help fixing it.",
  },
  {
    slug: "watch",
    name: "Monthly watch",
    price: "From R1,200 / month",
    timeline: "Ongoing",
    summary:
      "Light, ongoing cover for small businesses: we check monthly, patch what needs patching and tell you when something changes.",
    includes: [
      "Monthly external scan and change report",
      "Software and plugin updates",
      "Uptime and SSL expiry monitoring",
      "Backup checks",
      "First response if something goes wrong",
    ],
    outcome: "Someone keeping an eye on it, every month.",
    ask: "Hi Hikma, I'm interested in monthly security cover for: ",
  },
];

export const work = [
  {
    kind: "Demo build",
    title: "Fleet logsheet and inspection system",
    copy: "Paperless trip logs, vehicle inspections, handovers, damage reports and supervisor approvals for a provincial fleet team.",
  },
  {
    kind: "Demo build",
    title: "Panel beater website",
    copy: "A quote-focused site with before-and-after repair photos, insurer approvals and repair categories.",
  },
  {
    kind: "Live project",
    title: "SA Radio and Podcasts directory",
    copy: "A search-friendly directory of South African stations and shows, built on structured content for organic traffic.",
  },
];
