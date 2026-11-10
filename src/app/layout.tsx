import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import LogoMark from "@/components/logo-mark";
import { themeInitScript } from "@/lib/theme";
import { siteConfig, whatsappLink } from "@/lib/site";
import "./globals.css";

const grotesk = localFont({
  src: "./fonts/bricolage-grotesque-latin-opsz-normal.woff2",
  variable: "--font-grotesk",
  weight: "200 800",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const newsreader = localFont({
  src: "./fonts/newsreader-latin-opsz-normal.woff2",
  variable: "--font-newsreader",
  weight: "200 800",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const description =
  "Hikma Solutions is a software studio in Durban, South Africa. We build websites and business systems for South African businesses, and we make our own apps, starting with Redirect for Android.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Hikma Solutions | Software studio in Durban, South Africa",
    template: "%s | Hikma Solutions",
  },
  description,
  applicationName: siteConfig.name,
  icons: {
    icon: ["/favicon.ico", "/favicon-32x32.png", "/favicon-16x16.png"],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_ZA",
    title: "Hikma Solutions",
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2229",
};

const footerLinks = [
  { href: "/products/redirect", label: "Redirect" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Website privacy" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      data-theme="dark"
      suppressHydrationWarning
      className={`${grotesk.variable} ${newsreader.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>

        <footer className="border-t border-line">
          <div className="wrap grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="flex items-center gap-2.5 text-lg font-[600]">
                <LogoMark size={24} />
                {siteConfig.name}
              </p>
              <p className="t-small mt-4 max-w-sm">
                {siteConfig.legalName}, a software studio in {siteConfig.location}.
                Publisher of Redirect for Android.
              </p>
            </div>

            <nav aria-label="Footer">
              <ul className="grid gap-1">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="nav-link -ml-[0.7rem]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <ul className="grid gap-1">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="nav-link -ml-[0.7rem] break-all">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={whatsappLink()} className="nav-link -ml-[0.7rem]" rel="noreferrer">
                    WhatsApp {siteConfig.phone}
                  </a>
                </li>
                <li className="t-small pt-2">{siteConfig.location}</li>
              </ul>
            </div>
          </div>
          <div className="wrap pb-10">
            <p className="t-small">
              &copy; 2026 {siteConfig.legalName}. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
