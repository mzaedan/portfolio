"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "#about" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/95 py-3 backdrop-blur-sm">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-extrabold tracking-[0.2em] uppercase sm:text-base md:text-xl md:tracking-wide md:-ml-24"
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
          <Button
            variant="primary"
            size="sm"
            className="rounded-md px-5 font-normal"
          >
            Resume <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
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
            <Button
              variant="primary"
              size="md"
              className="mt-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </nav>
        </Container>
      ) : null}
    </header>
  );
}
