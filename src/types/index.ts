// Define your type definitions here

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  videoUrl?: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}
