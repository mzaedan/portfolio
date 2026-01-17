export interface Article {
  id: string;
  position: string;
  company: string;
  summary: string;
  date: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: "1",
    position: "Mentor Frontend Backend",
    company: "Coding Camp Powered By DBS",
    summary: "Test",
    date: "October 14, 2023",
    slug: "simple-apis",
  },
  {
    id: "2",
    position: "Software Engineer",
    company: "CV.Putra Purnama Indonesia",
    summary:
      "Choosing technologies that have stood the test of time versus chasing the latest framework hype cycle.",
    date: "January 11, 2021-2023",
    slug: "software-engineer",
  },
];
