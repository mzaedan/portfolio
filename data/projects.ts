export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  language: string;
  languageColor: string;
  isPublic: boolean;
  link: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "lentera-bookfinder",
    description:
      "A book search application that leverages the OpenLibrary API to help users discover and explore books. Built as a capstone project for the Paradaya program, featuring modern React architecture and responsive design.",
    category: "Book discovery",
    highlights: ["OpenLibrary API", "Responsive React UI"],
    language: "C# (ASP.NET Core)",
    languageColor: "#3178c6",
    isPublic: true,
    link: "https://github.com/Paradaya-Lentera/paradaya-lentera-org",
  },
  {
    id: "2",
    title: "LaporAja",
    description:
      "Community reporting platform designed for village-level public service management. Developed as undergraduate thesis project to streamline citizen complaints and local government response through a digital solution.",
    category: "Civic technology",
    highlights: ["Complaint workflow", "Public service dashboard"],
    language: "Laravel",
    languageColor: "#FF2D20",
    isPublic: true,
    link: "https://github.com/mzaedan/laporaja",
  },
  {
    id: "3",
    title: "PeakCommerce",
    description:
      "E-commerce platform developed for the Wirausaha Merdeka program to centralize product listings from multiple group members. Features vendor management, product catalogs, and integrated checkout system.",
    category: "Multi-vendor commerce",
    highlights: ["Vendor management", "Integrated checkout"],
    language: "Laravel",
    languageColor: "#FF2D20",
    isPublic: true,
    link: "https://github.com/mzaedan/peak-commerce",
  },
];
