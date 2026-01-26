// src/data/ebooks.ts

export interface Ebook {
  id: number;
  title: string;
  author: string;
  category: "Business" | "Grammar" | "Vocabulary" | "Exam Prep";
  price: number;
  image: string;
  description: string;
}

// ✅ เหลือไว้แค่ Array ว่าง รอรับข้อมูลจริง
export const ebooks: Ebook[] = [
  /*
  {
    id: 1,
    title: "Example Ebook",
    author: "Author Name",
    category: "Grammar",
    price: 300,
    image: "https://placehold.co/400x550",
    description: "Description..."
  }
  */
];