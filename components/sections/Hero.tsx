import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl tracking-tight text-foreground leading-[1.1]">
            Designing and developing scalable web applications with clarity and
            purpose
            <br />
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-lg">
            I’m M. Zaedan Al Ghifari, a full-stack engineer passionate about
            clean code, structured systems, and efficient development workflows.
            I build web applications that balance performance, usability, and
            long-term maintainability.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-base font-medium rounded-lg text-foreground bg-transparent hover:bg-foreground hover:text-white transition-all duration-200"
            >
              View Projects
            </Link>
            <Link
              href="https://github.com/mzaedan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-muted hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5 mr-2" /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/m-zaedan-al-ghifari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-muted hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
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
