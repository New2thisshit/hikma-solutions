import Image from "next/image";
import type { WorkItem } from "@/lib/site";

export default function WorkCard({ item }: { item: WorkItem }) {
  const primary = item.links[0];
  const external = primary?.href.startsWith("http");

  return (
    <article className="work-card">
      {item.image ? (
        <a
          className="work-card__shot"
          href={primary.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image src={item.image} alt={item.imageAlt ?? ""} width={1200} height={550} />
        </a>
      ) : (
        <a className="work-card__shot work-card__shot--demo" href={primary.href} tabIndex={-1} aria-hidden="true">
          <span>Try the demo</span>
        </a>
      )}
      <div className="work-card__body">
        <span className="work-tag">{item.kind}</span>
        <h3 className="h3" style={{ marginTop: "0.75rem" }}>{item.title}</h3>
        <p className="muted" style={{ marginTop: "0.5rem" }}>{item.copy}</p>
        <p style={{ marginTop: "1rem" }}>
          {item.links.map((l) => (
            <a
              key={l.href}
              className="text-link"
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </p>
      </div>
    </article>
  );
}
