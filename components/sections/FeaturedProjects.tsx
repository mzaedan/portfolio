import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-[#ece4d4]">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Selected Work
            </h2>
            <p className="max-w-md text-[#4c463d]">
              Products built around practical problems, clear workflows, and
              maintainable systems.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center font-medium text-[#1a1a1a] hover:underline"
          >
            View all repositories <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-[#d9cfbf] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d3c8b6] hover:shadow-xl hover:shadow-black/5"
            >
              {project.isPublic ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="absolute inset-0 z-10 rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
                >
                  <span className="sr-only">View {project.title} on GitHub</span>
                </Link>
              ) : null}

              <div className="relative aspect-video w-full overflow-hidden bg-[#cfc4b3] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.5),_transparent_48%),linear-gradient(135deg,_#ddd2c2,_#c7b9a5)]" />
                <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border-[24px] border-white/20 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute -bottom-14 left-8 h-32 w-32 rotate-12 rounded-[32px] bg-black/7 transition-transform duration-500 group-hover:rotate-6" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full border border-black/10 bg-white/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black/55 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div>
                    <p className="mb-1 text-xs font-medium text-black/45">
                      Built with
                    </p>
                    <p className="max-w-[85%] text-2xl font-semibold tracking-tight text-black/75">
                      {project.language}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-black/55 uppercase">
                    REPOSITORY
                  </span>
                  {!project.isPublic ? (
                    <Lock className="w-4 h-4 text-black/40" />
                  ) : (
                    <ArrowRight className="w-4 h-4 -rotate-45 text-black/45 transition-transform group-hover:rotate-0" />
                  )}
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[#111111] transition-colors group-hover:text-black/80">
                  {project.title}
                </h3>

                <p className="mb-6 line-clamp-3 text-sm text-black/65">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      className="border-transparent bg-black/6 text-black/65"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center font-medium text-[#1a1a1a] hover:underline"
          >
            View all repositories <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
