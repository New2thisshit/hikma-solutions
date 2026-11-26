import type { Metadata } from "next";
import Image from "next/image";
import FleetDemo from "@/components/fleet-demo";
import WorkCard from "@/components/work-card";
import { redirectApp, whatsappLink, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work | Hikma Solutions",
  description:
    "Apps and websites built by Hikma Solutions: Redirect on Google Play, SA Radio and Podcasts, a fleet inspection app and more. Try them live.",
};

export default function WorkPage() {
  const fleet = work.find((w) => w.slug === "fleet")!;
  const others = work.filter((w) => w.slug !== "fleet");

  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "48rem" }}>
            Things I&rsquo;ve built. Go on, click around.
          </h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            Live apps and sites you can open, plus a demo you can try right here.
            Demos are marked as demos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap redirect-feature">
          <div>
            <div className="redirect-feature__brand">
              <Image src={redirectApp.icon} alt="" width={56} height={56} />
              <span className="work-tag">My own app</span>
            </div>
            <h2 className="display h2" style={{ marginTop: "1.25rem" }}>
              {redirectApp.title}
            </h2>
            <p className="lede" style={{ marginTop: "0.75rem" }}>{redirectApp.tagline}</p>
            <p className="muted prose-measure" style={{ marginTop: "1rem" }}>{redirectApp.copy}</p>
            <div className="hero__actions" style={{ marginTop: "1.75rem" }}>
              {redirectApp.links.map((l, i) => (
                <a
                  key={l.href}
                  className={`btn ${i === 0 ? "btn-ink" : "btn-line"}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="redirect-feature__screens">
            {redirectApp.screens.map((s) => (
              <Image key={s.src} src={s.src} alt={s.alt} width={420} height={933} />
            ))}
          </div>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap">
          <h2 className="display h2">Websites and apps</h2>
          <div className="work-grid">
            {others.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="fleet-demo" className="section" style={{ scrollMarginTop: "1rem" }}>
        <div className="wrap">
          <span className="work-tag">{fleet.kind}</span>
          <h2 className="display h2" style={{ marginTop: "1rem" }}>{fleet.title}</h2>
          <p className="muted prose-measure" style={{ marginTop: "1rem" }}>
            The real app is private, so here&rsquo;s a small working version. Pick a
            vehicle, do the checks on the driver&rsquo;s phone, and watch the
            supervisor&rsquo;s screen update. Leave a check unticked to see what
            happens when something&rsquo;s wrong.
          </p>
          <FleetDemo />
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "44rem" }}>
            Want something like this for your business?
          </h2>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a
              className="btn btn-saffron"
              href={whatsappLink("Hi Hikma, I saw your work. I'd like something like: ")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
