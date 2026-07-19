import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mzaedan/",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/m-zaedan-al-ghifari/",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#12110f] pb-8 pt-20 text-white">
      <Container>
        <div className="mb-20 grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Open to meaningful collaborations
            </p>
            <h2 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Have a useful product in mind? Let’s build it well.
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-6 max-w-sm leading-relaxed text-white/65">
              Best reached through LinkedIn. Share the problem, context, and
              desired outcome I’ll respond when there’s a good fit.
            </p>
            <Link
              href="https://www.linkedin.com/in/m-zaedan-al-ghifari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-[#12110f] transition-transform hover:-translate-y-0.5"
            >
              Start a conversation <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="font-bold tracking-wide">
              DEV\PORTFOLIO
            </Link>
            <p className="mt-2 text-sm text-white/45">
              M. Zaedan Al Ghifari · Full-stack engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name} profile`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/25 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} M. Zaedan Al Ghifari
          </p>
        </div>
      </Container>
    </footer>
  );
}
