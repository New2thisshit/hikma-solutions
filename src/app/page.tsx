import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hikma Solutions | Durban Software, Apps, and Websites",
  description:
    "Durban-based software development, app development, and website design built for clarity, speed, and trust.",
  openGraph: {
    title: "Hikma Solutions | Durban Software, Apps, and Websites",
    description:
      "Durban-based software development, app development, and website design built for clarity, speed, and trust.",
  },
};

export default function Home() {
  return (
    <div>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-12 md:flex-row md:items-center md:pt-20">
        <div className="relative space-y-6">
          <div className="pointer-events-none absolute -left-16 -top-8 hidden h-32 w-32 rounded-full bg-[color:var(--aqua)] opacity-30 blur-2xl md:block float-slow" />
          <div className="pointer-events-none absolute -right-10 top-8 hidden h-24 w-24 rounded-full bg-[color:var(--sky)] opacity-40 blur-2xl md:block float-medium" />
          <p className="eyebrow">Software - Apps - Websites</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl fade-up">
            Build with clarity. Launch with confidence.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-700 md:text-lg fade-up fade-delay-1">
            Durban-based Hikma Solutions delivers software development, app
            development, and website design with clear scope, fast feedback,
            and dependable outcomes.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 fade-up fade-delay-2">
            {[
              "Clear scope",
              "Weekly updates",
              "Reliable delivery",
              "Security-first builds",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border px-4 py-2 shadow-sm shimmer-line"
                style={{
                  borderColor: "var(--panel-border)",
                  backgroundColor: "var(--panel)",
                  color: "var(--muted)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row fade-up fade-delay-3">
            <Link href="/contact" className="btn-primary" data-magnet>
              Start a Project
            </Link>
            <Link href="/services" className="btn-outline" data-magnet>
              Explore Services
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600 fade-up fade-delay-4">
            <span>{siteConfig.location}</span>
            <span>Modern tech stack</span>
            <span>Clear scope, on-time delivery</span>
          </div>
        </div>

        <div className="relative w-full max-w-lg space-y-6">
          <div className="panel p-6 soft-grid">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Delivery Snapshot
              </p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Active
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                { title: "Discovery", value: "3-5 days" },
                { title: "Design + UX", value: "2-3 weeks" },
                { title: "Build & QA", value: "4-8 weeks" },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-600">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-8 hidden h-20 w-20 rounded-3xl bg-[color:var(--aqua)] opacity-30 blur-xl md:block float-fast" />
          <div className="panel p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outcome
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Clean handoff, launch checklist, and post-launch support.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Software Development",
              copy: "Custom platforms, internal tools, and automation that simplify operations and unlock growth.",
              items: ["Internal dashboards", "Secure APIs", "Workflow automation"],
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 19h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              title: "App Development",
              copy: "iOS, Android, and cross-platform apps that feel intuitive, fast, and polished.",
              items: ["MVP builds", "Performance tuning", "App store launch"],
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
              ),
            },
            {
              title: "Website Design",
              copy: "High-converting, modern websites that tell your story and earn customer trust.",
              items: ["Brand refresh", "SEO-ready pages", "Conversion funnels"],
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 3c3 3.5 3 14.5 0 18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 3c-3 3.5-3 14.5 0 18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              ),
            },
          ].map((service) => (
            <div key={service.title} className="panel p-6 fade-up hover-halo">
              <div className="flex items-center gap-3 text-[color:var(--teal)]">
                <span className="icon-wiggle">{service.icon}</span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{service.copy}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-3 py-1"
                    style={{
                      borderColor: "var(--panel-border)",
                      backgroundColor: "var(--panel)",
                      color: "var(--muted)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-4 inline-flex text-sm font-semibold text-[color:var(--teal)]"
              >
                View service details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Why Hikma",
              copy: "Understand how we compare and why teams choose a structured partner.",
              link: "/about",
              cta: "About Us",
            },
            {
              title: "Our Process",
              copy: "See how we move from discovery to launch with weekly updates.",
              link: "/services",
              cta: "View Process",
            },
            {
              title: "Questions",
              copy: "Find quick answers and reach us fast when you are ready.",
              link: "/contact",
              cta: "Contact Us",
            },
          ].map((item) => (
            <div key={item.title} className="panel p-6 hover-glow hover-halo">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{item.copy}</p>
              <Link
                href={item.link}
                className="mt-4 inline-flex text-sm font-semibold text-[color:var(--teal)]"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="panel grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">
              Ready to build something remarkable?
            </h2>
            <p className="text-base text-slate-700">
              Tell us about your vision and we will map out the best path to
              launch.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link href="/contact" className="btn-primary" data-magnet>
              Schedule a Call
            </Link>
            <Link href="/services" className="btn-outline" data-magnet>
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
