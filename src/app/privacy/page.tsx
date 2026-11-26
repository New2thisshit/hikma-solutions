import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy | Hikma Solutions",
  description: "What Hikma Solutions collects through this website, why, and how to have it deleted.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1">Privacy</h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            The short version: I only collect what you send me, I use it to reply
            and do the work, and I&rsquo;ll delete it if you ask.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap legal">
          <h2 className="h3">Who is responsible</h2>
          <p>
            {siteConfig.legalName}, {siteConfig.location}. Questions or requests:{" "}
            <a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2 className="h3">What I collect</h2>
          <ul>
            <li>
              <strong>Contact form:</strong> your name, email, business name, the
              service you picked and your message. If you send it by email, it
              comes to my inbox. If you use the WhatsApp button, nothing is stored
              by this site. The message goes through WhatsApp.
            </li>
            <li>
              <strong>WhatsApp and email:</strong> whatever you choose to send me.
            </li>
            <li>
              <strong>Website visits:</strong> the hosting provider keeps standard
              server logs. If visitor stats are switched on, they come from
              Plausible, which doesn&rsquo;t use cookies or track you across sites.
            </li>
          </ul>

          <h2 className="h3">Why</h2>
          <p>To reply to you, quote, do the work you ask for, and send invoices.</p>

          <h2 className="h3">Who else sees it</h2>
          <p>
            Nobody, except the services that carry it: my email provider, WhatsApp,
            and the website host. I don&rsquo;t sell or share your details.
          </p>

          <h2 className="h3">Security work</h2>
          <p>
            Anything I see while testing your systems is covered by our written
            agreement. Findings go to you only, and I delete the data I collected
            once the job is done. You keep the report.
          </p>

          <h2 className="h3">How long I keep it</h2>
          <p>
            Only as long as needed to work with you, plus whatever tax law requires
            for invoices.
          </p>

          <h2 className="h3">Your rights</h2>
          <p>
            Under POPIA you can ask to see, correct or delete the information I hold
            about you. Email {siteConfig.email} and I&rsquo;ll sort it out. You can
            also complain to the Information Regulator of South Africa.
          </p>
        </div>
      </section>
    </>
  );
}
