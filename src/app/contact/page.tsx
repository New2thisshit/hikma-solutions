import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi Hikma Solutions, here is what I need help with:"
)}`;

const faqs = [
  {
    group: "Website Rescue",
    items: [
      {
        q: "Can you improve my existing website instead of rebuilding everything?",
        a: "Yes. The Website Rescue Sprint is designed for that. We focus on copy, CTA flow, mobile layout, trust proof, and the fastest changes that can improve enquiries.",
      },
      {
        q: "What should I send first?",
        a: "Send your current website link and say what you want more of: calls, WhatsApps, quote requests, bookings, or credibility.",
      },
    ],
  },
  {
    group: "Business Websites",
    items: [
      {
        q: "What does a website build usually include?",
        a: "A typical build includes the main pages, copy structure, responsive design, WhatsApp/contact flow, SEO basics, and launch setup.",
      },
      {
        q: "Do you work with South African service businesses?",
        a: "Yes. Hikma Solutions is based in Durban and focuses on practical websites and business systems for South African companies.",
      },
    ],
  },
  {
    group: "Systems and Prototypes",
    items: [
      {
        q: "Can you turn spreadsheets or paper forms into software?",
        a: "Yes. The best starting point is a prototype that maps the workflow, users, database, dashboard, and first useful build scope.",
      },
      {
        q: "Can you build an MVP app?",
        a: "Yes, but the first step is reducing the idea into a focused launch version so the project does not become too large too early.",
      },
    ],
  },
];

export const metadata = {
  title: "Contact | Hikma Solutions",
  description:
    "Contact Hikma Solutions for website rescue, business website builds, dashboards, and operations system prototypes in South Africa.",
  openGraph: {
    title: "Contact | Hikma Solutions",
    description:
      "Send your website, spreadsheet, process, or app idea and get a practical next step from Hikma Solutions.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          Send the site, spreadsheet, process, or app idea you want fixed.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
          The easiest way to start is direct: send your current website link, the
          manual process that wastes time, or the app idea you want to reduce into
          a realistic first version.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappHref} className="btn-primary" target="_blank" rel="noreferrer" data-magnet>
            Start on WhatsApp
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn-outline" data-magnet>
            Email Hikma
          </a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-24 md:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-8 hover-glow hover-halo">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="panel p-6 hover-glow hover-halo">
            <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>{siteConfig.phone} (WhatsApp)</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.location}</p>
            </div>
          </div>
          <div className="panel p-6 hover-glow hover-halo">
            <h3 className="text-lg font-semibold text-slate-900">What to send</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Your current website link, if you have one.</li>
              <li>The result you want: more enquiries, cleaner admin, or MVP clarity.</li>
              <li>Any examples, screenshots, forms, spreadsheets, or rough notes.</li>
            </ul>
          </div>
          <div className="panel p-6 hover-glow hover-halo">
            <h3 className="text-lg font-semibold text-slate-900">What happens next</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>You get a practical recommendation for the first useful step.</li>
              <li>If the scope is clear, we suggest the best offer and price range.</li>
              <li>If the idea is unclear, we reduce it before quoting the full build.</li>
            </ul>
            <a
              className="btn-primary mt-5 inline-flex"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              data-magnet
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Quick answers before you reach out.</h2>
            <p className="text-base text-slate-700">
              These answers are written for practical buyers who want clarity before
              committing to a call or proposal.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((group) => (
              <div key={group.group} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--teal)]">
                  {group.group}
                </p>
                {group.items.map((item) => (
                  <details key={item.q} className="panel p-5 hover-halo">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900">
                      {item.q}
                      <span className="faq-icon text-lg text-[color:var(--teal)]">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                    <a
                      href={whatsappHref}
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
