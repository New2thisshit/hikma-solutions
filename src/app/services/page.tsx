import Link from "next/link";

export const metadata = {
  title: "Services | Hikma Solutions",
  description:
    "Durban software development, app development, and website design services tailored to your business goals.",
  openGraph: {
    title: "Services | Hikma Solutions",
    description:
      "Durban software development, app development, and website design services tailored to your business goals.",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">
          Full-stack delivery for modern businesses.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700">
          From strategy and UX to engineering and launch support, we provide
          end-to-end development for software platforms, mobile apps, and
          websites that convert.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          If you are searching for Durban software development or a reliable
          web and app partner in South Africa, we are ready to help.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Delivery model</p>
            <h2 className="section-title">
              Built for clarity from discovery to launch.
            </h2>
            <p className="text-base text-slate-700">
              Each engagement is designed around your goals, with transparent
              milestones and a weekly rhythm that keeps teams aligned.
            </p>
          </div>
          <div className="panel relative overflow-hidden p-6">
            <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[color:var(--aqua)] opacity-40 blur-2xl float-medium" />
            <div className="absolute -bottom-10 left-4 h-24 w-24 rounded-full bg-[color:var(--sky)] opacity-40 blur-2xl float-slow" />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Snapshot
              </p>
              {[
                "Strategy workshop",
                "UX and technical plan",
                "Build sprints",
                "Launch + support",
              ].map((step, index) => (
                <div
                  key={step}
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
                  {step}
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
              title: "Software Development",
              items: [
                "Custom business platforms",
                "Internal tools and automation",
                "API integrations and data flows",
                "Security-focused builds",
              ],
              highlights: ["Dashboards", "Automation", "Data pipelines"],
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
              items: [
                "Cross-platform mobile apps",
                "iOS and Android UI/UX",
                "Performance optimization",
                "MVP and growth releases",
              ],
              highlights: ["App store launch", "Push notifications", "Offline mode"],
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
              items: [
                "High-converting marketing sites",
                "Responsive, modern layouts",
                "SEO-ready structure",
                "Ongoing site improvements",
              ],
              highlights: ["Conversion UX", "SEO-ready", "Analytics"],
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
            <div key={service.title} className="panel p-6 hover-glow fade-up hover-halo">
              <div className="flex items-center gap-3 text-[color:var(--teal)]">
                <span className="icon-wiggle">{service.icon}</span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {service.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1"
                    style={{
                      borderColor: "var(--panel-border)",
                      backgroundColor: "var(--panel)",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="panel p-6 hover-glow fade-up hover-halo">
            <h3 className="text-xl font-semibold text-slate-900">
              Engagement options
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Choose the structure that suits your team, timeline, and budget.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Fixed-scope builds with clear milestones</li>
              <li>Monthly retainers for continuous delivery</li>
              <li>Rapid MVP sprints to validate ideas</li>
            </ul>
          </div>
          <div className="panel p-6 hover-glow fade-up hover-halo">
            <h3 className="text-xl font-semibold text-slate-900">
              What you can expect
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We focus on clarity, speed, and quality so your business keeps
              moving.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Discovery workshops to align on goals</li>
              <li>Weekly updates and transparent progress</li>
              <li>Launch plans and ongoing support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Our process</p>
            <h2 className="section-title">
              A simple timeline that keeps everyone aligned.
            </h2>
            <p className="text-base text-slate-700">
              We blend strategy, design, and engineering into a clear roadmap
              so projects move fast without losing quality.
            </p>
          </div>
          <div className="space-y-4 timeline-line pl-10">
            {[
              {
                title: "Discovery",
                copy: "Clarify goals, success metrics, and core features.",
              },
              {
                title: "Design",
                copy: "UX flows, UI visuals, and technical architecture.",
              },
              {
                title: "Build",
                copy: "Agile development with weekly demos and feedback.",
              },
              {
                title: "Launch",
                copy: "Deployment, training, and ongoing improvements.",
              },
            ].map((step, index) => (
              <div key={step.title} className="panel flex gap-4 p-5 hover-halo">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--teal)] text-sm font-semibold text-white glow-ring">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </p>
                  <p className="text-sm text-slate-600">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Sample Project</p>
            <h2 className="section-title">
              See how a typical engagement looks.
            </h2>
            <p className="text-base text-slate-700">
              Even without finished case studies, we can show the structure and
              impact you can expect from a Hikma Solutions build.
            </p>
          </div>
          <div className="panel p-6 hover-halo">
            <p className="text-sm font-semibold text-slate-900">
              Example: Logistics dashboard for a growing team
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-800">Goal:</span>{" "}
                Replace spreadsheets with a secure, real-time web app.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Scope:</span>{" "}
                Dashboard, user roles, live status updates, automated reports.
              </li>
              <li>
                <span className="font-semibold text-slate-800">Outcome:</span>{" "}
                Faster dispatch decisions and clearer reporting.
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span
                className="rounded-full border px-3 py-1"
                style={{
                  borderColor: "var(--panel-border)",
                  backgroundColor: "var(--panel)",
                  color: "var(--muted)",
                }}
              >
                Duration: 8-10 weeks
              </span>
              <span
                className="rounded-full border px-3 py-1"
                style={{
                  borderColor: "var(--panel-border)",
                  backgroundColor: "var(--panel)",
                  color: "var(--muted)",
                }}
              >
                Team: 2-3 specialists
              </span>
              <span
                className="rounded-full border px-3 py-1"
                style={{
                  borderColor: "var(--panel-border)",
                  backgroundColor: "var(--panel)",
                  color: "var(--muted)",
                }}
              >
                Stack: Web + API
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="panel flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center hover-glow">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Tell us about your next project.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We will recommend the best approach and timeline for your goals.
            </p>
          </div>
          <Link href="/contact" className="btn-primary" data-magnet>
            Get a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
