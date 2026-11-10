import Link from "next/link";
import RedirectFeature from "@/components/redirect-feature";
import { offers, workItems } from "@/lib/content";
import { siteConfig, whatsappLink } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/android-chrome-512x512.png`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durban",
    addressCountry: "ZA",
  },
  areaServed: "ZA",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <section className="wrap pb-12 pt-10 md:pb-24 md:pt-24">
        <h1 className="t-display rise max-w-[19ch]">
          We build websites and systems for businesses, and apps of our own.
        </h1>
        <p className="t-lead rise rise-2 mt-6 sm:mt-8">
          Hikma Solutions is a small, founder-led software studio in Durban,
          South Africa. We build for South African businesses, and publish our
          own apps as {siteConfig.legalName}.
        </p>

        <div className="rise rise-3 mt-10 grid sm:mt-14 border-t border-line sm:grid-cols-2">
          <Link
            href="/services"
            className="group block py-5 no-underline sm:py-6 sm:border-r sm:border-line sm:pr-8"
          >
            <span className="t-small block">For businesses</span>
            <span className="t-h3 mt-1 block text-[1.1rem] font-[560] sm:text-[1.3rem] underline decoration-[var(--line-strong)] underline-offset-[6px] group-hover:decoration-current">
              Websites, business systems and prototypes
            </span>
          </Link>
          <Link
            href="/products/redirect"
            className="group block border-t border-line py-5 no-underline sm:py-6 sm:border-t-0 sm:pl-8"
          >
            <span className="t-small block">Our apps</span>
            <span className="t-h3 mt-1 block text-[1.1rem] font-[560] sm:text-[1.3rem] underline decoration-[var(--line-strong)] underline-offset-[6px] group-hover:decoration-current">
              Redirect, coming soon to Google Play
            </span>
          </Link>
        </div>
      </section>

      <RedirectFeature />

      <section aria-labelledby="services-heading" className="wrap mt-28 md:mt-36">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="services-heading" className="t-h2">
              Client work
            </h2>
            <p className="t-body mt-4">
              Websites and business systems for South African businesses that
              want more enquiries and less manual admin. Fixed starting prices,
              so you know where a project begins.
            </p>
            <Link href="/services" className="btn btn-line mt-8">
              See services and prices
            </Link>
          </div>
          <ul>
            {offers.map((offer) => (
              <li
                key={offer.slug}
                className="grid gap-2 border-t border-line py-7 sm:grid-cols-[1fr_auto] sm:gap-10"
              >
                <div>
                  <h3 className="t-h3">{offer.title}</h3>
                  <p className="t-small mt-2 max-w-[52ch]">{offer.summary}</p>
                </div>
                <p className="sm:text-right">
                  <span className="block font-[560]">{offer.price}</span>
                  <span className="t-small block">{offer.timeline}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="wrap mt-28 md:mt-36">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="work-heading" className="t-h2">
              Work
            </h2>
            <p className="t-body mt-4">
              A live directory and two concept builds that show how we approach
              a problem. Each is labelled for what it is.
            </p>
            <Link href="/work" className="btn btn-line mt-8">
              See the work
            </Link>
          </div>
          <ul>
            {workItems.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 border-t border-line py-6 sm:grid-cols-[1fr_auto] sm:gap-10"
              >
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-small sm:text-right">{item.kind}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="wrap mt-28 md:mt-36">
        <div className="border-t border-line pt-14">
          <h2 id="contact-heading" className="t-h2 max-w-[20ch]">
            Start with the problem, not a polished brief.
          </h2>
          <p className="t-body mt-4">
            Send your current website, the spreadsheet that eats your week or
            the app idea you want to make real. You will get a practical next
            step.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="link mt-10 block text-[clamp(1.15rem,0.55rem+3.7vw,3.25rem)] [overflow-wrap:anywhere] font-[500] leading-tight tracking-[-0.02em]"
          >
            {siteConfig.email}
          </a>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hi Hikma Solutions, here is what I need help with:")}
              className="btn btn-solid"
              rel="noreferrer"
            >
              Message us on WhatsApp
            </a>
            <Link href="/contact" className="btn btn-line">
              Use the contact form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
