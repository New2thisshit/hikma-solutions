import type { Metadata } from "next";
import Link from "next/link";
import { offers, processSteps, useCases } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website Rescue Sprint, Business Website Build and Operations System Prototype: fixed-start offers from Hikma Solutions in Durban for South African businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="wrap pb-12 pt-14 md:pt-20">
        <h1 className="t-title max-w-[18ch]">
          Websites and business systems, starting small.
        </h1>
        <p className="t-lead mt-6">
          The best first project is rarely a giant platform. We start with the
          smallest useful improvement: fix the website, build the website, or
          prototype the system.
        </p>
      </section>

      <section aria-label="Offers" className="wrap">
        {offers.map((offer) => (
          <article
            key={offer.slug}
            id={offer.slug}
            aria-labelledby={`${offer.slug}-title`}
            className="grid gap-8 border-t border-line py-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16"
          >
            <div>
              <h2 id={`${offer.slug}-title`} className="t-h2">
                {offer.title}
              </h2>
              <p className="mt-4 text-[1.15rem] font-[560]">{offer.price}</p>
              <p className="t-small">Usually {offer.timeline}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="t-body">{offer.summary}</p>
                <p className="mt-5">{offer.outcome}</p>
              </div>
              <div>
                <h3 className="t-small">What is included</h3>
                <ul className="mt-3 grid gap-2">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 flex-none bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section aria-labelledby="process-heading" className="wrap mt-16 md:mt-24">
        <div className="border-t border-line pt-12">
          <h2 id="process-heading" className="t-h2">
            How a project runs
          </h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <p className="t-small">Step {index + 1}</p>
                <h3 className="t-h3 mt-1">{step.title}</h3>
                <p className="t-small mt-3 text-[1rem]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="fit-heading" className="wrap mt-24 md:mt-32">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="fit-heading" className="t-h2">
              Typical starting points
            </h2>
            <p className="t-body mt-4">
              Specific problems are easier to scope, price and fix than vague
              software projects.
            </p>
          </div>
          <ul>
            {useCases.map((item) => (
              <li key={item} className="border-t border-line py-4 first:border-t-0 first:pt-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-cta" className="wrap mt-24 md:mt-32">
        <div className="border-t border-line pt-12">
          <h2 id="services-cta" className="t-h2 max-w-[22ch]">
            Not sure which one fits? Ask.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hi Hikma Solutions, which of your offers fits my project?")}
              className="btn btn-solid"
              rel="noreferrer"
            >
              Ask on WhatsApp
            </a>
            <Link href="/contact" className="btn btn-line">
              Send project details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
