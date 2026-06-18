import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-[#ece4d4]">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Featured Projects
            </h2>
            <p className="max-w-md text-[#4c463d]">
              Showcasing full-stack solutions and technical excellence
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
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-[#d9cfbf] transition-colors hover:bg-[#d3c8b6]"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-[#cfc4b3]">
                {/* Fallback pattern if no image, or actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_52%),linear-gradient(135deg,_#d8ccbc,_#cabdaa)] text-black/10">
                  <span className="text-6xl font-bold opacity-20">
                    {project.title[0]}
                  </span>
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
                  <Badge className="border-transparent bg-black/6 text-black/65">
                    {project.language}
                  </Badge>
                </div>
              </div>
            </div>
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
