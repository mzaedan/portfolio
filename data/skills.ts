export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["TypeScript", "Rust", "Python", "Go"],
  },
  {
    title: "FRONTEND",
    skills: ["React / Next.js", "Tailwind CSS", "WebGL", "Svelte"],
  },
  {
    title: "BACKEND",
    skills: ["PostgreSQL", "Redis", "Docker / K8s", "AWS / GCP"],
  },
  {
    title: "DESIGN",
    skills: ["Figma", "System Design", "Prototyping", "Accessibility"],
  },
];
