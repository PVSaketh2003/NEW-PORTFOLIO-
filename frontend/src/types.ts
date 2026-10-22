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
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  category: 'UAV Defense' | 'Computer Vision' | 'Edge AI' | 'Full Stack' | 'Research';
  tagline: string;
  description: string[];
  metrics?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; highlight?: boolean }[];
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
