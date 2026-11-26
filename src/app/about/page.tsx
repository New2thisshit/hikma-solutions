import type { Metadata } from "next";
import Link from "next/link";
import { redirectApp, siteConfig, whatsappLink } from "@/lib/site";
import { researchStatus } from "@/lib/research";

export const metadata: Metadata = {
  title: "About | Hikma Solutions",
  description:
    "Hikma Solutions is a small Durban studio that builds websites and business tools for South African businesses, and tests them for security.",
};

const principles = [
  "We start with your problem, not with which technology to use.",
  "I build something small that works first, then we grow it.",
  "You get an update from me every week.",
  "Your domain, hosting and logins are in your name. If you ever leave, the next developer can carry on.",
];

export default function AboutPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "48rem" }}>A small software studio in Durban.</h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            I build custom software, mobile apps and websites for South African
            businesses, test them for security, and do independent security
            research. When you message Hikma, the person who answers is the person
            who does the work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="display h2">The name</h2>
            <p style={{ marginTop: "1.25rem", fontSize: "1.125rem" }} className="prose-measure">
              Hikma is Arabic for wisdom. To me that means building what you
              actually need, not the biggest thing I can sell you.
            </p>
          </div>
          <div>
            <h2 className="display h2">The pattern</h2>
            <p style={{ marginTop: "1.25rem", fontSize: "1.125rem" }} className="prose-measure">
              The star pattern on this site comes from the jali, a carved screen
              used in Islamic and Indian buildings. It lets light and air in, and
              keeps people from seeing inside.
            </p>
            <p className="muted prose-measure">
              That&rsquo;s what I want for your business online: easy for customers
              to find and use, hard for anyone else to get into.
            </p>
          </div>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap split">
          <h2 className="display h2">How I work</h2>
          <ul className="check-list" style={{ alignContent: "center", fontSize: "1.125rem" }}>
            {principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="display h2">What you can check</h2>
            <p className="prose-measure" style={{ marginTop: "1.25rem", fontSize: "1.125rem" }}>
              No testimonials or big claims here. Just things you can open and look
              at yourself.
            </p>
          </div>
          <ul className="check-list" style={{ alignContent: "center", fontSize: "1.0625rem" }}>
            <li>
              <span>
              <a className="text-link" href={redirectApp.links[0].href} target="_blank" rel="noreferrer">
                Redirect
              </a>
              , my own Android app, live on Google Play
              </span>
            </li>
            <li>
              <span>
              <a className="text-link" href="https://www.saradioandpodcasts.co.za" target="_blank" rel="noreferrer">
                SA Radio and Podcasts
              </a>
              , a live site streaming 94 South African stations
              </span>
            </li>
            <li>
              <span>
              A fleet inspection app in development for a health NGO.{" "}
              <Link className="text-link" href="/work#fleet-demo">Try the demo</Link>
              </span>
            </li>
            <li>
              <span>
              Bug bounty research on {researchStatus.platforms.join(" and ")} since{" "}
              {researchStatus.started}, with an{" "}
              <Link className="text-link" href="/research#status">honest track record</Link>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap split">
          <h2 className="display h2">Company details</h2>
          <dl className="field-list">
            <div>
              <dt>Registered name</dt>
              <dd>{siteConfig.legalName}</dd>
            </div>
            <div>
              <dt>Registration</dt>
              <dd>
                Private company registered with the CIPC in South Africa,{" "}
                {siteConfig.registeredYear}
                {siteConfig.registrationNumber ? `. Reg. no. ${siteConfig.registrationNumber}` : ""}
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{siteConfig.location}</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <br />
                WhatsApp {siteConfig.phone}
              </dd>
            </div>
            <div>
              <dt>Security contact</dt>
              <dd>
                See the <Link className="text-link" href="/responsible-disclosure">disclosure policy</Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2 className="display h2">Who I work with</h2>
          <ul className="check-list" style={{ alignContent: "center", fontWeight: 600, fontSize: "1.125rem" }}>
            <li>Panel beaters, accountants, clinics and other local businesses</li>
            <li>Teams running their day on spreadsheets and WhatsApp groups</li>
            <li>People with an app idea who need help making it real</li>
            <li>Anyone holding customer data who wants to know it&rsquo;s safe</li>
          </ul>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "44rem" }}>
            You don&rsquo;t need a plan. Just tell me what&rsquo;s going wrong.
          </h2>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a
              className="btn btn-saffron"
              href={whatsappLink("Hi Hikma, here’s what’s going on: ")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp me
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
