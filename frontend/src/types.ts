export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  division?: string;
  summary?: string;
  highlights: string[];
  technologies: string[];
}

export interface Internship {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  division?: string;
  summary?: string;
  highlights: string[];
  technologies: string[];
  award?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tagline: string;
  description: string[];
  metrics?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  architectureSteps?: string[];
  modalDetails?: {
    problem: string;
    solution: string;
    architecture: string[];
    challenges: string[];
    decisions: string[];
    futureWork?: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface HealthStatus {
  status: string;
  service: string;
  version: string;
  database: string;
  timestamp: string;
}
