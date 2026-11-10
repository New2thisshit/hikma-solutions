/**
 * Company content. Every fact here comes from the previous version of
 * this site (offers, prices, timelines, portfolio items, FAQs).
 * Do not add testimonials, client logos or numbers that cannot be shown.
 */

export const offers = [
  {
    slug: "website-rescue",
    title: "Website Rescue Sprint",
    price: "From R3,500",
    timeline: "3 to 7 days",
    summary:
      "For businesses that already have a website, but it feels generic, outdated, slow, confusing, or poor at generating enquiries.",
    includes: [
      "Homepage and messaging audit",
      "Hero section rewrite",
      "Contact and WhatsApp journey improvements",
      "Mobile layout clean-up",
      "Trust and SEO basics checklist",
    ],
    outcome: "A clearer site that gives visitors a reason to contact you.",
  },
  {
    slug: "business-website",
    title: "Business Website Build",
    price: "From R8,000",
    timeline: "2 to 4 weeks",
    summary:
      "For local service businesses that need a professional website built around trust, speed, mobile use and enquiries.",
    includes: [
      "Five core pages: Home, Services, About, Work, Contact",
      "Copywriting and page structure",
      "Responsive Next.js build",
      "Contact form and WhatsApp integration",
      "Launch setup and SEO basics",
    ],
    outcome: "A polished website you can confidently send to prospects.",
  },
  {
    slug: "operations-prototype",
    title: "Operations System Prototype",
    price: "From R15,000",
    timeline: "1 to 3 weeks",
    summary:
      "For teams still running important work through paper forms, WhatsApp messages, spreadsheets or manual admin.",
    includes: [
      "Workflow mapping session",
      "User roles and data model plan",
      "Clickable dashboard or app prototype",
      "Core feature backlog",
      "Fixed-scope estimate for the full build",
    ],
    outcome: "A practical prototype that turns a vague software idea into a buildable system.",
  },
];

export const processSteps = [
  {
    title: "Diagnose",
    copy: "We start with the business problem, not the technology. What is costing time, enquiries, trust or money?",
  },
  {
    title: "Simplify",
    copy: "We reduce the work to the smallest useful version that makes a visible improvement.",
  },
  {
    title: "Build",
    copy: "You get a clean, responsive build with weekly updates and practical handover notes.",
  },
  {
    title: "Improve",
    copy: "After launch, real feedback shapes the next round of changes to the page, workflow or product.",
  },
];

export const useCases = [
  "A panel beater needs more quote requests and stronger trust signals.",
  "A construction company needs a cleaner portfolio and enquiry flow.",
  "A fleet team needs digital inspections, logs, handovers and reports.",
  "A professional services firm needs a sharper site and better lead capture.",
  "A founder needs an app idea reduced to a realistic first launch.",
];

export const principles = [
  {
    title: "Business problem first",
    copy: "A website, dashboard or app only matters if it solves a real problem: more enquiries, less admin, faster decisions or clearer reporting.",
  },
  {
    title: "Small useful version first",
    copy: "We avoid oversized builds. The first version should create a visible win before the project grows.",
  },
  {
    title: "Clear communication",
    copy: "You always know what is being built, what is blocked, what changed and what decision is needed next.",
  },
];

/*
 * TODO(owner): replace or extend these with real case studies once clients
 * agree to be named: the problem, what was built, screenshots and a live
 * link. Keep the "kind" honest: "Concept build" means a demo we made
 * ourselves, not paid client work.
 */
export const workItems = [
  {
    title: "SA Radio and Podcasts directory",
    kind: "Live project",
    summary:
      "A search-indexable directory of South African radio stations and podcasts, built around structured content and clean pages.",
    focus: ["Structured content model", "Fast, indexable pages", "Built for long-term organic traffic"],
    // TODO(owner): add the live URL and a screenshot for this project.
    url: null as string | null,
  },
  {
    title: "Fleet logsheet and inspection system",
    kind: "Concept build",
    summary:
      "A paperless workflow for drivers, vehicle inspections, handovers, damage reports, supervisor approvals and fleet admin dashboards.",
    focus: ["Driver and supervisor roles", "Inspection and handover flows", "Admin reporting dashboards"],
    url: null as string | null,
  },
  {
    title: "Panel beater website",
    kind: "Concept build",
    summary:
      "A website concept for a panel beater, built around showing the work: before-and-after photos, repair categories, accreditations and quote requests.",
    focus: ["Before-and-after work", "Repair categories", "Quote-first contact flow"],
    url: null as string | null,
  },
];

export const faqs = [
  {
    q: "Can you improve my existing website instead of rebuilding everything?",
    a: "Yes. The Website Rescue Sprint is designed for that. We focus on copy, the path to contact, mobile layout, trust and the changes most likely to bring in enquiries.",
  },
  {
    q: "What should I send first?",
    a: "Your current website link, and what you want more of: calls, WhatsApps, quote requests, bookings or credibility.",
  },
  {
    q: "What does a website build usually include?",
    a: "The main pages, copy structure, responsive design, WhatsApp and contact flow, SEO basics and launch setup.",
  },
  {
    q: "Do you work with South African businesses?",
    a: "Yes. Hikma Solutions is based in Durban and focuses on websites and business systems for South African companies.",
  },
  {
    q: "Can you turn spreadsheets or paper forms into software?",
    a: "Yes. The best starting point is a prototype that maps the workflow, the people involved, the data and the first useful build.",
  },
  {
    q: "Can you build an app?",
    a: "Yes, but the first step is reducing the idea to a focused launch version so the project does not grow too large too early.",
  },
];
