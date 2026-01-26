// src/data/courses.ts

export interface Course {
  id: number;
  title: string;
  category: "English" | "Chinese" | "IELTS" | "Self-Paced";
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  image: string;
  description: string;
  instructor: string; // ✅ ต้องมี field นี้เพื่อให้ CourseCard ทำงานได้
}

// ✅ เหลือไว้แค่ Array ว่าง รอรับข้อมูลจริงจาก Backend (FastAPI)
export const courses: Course[] = [
  /* // ตัวอย่างโครงสร้างข้อมูล (เอาไว้ดูเป็นแบบ)
  {
    id: 1,
    title: "Example Course",
    category: "English",
    level: "Beginner",
    price: 1000,
    image: "https://placehold.co/600x400",
    description: "Description...",
    instructor: "Teacher Name"
  } 
  */
];