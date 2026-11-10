import type { Metadata } from "next";
import Link from "next/link";
import { principles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hikma Solutions is a small, founder-led software studio in Durban, South Africa, building websites and business systems for clients and publishing its own apps.",
  alternates: { canonical: "/about" },
};

const doing = [
  {
    title: "Websites that sell the business",
    copy: "Pages for service businesses that need stronger trust, clearer offers and an easier way to get in touch.",
  },
  {
    title: "Dashboards and internal tools",
    copy: "Systems for teams still relying on spreadsheets, paper forms, email chains or WhatsApp to coordinate work.",
  },
  {
    title: "Prototypes and first versions",
    copy: "Turning a broad app idea into a realistic first build with a clear scope.",
  },
  {
    title: "Our own apps",
    copy: "Software we design, build and publish ourselves. The first is Redirect for Android.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="wrap pb-12 pt-14 md:pt-20">
        <h1 className="t-title max-w-[18ch]">
          A small studio in Durban that builds useful software.
        </h1>
        <p className="t-lead mt-6">
          Hikma Solutions is founder-led and based in {siteConfig.location}. We
          help South African businesses turn a weak web presence, manual admin
          and vague app ideas into clear, working systems. We also make and
          publish apps of our own.
        </p>
      </section>

      <section aria-labelledby="doing-heading" className="wrap">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="doing-heading" className="t-h2">
            What we do
          </h2>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {doing.map((item) => (
              <li key={item.title}>
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-small mt-2 text-[1rem]">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how-heading" className="wrap mt-24 md:mt-32">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="how-heading" className="t-h2">
            How we work
          </h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {principles.map((item) => (
              <li key={item.title}>
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-small mt-2 text-[1rem]">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="proof-heading" className="wrap mt-24 md:mt-32">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="proof-heading" className="t-h2">
            What you will not find here
          </h2>
          <div className="prose-block t-body">
            <p>
              No testimonials we cannot back up, no borrowed client logos and
              no inflated numbers. Our{" "}
              <Link href="/work" className="link">
                work page
              </Link>{" "}
              says plainly which projects are live and which are concept builds.
              Client case studies will appear there, with the problem, what we
              built and screenshots, once clients agree to be named.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="company-heading" className="wrap mt-24 md:mt-32">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="company-heading" className="t-h2">
            Company details
          </h2>
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="t-small">Registered name</dt>
              <dd className="mt-1">{siteConfig.legalName}</dd>
            </div>
            <div>
              <dt className="t-small">Location</dt>
              <dd className="mt-1">{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="t-small">Email</dt>
              <dd className="mt-1 break-words">
                <a href={`mailto:${siteConfig.email}`} className="link">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="t-small">Phone and WhatsApp</dt>
              <dd className="mt-1">
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="link">
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
