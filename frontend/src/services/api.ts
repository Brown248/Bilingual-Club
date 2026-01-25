import { Course, BlogPost, Ebook } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Helper for real API calls
async function fetchAPI<T>(endpoint: string, options = {}): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options['headers'] },
  });
  if (!res.ok) throw new Error('API Error');
  return res.json();
}

// --- MOCK DATA GENERATORS (Remove in production) ---
const MOCK_COURSES: Course[] = [
  { id: '1', title: 'General English', level: 'Beginner', language: 'English', price: 5000, type: 'On-site', description: 'Master the basics.', image: '/course-1.jpg' },
  { id: '2', title: 'Business Thai', level: 'Advanced', language: 'Thai', price: 7500, type: 'Online', description: 'For professionals.', image: '/course-2.jpg' },
  { id: '3', title: 'IELTS Prep', level: 'Intermediate', language: 'English', price: 6000, type: 'On-site', description: 'Score 7.0+ guaranteed.', image: '/course-3.jpg' },
];

// --- SERVICES ---

export const CourseService = {
  getAll: async (): Promise<Course[]> => {
    // return fetchAPI<Course[]>('/courses'); // Real Call
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_COURSES), 500));
  },
  getPopular: async (): Promise<Course[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_COURSES.slice(0, 2)), 500));
  }
};

export const BlogService = {
  getAll: async (): Promise<BlogPost[]> => {
    return [
      { id: '1', slug: 'learning-tips', title: '5 Tips to Learn Fast', excerpt: 'Read this...', content: 'Full content...', date: '2023-10-01', author: 'Admin' }
    ];
  },
  getBySlug: async (slug: string): Promise<BlogPost | undefined> => {
    return { id: '1', slug, title: '5 Tips to Learn Fast', excerpt: 'Read this...', content: 'Full content...', date: '2023-10-01', author: 'Admin' };
  }
};