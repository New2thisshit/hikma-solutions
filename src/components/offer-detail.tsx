import type { Offer } from "@/lib/site";
import { whatsappLink } from "@/lib/site";

export default function OfferDetail({ offer }: { offer: Offer }) {
  return (
    <article id={offer.slug} className="offer-detail">
      <div>
        <h2 className="display h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
          {offer.name}
        </h2>
        <dl className="offer-meta">
          <dt>Price</dt>
          <dd>{offer.price}</dd>
          <dt>Timeline</dt>
          <dd className="muted">{offer.timeline}</dd>
        </dl>
        <p className="muted prose-measure" style={{ marginTop: "1rem" }}>
          {offer.summary}
        </p>
        <a
          className="btn btn-ink"
          style={{ marginTop: "1.5rem" }}
          href={whatsappLink(offer.ask)}
          target="_blank"
          rel="noreferrer"
        >
          Ask about {offer.name.toLowerCase()}
        </a>
      </div>
      <div>
        <ul className="check-list">
          {offer.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="outcome">{offer.outcome}</p>
      </div>
    </article>
  );
}
