import type { Certification } from "../types";

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Web Development",
    issuer: "Internshala",
    date: "2021",
    credentialUrl:
      "https://trainings.internshala.com/view_certificate/5BC96DCA-5736-6B48-1956-6C5C6FB76DB5/729D173B-DE7D-23E1-8EA9-AF786CAE508B/",
    description:
      "Completed a comprehensive Web Development training covering HTML, CSS, Bootstrap, JavaScript, SQL, and PHP through hands-on projects.",
  },
  {
    id: "cert-2",
    name: "GitHub Foundations",
    issuer: "GitHub",
    date: "2025",
    credentialUrl:
      "https://www.credly.com/badges/5700e2e9-04bc-4f86-af3e-cb81535b1870/public_url",
    description:
      "Validated skills in Git and GitHub fundamentals, including version control workflows, collaboration, and repository management.",
  },
];
