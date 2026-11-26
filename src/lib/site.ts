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
  ask: string;
};

/*
 * Prices live here so they can be changed in one place.
 * Keep the language simple: short sentences, everyday words.
 */
export const buildOffers: Offer[] = [
  {
    slug: "website-rescue",
    name: "Fix my website",
    price: "From R3,500",
    timeline: "3 to 7 days",
    summary:
      "You have a website, but it isn’t bringing in calls. I find out why and fix it.",
    includes: [
      "I look at your site the way a new customer would",
      "Clearer words at the top of the page",
      "Works properly on phones",
      "A WhatsApp button people actually see",
      "Basic Google setup so people can find you",
    ],
    ask: "Hi Hikma, can you look at my website? It’s: ",
  },
  {
    slug: "website-build",
    name: "New website",
    price: "From R8,000",
    timeline: "2 to 4 weeks",
    summary:
      "A new site for your business. I write it, design it, build it and check it’s safe before it goes live.",
    includes: [
      "Home, services, about, your work and contact pages",
      "I write the words with you, so it sounds like your business",
      "Fast on phones",
      "Contact form and WhatsApp",
      "Security set up from day one",
    ],
    ask: "Hi Hikma, I need a new website for my business: ",
  },
  {
    slug: "systems",
    name: "Replace the spreadsheet",
    price: "From R15,000",
    timeline: "1 to 3 weeks",
    summary:
      "Your team runs on paper forms, spreadsheets or a busy WhatsApp group. I turn that into a clickable test version your team can try. Then you get a fixed quote for the real app.",
    includes: [
      "We sit down and map how the work happens now",
      "A clickable version your team can test",
      "Who sees what, and what gets saved",
      "A list of what goes in version one",
      "A fixed quote for building the real thing",
    ],
    ask: "Hi Hikma, I want to get this off a spreadsheet: ",
  },
];

export const securityOffers: Offer[] = [
  {
    slug: "health-check",
    name: "Security check",
    price: "From R2,500",
    timeline: "3 to 5 days",
    summary:
      "I look at your business from the outside, the way a hacker would start. Website, domain, email, anything left open.",
    includes: [
      "Out-of-date software and plugins",
      "Admin pages anyone can find",
      "Whether scammers can fake emails from your address",
      "Whether your site’s padlock and safety settings are set up right",
      "A short report: what’s wrong, why it matters, what to fix first",
    ],
    ask: "Hi Hikma, I’d like a security check for: ",
  },
  {
    slug: "pentest",
    name: "Break-in test (pen test)",
    price: "From R12,000",
    timeline: "1 to 2 weeks",
    summary:
      "For apps where customers log in, pay or upload things. With your written OK, I try to break in by hand and show you exactly how I did it.",
    includes: [
      "One web app, up to two types of user. Bigger apps get their own quote",
      "We agree in writing what I can and can’t touch",
      "Can one customer see another customer’s data?",
      "Can someone skip the login or the payment?",
      "Can a bad upload or form take over the system?",
      "Full report with proof, plus one retest within 30 days"
    ],
    ask: "Hi Hikma, I’d like a break-in test (pen test) on our app: ",
  },
  {
    slug: "hardening",
    name: "Fix and lock down",
    price: "From R4,500",
    timeline: "2 to 10 days",
    summary:
      "Got a report, from me or someone else? I fix the problems, even on sites I didn’t build.",
    includes: [
      "Update everything that’s out of date",
      "Two-step login for every admin account",
      "Remove old logins nobody uses",
      "Backups stored somewhere else, and tested",
      "A record of what I changed",
    ],
    ask: "Hi Hikma, I need help fixing security problems on: ",
  },
  {
    slug: "watch",
    name: "Monthly check-up",
    price: "From R1,200 a month",
    timeline: "Ongoing",
    summary:
      "I keep an eye on your site every month, keep it updated, and tell you if anything changes.",
    includes: [
      "A scan every month, with a short update",
      "Software and plugin updates",
      "A heads-up if your site goes down",
      "Backups checked",
      "If something goes wrong, you message me first"
    ],
    ask: "Hi Hikma, I’m interested in a monthly check-up for: ",
  },
];

export const work = [
  {
    kind: "Demo",
    title: "Fleet logbook and inspection app",
    copy: "Drivers fill in trip logs and vehicle checks on their phones. Supervisors approve them. No more paper.",
  },
  {
    kind: "Demo",
    title: "Panel beater website",
    copy: "Before-and-after repair photos, insurer approvals and a quick quote button.",
  },
  {
    kind: "Live",
    title: "SA Radio and Podcasts directory",
    copy: "A searchable list of South African radio stations and podcasts.",
  },
];
