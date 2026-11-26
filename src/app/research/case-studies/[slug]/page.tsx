import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/research";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | Security research | Hikma Solutions`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const facts = [
    { label: "Type", value: study.kind },
    { label: "Target", value: study.target },
    { label: "Vulnerability class", value: study.vulnClass },
    { label: "Severity", value: study.severity },
    { label: "Outcome", value: study.outcome },
    { label: "Disclosure", value: study.disclosure },
    { label: "Date", value: study.date },
  ];

  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <p className="kicker">
            <Link href="/research#portfolio" style={{ color: "inherit" }}>
              Research portfolio
            </Link>
          </p>
          <h1 className="display h1" style={{ maxWidth: "52rem", fontSize: "clamp(2rem, 4.6vw, 3.4rem)" }}>
            {study.title}
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>{study.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap case-study">
          <dl className="field-list case-study__facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="case-study__body">
            {study.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="h3">{section.heading}</h2>
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.code ? (
                  <pre className="case-study__code">
                    <code>{section.code}</code>
                  </pre>
                ) : null}
              </section>
            ))}
            <section>
              <h2 className="h3">What I learned</h2>
              {study.learned.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
            <p style={{ marginTop: "2.5rem" }}>
              <Link className="text-link" href="/research#portfolio">
                Back to the research portfolio
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
