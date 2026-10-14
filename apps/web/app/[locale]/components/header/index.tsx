"use client";

import { Button } from "@repo/design-system/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@repo/design-system/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/design-system/components/ui/sheet";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navLinkGroups } from "../site-links";

export const Header = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = mounted ? resolvedTheme : "dark";
  const isActive = (href: string) =>
    href.startsWith("/#") ? pathname === "/" : pathname.startsWith(href);

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

        <NavigationMenu className="desktop-navigation" viewport={false}>
          <NavigationMenuList className="nav-menu-list">
            {navLinkGroups.map((group) => {
              const active = group.links.some((link) => isActive(link.href));
              return (
                <NavigationMenuItem key={group.title}>
                  <NavigationMenuTrigger
                    className="nav-menu-trigger"
                    data-active={active || undefined}
                  >
                    {group.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="nav-menu-content">
                    <div className="nav-menu-content-inner">
                      <p className="nav-menu-heading">{group.title}</p>
                      {group.links.map((link) => (
                        <NavigationMenuLink
                          active={isActive(link.href)}
                          asChild
                          className="nav-menu-link"
                          key={link.label}
                        >
                          <Link href={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="header-actions">
          <Button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            size="icon"
            variant="ghost"
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" />
            ) : (
              <Moon aria-hidden="true" />
            )}
          </Button>
          <Button asChild className="nav-contact" size="sm">
            <Link
              aria-current={
                pathname.startsWith("/contact") ? "page" : undefined
              }
              href="/contact"
            >
              Contact <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                aria-label="Open navigation menu"
                className="mobile-menu-trigger"
                size="icon"
                variant="outline"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-navigation-sheet" side="right">
              <SheetHeader className="mobile-navigation-heading">
                <SheetTitle>Explore Shyena</SheetTitle>
                <SheetDescription>
                  Services, company information and resources.
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="mobile-nav-links">
                {navLinkGroups.map((group) => (
                  <section className="mobile-nav-group" key={group.title}>
                    <h2>{group.title}</h2>
                    {group.links.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <Link
                          aria-current={
                            isActive(link.href) ? "page" : undefined
                          }
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </section>
                ))}
                <div className="mobile-theme-control">
                  <span>Appearance</span>
                  <Button
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                    className="mobile-theme-toggle"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    size="sm"
                    variant="outline"
                  >
                    {theme === "dark" ? (
                      <Sun aria-hidden="true" />
                    ) : (
                      <Moon aria-hidden="true" />
                    )}
                    {theme === "dark" ? "Light theme" : "Dark theme"}
                  </Button>
                </div>
                <SheetClose asChild>
                  <Link
                    aria-current={
                      pathname.startsWith("/contact") ? "page" : undefined
                    }
                    className="mobile-nav-contact"
                    href="/contact"
                  >
                    Contact <ArrowUpRight aria-hidden="true" />
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
