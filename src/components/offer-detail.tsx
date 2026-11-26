import type { Offer } from "@/lib/site";
import { whatsappLink } from "@/lib/site";

export default function OfferDetail({ offer }: { offer: Offer }) {
  return (
    <article id={offer.slug} className="offer-detail">
      <div>
        <h2 className="display offer-detail__name">{offer.name}</h2>
        <dl className="offer-meta">
          <dt>Price</dt>
          <dd>{offer.price}</dd>
          <dt>How long</dt>
          <dd className="muted">{offer.timeline}</dd>
        </dl>
        <p className="prose-measure" style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
          {offer.summary}
        </p>
        <a
          className="btn btn-ink"
          style={{ marginTop: "1.5rem" }}
          href={whatsappLink(offer.ask)}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp me about this
        </a>
      </div>
      <div>
        <p style={{ fontWeight: 700, margin: "0 0 1rem" }}>What you get</p>
        <ul className="check-list">
          {offer.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
