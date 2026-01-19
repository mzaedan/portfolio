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
    link: "https://github.com/Paradaya-Lentera/paradaya-lentera-org",
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
    link: "https://github.com/mzaedan/peak-commerce",
  },
];
