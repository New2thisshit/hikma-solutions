import Link from "next/link";
import PauseRing from "./pause-ring";

export const redirectFacts = [
  { term: "No account", detail: "Nothing to sign up for." },
  { term: "No ads", detail: "No advertising in the app." },
  { term: "No analytics", detail: "The app does not track how you use it." },
  { term: "On your phone", detail: "Journal, check-ins and plans stay on the device." },
];

export default function RedirectFeature() {
  return (
    <section aria-labelledby="redirect-heading" className="wrap">
      <div className="redirect-surface grid gap-12 rounded-[28px] px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16 lg:px-16 lg:py-20">
        <div>
          <p className="t-small">Our first app</p>
          <h2 id="redirect-heading" className="rd-wordmark mt-3">
            Redirect
          </h2>
          <p className="rd-statement mt-6 max-w-[30ch]">
            A private porn blocker for Android that also helps in the moment,
            with a calm 90‑second pause.
          </p>

          <dl className="mt-10 grid max-w-xl gap-x-8 gap-y-5 sm:grid-cols-2">
            {redirectFacts.map((fact) => (
              <div key={fact.term} className="border-t border-[var(--rd-line)] pt-3">
                <dt className="font-[560] text-[var(--rd-pine)]">{fact.term}</dt>
                <dd className="t-small mt-0.5">{fact.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/products/redirect" className="btn btn-solid">
              Read about Redirect
            </Link>
            <p className="rd-status">Coming soon to Google Play</p>
          </div>
        </div>

        <PauseRing className="mx-auto w-full max-w-[300px] lg:max-w-[340px]" />
      </div>
    </section>
  );
}
