import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Hikma Solutions",
  description:
    "Hikma Solutions is a Durban studio that builds websites and business systems for South African companies, and tests them for security.",
};

const principles = [
  {
    title: "The business problem comes first",
    copy: "A site or system only matters if it brings in work, saves time or reduces risk. We start there, not with the technology.",
  },
  {
    title: "Build small, then grow",
    copy: "The first version should create one visible win. Bigger builds come once that one is working.",
  },
  {
    title: "Build like a defender, test like an attacker",
    copy: "Security is part of how we build, and we try to break our own work before anyone else can.",
  },
  {
    title: "You own everything",
    copy: "Domains, hosting and logins are in your name. Handover notes are written so another developer could pick up where we left off.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "54rem" }}>
            Hikma means wisdom. We think good software should show some.
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            Hikma Solutions is a small studio in {siteConfig.location}. We build
            websites and business systems for South African companies, and we test
            them the way an attacker would.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="display h2">Why the lattice.</h2>
          </div>
          <div className="prose-measure">
            <p className="lede" style={{ marginTop: 0 }}>
              Islamic and Indian buildings have long used the jali: a carved
              lattice screen that lets light and air in while keeping prying eyes
              out.
            </p>
            <p className="muted" style={{ marginTop: "1.25rem" }}>
              That&rsquo;s the job we do for a business online. Your website and
              systems should be open to customers, easy to find, easy to use, and
              quick to enquire through, while staying closed to the people looking
              for a way in. Most agencies only do the first half. Most security firms
              only do the second. We do both.
            </p>
          </div>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap">
          <h2 className="display h2 prose-measure">How we work.</h2>
          <div className="split" style={{ marginTop: "2.5rem", rowGap: "2.5rem" }}>
            <div style={{ display: "grid", gap: "2.5rem" }}>
              {principles.slice(0, 2).map((p) => (
                <div key={p.title}>
                  <h3 className="h3">{p.title}</h3>
                  <p className="muted" style={{ marginTop: "0.75rem" }}>{p.copy}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gap: "2.5rem" }}>
              {principles.slice(2).map((p) => (
                <div key={p.title}>
                  <h3 className="h3">{p.title}</h3>
                  <p className="muted" style={{ marginTop: "0.75rem" }}>{p.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="display h2">Who we work with.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              Operators, founders and local service businesses that want something
              useful built, without agency fog.
            </p>
          </div>
          <ul className="check-list" style={{ alignContent: "center", fontWeight: 600, fontSize: "1.0625rem" }}>
            <li>Service businesses whose website should bring in more work</li>
            <li>Teams running operations on spreadsheets and WhatsApp groups</li>
            <li>Founders who need an app idea cut down to a first version</li>
            <li>Businesses holding customer data that need to know it&rsquo;s safe</li>
          </ul>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "48rem" }}>
            Start with the messy version of the problem.
          </h2>
          <p className="lede muted">
            You don&rsquo;t need a brief. Send the site, the spreadsheet or the worry,
            and we&rsquo;ll suggest the smallest useful first step.
          </p>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a
              className="btn btn-saffron"
              href={whatsappLink("Hi Hikma, here's what I'm dealing with: ")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
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
