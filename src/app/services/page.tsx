import type { Metadata } from "next";
import Link from "next/link";
import OfferDetail from "@/components/offer-detail";
import { buildOffers, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Build services | Hikma Solutions",
  description:
    "Website rescue, business websites and business system prototypes for South African companies, from a Durban studio.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "52rem" }}>
            Websites that win work. Systems that remove admin.
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            Fixed starting prices, clear scope, and every build tested for security
            before it goes live.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn-saffron"
              href={whatsappLink("Hi Hikma, which build service fits my business? ")}
              target="_blank"
              rel="noreferrer"
            >
              Ask which one fits
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem, 5vw, 4rem)" }}>
        <div className="wrap">
          {buildOffers.map((offer) => (
            <OfferDetail key={offer.slug} offer={offer} />
          ))}
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap split">
          <div>
            <h2 className="display h2">Security comes with every build.</h2>
            <p className="lede muted" style={{ marginTop: "1.25rem" }}>
              Each site we launch gets security headers, two-factor admin access,
              off-site backups and a pre-launch test. You don&rsquo;t pay extra for
              the basics.
            </p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <p className="muted prose-measure" style={{ marginTop: 0 }}>
              Already have a site someone else built? A health check tells you where
              it stands in under a week.
            </p>
            <Link className="text-link" href="/security">
              See security services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
