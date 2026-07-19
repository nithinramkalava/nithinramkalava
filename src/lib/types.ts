export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface GlanceRow {
  k: string;
  v: string;
}

export interface ExperienceItem {
  org: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectStat {
  value: string;
  label: string;
  accent?: boolean;
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  featured?: boolean;
  stats?: ProjectStat[];
  tags: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}
