export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["TypeScript", "JavaScript", "PHP", "C#"],
  },
  {
    title: "FRONTEND",
    skills: ["React / Next.js", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
  {
    title: "BACKEND",
    skills: ["ASP.NET Core", "Laravel", "REST APIs", "Database Design"],
  },
  {
    title: "PRACTICES",
    skills: ["System Design", "Testing & Debugging", "Git / GitHub", "Mentoring"],
  },
];
