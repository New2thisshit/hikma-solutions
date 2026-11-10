import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { faqs } from "@/lib/content";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hikma Solutions in Durban about a website, a business system, an app idea or Redirect.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="wrap pb-12 pt-14 md:pt-20">
        <h1 className="t-title max-w-[16ch]">Tell us what you need.</h1>
        <p className="t-lead mt-6">
          Send your current website, the manual process that wastes time, or
          the app idea you want to reduce to a realistic first version. You
          will get a practical recommendation for the first useful step.
        </p>
      </section>

      <section aria-label="Contact" className="wrap">
        <div className="grid gap-14 border-t border-line pt-12 lg:grid-cols-[1.5fr_0.9fr] lg:gap-20">
          <ContactForm />

          <div className="grid content-start gap-10">
            <div>
              <h2 className="t-h3">Direct</h2>
              <ul className="mt-3 grid gap-1">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="nav-link -ml-[0.7rem] break-all text-[var(--ink)]">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink("Hi Hikma Solutions, here is what I need help with:")}
                    className="nav-link -ml-[0.7rem] text-[var(--ink)]"
                    rel="noreferrer"
                  >
                    WhatsApp {siteConfig.phone}
                  </a>
                </li>
                <li className="t-small pt-1">{siteConfig.location}</li>
              </ul>
            </div>
            <div>
              <h2 className="t-h3">Helpful to include</h2>
              <ul className="t-small mt-3 grid gap-2 text-[1rem]">
                <li>Your current website link, if you have one.</li>
                <li>The result you want: more enquiries, less admin or a clear first version of an app.</li>
                <li>Examples, screenshots, forms, spreadsheets or rough notes.</li>
              </ul>
            </div>
            <div>
              <h2 className="t-h3">About Redirect?</h2>
              <p className="t-small mt-3 text-[1rem]">
                For questions about our app, see the{" "}
                <Link href="/products/redirect" className="link">
                  Redirect page
                </Link>{" "}
                for support details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="wrap mt-24 md:mt-32">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="faq-heading" className="t-h2">
            Common questions
          </h2>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q} className="border-b border-line">
                <summary>
                  {item.q}
                  <span className="faq-mark" aria-hidden="true" />
                </summary>
                <p className="t-body pb-5">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
