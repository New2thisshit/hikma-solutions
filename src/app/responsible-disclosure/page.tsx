import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Responsible disclosure policy | Hikma Solutions",
  description:
    "How Hikma Solutions does security research: authorised testing only, coordinated private reporting, data protection and program rules. Plus how to report a vulnerability in our own products.",
};

const UPDATED = "26 November 2026";

export default function DisclosurePage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "50rem" }}>
            Responsible disclosure policy
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            How Hikma Solutions finds and reports security flaws in other
            people&rsquo;s systems, and how to report one in ours.
          </p>
          <nav className="jump-links" aria-label="On this page">
            <a href="#authorised">Authorised testing</a>
            <a href="#reporting">Reporting</a>
            <a href="#data">Data</a>
            <a href="#rules">Program rules</a>
            <a href="#report-to-us">Report to us</a>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="wrap legal">
          <p className="muted" style={{ marginTop: 0 }}>
            Last updated {UPDATED}. Applies to all security research and security
            testing done by {siteConfig.legalName}.
          </p>

          <h2 id="authorised" className="h3">1. Authorised testing only</h2>
          <p>Hikma Solutions only tests systems it has permission to test:</p>
          <ul>
            <li>assets listed as in scope by a bug bounty or vulnerability disclosure program,</li>
            <li>client systems covered by a signed testing agreement that states what may be tested, how and when,</li>
            <li>our own products and infrastructure.</li>
          </ul>
          <p>
            Anything outside that is not tested. If a flaw in an out-of-scope
            system is noticed by accident, it is not explored further. It is
            reported privately to the owner&rsquo;s published security contact, or
            not at all if no safe channel exists.
          </p>

          <h2 id="reporting" className="h3">2. Coordinated, private reporting</h2>
          <ul>
            <li>Findings are reported privately: through the program&rsquo;s platform, or to the client named in the testing agreement.</li>
            <li>Every report includes clear steps to reproduce, the evidence, the realistic impact and a suggested fix.</li>
            <li>Details of an unfixed issue are never published or shared with third parties.</li>
            <li>Anything is published only with the owner&rsquo;s agreement or as the program&rsquo;s disclosure rules allow, and after the issue is fixed.</li>
            <li>No payment is ever demanded in exchange for details of a finding.</li>
          </ul>

          <h2 id="data" className="h3">3. Protecting data</h2>
          <ul>
            <li>Testing uses test accounts we control. Other users&rsquo; accounts and data are not accessed on purpose.</li>
            <li>If personal or confidential data is reached, testing stops at the minimum needed to prove the issue. Nothing is downloaded, kept or shared beyond that, and the owner is told what was seen.</li>
            <li>Evidence is stored on encrypted devices, with secrets and personal data redacted wherever possible.</li>
            <li>Data collected during testing is deleted when the report is closed, or sooner if the program or client asks.</li>
            <li>Confidential program or client data is only put into third-party tools, including AI tools, when the program&rsquo;s rules and the client&rsquo;s agreement allow it.</li>
          </ul>

          <h2 id="rules" className="h3">4. Respecting program rules</h2>
          <ul>
            <li>Each program&rsquo;s scope, rules and the platform&rsquo;s code of conduct come first. Where they are stricter than this policy, they win.</li>
            <li>No denial-of-service, spam, social engineering or physical testing unless a program explicitly allows it.</li>
            <li>Request rates stay low, and automated scanning is only used where it is allowed.</li>
            <li>Testing stops when a program asks, and triage decisions on severity, duplicates and disclosure are accepted.</li>
          </ul>

          <h2 id="report-to-us" className="h3">5. Reporting a vulnerability to Hikma Solutions</h2>
          <p>
            This covers hikmasolutions.co.za, its subdomains (including
            redirect.hikmasolutions.co.za), and the Redirect Android app.
          </p>
          <p>
            Email{" "}
            <a className="text-link" href={`mailto:${siteConfig.email}?subject=Security%20report`}>
              {siteConfig.email}
            </a>{" "}
            with &ldquo;Security report&rdquo; in the subject. Please include what
            is affected, the steps to reproduce and why it matters.
          </p>
          <ul>
            <li>We aim to reply within 5 working days, and will keep you updated until it&rsquo;s fixed.</li>
            <li>We won&rsquo;t take legal action against research that follows this policy in good faith.</li>
            <li>With your permission, we&rsquo;ll credit you once the issue is fixed.</li>
            <li>We don&rsquo;t run a paid bug bounty.</li>
          </ul>
          <p>
            Please don&rsquo;t access other users&rsquo; data, degrade the service, or
            publish details before we&rsquo;ve fixed the issue. Our contact details
            are also in <a className="text-link" href="/.well-known/security.txt">security.txt</a>.
          </p>

          <p style={{ marginTop: "2.5rem" }}>
            <Link className="text-link" href="/research">
              Back to security research
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
