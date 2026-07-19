export interface Experience {
  id: string;
  position: string;
  company: string;
  highlights: string[];
  date: string;
  slug: string;
}

export const experiences: Experience[] = [
  {
    id: "2",
    position: "Frontend & Backend Mentor",
    company: "Coding Camp Powered By DBS",
    highlights: [
      "Mentored a cohort of 25 students through weekly frontend and backend learning sessions.",
      "Facilitated collaborative learning, peer support, and active coordination with fellow mentors.",
      "Contributed 7+ hours per week and reviewed student code to improve project quality.",
    ],
    date: "Jan–Apr 2025",
    slug: "mentor-coding-camp",
  },
  {
    id: "1",
    position: "Software Engineer",
    company: "CV. Putra Purnama Indonesia",
    highlights: [
      "Developed and maintained applications while supporting senior engineers with technical delivery.",
      "Debugged, tested, and resolved issues throughout the application development process.",
      "Created application development reports and user guidance documentation.",
    ],
    date: "2021–2023",
    slug: "software-engineer",
  },
];
