"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";

const isLinkActive = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell glass-panel">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-dot" />
          TEAM FLOW
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "show" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isLinkActive(pathname, item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
