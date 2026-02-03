import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact | Hikma Solutions",
  description:
    "Contact Hikma Solutions to discuss software development, app development, or website design.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--teal)]">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">
          Tell us what you want to build.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700">
          Share a few details about your project and we will respond with the
          next steps, a timeline, and a clear proposal.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-24 md:grid-cols-[1.2fr_0.8fr]">
        <div className="glass p-8">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="glass p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Contact details
            </h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>{siteConfig.phone} (WhatsApp)</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.location}</p>
            </div>
          </div>
          <div className="glass p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              What happens next
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>We review your request within 24-48 hours.</li>
              <li>We schedule a discovery call to clarify scope.</li>
              <li>You receive a tailored plan and timeline.</li>
            </ul>
          </div>
          <div className="glass p-6">
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
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
