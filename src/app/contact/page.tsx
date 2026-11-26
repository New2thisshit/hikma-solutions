import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Hikma Solutions",
  description:
    "Contact Hikma Solutions in Durban about a website, a business system or a security check.",
};

export default function ContactPage() {
  const whatsappHref = whatsappLink("Hi Hikma Solutions, here's what I need help with: ");

  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "50rem" }}>
            Tell us what&rsquo;s not working.
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            A website link, a spreadsheet that runs your week, or a worry about
            security. Send whatever you have and we&rsquo;ll suggest a first step.
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
            <h2 className="display h2" style={{ marginBottom: "2rem" }}>Or fill this in.</h2>
            <ContactForm />
          </div>
          <div style={{ display: "grid", gap: "2.5rem", alignContent: "start" }}>
            <div>
              <h3 className="h3">What happens next</h3>
              <ol className="steps" style={{ ["--cols" as string]: 1, marginTop: "1.5rem", gap: "1.5rem" }}>
                <li>
                  <h3>We read it properly</h3>
                  <p className="muted">And look at your site or process before replying.</p>
                </li>
                <li>
                  <h3>You get a recommendation</h3>
                  <p className="muted">The smallest useful first step, with a price range.</p>
                </li>
                <li>
                  <h3>We agree scope in writing</h3>
                  <p className="muted">For security work, that includes a signed authorisation letter.</p>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="h3">Where we are</h3>
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                {siteConfig.location}. We work with clients across South Africa,
                remotely or in person around KwaZulu-Natal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
