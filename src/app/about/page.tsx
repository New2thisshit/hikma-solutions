import Link from "next/link";
import { siteConfig } from "@/lib/site";
import TestimonialsCarousel from "@/components/testimonials-carousel";

export const metadata = {
  title: "About | Hikma Solutions",
  description:
    "Learn about Hikma Solutions, a Durban-based studio delivering software, app, and website development.",
  openGraph: {
    title: "About | Hikma Solutions",
    description:
      "Learn about Hikma Solutions, a Durban-based studio delivering software, app, and website development.",
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">
          A focused studio built for clarity and quality.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700">
          Hikma Solutions is a modern software studio based in{" "}
          {siteConfig.location}. We partner with founders and growing teams to
          build digital products that are clean, reliable, and ready to scale.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Our focus</p>
            <h2 className="section-title">Small team, high-accountability.</h2>
            <p className="text-base text-slate-700">
              We are intentionally lean so every project gets senior attention
              and hands-on delivery.
            </p>
          </div>
          <div className="panel relative overflow-hidden p-6">
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[color:var(--aqua)] opacity-40 blur-2xl float-slow" />
            <div className="absolute -bottom-10 left-6 h-24 w-24 rounded-full bg-[color:var(--sky)] opacity-40 blur-2xl float-medium" />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Studio map
              </p>
              {[
                "Discovery and strategy",
                "Design systems + UX",
                "Full-stack delivery",
                "Launch and optimization",
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
          {[
            {
              title: "Strategy-first delivery",
              copy: "We align on business goals and user needs before a single line of code is written.",
            },
            {
              title: "Design that earns trust",
              copy: "Every interface is crafted to feel calm, credible, and easy to use.",
            },
            {
              title: "Engineering you can grow on",
              copy: "Clean architecture, quality testing, and documentation that keeps your team agile.",
            },
          ].map((value) => (
            <div key={value.title} className="panel p-6 hover-glow fade-up hover-halo">
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{value.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Why Hikma</p>
            <h2 className="section-title">
              A sharper alternative to agencies and freelancers.
            </h2>
            <p className="text-base text-slate-700">
              We combine the agility of a small team with enterprise-grade
              delivery standards.
            </p>
          </div>
          <div className="compare-table">
            {[
              {
                title: "Agencies",
                copy: "High overhead, slow handoffs, and generic delivery.",
                badge: "Complex",
              },
              {
                title: "Freelancers",
                copy: "Single points of failure and limited scalability.",
                badge: "Limited",
              },
              {
                title: "Hikma Solutions",
                copy: "Structured process, fast communication, reliable execution.",
                badge: "Balanced",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`panel p-5 ${item.highlight ? "glow-ring" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{
                      borderColor: "var(--panel-border)",
                      backgroundColor: "var(--panel)",
                      color: "var(--muted)",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{item.copy}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>Clear scope</p>
                  <p>Fast communication</p>
                  <p>Quality delivery</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Who We Help</p>
            <h2 className="section-title">
              Built for teams who need reliable delivery.
            </h2>
            <p className="text-base text-slate-700">
              We work best with founders and operations teams who want a
              structured partner, not a disappearing vendor.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Founders launching an MVP",
                copy: "Validate your idea quickly with a build that is investor-ready.",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 3l4 4-4 4-4-4 4-4z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 20l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Operations teams modernizing workflows",
                copy: "Replace spreadsheets and manual work with clean internal tools.",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="4" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="13" y="4" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="4" y="13" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="13" y="13" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
              },
              {
                title: "Marketing teams upgrading web presence",
                copy: "Refresh your brand and convert more leads with modern UX.",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 18v-6l8-5 8 5v6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 18v-4h6v4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="panel p-5">
                <div className="flex items-center gap-3 text-[color:var(--teal)]">
                  <span className="icon-wiggle">{item.icon}</span>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">
              What working with us feels like
            </h2>
            <p className="text-base text-slate-700">
              Expect a calm, structured process with clear communication and
              shared accountability. We are proactive with decisions, honest
              about tradeoffs, and focused on the outcomes that matter most.
            </p>
            <p className="text-base text-slate-700">
              Whether you need an MVP or a full rebuild, we provide the strategy
              and execution to move fast without losing quality.
            </p>
          </div>
          <div className="panel space-y-4 p-6 hover-glow hover-halo">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Typical engagements
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>New product builds and MVPs</li>
              <li>Workflow automation and internal tools</li>
              <li>App redesigns and performance upgrades</li>
              <li>Website refreshes and launches</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="panel flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center hover-glow hover-halo">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Lets build with confidence.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share your goals and we will shape the right plan.
            </p>
          </div>
          <Link href="/contact" className="btn-primary" data-magnet>
            Contact Us
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title">Early partners value the clarity.</h2>
            <p className="text-base text-slate-700">
              As we grow our portfolio, we keep the same focus on trust and
              long-term outcomes.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  );
}
