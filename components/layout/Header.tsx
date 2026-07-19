"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/95 py-3 backdrop-blur-sm">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-extrabold uppercase tracking-[0.2em] sm:text-base md:text-xl md:tracking-wide"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          DEV\PORTFOLIO
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-foreground transition-colors hover:bg-black/5 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://www.linkedin.com/in/m-zaedan-al-ghifari/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-foreground px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Let’s talk <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </nav>
      </Container>

      {isMobileMenuOpen ? (
        <Container
          id="mobile-navigation"
          className="border-t border-black/5 pt-4 pb-2 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-black/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://www.linkedin.com/in/m-zaedan-al-ghifari/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-base font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let’s talk <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
