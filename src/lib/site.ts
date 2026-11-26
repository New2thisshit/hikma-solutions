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

export type WorkLink = { label: string; href: string };

export type WorkItem = {
  slug: string;
  kind: string;
  title: string;
  copy: string;
  image?: string;
  imageAlt?: string;
  links: WorkLink[];
};

export const redirectApp = {
  title: "Redirect",
  tagline: "A porn blocker that helps in the moment.",
  copy: "My own Android app. When an urge shows up, Redirect gives you a 90-second pause, then the plan you wrote on a calmer day. Blocking known adult sites is optional. No account, no streaks, no ads.",
  icon: "/work/redirect-icon.png",
  screens: [
    { src: "/work/redirect-home.webp", alt: "Redirect home screen" },
    { src: "/work/redirect-breathe.webp", alt: "Redirect 90-second breathing pause" },
    { src: "/work/redirect-redirect.webp", alt: "Redirect screen shown when a blocked site is opened" },
  ],
  links: [
    { label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=com.redirect.app" },
    { label: "Visit the website", href: "https://redirect.hikmasolutions.co.za" },
  ],
};

export const work: WorkItem[] = [
  {
    slug: "sa-radio",
    kind: "Live",
    title: "SA Radio and Podcasts",
    copy: "94 South African radio stations on one dial. Turn the dial or search, then press play. No app, no sign-up.",
    image: "/work/sa-radio.webp",
    imageAlt: "SA Radio and Podcasts home page with the FM dial",
    links: [{ label: "Try the radio dial", href: "https://www.saradioandpodcasts.co.za" }],
  },
  {
    slug: "fleet",
    kind: "Client work",
    title: "Fleet logbook and inspection app",
    copy: "I’m building this for a health NGO with vehicles across a province. Drivers do their checks on a phone, and supervisors see every car in one place. No more paper logbooks. Try a small version of it.",
    links: [{ label: "Try the demo", href: "/work#fleet-demo" }],
  },
  {
    slug: "odes",
    kind: "Website",
    title: "Odirilejwang Enterprise",
    copy: "A website for a Durban HR consultancy: services, training, and a clear way to book a consultation.",
    image: "/work/odes.webp",
    imageAlt: "Odirilejwang Enterprise website home page",
    links: [{ label: "See the site", href: "https://odes-website.vercel.app" }],
  },
  {
    slug: "precision",
    kind: "Demo",
    title: "Panel beater website",
    copy: "A demo site for a made-up Cape Town panel beater. Before-and-after slider, insurer approvals, and quotes from a WhatsApp photo.",
    image: "/work/precision-auto-craft.webp",
    imageAlt: "Precision Auto Craft demo website home page",
    links: [{ label: "See the demo", href: "https://precision-auto-craft.vercel.app" }],
  },
];
