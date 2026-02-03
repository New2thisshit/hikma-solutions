import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
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
  title: "Hikma Solutions | Software, Apps, and Websites",
  description:
    "Professional software development, app development, and website design from Durban, South Africa.",
  icons: {
    icon: ["/favicon.ico", "/favicon-32x32.png", "/favicon-16x16.png"],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hikma Solutions | Software, Apps, and Websites",
    description:
      "Professional software development, app development, and website design from Durban, South Africa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hikma Solutions | Software, Apps, and Websites",
    description:
      "Professional software development, app development, and website design from Durban, South Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

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
        <div className="min-h-screen bg-aurora">
          <div className="bg-grid">
            <header className="mx-auto w-full max-w-6xl px-6 py-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-lg font-semibold tracking-tight"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/95 shadow-[0_10px_25px_rgba(10,26,36,0.25)]">
                    <Image
                      src="/logo-mark.svg"
                      alt="Hikma Solutions logo"
                      width={28}
                      height={28}
                    />
                  </span>
                  {siteConfig.name}
                </Link>
                <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
                  <Link
                    href="/services"
                    className="transition hover:text-slate-900"
                  >
                    Services
                  </Link>
                  <Link href="/about" className="transition hover:text-slate-900">
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="transition hover:text-slate-900"
                  >
                    Contact
                  </Link>
                </nav>
                <Link
                  href="/contact"
                  className="btn-primary hidden md:inline-flex"
                >
                  Start a Project
                </Link>
              </div>
              <nav className="mt-4 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:hidden">
                <Link href="/services" className="hover:text-slate-900">
                  Services
                </Link>
                <Link href="/about" className="hover:text-slate-900">
                  About
                </Link>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </nav>
            </header>
            <main>{children}</main>
            <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-16 text-sm text-slate-600">
              <div className="grid gap-8 border-t border-white/70 pt-8 md:grid-cols-[1.5fr_1fr_1fr]">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/95">
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
                  <p>
                    Software development, app development, and websites built
                    with clarity and care.
                  </p>
                  <p>{siteConfig.location} • Serving clients worldwide</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Pages
                  </p>
                  <Link href="/services" className="block hover:text-slate-900">
                    Services
                  </Link>
                  <Link href="/about" className="block hover:text-slate-900">
                    About
                  </Link>
                  <Link href="/contact" className="block hover:text-slate-900">
                    Contact
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Contact
                  </p>
                  <p>{siteConfig.phone} (WhatsApp)</p>
                  <p>{siteConfig.email}</p>
                </div>
              </div>
              <p className="mt-8 text-xs text-slate-500">
                © 2026 Hikma Solutions. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
