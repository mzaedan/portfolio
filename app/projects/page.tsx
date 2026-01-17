"use client";

import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { Search, Star, GitFork, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(5);

  const filters = ["All", "TypeScript", "Rust", "Go", "Python"];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All" || project.language === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedProjects = filteredProjects.slice(0, limit);

  return (
    <div className="min-h-screen py-20 pb-32">
      <Container className="max-w-4xl">
        {/* Header Section */}
        <div className="mb-16 space-y-6">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground">
            Repositories
          </h1>
          <p className="max-w-xl text-lg text-muted font-light leading-relaxed">
            A collection of my open source work, experimental projects, and
            libraries. Most are available for public use and contribution.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border-0 bg-white/50 py-2.5 pl-10 pr-4 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground/50 focus:outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                  activeFilter === filter
                    ? "bg-foreground text-background"
                    : "bg-gray-200/50 text-muted hover:bg-gray-200"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col gap-3 rounded-xl p-6 transition-all hover:bg-white/40 border border-transparent hover:border-black/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.isPublic ? (
                      <Badge className="bg-blue-100/50 text-blue-700 border-blue-200/50">
                        Public
                      </Badge>
                    ) : (
                      <Lock className="h-4 w-4 text-muted" />
                    )}
                  </div>
                  <Link
                    href={project.link || "#"}
                    target="_blank"
                    className="flex items-center gap-1 text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>

                <p className="max-w-2xl text-base text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-2 flex items-center gap-6 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span>{project.language}</span>
                  </div>

                  {project.stars > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-muted/70" />
                      <span>
                        {project.stars >= 1000
                          ? `${(project.stars / 1000).toFixed(1)}k`
                          : project.stars}
                      </span>
                    </div>
                  )}

                  {project.forks > 0 && (
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4 text-muted/70" />
                      <span>{project.forks}</span>
                    </div>
                  )}

                  <span className="text-muted/60 text-xs">
                    {project.updatedAt}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-muted">
              No repositories found matches your search.
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredProjects.length > limit && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setLimit((prev) => prev + 5)}
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
            >
              Load more repositories
              <span className="group-hover:translate-y-0.5 transition-transform">
                ↓
              </span>
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
