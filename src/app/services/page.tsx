import Link from "next/link";
import { siteConfig } from "@/lib/site";

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi Hikma Solutions, I want to discuss one of your offers."
)}`;

const offers = [
  {
    title: "Website Rescue Sprint",
    price: "From R3,500",
    timeline: "3-7 days",
    summary:
      "For businesses that already have a website, but it feels generic, outdated, slow, confusing, or poor at generating enquiries.",
    includes: [
      "Homepage and messaging audit",
      "Hero section rewrite",
      "CTA and WhatsApp journey improvement",
      "Mobile UX cleanup recommendations",
      "Trust proof and SEO basics checklist",
    ],
    outcome: "A clearer site that gives visitors a reason to contact you.",
  },
  {
    title: "Business Website Build",
    price: "From R8,000",
    timeline: "2-4 weeks",
    summary:
      "For local service businesses that need a professional website built around trust, speed, mobile usability, and lead generation.",
    includes: [
      "5 core pages: Home, Services, About, Work, Contact",
      "Copywriting and conversion structure",
      "Responsive Next.js build",
      "Contact form and WhatsApp integration",
      "Analytics-ready launch setup",
    ],
    outcome: "A polished sales asset your business can confidently send to prospects.",
  },
  {
    title: "Operations System Prototype",
    price: "From R15,000",
    timeline: "1-3 weeks",
    summary:
      "For teams still running important work through paper forms, WhatsApp messages, spreadsheets, or manual admin.",
    includes: [
      "Workflow mapping session",
      "User roles and data model plan",
      "Clickable dashboard or app prototype",
      "Core feature backlog",
      "Fixed-scope estimate for the full build",
    ],
    outcome: "A practical prototype that turns vague software ideas into a buildable system.",
  },
];

const process = [
  {
    title: "1. Diagnose",
    copy: "We start with the business problem, not the technology. What is costing time, leads, trust, or money?",
  },
  {
    title: "2. Simplify",
    copy: "We reduce the work into the smallest useful version that can create a visible improvement.",
  },
  {
    title: "3. Build",
    copy: "You get a clean, responsive implementation with weekly updates and practical handover notes.",
  },
  {
    title: "4. Improve",
    copy: "After launch, we use real feedback to improve the page, workflow, dashboard, or product flow.",
  },
];

const useCases = [
  "A panel beater needs more quote requests and stronger trust proof.",
  "A construction company needs a cleaner portfolio and enquiry flow.",
  "A fleet team needs digital inspections, logs, handovers, and reports.",
  "A professional service business needs a sharper site and better lead capture.",
  "A founder needs an MVP reduced into a realistic first launch.",
];

export const metadata = {
  title: "Services | Hikma Solutions",
  description:
    "Productized website, dashboard, and prototype offers for South African businesses that need more enquiries and less manual admin.",
  openGraph: {
    title: "Services | Hikma Solutions",
    description:
      "Website rescue, business website builds, and operations system prototypes from Hikma Solutions in Durban.",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          Clear offers for businesses that need leads, cleaner systems, or a focused MVP.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700">
          The best first project is not always a full app or a huge custom platform.
          Hikma Solutions starts with the smallest useful improvement: fix the website,
          build the website, or prototype the system.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappHref} className="btn-primary" target="_blank" rel="noreferrer" data-magnet>
            Ask which offer fits
          </a>
          <Link href="/contact" className="btn-outline" data-magnet>
            Send project details
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title} className="panel flex flex-col p-6 hover-glow hover-halo">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--teal)]">{offer.price}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">{offer.title}</h2>
                </div>
                <span className="rounded-full border px-3 py-1 text-xs font-semibold text-slate-600" style={{ borderColor: "var(--panel-border)", backgroundColor: "var(--panel)" }}>
                  {offer.timeline}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{offer.summary}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
                {offer.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border p-4" style={{ borderColor: "var(--panel-border)", backgroundColor: "var(--panel)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Outcome</p>
                <p className="mt-2 text-sm text-slate-700">{offer.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Use cases</p>
            <h2 className="section-title">Specific problems beat vague software projects.</h2>
            <p className="text-base leading-relaxed text-slate-700">
              The work becomes easier to scope and easier to sell when we anchor it to
              a real business problem. These are the kinds of projects Hikma should
              actively pursue first.
            </p>
          </div>
          <div className="grid gap-3">
            {useCases.map((item) => (
              <div key={item} className="panel p-4 text-sm font-medium text-slate-700 hover-halo">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 section-title">A practical delivery rhythm.</h2>
          <p className="mt-4 text-base text-slate-700">
            The process is designed for small businesses and operators who need clear
            decisions, fast feedback, and visible progress.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {process.map((step) => (
            <div key={step.title} className="panel p-5 hover-halo">
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="panel grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Start with the business problem.
            </h2>
            <p className="text-base text-slate-700">
              Send the current website, spreadsheet, paper form, or app idea. We will
              recommend the smallest useful first build.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a href={whatsappHref} className="btn-primary" target="_blank" rel="noreferrer" data-magnet>
              Message on WhatsApp
            </a>
            <Link href="/contact" className="btn-outline" data-magnet>
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
