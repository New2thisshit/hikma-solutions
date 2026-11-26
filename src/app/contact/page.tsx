import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Hikma Solutions",
  description:
    "WhatsApp or email Hikma Solutions in Durban about a website, a business tool or a security check.",
};

export default function ContactPage() {
  const whatsappHref = whatsappLink("Hi Hikma, here’s what I need help with: ");

  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "50rem" }}>
            Talk to me
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            WhatsApp is quickest. Send a website link, a photo of the spreadsheet,
            or just a few lines about what&rsquo;s going wrong.
          </p>
          <div className="hero__actions">
            <a className="btn btn-saffron" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp {siteConfig.phone}
            </a>
            <a className="btn btn-line" href={`mailto:${siteConfig.email}`}>
              Email {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="display h2" style={{ marginBottom: "2rem" }}>Prefer a form?</h2>
            <ContactForm />
          </div>
          <div style={{ display: "grid", gap: "2.5rem", alignContent: "start" }}>
            <div>
              <h2 className="h3">What happens next</h2>
              <ol className="steps" style={{ ["--cols" as string]: 1, marginTop: "1.5rem", gap: "1.5rem" }}>
                <li>
                  <h3>I read it properly</h3>
                  <p className="muted">And look at your site first, if you have one.</p>
                </li>
                <li>
                  <h3>I tell you what I&rsquo;d do</h3>
                  <p className="muted">The first step, and roughly what it costs.</p>
                </li>
                <li>
                  <h3>We put it in writing</h3>
                  <p className="muted">For security work, that includes your signed OK to test.</p>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="h3">Found a security issue?</h2>
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                If you&rsquo;ve found a vulnerability in this site or the Redirect app,
                please follow the{" "}
                <Link className="text-link" href="/responsible-disclosure#report-to-us">
                  disclosure policy
                </Link>
                .
              </p>
            </div>
            <div>
              <h2 className="h3">Where I am</h2>
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                Durban. I work with businesses all over South Africa online, and can
                meet in person around KZN.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
