import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "#about" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background transition-all py-4">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide uppercase -ml-24"
        >
          DEV\PORTFOLIO
        </Link>
        <nav className="hidden md:flex items-center gap-8">
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
    </header>
  );
}
