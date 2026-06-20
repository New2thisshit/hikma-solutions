import Link from "next/link";
import { siteConfig } from "@/lib/site";

const principles = [
  {
    title: "Business problem first",
    copy: "A website, dashboard, or app only matters if it solves a real commercial problem: more leads, less admin, faster decisions, or clearer reporting.",
  },
  {
    title: "Small useful version first",
    copy: "We avoid oversized builds. The first version should create a visible win before the project expands.",
  },
  {
    title: "Clear communication",
    copy: "You should always know what is being built, what is blocked, what changed, and what decision is needed next.",
  },
];

const focusAreas = [
  {
    title: "Websites that sell the business",
    copy: "Lead-focused pages for service businesses that need stronger trust, clearer offers, and better enquiry flow.",
  },
  {
    title: "Dashboards and internal tools",
    copy: "Systems for teams that are still relying on spreadsheets, paper forms, email chains, or WhatsApp coordination.",
  },
  {
    title: "MVP prototypes",
    copy: "Practical product concepts that turn broad app ideas into realistic first builds with clear scope.",
  },
];

const proofRoadmap = [
  "Publish honest portfolio demos with screenshots and build notes.",
  "Create niche pages for panel beaters, construction companies, and fleet/operations teams.",
  "Turn each completed client project into a proof page with problem, solution, screenshots, and outcome.",
];

export const metadata = {
  title: "About | Hikma Solutions",
  description:
    "About Hikma Solutions, a Durban-based studio building lead-focused websites, dashboards, and practical prototypes for South African businesses.",
  openGraph: {
    title: "About | Hikma Solutions",
    description:
      "Hikma Solutions builds websites and business systems for South African service businesses that need leads and cleaner operations.",
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          A small Durban studio for practical websites and business systems.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700">
          Hikma Solutions is based in {siteConfig.location}. The focus is simple:
          help South African businesses turn messy digital presence, manual admin,
          and vague app ideas into clear, useful systems.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Positioning</p>
            <h2 className="section-title">Not another generic software agency.</h2>
            <p className="text-base leading-relaxed text-slate-700">
              The work is aimed at operators, founders, and local service businesses
              that need something useful built without agency confusion or vague
              freelancer delivery.
            </p>
          </div>
          <div className="panel relative overflow-hidden p-6">
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[color:var(--aqua)] opacity-40 blur-2xl float-slow" />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Best-fit work
              </p>
              {[
                "Website rescue and rebuilds",
                "Business websites for service companies",
                "Internal dashboards and workflow tools",
                "MVP scoping and prototype builds",
              ].map((line, index) => (
                <div
                  key={line}
                  className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm hover-glow"
                  style={{
                    borderColor: "var(--panel-border)",
                    backgroundColor: "var(--panel)",
                    color: "var(--muted)",
                  }}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--teal)] text-xs font-semibold text-white icon-wiggle">
                    {index + 1}
                  </span>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((value) => (
            <div key={value.title} className="panel p-6 hover-glow fade-up hover-halo">
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="eyebrow">Focus</p>
            <h2 className="section-title">The work should create a visible business improvement.</h2>
            <p className="text-base leading-relaxed text-slate-700">
              Design quality matters, but the business outcome matters more. Hikma
              should be judged by clearer offers, easier enquiries, cleaner workflows,
              and software that people can actually use.
            </p>
          </div>
          <div className="grid gap-4">
            {focusAreas.map((item) => (
              <div key={item.title} className="panel p-5 hover-halo">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Proof</p>
            <h2 className="section-title">Proof must be visible and honest.</h2>
            <p className="text-base leading-relaxed text-slate-700">
              This rebuild intentionally removes weak testimonial-style proof. Until
              there are verified client stories, the site should use honest portfolio
              demos, screenshots, live links, build notes, and transparent case studies.
            </p>
          </div>
          <div className="panel space-y-4 p-6 hover-glow hover-halo">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Proof roadmap
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {proofRoadmap.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="panel flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center hover-glow hover-halo">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Start with the messy problem, not a polished brief.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Send the site, spreadsheet, paper process, or app idea and we will
              recommend the smallest useful first step.
            </p>
          </div>
          <Link href="/contact" className="btn-primary" data-magnet>
            Contact Hikma
          </Link>
        </div>
      </section>
    </div>
  );
}
