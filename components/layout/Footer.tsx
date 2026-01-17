import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-neutral-50/50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight">DEV\PORTFOLIO</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building digital products with purpose. Dedicated to open source
              and the future of web technology.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Sitemap</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#writing" className="hover:text-foreground">
                  Writing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Socials</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Twitter/X
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground pt-8 border-t border-black/5">
          <p>© 2024 Alex Developer. All rights reserved.</p>
          <p>Designed inspired by Anthropic.</p>
        </div>
      </Container>
    </footer>
  );
}
