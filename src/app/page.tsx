import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-12 md:flex-row md:items-center md:pt-20">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
            Software • Apps • Websites
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl fade-up">
            Build with clarity. Launch with confidence.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-700 md:text-lg fade-up fade-delay-1">
            Hikma Solutions delivers professional software development, app
            development, and website design for businesses that need clean
            execution and dependable outcomes.
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
                className="rounded-full border border-white/80 bg-white/80 px-4 py-2 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row fade-up fade-delay-3">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600 fade-up fade-delay-4">
            <span>{siteConfig.location}</span>
            <span>Modern tech stack</span>
            <span>Clear scope, on-time delivery</span>
          </div>
        </div>
        <div className="glass w-full max-w-lg space-y-6 p-8 fade-up fade-delay-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Why teams choose us
          </p>
          <div className="space-y-5">
            <div>
              <p className="text-base font-semibold text-slate-900">
                Purpose-built solutions
              </p>
              <p className="text-sm text-slate-600">
                We design each project around your goals, workflows, and
                customers, never off-the-shelf templates.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">
                Transparent collaboration
              </p>
              <p className="text-sm text-slate-600">
                Clear timelines, weekly updates, and complete visibility from
                discovery to launch.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">
                Reliable delivery
              </p>
              <p className="text-sm text-slate-600">
                We ship in focused milestones so you can test, learn, and move
                forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Software Development",
              copy: "Custom platforms, internal tools, and automation that simplify operations and unlock growth.",
            },
            {
              title: "App Development",
              copy: "iOS, Android, and cross-platform apps that feel intuitive, fast, and polished.",
            },
            {
              title: "Website Design",
              copy: "High-converting, modern websites that tell your story and earn customer trust.",
            },
          ].map((service) => (
            <div key={service.title} className="glass p-6 fade-up">
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
              Why Hikma
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              A sharper alternative to agencies and freelancers.
            </h2>
            <p className="text-base text-slate-700">
              We combine the agility of a small team with enterprise-grade
              delivery standards.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Agencies",
                copy: "High overhead, slow handoffs, and generic delivery.",
                vibe: "bg-white/80",
              },
              {
                title: "Freelancers",
                copy: "Single points of failure and limited scalability.",
                vibe: "bg-white/70",
              },
              {
                title: "Hikma Solutions",
                copy: "Structured process, fast communication, and reliable execution.",
                vibe: "bg-[color:var(--mist)]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`glass p-5 ${item.vibe}`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
              Our process
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              A simple timeline that keeps everyone aligned.
            </h2>
            <p className="text-base text-slate-700">
              We blend strategy, design, and engineering into a clear roadmap
              so projects move fast without losing quality.
            </p>
          </div>
          <div className="space-y-4">
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
              <div key={step.title} className="glass flex gap-4 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--teal)] text-sm font-semibold text-white">
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
              Sample Project
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              See how a typical engagement looks.
            </h2>
            <p className="text-base text-slate-700">
              Even without finished case studies, we can show the structure and
              impact you can expect from a Hikma Solutions build.
            </p>
          </div>
          <div className="glass p-6">
            <p className="text-sm font-semibold text-slate-900">
              Example: Logistics dashboard for a growing team
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-800">Goal:</span>{" "}
                Replace spreadsheets with a secure web app that tracks fleet,
                routes, and customer orders in real time.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Scope:</span>{" "}
                Web dashboard, user roles, live status updates, automated
                reports, and mobile-friendly views.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Outcome:</span>{" "}
                40% faster dispatch decisions, clearer reporting, and a scalable
                foundation for new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
              Testimonials
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Early partners value the clarity.
            </h2>
            <p className="text-base text-slate-700">
              As we grow our portfolio, we keep the same focus on trust and
              long-term outcomes.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                quote:
                  "Hikma Solutions guided us through scope decisions and kept every milestone predictable.",
                name: "Operations Lead",
                org: "Logistics Team",
              },
              {
                quote:
                  "The communication was crisp, and the delivery quality exceeded expectations.",
                name: "Product Founder",
                org: "Mobile Startup",
              },
              {
                quote:
                  "They moved fast without sacrificing polish, which is rare to find.",
                name: "Marketing Director",
                org: "Growth Agency",
              },
            ].map((item) => (
              <div key={item.quote} className="glass p-5">
                <p className="text-sm text-slate-700">“{item.quote}”</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {item.name} • {item.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Quick answers to common questions.
            </h2>
            <p className="text-base text-slate-700">
              If you have a question that is not listed here, reach out and we
              will respond quickly.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How soon can we start?",
                a: "Most projects begin within 1-2 weeks after discovery and scope alignment.",
              },
              {
                q: "Do you work with startups or only larger teams?",
                a: "We work with both, from early-stage founders to growing businesses that need reliable delivery.",
              },
              {
                q: "Can you help refine the idea before development?",
                a: "Yes. We run strategy and UX sessions to clarify goals, prioritize features, and define the roadmap.",
              },
              {
                q: "What happens after launch?",
                a: "We offer ongoing support, monitoring, and feature enhancements to keep your product evolving.",
              },
            ].map((item) => (
              <div key={item.q} className="glass p-5">
                <p className="text-sm font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="glass grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
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
            <Link href="/contact" className="btn-primary">
              Schedule a Call
            </Link>
            <Link href="/services" className="btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
