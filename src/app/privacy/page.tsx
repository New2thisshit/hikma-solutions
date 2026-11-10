import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website privacy",
  description:
    "How the Hikma Solutions website handles your information: no cookies, no analytics, and contact form messages sent to us by email.",
  alternates: { canonical: "/privacy" },
};

/*
 * Keep this page true to the code. If you add analytics, cookies, embeds
 * or a new form, update it in the same change.
 * TODO(owner): name the hosting provider once the site is deployed, and
 * review this page against POPIA with your own adviser.
 */
export default function PrivacyPage() {
  return (
    <section className="wrap pb-12 pt-14 md:pt-20">
      <h1 className="t-title max-w-[18ch]">Privacy on this website</h1>
      <p className="t-lead mt-6">
        This page covers this website only. Our app Redirect has its own
        privacy policy, linked from the{" "}
        <Link href="/products/redirect" className="link">
          Redirect page
        </Link>
        .
      </p>

      <div className="prose-block t-body mt-14 border-t border-line pt-4 text-[1.05rem]">
        <h2 className="t-h3 text-[var(--ink)]">Who we are</h2>
        <p>
          This website is run by {siteConfig.legalName}, {siteConfig.location}.
          You can reach us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2 className="t-h3 text-[var(--ink)]">No cookies, no analytics, no trackers</h2>
        <p>
          This website does not set cookies. It does not use analytics,
          advertising or tracking scripts, and it does not load anything from
          other websites: fonts and images are served from our own site.
        </p>

        <h2 className="t-h3 text-[var(--ink)]">Your theme choice</h2>
        <p>
          If you switch between the light and dark theme, your browser
          remembers that choice in its local storage on your device. It is
          never sent to us. Clearing your browser&rsquo;s site data removes it.
        </p>

        <h2 className="t-h3 text-[var(--ink)]">The contact form</h2>
        <p>
          When you send the contact form by email, what you type (your name,
          email address, company, the topic, your timeline and your message)
          is sent to us as an email through our email provider. We use it only
          to reply to you and to discuss the work you asked about.
        </p>
        <p>
          If you choose WhatsApp instead, the form opens WhatsApp with your
          message filled in. Nothing is sent until you press send in WhatsApp,
          and WhatsApp&rsquo;s own privacy terms then apply.
        </p>

        <h2 className="t-h3 text-[var(--ink)]">Server logs</h2>
        <p>
          Like any website, the server that delivers these pages may keep
          short-lived technical logs, such as IP addresses and the pages
          requested, to keep the site running and secure.
        </p>

        <h2 className="t-h3 text-[var(--ink)]">Your rights</h2>
        <p>
          You can ask us what information we hold about you from a contact
          message, and ask us to correct or delete it, by emailing{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <p className="t-small pt-6">Last updated November 2026.</p>
      </div>
    </section>
  );
}
