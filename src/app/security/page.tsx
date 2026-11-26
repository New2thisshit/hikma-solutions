import type { Metadata } from "next";
import Jali from "@/components/jali";
import OfferDetail from "@/components/offer-detail";
import SampleReport from "@/components/sample-report";
import { securityOffers, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cyber security services | Hikma Solutions",
  description:
    "Security health checks, web app penetration testing, hardening and monthly monitoring for South African small businesses. Based in Durban.",
  openGraph: {
    title: "Cyber security services | Hikma Solutions",
    description:
      "Find the weak spots in your website and systems before someone else does.",
  },
};

const reasons = [
  {
    title: "Most attacks aren't personal",
    copy: "Bots scan every website on the internet for known weak spots: old plugins, default passwords, exposed admin pages. Being small doesn't make you invisible.",
  },
  {
    title: "Fake invoices start with your domain",
    copy: "Without the right email records, anyone can send mail that looks like it came from you, asking clients to pay into a new account.",
  },
  {
    title: "POPIA expects reasonable safeguards",
    copy: "If you hold customer information, POPIA requires appropriate technical measures to protect it. A dated report shows what was checked and fixed.",
  },
];

const rules = [
  "We only test systems you own or are authorised to have tested, after a signed scope letter.",
  "Testing happens in agreed time windows, with a direct line to us if anything looks wrong.",
  "Findings go to you alone. We don't publish or share them.",
  "We don't keep copies of your data once the report is delivered.",
];

const faqs = [
  {
    q: "Do I need a health check or a penetration test?",
    a: "If you have a brochure website, a booking form or an online shop on a platform like WordPress, start with a health check. If customers log in, pay, upload documents or see their own data, you need a penetration test.",
  },
  {
    q: "Will testing take my website down?",
    a: "A health check only looks from the outside and doesn't put load on your site. Penetration tests are planned with you, run in agreed windows, and avoid anything that could damage data. Where possible we test a staging copy.",
  },
  {
    q: "Can you test a site you didn't build?",
    a: "Yes, as long as you own it or have written permission from whoever does. We'll ask for that before we start.",
  },
  {
    q: "Does this make us POPIA compliant?",
    a: "No single test does. Our work covers the technical safeguards side, and the report gives you a record of what was checked and fixed. For the legal side, speak to your information officer or legal adviser.",
  },
  {
    q: "What do you need from us to start?",
    a: "Your website address, what the system does, and who to contact. For a penetration test we'll also need test accounts and a signed scope letter.",
  },
];

export default function SecurityPage() {
  const ask = whatsappLink("Hi Hikma, I'd like to talk about securing: ");

  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap hero__grid">
          <div>
            <p className="kicker">Cyber security</p>
            <h1 className="display h1">Find the weak spots before someone else does.</h1>
            <p className="lede muted" style={{ marginTop: "1.5rem" }}>
              Security testing and hardening for South African small businesses, in
              plain language, at prices that make sense below enterprise budgets.
            </p>
            <div className="hero__actions">
              <a className="btn btn-saffron" href={ask} target="_blank" rel="noreferrer">
                Book a health check
              </a>
              <a className="btn btn-line" href="#sample">
                See a sample report
              </a>
            </div>
          </div>
          <Jali cols={6} rows={5} light={[0.25, 0.75]} />
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap">
          <h2 className="display h2 prose-measure">Why small businesses get hit.</h2>
          <div className="split" style={{ marginTop: "2.5rem" }}>
            {reasons.slice(0, 2).map((r) => (
              <div key={r.title}>
                <h3 className="h3">{r.title}</h3>
                <p className="muted" style={{ marginTop: "0.75rem" }}>{r.copy}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", paddingTop: "2.5rem", borderTop: "1.5px solid var(--line)" }}>
            <h3 className="h3">{reasons[2].title}</h3>
            <p className="muted prose-measure" style={{ marginTop: "0.75rem" }}>{reasons[2].copy}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem, 5vw, 4rem)" }}>
        <div className="wrap">
          {securityOffers.map((offer) => (
            <OfferDetail key={offer.slug} offer={offer} />
          ))}
        </div>
      </section>

      <section id="sample" className="band-dark section" style={{ scrollMarginTop: "1rem" }}>
        <div className="wrap hero__grid" style={{ alignItems: "start" }}>
          <div className="prose-measure">
            <h2 className="display h2">A report you can act on.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              Every finding says what it is, what it means for your business, and how
              to fix it, in priority order. Your developer gets the technical evidence
              in an appendix.
            </p>
            <p className="muted" style={{ marginTop: "1.25rem" }}>
              Sample for a made-up practice. Open any finding.
            </p>
          </div>
          <SampleReport />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display h2 prose-measure">How a test runs.</h2>
          <ol className="steps" style={{ ["--cols" as string]: 5 }}>
            <li>
              <h3>Scope and sign</h3>
              <p className="muted">We agree what&rsquo;s in and out of bounds, in writing.</p>
            </li>
            <li>
              <h3>Test</h3>
              <p className="muted">Automated checks first, then manual testing of what matters.</p>
            </li>
            <li>
              <h3>Report</h3>
              <p className="muted">Plain-language findings, ranked, with evidence attached.</p>
            </li>
            <li>
              <h3>Fix</h3>
              <p className="muted">Your developer fixes them, or we do.</p>
            </li>
            <li>
              <h3>Retest</h3>
              <p className="muted">We confirm each fix holds and update the report.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap split">
          <div>
            <h2 className="display h2">How we work.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              Security testing needs trust on both sides. These rules apply to every
              engagement.
            </p>
            <p className="muted prose-measure" style={{ marginTop: "1.25rem" }}>
              We also hunt on public bug bounty programmes on HackerOne and YesWeHack,
              which keeps our testing in step with how real attacks work.
            </p>
          </div>
          <ul className="check-list" style={{ alignContent: "center", fontSize: "1.0625rem" }}>
            {rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2 className="display h2">Questions people ask first.</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <span className="finding__toggle" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "48rem" }}>
            Not sure where you stand? Start with a health check.
          </h2>
          <p className="lede muted">
            Send your website address on WhatsApp and we&rsquo;ll tell you what it
            covers and when we can start.
          </p>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a className="btn btn-saffron" href={ask} target="_blank" rel="noreferrer">
              Book a health check
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
