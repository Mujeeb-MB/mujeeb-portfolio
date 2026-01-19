import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Core",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Material UI", "Responsive Design", "CSS-in-JS"],
  },
  {
    title: "State & Data",
    skills: [
      "TanStack Query (React Query)",
      "Zustand",
      "Redux Toolkit",
      "REST APIs",
      "GraphQL Basics",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git/GitHub", "Vite", "npm/yarn", "VS Code", "Figma Basics"],
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "React Testing Library", "ESLint", "Prettier"],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Node.js Basics",
      "AWS Lambda",
      "AWS S3",
      "DynamoDB",
      "Serverless Basics",
    ],
  },
];

// Alternative
export const coreSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Material UI",
  "TanStack Query",
  "Zustand",
  "Redux",
  "REST APIs",
  "GraphQL",
  "Git",
  "Vite",
  "AWS",
];
