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
    title: "react-flux-architecture",
    description:
      "A modern state management library designed for high-performance React applications, reducing boilerplate by 40%. Implements a uni-directional data flow pattern with simplified reducers.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2400,
    forks: 342,
    updatedAt: "Updated 2 days ago",
    isPublic: true,
    link: "https://github.com",
  },
  {
    id: "2",
    title: "neurapath-engine",
    description:
      "Experimental interface engine for traversing large language model outputs visually. Built with Rust for WebAssembly target to ensure 60fps performance on large graph datasets.",
    language: "Rust",
    languageColor: "#dea584",
    stars: 892,
    forks: 120,
    updatedAt: "Updated 1 week ago",
    isPublic: true,
    link: "https://github.com",
  },
  {
    id: "3",
    title: "vault-analytics-core",
    description:
      "Core processing unit for the Vault Analytics platform. Handles real-time anomaly detection in financial transaction streams using statistical models.",
    language: "Python",
    languageColor: "#3572a5",
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
