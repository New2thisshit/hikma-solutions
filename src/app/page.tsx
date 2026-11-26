import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Jali from "@/components/jali";
import SampleReport from "@/components/sample-report";
import WorkCard from "@/components/work-card";
import { researchStatus } from "@/lib/research";
import { buildOffers, redirectApp, securityOffers, whatsappLink, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hikma Solutions | Software, mobile apps and security research in Durban",
  description:
    "Hikma Solutions is a Durban software studio. Custom software, mobile apps and websites for South African businesses, security testing, and authorised security research.",
};

const whatsappHref = whatsappLink("Hi Hikma, I’d like to talk about a project: ");

export default function Home() {
  return (
    <>
      <section className="band-dark hero">
        <div className="wrap hero__grid">
          <div>
            <h1 className="display h1">I build software. Then I try to break it.</h1>
            <p className="lede muted" style={{ marginTop: "1.75rem" }}>
              Hikma Solutions is a software studio in Durban. I build business
              systems, mobile apps and websites, test them the way an attacker
              would, and do independent security research.
            </p>
            <div className="hero__actions">
              <a className="btn btn-saffron" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp me about a project
              </a>
              <Link className="btn btn-line" href="/research">
                Security research
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
                href={whatsappLink("Hi Hikma, I’d like a security check for: ")}
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

      <section className="section band-sunk">
        <div className="wrap split">
          <div>
            <h2 className="display h2">Security research</h2>
            <p className="prose-measure" style={{ marginTop: "1.25rem", fontSize: "1.125rem" }}>
              Separate from client work, I look for security flaws in bug bounty
              programs on {researchStatus.platforms.join(" and ")}, with permission
              and within each program&rsquo;s rules.
            </p>
            <p className="muted prose-measure">
              It&rsquo;s early. {researchStatus.summary} The research page shows the
              method, the honest track record and how case studies will be
              published.
            </p>
            <div className="hero__actions" style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-ink" href="/research">
                How I do research
              </Link>
              <Link className="btn btn-line" href="/responsible-disclosure">
                Disclosure policy
              </Link>
            </div>
          </div>
          <ul className="check-list" style={{ alignContent: "center", fontSize: "1.125rem", fontWeight: 600 }}>
            <li>Access control and login flaws in web apps and APIs</li>
            <li>Business-logic bugs that scanners miss</li>
            <li>Source-code review</li>
            <li>AI-assisted, with every finding checked by hand</li>
            <li>Private, coordinated reporting only</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap note">
          <h2 className="display h2">Why I do both</h2>
          <div className="note__body">
            <p>
              Good-looking software doesn&rsquo;t help you much if someone can walk
              in through the back door.
            </p>
            <p>
              Most developers never test for that. Most security companies
              don&rsquo;t build software, and their prices are made for big companies.
            </p>
            <p>
              So I do both. I build your system, app or site, then I attack it
              myself before it goes live. One person, one WhatsApp number, and nothing gets lost
              between two companies.
            </p>
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
              <p className="muted">All logins in your name. Monthly support if you want it.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display h2">Things I&rsquo;ve built</h2>
          <p className="muted prose-measure" style={{ marginTop: "1rem" }}>
            Open them, click around. Demos are marked as demos.
          </p>

          <div className="redirect-strip">
            <Image src={redirectApp.icon} alt="" width={64} height={64} />
            <div>
              <p style={{ margin: 0 }}>
                <strong>{redirectApp.title}.</strong> {redirectApp.tagline}
              </p>
              <p className="muted" style={{ margin: "0.25rem 0 0" }}>
                My own Android app, live on Google Play.
              </p>
            </div>
            <div className="redirect-strip__links">
              {redirectApp.links.map((l) => (
                <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="work-grid">
            {work.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link className="text-link" href="/work">
              See all my work and try the fleet demo
            </Link>
          </p>
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
