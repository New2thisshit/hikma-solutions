import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Script from "next/script";
import LogoMark from "@/components/logo-mark";
import SiteNav from "@/components/site-nav";
import { siteConfig, whatsappLink } from "@/lib/site";
import "./globals.css";

const unbounded = localFont({
  src: "../fonts/unbounded-latin-wght-normal.woff2",
  variable: "--font-unbounded",
  weight: "200 900",
  display: "swap",
});

const hanken = localFont({
  src: "../fonts/hanken-grotesk-latin-wght-normal.woff2",
  variable: "--font-hanken",
  weight: "100 900",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hikmasolutions.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hikma Solutions | Websites and cyber security in Durban",
  description:
    "I build websites and business tools for South African businesses, then I try to hack them before anyone else does.",
  icons: {
    icon: ["/favicon.ico", "/favicon-32x32.png", "/favicon-16x16.png"],
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "./" },
  openGraph: {
    title: "Hikma Solutions",
    description: "I build your website. Then I try to hack it.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hikma Solutions",
    description: "I build your website. Then I try to hack it.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c2245",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const whatsappHref = whatsappLink("Hi Hikma, I'd like to talk about ");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durban",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
    },
    areaServed: "ZA",
    knowsAbout: [
      "Website design",
      "Web application development",
      "Penetration testing",
      "Website security",
    ],
  };

  return (
    <html lang="en-ZA" className={`${unbounded.variable} ${hanken.variable}`}>
      <body>
        {plausibleDomain ? (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
        <Script
          id="hikma-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <header className="site-header">
          <div className="wrap site-header__bar">
            <Link href="/" className="brand" aria-label="Hikma Solutions home">
              <LogoMark />
              <span>Hikma Solutions</span>
            </Link>
            <SiteNav whatsappHref={whatsappHref} />
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <Link href="/" className="brand" aria-label="Hikma Solutions home">
                <LogoMark size={32} />
                <span style={{ color: "var(--on-dark)" }}>Hikma Solutions</span>
              </Link>
              <p className="muted" style={{ maxWidth: "22rem", marginTop: "1.25rem" }}>
                A small studio in Durban. Websites and business tools for
                South African businesses, tested for security before they go live.
              </p>
            </div>
            <div>
              <h2>Websites</h2>
              <ul>
                <li><Link href="/services#website-rescue">Fix my website</Link></li>
                <li><Link href="/services#website-build">New website</Link></li>
                <li><Link href="/services#systems">Replace the spreadsheet</Link></li>
              </ul>
            </div>
            <div>
              <h2>Security</h2>
              <ul>
                <li><Link href="/security#health-check">Security check</Link></li>
                <li><Link href="/security#pentest">Break-in test</Link></li>
                <li><Link href="/security#hardening">Fix and lock down</Link></li>
                <li><Link href="/security#watch">Monthly check-up</Link></li>
              </ul>
            </div>
            <div>
              <h2>Talk to me</h2>
              <ul>
                <li>
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp {siteConfig.phone}
                  </a>
                </li>
                <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
                <li className="muted">{siteConfig.location}</li>
              </ul>
            </div>
          </div>
          <div className="wrap footer-base">
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} {siteConfig.legalName}</p>
            <p style={{ margin: 0 }}>
              I only test systems with the owner&rsquo;s written permission.{" "}
              <Link href="/privacy">Privacy</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
