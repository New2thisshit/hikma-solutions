import type { Metadata } from "next";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Hikma Solutions",
  description:
    "Hikma Solutions is a small Durban studio that builds websites and business tools for South African businesses, and tests them for security.",
};

const principles = [
  {
    title: "Your problem first",
    copy: "Not enough calls? Too much admin? Worried about hackers? We start there, not with what technology to use.",
  },
  {
    title: "Small first",
    copy: "I'd rather build something small that works this month than something huge that's late.",
  },
  {
    title: "You always know what's happening",
    copy: "You get an update from me every week: what's done, what's next, and anything I need from you.",
  },
  {
    title: "It's yours",
    copy: "Your domain, hosting and logins are in your name. If you ever move on, the next developer can pick up where I left off.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="band-dark page-hero">
        <div className="wrap">
          <h1 className="display h1" style={{ maxWidth: "48rem" }}>Hi. I&rsquo;m the one who&rsquo;ll build your site.</h1>
          <p className="lede muted" style={{ marginTop: "1.5rem" }}>
            I run Hikma Solutions from Durban. I build websites and business tools
            for South African businesses, and I try to hack them before anyone
            else can. When you message Hikma, you get me.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="display h2">The name</h2>
            <p style={{ marginTop: "1.25rem", fontSize: "1.125rem" }} className="prose-measure">
              Hikma is Arabic for wisdom. To me that means building what you
              actually need, not the biggest thing I can sell you.
            </p>
          </div>
          <div>
            <h2 className="display h2">The pattern</h2>
            <p style={{ marginTop: "1.25rem", fontSize: "1.125rem" }} className="prose-measure">
              The star pattern on this site comes from the jali, a carved screen
              used in Islamic and Indian buildings. It lets light and air in, and
              keeps people from seeing inside.
            </p>
            <p className="muted prose-measure">
              That&rsquo;s what I want for your business online: easy for customers
              to find and use, hard for anyone else to get into.
            </p>
          </div>
        </div>
      </section>

      <section className="section band-sunk">
        <div className="wrap">
          <h2 className="display h2">How I work</h2>
          <div className="reasons reasons--two">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="h3">{p.title}</h3>
                <p className="muted" style={{ marginTop: "0.75rem" }}>{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2 className="display h2">Who I work with</h2>
          <ul className="check-list" style={{ alignContent: "center", fontWeight: 600, fontSize: "1.125rem" }}>
            <li>Panel beaters, accountants, clinics and other local businesses</li>
            <li>Teams running their day on spreadsheets and WhatsApp groups</li>
            <li>People with an app idea who need help making it real</li>
            <li>Anyone holding customer data who wants to know it&rsquo;s safe</li>
          </ul>
        </div>
      </section>

      <section className="band-dark section">
        <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
          <h2 className="display h2" style={{ maxWidth: "44rem" }}>
            You don&rsquo;t need a plan. Just tell me what&rsquo;s going wrong.
          </h2>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a
              className="btn btn-saffron"
              href={whatsappLink("Hi Hikma, here's what's going on: ")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp me
            </a>
            <Link className="btn btn-line" href="/contact">
              Or fill in a form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
