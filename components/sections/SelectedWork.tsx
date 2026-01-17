import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SelectedWork() {
  return (
    <section id="projects" className="py-24 bg-[var(--background-alt)]">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif mb-4">Selected Work</h2>
            <p className="text-muted max-w-md">
              Highlighting key projects that demonstrate technical depth and
              product thinking.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center text-accent font-medium hover:underline"
          >
            View all repositories <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">
                {/* Fallback pattern if no image, or actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-neutral-700">
                  <span className="text-6xl font-bold opacity-10">
                    {project.title[0]}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold tracking-wider text-accent uppercase">
                    REPOSITORY
                  </span>
                  {!project.isPublic ? (
                    <Lock className="w-4 h-4 text-muted/50" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-muted/50 -rotate-45 group-hover:rotate-0 transition-transform" />
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge className="bg-neutral-100 text-neutral-600 border-transparent">
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
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            View all repositories <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
