import type { Metadata } from "next";
import Jali from "@/components/jali";
import OfferDetail from "@/components/offer-detail";
import SampleReport from "@/components/sample-report";
import { securityOffers, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cyber security for small businesses | Hikma Solutions",
  description:
    "Security checks, pen tests, fixes and monthly check-ups for South African small businesses, explained in plain English. Based in Durban.",
  openGraph: {
    title: "Cyber security for small businesses | Hikma Solutions",
    description: "I try to hack your website, so a stranger can’t.",
  },
};

const reasons = [
  {
    title: "It’s usually not personal",
    copy: "Bots scan millions of websites a day, looking for old plugins and weak passwords. They don’t care how big you are. If your site has a gap, they find it.",
  },
  {
    title: "Scammers can pretend to be you",
    copy: "If your email isn’t set up properly, anyone can send an email that looks like it came from you, asking your clients to pay into a new bank account.",
  },
  {
    title: "The law expects you to try",
    copy: "POPIA says businesses must take reasonable steps to protect personal information. My report gives you a dated record of what was checked and what was fixed.",
  },
];

const rules = [
  "I only test what you own, after you say yes in writing.",
  "We agree when I test, and you can reach me the whole time.",
  "What I find goes to you and nobody else.",
  "Happy to sign your NDA. You get a one-page testing agreement before anything starts.",
  "I delete any of your data I collected once the job’s done. You keep the report.",
];

const faqs = [
  {
    q: "Which one do I need?",
    a: "If your site is mostly information and a contact form, start with a security check. If customers log in, pay, or upload things, you need a break-in test."
  },
  {
    q: "Will you break my website?",
    a: "Very unlikely. A security check only looks from the outside, the way any visitor would. A break-in test is planned with you and done at agreed times, and I avoid anything that could damage your data. Where I can, I test a copy of your site. Before we start, I’ll check you have a recent backup.",
  },
  {
    q: "Can you check a site you didn’t build?",
    a: "Yes. You just need to own it, or have written permission from whoever does.",
  },
  {
    q: "Does this make us POPIA compliant?",
    a: "Not on its own. I cover the technical side, like passwords, updates and backups. For the legal side, speak to your information officer or a lawyer.",
  },
  {
    q: "What do you need from me?",
    a: "Your website address and a contact person. For a break-in test, I’ll also need test logins and a signed letter saying what I’m allowed to test.",
  },
];

export default function SecurityPage() {
  const ask = whatsappLink("Hi Hikma, I’d like to talk about security for: ");

  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap hero__grid">
          <div>
            <h1 className="display h1">I try to hack your website, so a stranger can&rsquo;t.</h1>
            <p className="lede muted" style={{ marginTop: "1.5rem" }}>
              With your written OK, I test your site the way a hacker would. Then I
              show you what I found and how to fix it, in plain English.
            </p>
            <div className="hero__actions">
              <a className="btn btn-saffron" href={ask} target="_blank" rel="noreferrer">
                Get a security check
              </a>
              <a className="btn btn-line" href="#sample">
                See an example report
              </a>
            </div>
          </div>
          <Jali cols={6} rows={6} light={[0.3, 0.7]} />
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap">
          <h2 className="display h2" style={{ maxWidth: "40rem" }}>
            &ldquo;Why would anyone hack a small business?&rdquo;
          </h2>
          <div className="reasons">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="h3">{r.title}</h3>
                <p className="muted" style={{ marginTop: "0.75rem" }}>{r.copy}</p>
              </div>
            ))}
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
            <h2 className="display h2">What you get at the end</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              A short list. Each problem says why it matters and how to fix it,
              worst first. Your developer gets the technical proof in a separate
              section.
            </p>
            <p className="muted" style={{ marginTop: "1.25rem" }}>
              This one is for a made-up dental practice. Tap a problem to open it.
            </p>
          </div>
          <SampleReport />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display h2">How a test goes</h2>
          <ol className="steps" style={{ ["--cols" as string]: 5 }}>
            <li>
              <h3>We agree in writing</h3>
              <p className="muted">What I can test, what I can&rsquo;t, and when.</p>
            </li>
            <li>
              <h3>I test</h3>
              <p className="muted">Tools first, then by hand where it counts.</p>
            </li>
            <li>
              <h3>You get the report</h3>
              <p className="muted">Plain English, worst problem first.</p>
            </li>
            <li>
              <h3>It gets fixed</h3>
              <p className="muted">By your developer, or by me.</p>
            </li>
            <li>
              <h3>I check again</h3>
              <p className="muted">To make sure each fix actually works.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap split">
          <div>
            <h2 className="display h2">My rules</h2>
            <p className="prose-measure" style={{ marginTop: "1.25rem", fontSize: "1.125rem" }}>
              You&rsquo;re letting a stranger try to break into your business. You
              should know exactly how I work.
            </p>
            <p className="muted prose-measure">
              I also hunt for bugs on HackerOne and YesWeHack, where companies pay
              people to find holes in their apps. That&rsquo;s where I keep learning
              how real attacks work.
            </p>
          </div>
          <ul className="check-list" style={{ alignContent: "center", fontSize: "1.125rem", fontWeight: 600 }}>
            {rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2 className="display h2">Things people ask me</h2>
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
          <h2 className="display h2" style={{ maxWidth: "44rem" }}>
            Not sure where you stand? Start with a security check.
          </h2>
          <p className="lede muted">
            Send me your website address. I&rsquo;ll tell you what I&rsquo;d look at
            and when I can start.
          </p>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a className="btn btn-saffron" href={ask} target="_blank" rel="noreferrer">
              Get a security check
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
