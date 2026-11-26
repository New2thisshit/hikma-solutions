"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Build" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav({ whatsappHref }: { whatsappHref: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav-links" aria-label="Main">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <a
        className="btn btn-saffron nav-cta"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp us
      </a>
      <button
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div id="mobile-menu" className="mobile-menu" style={{ flexBasis: "100%" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="btn btn-saffron" href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      ) : null}
    </>
  );
}
