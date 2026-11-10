"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import LogoMark from "./logo-mark";
import ThemeToggle from "./theme-toggle";

export const navItems = [
  { href: "/products/redirect", label: "Redirect" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="wrap flex min-h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-h-[44px] items-center gap-2 whitespace-nowrap text-[1.02rem] font-[600] tracking-[-0.01em] no-underline sm:gap-2.5 sm:text-[1.12rem]"
          onClick={() => setOpen(false)}
        >
          <LogoMark size={26} />
          Hikma Solutions
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id={panelId}
        aria-label="Main"
        className="mobile-panel md:hidden"
        hidden={!open}
      >
        <ul className="wrap pb-6 pt-2">
          <li>
            <Link href="/" onClick={() => setOpen(false)} aria-current={pathname === "/" ? "page" : undefined}>
              Home
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
