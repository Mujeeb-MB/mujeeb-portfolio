import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "project-1",
    name: "FarmFolio",
    tagline: "Smart farm management tool",
    description:
      "A smart farm management tool with expense tracking, farm management, analytics, multi-language support, and AI-powered farming assistance.",
    highlights: [
      "Developed a smart farm management tool with expense tracking, analytics, and multi-language support, helping users reduce manual tracking time by 40%.",
      "Implemented a component-driven layout with reusable UI primitives for cards, badges, and section layouts",
      "Optimized for performance with code splitting, lazy loading of non-critical sections, and responsive design patterns",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Material UI",
      "Vite",
      "Recharts",
      "i18next",
      "Node.js (APIs)",
      "Firebase (Auth, Firestore)",
    ],
    liveUrl: "https://farmerfolio.netlify.app/",
    githubUrl: "https://github.com/Mujeeb-MB/farm-folio",
    imageUrl: "/projects/farm-folio.png",
    featured: true,
  },
];

// Featured projects only
export const featuredProjects = projects.filter((p) => p.featured);
