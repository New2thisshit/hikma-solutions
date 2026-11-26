import type { Metadata } from "next";
import Link from "next/link";
import OfferDetail from "@/components/offer-detail";
import { buildOffers, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Websites and business tools | Hikma Solutions",
  description:
    "Website fixes, new websites, and simple apps to replace spreadsheets, for South African businesses. Built in Durban.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "50rem" }}>
            Websites that get your phone ringing
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            And simple tools to get your team off spreadsheets. Every price below is
            a starting point. You get a fixed quote before I start.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn-saffron"
              href={whatsappLink("Hi Hikma, which of these is right for me? ")}
              target="_blank"
              rel="noreferrer"
            >
              Not sure? Ask me
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
          <h2 className="display h2">Every site I build gets hacked once. By me.</h2>
          <div style={{ alignSelf: "center" }}>
            <p className="prose-measure" style={{ marginTop: 0, fontSize: "1.125rem" }}>
              Before your site goes live, I test it like an attacker would. Two-step
              login, backups and security settings are part of the build. You
              don&rsquo;t pay extra for the basics.
            </p>
            <p className="muted prose-measure">
              Someone else built your site? I can check that too.
            </p>
            <Link className="text-link" href="/security">
              See the security side
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
