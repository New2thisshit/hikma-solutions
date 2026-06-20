import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi Hikma Solutions, I want help improving my website or business system."
)}`;

const painPoints = [
  {
    title: "Your website looks credible, but it does not bring in enough enquiries.",
    copy: "We tighten the message, mobile layout, calls-to-action, trust proof, and WhatsApp flow so visitors know exactly what to do next.",
  },
  {
    title: "Your team is still running important work through spreadsheets.",
    copy: "We turn messy manual tracking into clean dashboards, forms, roles, notifications, and reports your team can actually use.",
  },
  {
    title: "You have an app idea, but the scope keeps expanding.",
    copy: "We reduce the idea into a focused MVP, prototype the key screens, and build the smallest useful launch version first.",
  },
];

const offers = [
  {
    name: "Website Rescue Sprint",
    price: "From R3,500",
    bestFor: "Existing sites that look weak, feel generic, or fail to convert visitors.",
    deliverables: [
      "Homepage conversion audit",
      "Sharper hero section and CTA flow",
      "Mobile layout improvements",
      "WhatsApp and contact journey fixes",
      "SEO basics and launch checklist",
    ],
    cta: "Fix my website",
  },
  {
    name: "Business Website Build",
    price: "From R8,000",
    bestFor: "Service businesses that need a professional site built around leads and trust.",
    deliverables: [
      "5-page marketing website",
      "Copywriting and section strategy",
      "Responsive design and build",
      "Contact form and WhatsApp integration",
      "Analytics-ready launch setup",
    ],
    cta: "Build my website",
  },
  {
    name: "Operations System Prototype",
    price: "From R15,000",
    bestFor: "Teams using paper forms, WhatsApp, spreadsheets, or manual reporting.",
    deliverables: [
      "Workflow mapping session",
      "Clickable product prototype",
      "Core database and roles plan",
      "Dashboard or form flow concept",
      "Build estimate for the full system",
    ],
    cta: "Prototype my system",
  },
];

const proofItems = [
  {
    label: "Portfolio demo",
    title: "Fleet logsheet and inspection system",
    copy: "A paperless workflow concept for drivers, inspections, handovers, damage reports, supervisor approvals, and fleet admin dashboards.",
  },
  {
    label: "Portfolio demo",
    title: "Premium panel beater website",
    copy: "A trust-heavy website concept with before-and-after work proof, repair categories, accreditation sections, and quote-focused CTAs.",
  },
  {
    label: "Live project",
    title: "SA Radio and Podcasts directory",
    copy: "A search-indexable media directory built around structured content, clean pages, and long-term organic traffic potential.",
  },
];

const niches = [
  "Panel beaters and auto repair shops",
  "Construction and trade businesses",
  "Logistics, fleet, and field teams",
  "Professional services firms",
  "Local service businesses that need more leads",
];

export const metadata: Metadata = {
  title: "Hikma Solutions | Websites and Business Systems in Durban",
  description:
    "Durban-based website design and business systems for South African service businesses that need more enquiries and less manual admin.",
  openGraph: {
    title: "Hikma Solutions | Websites and Business Systems in Durban",
    description:
      "Websites, dashboards, and business systems for South African service businesses that need more enquiries and less manual admin.",
  },
};

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-18 pt-12 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-20">
        <div className="relative space-y-7">
          <div className="pointer-events-none absolute -left-16 -top-8 hidden h-32 w-32 rounded-full bg-[color:var(--aqua)] opacity-30 blur-2xl md:block float-slow" />
          <p className="eyebrow">Durban websites + business systems</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl fade-up">
            Get a website that wins enquiries and systems that remove admin drag.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg fade-up fade-delay-1">
            Hikma Solutions helps South African service businesses turn weak websites,
            manual spreadsheets, and WhatsApp chaos into clean digital assets that
            generate leads and make daily work easier.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row fade-up fade-delay-2">
            <a href={whatsappHref} className="btn-primary" data-magnet target="_blank" rel="noreferrer">
              WhatsApp me your website
            </a>
            <Link href="/services" className="btn-outline" data-magnet>
              See fixed offers
            </Link>
          </div>
          <p className="max-w-xl text-sm text-slate-600 fade-up fade-delay-3">
            Send your current website or describe the spreadsheet/process you want
            fixed. You will get a practical next step, not a vague sales pitch.
          </p>
          <div className="grid gap-3 pt-2 text-sm sm:grid-cols-3 fade-up fade-delay-4">
            {["Lead-focused websites", "Internal dashboards", "MVP prototypes"].map((item) => (
              <div key={item} className="panel px-4 py-3 font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel relative overflow-hidden p-6 md:p-8 soft-grid">
          <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[color:var(--aqua)] opacity-40 blur-2xl float-medium" />
          <div className="relative space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Best first step
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                Website Rescue Sprint
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                A low-risk starting offer for local businesses that already have a site
                but are not getting enough trust, calls, WhatsApps, or quote requests.
              </p>
            </div>
            <div className="rounded-3xl border p-5" style={{ borderColor: "var(--panel-border)", backgroundColor: "var(--panel)" }}>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Starting point</p>
                  <p className="text-3xl font-semibold text-slate-900">R3,500</p>
                </div>
                <p className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Fast win
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>Hero copy rewrite</li>
                <li>CTA and WhatsApp path</li>
                <li>Mobile conversion cleanup</li>
                <li>Trust and proof recommendations</li>
              </ul>
            </div>
            <a href={whatsappHref} className="inline-flex text-sm font-semibold text-[color:var(--teal)]" target="_blank" rel="noreferrer">
              Ask for a website rescue →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-18">
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((item) => (
            <div key={item.title} className="panel p-6 hover-halo">
              <h3 className="text-lg font-semibold leading-snug text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Productized offers</p>
          <h2 className="mt-4 section-title">Clear ways to start without overcommitting.</h2>
          <p className="mt-4 text-base text-slate-700">
            The goal is not to sell a giant project on day one. The goal is to create
            one visible business improvement, then scale from there.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.name} className="panel flex flex-col p-6 hover-glow hover-halo">
              <p className="text-sm font-semibold text-[color:var(--teal)]">{offer.price}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{offer.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{offer.bestFor}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
                {offer.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={whatsappHref} className="mt-6 inline-flex text-sm font-semibold text-[color:var(--teal)]" target="_blank" rel="noreferrer">
                {offer.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Proof direction</p>
            <h2 className="section-title">Show the work, not generic promises.</h2>
            <p className="text-base leading-relaxed text-slate-700">
              The site should build trust through visible examples: screenshots,
              prototypes, demo builds, live links, and clear before-and-after thinking.
              No fake-looking testimonials. No inflated agency language.
            </p>
          </div>
          <div className="grid gap-4">
            {proofItems.map((item) => (
              <div key={item.title} className="panel p-5 hover-halo">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--teal)]">
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="panel grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2 className="mt-4 section-title">Start local and specific, then expand.</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Hikma should not look like another broad software agency. It should feel
              like a practical digital partner for businesses that need leads,
              cleaner operations, and visible execution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {niches.map((niche) => (
              <span key={niche} className="rounded-full border px-4 py-2 text-sm font-semibold text-slate-700" style={{ borderColor: "var(--panel-border)", backgroundColor: "var(--panel)" }}>
                {niche}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="panel relative overflow-hidden p-8 md:p-10">
          <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[color:var(--aqua)] opacity-25 blur-2xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="eyebrow">Simple next step</p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Send your current site, spreadsheet, or app idea.
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                You will get a direct recommendation on the fastest useful improvement:
                fix the website, build a proper site, or prototype the internal system.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a href={whatsappHref} className="btn-primary" data-magnet target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
              <Link href="/contact" className="btn-outline" data-magnet>
                Use contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
