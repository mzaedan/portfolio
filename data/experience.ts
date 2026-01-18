export interface Experience {
  id: string;
  position: string;
  company: string;
  summary: string;
  date: string;
  slug: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    position: "Software Engineer",
    company: "CV. Putra Purnama Indonesia",
    summary:
      "• Responsible for assisting senior programmers in completing technical tasks, developing and maintaining applications, as well as debugging and testing\n• Resolve technical issues and find solutions to problems that arise during the application development process\n• Assist with office administration such as creating Application Development Reports and Application Guidance Documents",
    date: "January, 2021 - 2023",
    slug: "software-engineer",
  },
  {
    id: "2",
    position: "Mentor Frontend Backend",
    company: "Coding Camp Powered By DBS",
    summary:
      "The Coding Camp powered by DBS Foundation is an information technology training program designed with high standards to equip participants with practical, job-ready skills. Launched in 2022, this program is a collaboration between DBS Foundation and Dicoding, combining technical expertise with essential complementary skills (softskills, english, and financial literacy) to ensure professional success.\n\nI mentored a cohort of 25 students in a weekly session-based learning program, guiding them through the same learning path I had completed. My responsibilities included facilitating collaborative learning, supporting peer-to-peer growth, and maintaining active communication with fellow mentors and contributors. I was committed to fostering a supportive learning environment aimed at achieving a minimum 88% graduation rate. I dedicated over 7 hours per week to this role and occasionally contributed as a code reviewer to help students improve the quality of their projects and coding practices",
    date: "January-April, 2025",
    slug: "mentor-coding-camp",
  },
];
