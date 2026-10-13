"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["Projects", "/projects"],
  ["Journal", "/blog"],
  ["About", "/about"],
] as const;

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const theme = mounted && resolvedTheme === "light" ? "light" : "dark";

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          aria-label="Shyena Technologies Pvt. Ltd. home"
          className="brand"
          href="/"
        >
          <span aria-hidden="true" className="brand-mark">
            S<span>.</span>
          </span>
          <span className="brand-name">
            Shyena Technologies<span>Pvt. Ltd.</span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          {links.map(([label, href]) => {
            const active =
              !href.includes("#") &&
              (href === "/" ? pathname === "/" : pathname.startsWith(href));
            return (
              <Link
                aria-current={active ? "page" : undefined}
                href={href}
                key={label}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            className="nav-contact"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <div className="header-actions">
          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
          >
            <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
          </button>
          <button
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
