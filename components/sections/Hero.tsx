import { Container } from "@/components/ui/Container";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-16 md:pb-40 md:pt-28">
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Full-stack engineer · Indonesia
          </div>
          <h1 className="max-w-4xl text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-7xl">
            I build reliable web products for real world workflows.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            I’m M. Zaedan Al Ghifari. I turn complex needs into maintainable web
            applications using Next.js, Laravel, and ASP.NET Core with equal
            focus on usability and clean engineering.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore selected work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/m-zaedan-al-ghifari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Let’s connect <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/mzaedan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Zaedan's GitHub profile"
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-muted transition-colors hover:bg-black/5 hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Abstract Graphic */}
        <div className="hidden lg:flex justify-center items-center relative">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[80%] max-w-md"
          >
            {/* Dark Wavy line */}
            <path
              d="M50 220 C 50 220, 90 140, 130 220 S 210 300, 250 220 S 330 140, 370 220"
              stroke="#1A1A1A"
              strokeWidth="12"
              strokeLinecap="round"
              className="text-foreground"
            />

            {/* Vertical Line */}
            <path
              d="M210 120 L 210 280"
              stroke="var(--accent)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Top Dot */}
            <circle cx="210" cy="120" r="16" fill="var(--accent)" />
            {/* Bottom Dot */}
            <circle cx="210" cy="280" r="16" fill="var(--accent)" />

            {/* Angled Branch */}
            <path
              d="M210 180 L 160 140"
              stroke="var(--accent)"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
}
