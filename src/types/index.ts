// ============================================
// CORE DATA TYPES
// ============================================

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: "Full-time" | "Part-time" | "Contract" | "Freelance";
  description?: string;
  achievements: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  proficiency?: "expert" | "advanced" | "intermediate" | "basic";
}

export interface SkillCategory {
  title: string;
  icon?: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description?: string;
}

export interface ContactLink {
  platform: string;
  url: string;
  username?: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ============================================
// UI COMPONENT TYPES
// ============================================

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
  size?: "sm" | "md";
  className?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}
