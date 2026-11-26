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

export type CaseStudy = {
  slug: string;
  title: string;
  date: string;
  vulnClass: string;
  outcome: string;
  disclosure: string;
  summary: string;
  link?: string;
};

/* Add case studies here only once a program's disclosure rules allow it. */
export const caseStudies: CaseStudy[] = [];
