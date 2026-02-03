import Link from "next/link";

export const metadata = {
  title: "Services | Hikma Solutions",
  description:
    "Software development, app development, and website design services tailored to your business goals.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
          Services
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">
          Full-stack delivery for modern businesses.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700">
          From strategy and UX to engineering and launch support, we provide
          end-to-end development for software platforms, mobile apps, and
          websites that convert.
        </p>
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
            },
            {
              title: "App Development",
              items: [
                "Cross-platform mobile apps",
                "iOS and Android UI/UX",
                "Performance optimization",
                "MVP and growth releases",
              ],
            },
            {
              title: "Website Design",
              items: [
                "High-converting marketing sites",
                "Responsive, modern layouts",
                "SEO-ready structure",
                "Ongoing site improvements",
              ],
            },
          ].map((service) => (
            <div key={service.title} className="glass p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass p-6">
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
          <div className="glass p-6">
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

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="glass flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Tell us about your next project.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We will recommend the best approach and timeline for your goals.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
