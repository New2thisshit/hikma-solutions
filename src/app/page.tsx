import type { Metadata } from "next";
import Link from "next/link";
import Jali from "@/components/jali";
import SampleReport from "@/components/sample-report";
import { buildOffers, securityOffers, whatsappLink, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hikma Solutions | Websites and cyber security in Durban",
  description:
    "I build websites and business tools for South African businesses, then I try to hack them before anyone else does. Hikma Solutions, Durban.",
};

const whatsappHref = whatsappLink("Hi Hikma, here's my website: ");

export default function Home() {
  return (
    <>
      <section className="band-dark hero">
        <div className="wrap hero__grid">
          <div>
            <h1 className="display h1">I build your website. Then I try to hack it.</h1>
            <p className="lede muted" style={{ marginTop: "1.75rem" }}>
              Hikma Solutions is my studio in Durban. I make
              websites and business tools that bring in customers, and I check
              they&rsquo;re safe before a hacker does.
            </p>
            <div className="hero__actions">
              <a className="btn btn-saffron" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp me your website
              </a>
              <Link className="btn btn-line" href="/security">
                How the hacking part works
              </Link>
            </div>
          </div>
          <Jali animate />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display h2">What I can do for you</h2>
          <p className="muted prose-measure" style={{ marginTop: "1rem" }}>
            These prices are where things start. You get a fixed quote before any
            work begins.
          </p>

          <div className="split" style={{ marginTop: "3rem" }}>
            <div>
              <h3 className="h3">Build</h3>
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
            </div>
            <div>
              <h3 className="h3">Keep it safe</h3>
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
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap hero__grid" style={{ alignItems: "start" }}>
          <div className="prose-measure">
            <h2 className="display h2">What a security check looks like</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              You don&rsquo;t get 80 pages of jargon. You get a short list in plain
              English, with the worst problem at the top.
            </p>
            <p className="muted" style={{ marginTop: "1.25rem" }}>
              This one is for a made-up dental practice. Tap a problem to open it.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn-saffron"
                href={whatsappLink("Hi Hikma, I'd like a security check for: ")}
                target="_blank"
                rel="noreferrer"
              >
                Get a check for my site
              </a>
            </div>
          </div>
          <SampleReport />
        </div>
      </section>

      <section className="section">
        <div className="wrap note">
          <h2 className="display h2">Why I do both</h2>
          <div className="note__body">
            <p>
              A good-looking website doesn&rsquo;t help you much if someone can walk
              in through the back door.
            </p>
            <p>
              Most web designers never test for that. Most security companies
              don&rsquo;t build websites, and their prices are made for big companies.
            </p>
            <p>
              So I do both. I build your site, then I attack it myself before it
              goes live. One person, one WhatsApp number, and nothing gets lost
              between two companies.
            </p>
            <p className="note__sign">Hikma Solutions</p>
          </div>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap">
          <h2 className="display h2">How working with me goes</h2>
          <ol className="steps" style={{ ["--cols" as string]: 5 }}>
            <li>
              <h3>You send me a message</h3>
              <p className="muted">Your website, your idea, or what&rsquo;s bugging you.</p>
            </li>
            <li>
              <h3>I tell you what I&rsquo;d do</h3>
              <p className="muted">And what it costs. No surprises later.</p>
            </li>
            <li>
              <h3>I build it</h3>
              <p className="muted">You get an update from me every week.</p>
            </li>
            <li>
              <h3>I try to hack it</h3>
              <p className="muted">Before it goes live, not after.</p>
            </li>
            <li>
              <h3>You get the keys</h3>
              <p className="muted">All logins in your name. I stay on call if you want.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display h2">Things I&rsquo;ve built</h2>
          <p className="muted prose-measure" style={{ marginTop: "1rem" }}>
            Demos are marked as demos. Client work goes up here once the client
            says it&rsquo;s okay.
          </p>
          <ul className="work-list">
            {work.map((w) => (
              <li key={w.title}>
                <span className="work-tag">{w.kind}</span>
                <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>{w.title}</span>
                <span className="muted">{w.copy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "44rem" }}>
            Send me your website link. I&rsquo;ll tell you the first thing I&rsquo;d fix.
          </h2>
          <p className="lede muted">Free, and I reply myself.</p>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a className="btn btn-saffron" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp me your website
            </a>
            <Link className="btn btn-line" href="/contact">
              Or fill in a form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
