// src/data/courses.ts

export interface Course {
  id: number;
  title: string;
  category: "English" | "Chinese" | "IELTS" | "Self-Paced";
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  image: string;
  description: string;
  instructor: string; // ✅ เพิ่มบรรทัดนี้ครับ
}

export const courses: Course[] = [
  {
    id: 1,
    title: "IELTS Intensive Prep (4 Skills)",
    category: "IELTS",
    level: "Advanced",
    price: 4500,
    image: "https://placehold.co/600x400/1F3C88/FFFFFF?text=IELTS+Prep",
    description: "ติวเข้มครบ 4 ทักษะ Listening, Reading, Writing, Speaking พร้อมเทคนิคทำข้อสอบ",
    instructor: "Kru Cathy", // ✅ เพิ่มข้อมูลผู้สอน
  },
  {
    id: 2,
    title: "Chinese for Business Negotiation",
    category: "Chinese",
    level: "Intermediate",
    price: 3900,
    image: "https://placehold.co/600x400/F5B700/1F3C88?text=Chinese+Business",
    description: "ภาษาจีนเพื่อการเจรจาธุรกิจ ศัพท์เฉพาะทางและการเขียนอีเมล",
    instructor: "Lao Shi Ming",
  },
  {
    id: 3,
    title: "English Grammar Masterclass",
    category: "Self-Paced",
    level: "Beginner",
    price: 1290,
    image: "https://placehold.co/600x400/4F6EF7/FFFFFF?text=Grammar+101",
    description: "ปูพื้นฐานไวยากรณ์ให้แน่น เข้าใจง่าย ใช้ได้จริง เรียนได้ตลอดชีพ",
    instructor: "Teacher Ann",
  },
  {
    id: 4,
    title: "Everyday English Conversation",
    category: "English",
    level: "Beginner",
    price: 2500,
    image: "https://placehold.co/600x400/1A1A1A/FFFFFF?text=Conversation",
    description: "ฝึกพูดภาษาอังกฤษในชีวิตประจำวัน เพิ่มความมั่นใจในการสื่อสาร",
    instructor: "Kru Cathy",
  },
  {
    id: 5,
    title: "HSK 4 Exam Preparation",
    category: "Chinese",
    level: "Advanced",
    price: 3200,
    image: "https://placehold.co/600x400/C8102E/FFFFFF?text=HSK+4",
    description: "ติวสอบ HSK 4 เจาะลึกคำศัพท์และไวยากรณ์ที่ออกสอบบ่อย",
    instructor: "Lao Shi Ping",
  },
  {
    id: 6,
    title: "Professional Email Writing",
    category: "English",
    level: "Intermediate",
    price: 1500,
    image: "https://placehold.co/600x400/333333/FFFFFF?text=Email+Writing",
    description: "เขียนอีเมลภาษาอังกฤษแบบมืออาชีพ สุภาพ และได้ใจความ",
    instructor: "Teacher Sarah",
  },
];