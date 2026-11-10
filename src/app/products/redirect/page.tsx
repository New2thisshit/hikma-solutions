import type { Metadata } from "next";
import Link from "next/link";
import PauseRing from "@/components/pause-ring";
import RedirectLinks from "@/components/redirect-links";
import { redirectFacts } from "@/components/redirect-feature";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Redirect for Android",
  description:
    "Redirect is a private porn blocker for Android with a calm 90-second pause for difficult moments. No account, no ads, no analytics. Coming soon to Google Play.",
  alternates: { canonical: "/products/redirect" },
  openGraph: {
    title: "Redirect for Android",
    description:
      "A private porn blocker for Android with a calm 90-second pause. Coming soon to Google Play.",
  },
};

const features = [
  {
    title: "Blocking",
    copy: "Redirect blocks porn on your Android phone.",
  },
  {
    title: "A pause when it is hard",
    copy: "In a difficult moment, Redirect offers a calm 90-second pause to help you get through it.",
  },
  {
    title: "Journal, check-ins and plans",
    copy: "Write things down, check in with yourself and keep your plans. All of it stays on your phone.",
  },
];

export default function RedirectPage() {
  return (
    <div className="redirect-surface">
      <section className="wrap grid gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-16">
        <div>
          <p className="t-small">
            An app by{" "}
            <Link href="/about" className="link">
              {siteConfig.legalName}
            </Link>
          </p>
          <h1 className="rd-wordmark mt-4">Redirect</h1>
          <p className="rd-statement mt-6 max-w-[30ch]">
            A private porn blocker for Android that also helps in the moment,
            with a calm 90‑second pause.
          </p>
          <p className="rd-status mt-8">Coming soon to Google Play</p>
          <p className="t-small mt-3 max-w-md">
            Redirect has not been released yet. This page will link to the
            Google Play listing once it is live.
          </p>
        </div>
        <PauseRing className="mx-auto w-full max-w-[280px] lg:max-w-[340px]" />
      </section>

      <section aria-labelledby="what-heading" className="wrap py-10 md:py-14">
        <div className="grid gap-10 border-t border-[var(--rd-line)] pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="what-heading" className="serif text-[clamp(1.7rem,1.3rem+1.4vw,2.5rem)] leading-tight">
            What it does
          </h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <li key={feature.title}>
                <h3 className="text-[1.15rem] font-[560] text-[var(--rd-pine)]">
                  {feature.title}
                </h3>
                <p className="t-small mt-2 text-[1rem]">{feature.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="privacy-heading" className="wrap py-10 md:py-14">
        <div className="grid gap-10 border-t border-[var(--rd-line)] pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="privacy-heading" className="serif text-[clamp(1.7rem,1.3rem+1.4vw,2.5rem)] leading-tight">
              Private by design
            </h2>
            <p className="t-body mt-4">
              Something this personal should stay personal. Redirect works
              without an account, and what you write stays on your phone.
            </p>
          </div>
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {redirectFacts.map((fact) => (
              <div key={fact.term} className="border-t border-[var(--rd-line)] pt-3">
                <dt className="font-[560] text-[var(--rd-pine)]">{fact.term}</dt>
                <dd className="t-small mt-0.5 text-[1rem]">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="price-heading" className="wrap py-10 md:py-14">
        <div className="grid gap-10 border-t border-[var(--rd-line)] pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="price-heading" className="serif text-[clamp(1.7rem,1.3rem+1.4vw,2.5rem)] leading-tight">
            Price
          </h2>
          <div>
            <p className="rd-statement">Free to use.</p>
            <p className="t-body mt-3">
              An optional paid upgrade, Redirect Plus, is planned for later.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="links-heading" className="wrap pb-24 pt-10 md:pt-14">
        <div className="grid gap-10 border-t border-[var(--rd-line)] pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="links-heading" className="serif text-[clamp(1.7rem,1.3rem+1.4vw,2.5rem)] leading-tight">
              Privacy and support
            </h2>
            <p className="t-body mt-4">
              Redirect is made and published by {siteConfig.legalName} in{" "}
              {siteConfig.location}.
            </p>
          </div>
          <RedirectLinks />
        </div>
      </section>
    </div>
  );
}
