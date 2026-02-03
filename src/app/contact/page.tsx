import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact | Hikma Solutions",
  description:
    "Contact Hikma Solutions to discuss software development, app development, or website design.",
  openGraph: {
    title: "Contact | Hikma Solutions",
    description:
      "Contact Hikma Solutions to discuss software development, app development, or website design.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">
          Tell us what you want to build.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700">
          Share a few details about your project and we will respond with the
          next steps, a timeline, and a clear proposal.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-24 md:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-8 hover-glow hover-halo">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="panel p-6 hover-glow hover-halo">
            <h2 className="text-lg font-semibold text-slate-900">
              Contact details
            </h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>{siteConfig.phone} (WhatsApp)</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.location}</p>
            </div>
          </div>
          <div className="panel p-6 hover-glow hover-halo">
            <h3 className="text-lg font-semibold text-slate-900">
              What happens next
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>We review your request within 24-48 hours.</li>
              <li>We schedule a discovery call to clarify scope.</li>
              <li>You receive a tailored plan and timeline.</li>
            </ul>
          </div>
          <div className="panel p-6 hover-glow hover-halo">
            <h3 className="text-lg font-semibold text-slate-900">
              Prefer WhatsApp?
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Message us directly and we will respond quickly during business
              hours.
            </p>
            <a
              className="btn-primary mt-4 inline-flex"
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              data-magnet
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="panel relative overflow-hidden p-6">
            <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-[color:var(--aqua)] opacity-40 blur-2xl float-slow" />
            <div className="absolute -bottom-10 left-6 h-24 w-24 rounded-full bg-[color:var(--sky)] opacity-40 blur-2xl float-medium" />
            <div className="relative space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Quick start
              </p>
              {[
                "Tell us your goal",
                "Choose a timeline",
                "We reply with next steps",
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

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Quick answers before you reach out.</h2>
            <p className="text-base text-slate-700">
              If you have a question that is not listed here, message us and we
              will respond quickly.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Startups",
                items: [
                  {
                    q: "How fast can you build an MVP?",
                    a: "Most MVPs launch in 6-10 weeks depending on features and integrations.",
                  },
                  {
                    q: "Can you help refine the product before development?",
                    a: "Yes. We run strategy and UX sessions to clarify goals, prioritize features, and define the roadmap.",
                  },
                ],
              },
              {
                title: "Small Business",
                items: [
                  {
                    q: "What does a typical website or app project cost?",
                    a: "We scope the project first, then provide a fixed quote or phased milestone plan.",
                  },
                  {
                    q: "Can you integrate payment, booking, or CRM tools?",
                    a: "Absolutely. We can connect Stripe, PayFast, HubSpot, Calendly, and other tools you already use.",
                  },
                ],
              },
              {
                title: "Enterprise / Large Clients",
                items: [
                  {
                    q: "How do you handle security and access control?",
                    a: "We design role-based access, audit logs, and secure hosting from the start.",
                  },
                  {
                    q: "Can you work with our internal team and tooling?",
                    a: "Yes. We integrate with your existing stack and keep communication transparent.",
                  },
                ],
              },
              {
                title: "Website Only",
                items: [
                  {
                    q: "Do you offer SEO and performance optimization?",
                    a: "Yes. We build SEO-ready pages, fast load times, and clean technical structure.",
                  },
                  {
                    q: "Can you redesign an existing site without downtime?",
                    a: "Yes. We stage the rebuild, review with you, and switch over smoothly.",
                  },
                ],
              },
            ].map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--teal)]">
                  {group.title}
                </p>
                {group.items.map((item) => (
                  <details key={item.q} className="panel p-5 hover-halo">
                    <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                      {item.q}
                      <span className="faq-icon text-lg text-[color:var(--teal)]">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                    <a
                      href="https://wa.me/27610884755"
                      className="mt-3 inline-flex text-xs font-semibold text-[color:var(--teal)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ask on WhatsApp
                    </a>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
