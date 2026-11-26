import type { Metadata } from "next";
import Link from "next/link";
import OfferDetail from "@/components/offer-detail";
import { buildOffers, serviceGroups, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software, mobile apps and websites | Hikma Solutions",
  description:
    "Custom software, Android and cross-platform mobile apps, and websites for South African businesses. Built and security-tested by Hikma Solutions in Durban.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "52rem" }}>
            Software, mobile apps and websites
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            I build systems that replace spreadsheets, apps people actually open,
            and websites that bring in work. Every price is a starting point, and
            you get a fixed quote before I start.
          </p>
          <nav className="jump-links" aria-label="Services on this page">
            {serviceGroups.map((g) => (
              <a key={g.slug} href={`#${g.slug}`}>
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {serviceGroups.map((group, i) => (
        <section
          key={group.slug}
          id={group.slug}
          className={`section ${i % 2 === 1 ? "band-sunk" : ""}`}
          style={{ scrollMarginTop: "1rem" }}
        >
          <div className="wrap">
            <div className="split">
              <h2 className="display h2">{group.title}</h2>
              <div style={{ alignSelf: "center" }}>
                <p className="prose-measure" style={{ margin: 0, fontSize: "1.125rem" }}>
                  {group.intro}
                </p>
                <Link
                  className="text-link"
                  href={group.proof.href}
                  target={group.proof.href.startsWith("http") ? "_blank" : undefined}
                  rel={group.proof.href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ display: "inline-block", marginTop: "1rem" }}
                >
                  {group.proof.label}
                </Link>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              {group.offers.map((slug) => {
                const offer = buildOffers.find((o) => o.slug === slug)!;
                return <OfferDetail key={slug} offer={offer} />;
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section band-dark">
        <div className="wrap split">
          <h2 className="display h2">Every build gets attacked once. By me.</h2>
          <div style={{ alignSelf: "center" }}>
            <p className="prose-measure" style={{ marginTop: 0, fontSize: "1.125rem" }}>
              Before anything goes live, I test it like an attacker would. Two-step
              login, backups and security settings are part of the build. You
              don&rsquo;t pay extra for the basics.
            </p>
            <p className="muted prose-measure">
              Need security work on something you already have?
            </p>
            <div className="hero__actions" style={{ marginTop: "1rem" }}>
              <Link className="btn btn-saffron" href="/security">
                Security services
              </Link>
              <a
                className="btn btn-line"
                href={whatsappLink("Hi Hikma, which service is right for me? ")}
                target="_blank"
                rel="noreferrer"
              >
                Not sure? Ask me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
