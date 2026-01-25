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

export const ebooks: Ebook[] = [
  {
    id: 1,
    title: "Essential English Grammar Guide",
    author: "Dr. Sarah Smith",
    category: "Grammar",
    price: 350,
    image: "https://placehold.co/400x550/1F3C88/FFFFFF?text=Grammar+Book", // ใช้รูปแนวตั้ง (Portrait)
    description: "สรุปหลักไวยากรณ์ที่จำเป็นทั้งหมดในเล่มเดียว อ่านง่าย เข้าใจไว เหมาะสำหรับผู้เริ่มต้น",
  },
  {
    id: 2,
    title: "Business Email Writing Templates",
    author: "John Doe",
    category: "Business",
    price: 490,
    image: "https://placehold.co/400x550/F5B700/1F3C88?text=Email+Templates",
    description: "รวมประโยคและแบบฟอร์มการเขียนอีเมลธุรกิจกว่า 100 แบบ ก๊อปปี้ไปใช้ได้ทันที",
  },
  {
    id: 3,
    title: "IELTS Speaking: Band 8.0 Secrets",
    author: "Teacher Ann",
    category: "Exam Prep",
    price: 590,
    image: "https://placehold.co/400x550/C8102E/FFFFFF?text=IELTS+Speaking",
    description: "เทคนิคลับการสอบ Speaking ที่ Examiner ไม่เคยบอกคุณ พร้อมตัวอย่างคำตอบระดับ 8.0",
  },
  {
    id: 4,
    title: "5,000 Essential Vocabulary",
    author: "Cathy Bilingual Team",
    category: "Vocabulary",
    price: 290,
    image: "https://placehold.co/400x550/4F6EF7/FFFFFF?text=Vocab+5000",
    description: "คลังคำศัพท์ที่ใช้บ่อยที่สุดในชีวิตประจำวันและการทำงาน ท่องวันละนิด เก่งอังกฤษแน่นอน",
  },
];