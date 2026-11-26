import type { Metadata } from "next";
import Link from "next/link";
import {
  caseStudies,
  caseStudyFields,
  focusAreas,
  methodology,
  researchStatus,
} from "@/lib/research";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security research | Hikma Solutions",
  description:
    "Hikma Solutions’ authorised security research: bug bounty work, application security, business-logic flaws, code review and AI-assisted research. Methodology, honest track record and disclosure policy.",
  openGraph: {
    title: "Security research | Hikma Solutions",
    description:
      "Authorised, coordinated security research from a Durban software studio, with an honest track record.",
  },
};

const aiRules = [
  "AI suggests where to look. It doesn’t decide what’s a finding.",
  "Every lead is reproduced by hand before it goes in a report.",
  "I review anything an AI tool would send to a target before it’s sent.",
  "Program data, client code and personal data only go into AI tools when the program’s rules and the client’s agreement allow it.",
  "Reports are checked line by line. If I can’t explain a step, it comes out.",
];

export default function ResearchPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "50rem" }}>
            Security research
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            Alongside building software, I do authorised security research: finding
            flaws in systems I have permission to test, and reporting them privately
            so they get fixed. It&rsquo;s a young practice, and this page says
            exactly where it stands.
          </p>
          <nav className="jump-links" aria-label="On this page">
            <a href="#status">Track record</a>
            <a href="#focus">What I look for</a>
            <a href="#method">Method</a>
            <a href="#ai">Use of AI</a>
            <a href="#portfolio">Portfolio</a>
            <Link href="/responsible-disclosure">Disclosure policy</Link>
          </nav>
        </div>
      </section>

      <section id="status" className="section" style={{ scrollMarginTop: "1rem" }}>
        <div className="wrap split">
          <div>
            <h2 className="display h2">Where things stand</h2>
            <p className="prose-measure" style={{ marginTop: "1.25rem", fontSize: "1.125rem" }}>
              I&rsquo;d rather show an honest early record than a vague impressive one.
            </p>
          </div>
          <div className="report status-card">
            <div className="report__head">
              <p className="report__title">Research track record</p>
            </div>
            <dl className="status-card__list">
              <div>
                <dt>Started</dt>
                <dd>{researchStatus.started}</dd>
              </div>
              <div>
                <dt>Platforms</dt>
                <dd>{researchStatus.platforms.join(" and ")}</dd>
              </div>
              <div>
                <dt>Results so far</dt>
                <dd>{researchStatus.summary}</dd>
              </div>
              <div>
                <dt>Not yet</dt>
                <dd>
                  <ul>
                    {researchStatus.notYet.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="focus" className="section band-sunk" style={{ scrollMarginTop: "1rem" }}>
        <div className="wrap">
          <h2 className="display h2">What I look for</h2>
          <div className="focus-grid">
            {focusAreas.map((f) => (
              <div key={f.title}>
                <h3 className="h3">{f.title}</h3>
                <p className="muted" style={{ marginTop: "0.6rem" }}>{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="section" style={{ scrollMarginTop: "1rem" }}>
        <div className="wrap">
          <h2 className="display h2">How I investigate</h2>
          <p className="muted prose-measure" style={{ marginTop: "1rem" }}>
            The same steps for every target, from the first look to the final
            retest.
          </p>
          <ol className="steps steps--grid">
            {methodology.map((m) => (
              <li key={m.title}>
                <h3>{m.title}</h3>
                <p className="muted">{m.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ai" className="section band-dark" style={{ scrollMarginTop: "1rem" }}>
        <div className="wrap split">
          <div>
            <h2 className="display h2">How I use AI</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              AI tools help me read more code and spot patterns faster. They
              don&rsquo;t replace checking things by hand, and they don&rsquo;t get
              to break the rules a program sets.
            </p>
          </div>
          <ul className="check-list" style={{ alignContent: "center", fontSize: "1.0625rem" }}>
            {aiRules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="portfolio" className="section" style={{ scrollMarginTop: "1rem" }}>
        <div className="wrap">
          <h2 className="display h2">Research portfolio</h2>
          <p className="muted prose-measure" style={{ marginTop: "1rem" }}>
            Reviews of systems I own, written up after any issue was fixed. Each one
            says what was checked, what was found, and what wasn&rsquo;t tested.
          </p>
          {caseStudies.length > 0 ? (
            <ul className="case-list">
              {caseStudies.map((c) => (
                <li key={c.slug}>
                  <Link href={`/research/case-studies/${c.slug}`}>
                    <span className="work-tag">{c.kind}</span>
                    <h3 className="h3">{c.title}</h3>
                    <span className="muted">{c.summary}</span>
                    <span style={{ fontWeight: 600 }}>
                      {c.severity.split(" (")[0]}. {c.outcome}.
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="empty-note">
            <p style={{ margin: 0, fontWeight: 700 }}>No bug bounty write-ups yet.</p>
            <p className="muted" style={{ margin: "0.5rem 0 0" }}>
              My bug bounty reports so far were duplicates, and those usually
              can&rsquo;t be written up: the issue belongs to the researcher who found
              it first, and the program controls disclosure. Bug bounty case studies
              will appear here once a program allows one to be published.
            </p>
          </div>

          <div className="split" style={{ marginTop: "3.5rem" }}>
            <div>
              <h3 className="h3">How each case study is written</h3>
              <p className="muted prose-measure" style={{ marginTop: "0.75rem" }}>
                Every write-up uses the same structure, so it&rsquo;s easy to check
                and compare. Anything a program hasn&rsquo;t cleared for publication
                is left out or anonymised.
              </p>
            </div>
            <dl className="field-list">
              {caseStudyFields.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.copy}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap split">
          <div>
            <h2 className="display h2">Rules I work by</h2>
            <p className="prose-measure" style={{ marginTop: "1.25rem", fontSize: "1.125rem" }}>
              Authorised testing only, private reporting, and no public details of
              unfixed issues. The full policy covers data handling and program rules.
            </p>
          </div>
          <div style={{ alignSelf: "center", display: "grid", gap: "1rem", justifyItems: "start" }}>
            <Link className="btn btn-ink" href="/responsible-disclosure">
              Read the disclosure policy
            </Link>
            <p className="muted" style={{ margin: 0 }}>
              Found a security problem in something I built? Email{" "}
              <a className="text-link" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "44rem" }}>
            Want your own system tested?
          </h2>
          <p className="lede muted">
            Research is separate from client work. If you want me to test your
            website or app, that&rsquo;s a paid engagement with a signed scope.
          </p>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <Link className="btn btn-saffron" href="/security">
              See security services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
