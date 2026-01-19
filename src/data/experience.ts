import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Tata Consultancy Services (TCS)",
    role: "Frontend Developer",
    period: "Aug 2023 - Present",
    location: "Hyderabad, India",
    type: "Full-time",
    description:
      "Frontend developer in the Travel, Transportation & Hospitality (TTH) domain, building React-based UIs for GenAI and agentic AI proof-of-concepts.",
    achievements: [
      "Implemented end-to-end React frontends for multiple GenAI and agentic AI POCs, consuming AWS Lambda-based JSON APIs",
      "Built reusable, component-driven UIs with TypeScript, Tailwind, and state management libraries for dashboards, forms, and booking-like flows",
      "Improved perceived performance and UX with skeleton states, lazy loading of non-critical views, and optimized data-fetching patterns using TanStack Query",
      "Collaborated closely with backend teams to design and consume REST APIs, occasionally debugging CORS and integration issues on AWS Lambda",
      "Contributed to internal UI patterns and best practices to keep codebases consistent and easy to maintain",
    ],
    techStack: [
      "React",
      "JavaScript",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "Zustand",
      "HTML5",
      "CSS3",
      "REST APIs",
      "AWS Lambda",
      "Git",
    ],
  },
];
