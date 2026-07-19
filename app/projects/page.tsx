import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Selected web products by M. Zaedan Al Ghifari, including civic technology, book discovery, and multi-vendor commerce projects.",
};

export default function ProjectsPage() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="pb-32">
      <section className="pb-16 pt-20 md:pb-20 md:pt-28">
        <Container className="max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {projects.length} selected projects
          </div>
          <h1 className="max-w-4xl text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Projects built around real problems.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Selected products spanning civic technology, book discovery, and
            commerce designed for clear workflows and long-term maintenance.
          </p>
        </Container>
      </section>

      <Container className="max-w-6xl">
        <section aria-labelledby="featured-project-heading">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-muted">
            Featured project
          </p>

          <Link
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${featuredProject.title} on GitHub`}
            className="group block rounded-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
          >
            <article className="grid overflow-hidden rounded-[32px] bg-[#12110f] text-white shadow-xl shadow-black/10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-[#d9cfbf] p-8 sm:p-10 lg:min-h-[480px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.55),_transparent_48%),linear-gradient(135deg,_#ddd2c2,_#c2b39d)]" />
                <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[36px] border-white/25 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute -bottom-20 left-10 h-52 w-52 rotate-12 rounded-[48px] bg-black/8 transition-transform duration-500 group-hover:rotate-6" />

                <div className="relative flex h-full min-h-[240px] flex-col justify-between lg:min-h-[400px]">
                  <span className="w-fit rounded-full border border-black/10 bg-white/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black/55 backdrop-blur-sm">
                    {featuredProject.category}
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-medium text-black/45">
                      Primary stack
                    </p>
                    <p className="max-w-md text-3xl font-semibold tracking-tight text-black/75 sm:text-4xl">
                      {featuredProject.language}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <div className="mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    <span>Case study 01</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <h2
                    id="featured-project-heading"
                    className="text-3xl font-semibold tracking-tight sm:text-4xl"
                  >
                    {featuredProject.title}
                  </h2>
                  <p className="mt-5 leading-relaxed text-white/65">
                    {featuredProject.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {featuredProject.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        className="border-white/10 bg-white/8 text-white/65"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-2 text-sm font-medium text-white/70">
                  <Github className="h-4 w-4" />
                  View source on GitHub
                </div>
              </div>
            </article>
          </Link>
        </section>

        <section className="mt-24" aria-labelledby="more-projects-heading">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="more-projects-heading" className="text-3xl font-semibold">
                More selected work
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Different domains, same focus: useful workflows and maintainable
                implementation.
              </p>
            </div>
            <p className="text-sm text-muted">Open-source repositories</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <Link
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="group block rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-black/5 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                  <div className="relative min-h-52 overflow-hidden bg-[#d9cfbf] p-7">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.52),_transparent_48%),linear-gradient(135deg,_#ded4c5,_#c8baa6)]" />
                    <div className="absolute -bottom-14 -right-10 h-40 w-40 rounded-full border-[24px] border-white/25 transition-transform duration-500 group-hover:scale-110" />
                    <div className="relative flex h-full flex-col justify-between">
                      <span className="w-fit rounded-full border border-black/10 bg-white/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black/55">
                        {project.category}
                      </span>
                      <div className="mt-20 flex items-end justify-between">
                        <p className="text-xl font-semibold text-black/70">
                          {project.language}
                        </p>
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/35">
                          0{index + 2}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <p className="mt-4 leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          className="border-transparent bg-black/5 text-black/60"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-9 text-sm font-medium text-muted">
                      <Github className="h-4 w-4" />
                      View source
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[28px] border border-black/5 bg-[#e6e5df] p-8 sm:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                Have a project in mind?
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s turn a useful idea into reliable software.
              </h2>
            </div>
            <Link
              href="https://www.linkedin.com/in/m-zaedan-al-ghifari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-foreground px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
