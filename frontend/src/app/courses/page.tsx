'use client';

import { useState, useEffect } from 'react';
import CourseCard from "@/components/CourseCard";
import api from '@/lib/api';

// ข้อมูลจำลอง (ใช้แก้ขัดตอนต่อ Backend ไม่ได้)
const MOCK_COURSES = [
  {
    id: 1,
    title: "Basic English Conversation",
    description: "ปูพื้นฐานการพูดภาษาอังกฤษในชีวิตประจำวัน เน้นความมั่นใจ",
    price: 1590,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    category: "Beginner",
    instructor: "Teacher Cathy"
  },
  {
    id: 2,
    title: "Chinese for Business",
    description: "ภาษาจีนเพื่อการเจรจาธุรกิจ เพิ่มโอกาสในการทำงาน",
    price: 2500,
    image: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2",
    category: "Business",
    instructor: "Laoshi Wang"
  },
  {
    id: 3,
    title: "IELTS Prep Masterclass",
    description: "เตรียมสอบ IELTS ครบ 4 ทักษะ การันตี Band 7.0+",
    price: 3900,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    category: "Exam",
    instructor: "Teacher John"
  }
];

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // เพิ่ม state กัน Error

  useEffect(() => {
    api.get('/api/v1/courses/')
       .then(res => {
         if (res.data && res.data.length > 0) {
           setCourses(res.data);
         } else {
           setCourses(MOCK_COURSES); // ถ้าไม่มีข้อมูล ใช้ของปลอมโชว์ก่อน
         }
       })
       .catch(err => {
         console.error("API Fetch Error:", err);
         setCourses(MOCK_COURSES); // ถ้าต่อ Backend ไม่ได้ ก็ใช้ของปลอมโชว์เลย
         setError(true);
       })
       .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      {/* Header Section */}
      <div className="max-w-3xl mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-4">
          All <span className="text-brand-orange">Courses</span>
        </h1>
        <p className="text-gray-500 text-lg">
          ยกระดับทักษะภาษาของคุณด้วยคอร์สเรียนออนไลน์คุณภาพ ครอบคลุมทั้งการฟัง พูด อ่าน เขียน
        </p>
        
        {/* แจ้งเตือนถ้าใช้ Mock Data */}
        {error && (
          <span className="inline-block mt-4 px-4 py-1 bg-red-100 text-red-600 text-xs rounded-full">
            ⚠️ Backend Connection Failed: Showing Demo Data
          </span>
        )}
      </div>
      
      {/* Grid แสดงคอร์ส */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-[450px] bg-gray-200 rounded-[2rem] animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          {courses.map((course, index) => (
            <div key={course.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}