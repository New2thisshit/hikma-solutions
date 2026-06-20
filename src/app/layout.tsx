import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import MagneticController from "@/components/magnetic";
import ThemeToggle from "@/components/theme-toggle";
import "./globals.css";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hikma Solutions | Websites and Business Systems in Durban",
  description:
    "Durban-based website design and business systems for South African service businesses that need more enquiries and less manual admin.",
  icons: {
    icon: ["/favicon.ico", "/favicon-32x32.png", "/favicon-16x16.png"],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hikma Solutions | Websites and Business Systems in Durban",
    description:
      "Websites, dashboards, and prototypes for South African businesses that need leads and cleaner operations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hikma Solutions | Websites and Business Systems in Durban",
    description:
      "Lead-focused websites and practical business systems for South African service businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hikmasolutions.co.za";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durban",
      addressCountry: "ZA",
    },
    areaServed: ["South Africa"],
    serviceArea: "Durban",
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className={`${sora.variable} ${spaceGrotesk.variable} antialiased`}>
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        <MagneticController />
        <Script
          id="hikma-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen bg-aurora">
          <div className="bg-grid">
            <header className="header-shell mx-auto w-full max-w-6xl px-6 pt-5">
              <div className="header-surface">
                <div className="relative flex items-center justify-between gap-4">
                  <Link
                    href="/"
                    className="flex items-center gap-3 text-lg font-semibold tracking-tight"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/95 shadow-[0_10px_25px_rgba(10,26,36,0.25)] logo-breath">
                      <Image
                        src="/logo-mark.svg"
                        alt="Hikma Solutions logo"
                        width={28}
                        height={28}
                      />
                    </span>
                    <span>
                      <span className="block leading-tight">{siteConfig.name}</span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">
                        Websites. Systems. Prototypes.
                      </span>
                    </span>
                  </Link>

                  <nav className="hidden items-center gap-7 text-sm font-medium text-[color:var(--muted)] md:flex">
                    <Link
                      href="/services"
                      className="transition hover:text-[color:var(--ink)] nav-underline"
                    >
                      Offers
                    </Link>
                    <Link
                      href="/about"
                      className="transition hover:text-[color:var(--ink)] nav-underline"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="transition hover:text-[color:var(--ink)] nav-underline"
                    >
                      Contact
                    </Link>
                  </nav>

                  <div className="hidden items-center gap-3 md:flex">
                    <ThemeToggle />
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      className="btn-primary"
                      data-magnet
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <nav className="relative mt-4 flex items-center justify-between gap-5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)] md:hidden">
                  <div className="flex items-center gap-5">
                    <Link href="/services" className="hover:text-[color:var(--ink)]">
                      Offers
                    </Link>
                    <Link href="/about" className="hover:text-[color:var(--ink)]">
                      About
                    </Link>
                    <Link href="/contact" className="hover:text-[color:var(--ink)]">
                      Contact
                    </Link>
                  </div>
                  <ThemeToggle />
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-18">
              <div className="panel relative overflow-hidden p-8 md:p-10">
                <div className="absolute -top-14 right-10 h-32 w-32 rounded-full bg-[color:var(--aqua)] opacity-20 blur-2xl" />
                <div className="absolute -bottom-16 left-12 h-36 w-36 rounded-full bg-[color:var(--sky)] opacity-20 blur-2xl" />
                <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/95">
                        <Image
                          src="/logo-mark.svg"
                          alt="Hikma Solutions logo"
                          width={22}
                          height={22}
                        />
                      </span>
                      <p className="text-base font-semibold text-slate-900">
                        {siteConfig.name}
                      </p>
                    </div>
                    <p className="max-w-sm text-sm">
                      Lead-focused websites and practical business systems for South
                      African service businesses that need enquiries and cleaner operations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="footer-chip">Durban based</span>
                      <span className="footer-chip">Website rescue</span>
                      <span className="footer-chip">Business systems</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Navigate
                    </p>
                    <Link href="/" className="footer-link">
                      Home
                    </Link>
                    <Link href="/services" className="footer-link">
                      Offers
                    </Link>
                    <Link href="/about" className="footer-link">
                      About
                    </Link>
                    <Link href="/contact" className="footer-link">
                      Contact
                    </Link>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Offers
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">
                      Website rescue
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">
                      Business websites
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">
                      Operations prototypes
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Contact
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      className="footer-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {siteConfig.phone}
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="footer-link"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-sm text-[color:var(--muted)]">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>

                <div
                  className="relative mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between"
                  style={{ borderColor: "var(--panel-border)" }}
                >
                  <p>(c) 2026 Hikma Solutions. All rights reserved.</p>
                  <p>Built for leads, clarity, and useful business outcomes.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
