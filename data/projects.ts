export interface Project {
  id: string;
  title: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  isPublic: boolean;
  link: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "lentera-bookfinder",
    description:
      "A book search application that leverages the OpenLibrary API to help users discover and explore books. Built as a capstone project for the Paradaya program, featuring modern React architecture and responsive design.",
    language: "C# (ASP.NET Core)",
    languageColor: "#3178c6",
    stars: 2400,
    forks: 342,
    updatedAt: "Updated 2 days ago",
    isPublic: true,
    link: "https://github.com",
  },
  {
    id: "2",
    title: "LaporAja",
    description:
      "Community reporting platform designed for village-level public service management. Developed as undergraduate thesis project to streamline citizen complaints and local government response through a digital solution.",
    language: "Laravel",
    languageColor: "#FF2D20",
    stars: 892,
    forks: 120,
    updatedAt: "Updated 1 week ago",
    isPublic: true,
    link: "https://github.com/mzaedan/laporaja",
  },
  {
    id: "3",
    title: "PeakCommerce",
    description:
      "E-commerce platform developed for the Wirausaha Merdeka program to centralize product listings from multiple group members. Features vendor management, product catalogs, and integrated checkout system.",
    language: "Laravel",
    languageColor: "#FF2D20",
    stars: 1200,
    forks: 89,
    updatedAt: "Updated 3 weeks ago",
    isPublic: true,
    link: "https://github.com",
  },
  {
    id: "4",
    title: "gossip-protocol-go",
    description:
      "A lightweight implementation of the gossip protocol in Go for distributed system state synchronization. Features eventual consistency guarantees and minimal network overhead.",
    language: "Go",
    languageColor: "#00add8",
    stars: 450,
    forks: 42,
    updatedAt: "Updated 1 month ago",
    isPublic: true,
    link: "https://github.com",
  },
  {
    id: "5",
    title: "minimal-theme-vscode",
    description:
      "A high-contrast, distraction-free theme for VS Code. Designed for long coding sessions with carefully selected color palettes that reduce eye strain.",
    language: "JSON",
    languageColor: "#f1e05a",
    stars: 2800,
    forks: 156,
    updatedAt: "Updated 2 months ago",
    isPublic: true,
    link: "https://github.com",
  },
];
