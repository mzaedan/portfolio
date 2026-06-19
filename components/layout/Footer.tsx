import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#12110f] pt-16 pb-8 text-white">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight">DEV\PORTFOLIO</h3>
            <p className="max-w-xs text-sm text-white/65">
              Building digital products with purpose. Dedicated to open source
              and the future of web technology.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white/55 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-white/55 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-white/55 transition-colors hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-white/55 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Sitemap</h4>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#writing"
                  className="transition-colors hover:text-white"
                >
                  Writing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Socials</h4>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Twitter/X
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row">
          <p>Copyright {new Date().getFullYear()} M Zaedan Al Ghifari. All rights reserved.</p>
          <p>Designed inspired by Anthropic.</p>
        </div>
      </Container>
    </footer>
  );
}
