export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  price: number;
  image: string;
  type: 'Online' | 'On-site';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export interface Ebook {
  id: string;
  title: string;
  price: number;
  coverImage: string;
}