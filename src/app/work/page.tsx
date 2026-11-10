import type { Metadata } from "next";
import Link from "next/link";
import { workItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Work by Hikma Solutions: a live South African radio and podcast directory, concept builds for fleet operations and a panel beater, and our own app, Redirect.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="wrap pb-12 pt-14 md:pt-20">
        <h1 className="t-title max-w-[16ch]">Work, labelled for what it is.</h1>
        <p className="t-lead mt-6">
          One live project and two concept builds we made to show how we
          approach a problem. Client case studies will be added here when
          clients agree to be named.
        </p>
      </section>

      <section aria-label="Projects" className="wrap">
        {workItems.map((item) => (
          <article
            key={item.title}
            aria-labelledby={`${item.title}-title`.replace(/\s+/g, "-")}
            className="grid gap-6 border-t border-line py-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16"
          >
            <div>
              <p className="t-small">{item.kind}</p>
              <h2
                id={`${item.title}-title`.replace(/\s+/g, "-")}
                className="t-h2 mt-2"
              >
                {item.title}
              </h2>
              {item.url ? (
                <a href={item.url} className="link mt-4 inline-block">
                  Visit the live site
                </a>
              ) : null}
            </div>
            <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
              <p className="t-body text-[1.1rem]">{item.summary}</p>
              <div>
                <h3 className="t-small">Focus</h3>
                <ul className="mt-3 grid gap-2">
                  {item.focus.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 flex-none bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <article
          aria-labelledby="own-product-title"
          className="grid gap-6 border-t border-line py-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16"
        >
          <div>
            <p className="t-small">Our own product</p>
            <h2 id="own-product-title" className="t-h2 mt-2">
              Redirect for Android
            </h2>
          </div>
          <div>
            <p className="t-body text-[1.1rem]">
              A private porn blocker for Android with a calm 90-second pause
              for difficult moments. Designed, built and published by us.
              Coming soon to Google Play.
            </p>
            <Link href="/products/redirect" className="btn btn-line mt-6">
              Read about Redirect
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
