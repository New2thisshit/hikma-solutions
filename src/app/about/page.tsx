import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "About | Hikma Solutions",
  description:
    "Learn about Hikma Solutions, a Durban-based studio delivering software, app, and website development.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
          About
        </p>
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
            <div key={value.title} className="glass p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{value.copy}</p>
            </div>
          ))}
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
          <div className="glass space-y-4 p-6">
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
        <div className="glass flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Let’s build with confidence.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share your goals and we will shape the right plan.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
