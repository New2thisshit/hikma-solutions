import type { Metadata } from "next";
import Link from "next/link";
import Jali from "@/components/jali";
import SampleReport from "@/components/sample-report";
import { buildOffers, securityOffers, whatsappLink, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hikma Solutions | Websites, business systems and cyber security in Durban",
  description:
    "We build websites and business systems for South African companies, then test them the way an attacker would. Based in Durban.",
};

const whatsappHref = whatsappLink(
  "Hi Hikma Solutions, here's my website / what I need help with: "
);

const sectors = [
  "Panel beaters and auto repair",
  "Accounting and professional firms",
  "Fleet, logistics and field teams",
  "Construction and trades",
  "Clinics and practices",
  "Online shops",
];

export default function Home() {
  return (
    <>
      <section className="band-dark hero">
        <div className="wrap hero__grid">
          <div>
            <h1 className="display h1">
              Open to your customers. Closed to everyone else.
            </h1>
            <p className="lede muted" style={{ marginTop: "1.75rem" }}>
              Hikma Solutions builds websites and business systems for South
              African companies, then tests them the way an attacker would.
            </p>
            <div className="hero__actions">
              <a className="btn btn-saffron" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp us your website
              </a>
              <Link className="btn btn-line" href="/security">
                See security services
              </Link>
            </div>
          </div>
          <Jali animate />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose-measure">
            <h2 className="display h2">Two halves of the same job.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              A website that brings in work is only useful if it can&rsquo;t be
              turned against you. We do both, so nothing falls between two
              suppliers.
            </p>
          </div>

          <div className="split" style={{ marginTop: "3.5rem" }}>
            <div>
              <h3 className="h3">Build</h3>
              <p className="muted" style={{ margin: "0.6rem 0 0" }}>
                Sites and systems that win enquiries and cut admin.
              </p>
              <ul className="offer-list">
                {buildOffers.map((o) => (
                  <li key={o.slug}>
                    <Link className="offer-row" href={`/services#${o.slug}`}>
                      <span className="offer-row__name">{o.name}</span>
                      <span className="offer-row__price">{o.price}</span>
                      <span className="offer-row__copy">{o.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="text-link" href="/services">
                  All build services
                </Link>
              </p>
            </div>
            <div>
              <h3 className="h3">Secure</h3>
              <p className="muted" style={{ margin: "0.6rem 0 0" }}>
                Find the weak points before someone else does, then close them.
              </p>
              <ul className="offer-list">
                {securityOffers.map((o) => (
                  <li key={o.slug}>
                    <Link className="offer-row" href={`/security#${o.slug}`}>
                      <span className="offer-row__name">{o.name}</span>
                      <span className="offer-row__price">{o.price}</span>
                      <span className="offer-row__copy">{o.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="text-link" href="/security">
                  All security services
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap hero__grid" style={{ alignItems: "start" }}>
          <div className="prose-measure">
            <h2 className="display h2">What you get back from a health check.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              No 80-page scanner dump. A short report in plain language: what we
              found, what it means for your business, and the order to fix it in.
            </p>
            <p className="muted" style={{ marginTop: "1.25rem" }}>
              This is a sample for a made-up practice. Open any finding to see how
              it reads.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn-saffron"
                href={whatsappLink("Hi Hikma, I'd like a security health check for: ")}
                target="_blank"
                rel="noreferrer"
              >
                Book a health check
              </a>
            </div>
          </div>
          <SampleReport />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display h2 prose-measure">How a project runs.</h2>
          <ol className="steps" style={{ ["--cols" as string]: 4 }}>
            <li>
              <h3>Diagnose</h3>
              <p className="muted">
                Start with the business problem: lost leads, admin time, or risk.
              </p>
            </li>
            <li>
              <h3>Build the smallest useful version</h3>
              <p className="muted">
                One visible improvement first, with updates every week.
              </p>
            </li>
            <li>
              <h3>Attack it</h3>
              <p className="muted">
                Before launch, we test our own work the way an attacker would.
              </p>
            </li>
            <li>
              <h3>Hand over and keep watch</h3>
              <p className="muted">
                Clear notes, your logins in your name, and optional monthly cover.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap">
          <div className="prose-measure">
            <h2 className="display h2">Recent work.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              Demo builds are labelled as demos. Client stories go up once the
              client agrees.
            </p>
          </div>
          <ul className="work-list">
            {work.map((w) => (
              <li key={w.title}>
                <span className="muted" style={{ fontWeight: 600 }}>{w.kind}</span>
                <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>{w.title}</span>
                <span className="muted">{w.copy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="display h2">Built for businesses that run on trust.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              If customers send you their details, payments or vehicle keys, your
              website needs to be as trustworthy as your front counter.
            </p>
          </div>
          <ul className="check-list" style={{ alignContent: "center", fontWeight: 600, fontSize: "1.125rem" }}>
            {sectors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "48rem" }}>
            Send us your website. We&rsquo;ll tell you what we&rsquo;d fix first.
          </h2>
          <p className="lede muted">
            Whether it&rsquo;s more enquiries or fewer weak spots, you&rsquo;ll get a
            straight answer on WhatsApp, not a sales pitch.
          </p>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a className="btn btn-saffron" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp us your website
            </a>
            <Link className="btn btn-line" href="/contact">
              Use the contact form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
