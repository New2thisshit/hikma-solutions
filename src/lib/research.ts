/*
 * Security research content.
 *
 * Rules for editing this file:
 * - Only add facts you can back up (a report link, a screenshot of the platform
 *   status, a CVE ID, a published write-up).
 * - Never name a program, company or asset unless its disclosure policy allows it.
 * - Keep `researchStatus` up to date. Honest early numbers are more credible than
 *   vague big claims.
 */

export const researchStatus = {
  started: "November 2026",
  platforms: ["HackerOne", "YesWeHack"],
  summary:
    "Every report I’ve submitted so far was closed as a duplicate. Another researcher had already reported the same issue.",
  notYet: [
    "No accepted reports yet",
    "No bounties paid yet",
    "No CVEs or public disclosures yet",
  ],
};

export const focusAreas = [
  {
    title: "Authorised vulnerability discovery",
    copy: "Looking for security flaws only in systems I have permission to test: bug bounty scopes, client systems under a signed agreement, and my own products.",
  },
  {
    title: "Bug bounty research",
    copy: "Testing public programs on bug bounty platforms, within each program’s scope and rules, and reporting through the platform.",
  },
  {
    title: "Application security",
    copy: "Web apps and APIs: logins and sessions, access control (can one user reach another user’s data?), input handling, file uploads and how secrets are stored.",
  },
  {
    title: "Business-logic flaws",
    copy: "Bugs where every request looks normal but the outcome is wrong. Skipping a payment step, approving your own request, or using a discount twice.",
  },
  {
    title: "Source-code review",
    copy: "Reading code to find flaws before they ship: in my own and clients’ code under agreement, and in open-source code where a program puts it in scope.",
  },
  {
    title: "AI-assisted research",
    copy: "Using AI tools to read large codebases and JavaScript bundles faster and suggest where to look. A person checks every lead by hand before it counts as a finding.",
  },
  {
    title: "Controlled proof of concept",
    copy: "Proving a flaw with the smallest safe demonstration, using my own test accounts, then stopping. No touching real users’ data, no going further than needed.",
  },
];

export const methodology = [
  {
    title: "Read the rules",
    copy: "Scope, out-of-scope assets, banned techniques and disclosure terms come first. If something is unclear, I ask the program before testing.",
  },
  {
    title: "Map the target",
    copy: "Only in-scope assets. I learn what the app does, which user roles exist, what data moves where, and what the server trusts the browser to say.",
  },
  {
    title: "Form a hypothesis",
    copy: "I write down what a user should not be able to do, then try to do it. Most of my time goes into access control and business logic.",
  },
  {
    title: "Test with my own accounts",
    copy: "Two or more test accounts I control, so cross-account issues can be proved without touching real users. Gentle request rates. No denial of service, no social engineering.",
  },
  {
    title: "Validate with a minimal proof",
    copy: "The smallest demonstration that shows real impact. Once the flaw is proven, I stop. No pivoting, no staying in.",
  },
  {
    title: "Preserve the evidence",
    copy: "Raw requests and responses, timestamps, account IDs and exact steps, saved as I go. Secrets and personal data are redacted. Evidence stays private and is deleted when the program’s rules say so.",
  },
  {
    title: "Assess the impact honestly",
    copy: "What could a real attacker do, to whom, and what do they need first? I use CVSS as a reference and the program’s own severity scale, and I don’t inflate.",
  },
  {
    title: "Write a reproducible report",
    copy: "Summary, affected asset, preconditions, numbered steps, proof, impact and a suggested fix. The aim is that a triager can reproduce it on the first try.",
  },
  {
    title: "Follow up",
    copy: "Answer triage questions, retest the fix when asked, and accept the program’s decision on severity, duplicates and disclosure.",
  },
];

/* The structure every published case study follows. */
export const caseStudyFields = [
  { label: "Target", copy: "Type of system (for example, a SaaS booking platform). Named only if disclosure is allowed." },
  { label: "Vulnerability class", copy: "For example, broken access control (IDOR)." },
  { label: "How it was found", copy: "The hypothesis and the steps that led to it." },
  { label: "Validation", copy: "The minimal proof used, and what was deliberately not done." },
  { label: "Impact", copy: "Who was affected and how, with the severity the program assigned." },
  { label: "Outcome", copy: "Accepted, duplicate, informative or not applicable, with dates." },
  { label: "Disclosure", copy: "What the program allows to be published, and when." },
  { label: "What I learned", copy: "What I’d do differently next time." },
];

export type CaseStudySection = { heading: string; body: string[]; code?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  date: string;
  kind: string;
  target: string;
  vulnClass: string;
  severity: string;
  outcome: string;
  disclosure: string;
  summary: string;
  sections: CaseStudySection[];
  learned: string[];
};

/*
 * Add case studies here only once a program's disclosure rules allow it.
 * Reviews of our own systems can be published once any issue is fixed.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "contact-form-abuse-controls",
    title: "A contact form anyone could use to flood our inbox",
    date: "November 2026",
    kind: "Review of our own system",
    target: "The contact form API on hikmasolutions.co.za (Next.js route that sends email through a Gmail account)",
    vulnClass: "Missing rate limiting and input limits (resource abuse)",
    severity: "Medium (self-assessed, CVSS 3.1 base 5.3: AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L)",
    outcome: "Fixed in the site redesign, retested",
    disclosure: "Our own system. Published after the fix.",
    summary:
      "The form’s API sent an email for every request it received, with no limit on how many, how fast, or how big. A simple script could flood our inbox and use up the sending account’s daily limit, so real enquiries would stop arriving.",
    sections: [
      {
        heading: "How it was found",
        body: [
          "Code review of the API route, asking one question: what stops someone calling this directly, without the form, thousands of times?",
          "The route only checked that name, email and message were not empty. There was no rate limit, no size limit, no bot check, and no error handling around the email send.",
          "I also checked whether a visitor could add extra recipients by putting line breaks into the subject or reply-to fields (email header injection).",
        ],
      },
      {
        heading: "Validation",
        body: [
          "I tested on a local copy of the production code, not the live site, because testing live would have sent real emails.",
          "30 requests in a row all reached the email-sending step. A 1 MB message was accepted and passed to the mailer. A failed send crashed the request with an unhandled error.",
          "Header injection did not work. The mail library (Nodemailer 7) strips line breaks from headers, so no extra recipients could be added. The route only ever sends to one fixed inbox, so it was never an open relay.",
        ],
        code: `Before the fix (30 POST requests to /api/contact)
  30 x 500  (31 send attempts in the server log)
  1 MB message -> accepted and sent to the mailer

After the fix (same test)
   5 x 502  (send attempted; no mail server in the test sandbox)
  25 x 429  "Too many messages. Please try again later, or WhatsApp me."`,
      },
      {
        heading: "Impact",
        body: [
          "Anyone on the internet, with no account, could flood one inbox and burn through the Gmail account’s daily sending limit. Real enquiries would then fail without anyone noticing, and the account could be flagged for spam.",
          "No data was exposed and nobody else could be emailed, which is why this is rated Medium and not higher.",
        ],
      },
      {
        heading: "The fix",
        body: [
          "A hidden honeypot field that bots fill in and people don’t.",
          "A limit of 5 messages per IP address every 10 minutes. On Vercel the client IP header is set by the platform and can’t be spoofed by the sender.",
          "Length limits on every field, a proper email format check, and a try/catch around the send that returns a clear message instead of a crash.",
        ],
      },
    ],
    learned: [
      "The limit is kept in memory, so each server instance counts separately. It stops casual abuse, not a determined attacker spreading requests across many IPs. A shared store or a CAPTCHA would be the next step if abuse ever shows up.",
      "Any endpoint that triggers something with a real cost, like sending email, needs a limit from day one.",
    ],
  },
  {
    slug: "redirect-attack-surface-review",
    title: "Can another app or web page switch off Redirect’s blocking?",
    date: "November 2026",
    kind: "Review of our own system",
    target: "Redirect for Android: deep links, exported components, DNS packet handling and blocklist updates",
    vulnClass: "Attack surface review (no vulnerability found)",
    severity: "None found. Two informational notes.",
    outcome: "No changes needed. Notes recorded for future releases.",
    disclosure: "Our own system.",
    summary:
      "Redirect blocks adult sites with an on-device DNS filter. The main risk for an app like this is another app, a web page, or a malformed network packet turning protection off without the user’s say. I reviewed the code paths that could allow that and found none.",
    sections: [
      {
        heading: "What was reviewed",
        body: [
          "Every component the Android manifest exposes to other apps, and every redirect:// link the app accepts.",
          "The VPN service’s DNS and IPv4/UDP packet parsers, and what happens to a query they can’t read.",
          "How the blocklist is downloaded, checked and swapped in.",
          "This was a source-code review with the existing unit tests. It has not yet been repeated on a physical device.",
        ],
      },
      {
        heading: "What I found",
        body: [
          "Links: any app or web page can open a redirect:// link, including the one for the \u201cturn off blocking\u201d screen. That link only opens a confirmation, so the user still has to agree. Above the Gentle protection level, turning blocking off also waits out the user’s cooldown, and during hard hours it can’t be requested at all. A link alone can’t switch protection off.",
          "Components: the VPN, accessibility and Quick Settings services are protected by system-only permissions, so other apps can’t start, stop or bind to them. The broadcast receivers aren’t exported.",
          "Packets: the DNS parser rejects compressed names, oversized labels, unexpected characters and non-standard queries. Anything it can’t read is dropped, not forwarded, so a malformed query can’t slip past the filter.",
          "Blocklist updates: HTTPS only, including after redirects, with a 32 MB cap enforced while reading, a minimum size, and, when the new list comes from the same source, a check that it still contains most of the current one before it replaces it.",
        ],
      },
      {
        heading: "Informational notes",
        body: [
          "The blocklist comes from a third-party host and is trusted because of HTTPS alone, with no signature. The overlap check limits how much a bad list could remove, but signing our own copy would be stronger.",
          "The limits already stated in the app’s documentation still apply: custom encrypted DNS, IPv6 DNS and DNS over TCP aren’t filtered.",
        ],
      },
    ],
    learned: [
      "Routing every disabling action through one function that applies the cooldown made the review simple: there was only one door to check.",
      "A review that finds nothing is still worth writing up when it says exactly what was checked and what wasn’t.",
    ],
  },
];
