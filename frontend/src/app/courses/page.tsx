'use client';

import { useState, useEffect } from 'react';
import CourseCard from "@/components/CourseCard";
import api from '@/lib/api';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/v1/courses/')
       .then(res => setCourses(res.data))
       .catch(err => console.error(err))
       .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="max-w-3xl mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-4">
          All <span className="text-brand-orange">Courses</span>
        </h1>
        <p className="text-gray-500 text-lg">
          ยกระดับทักษะภาษาของคุณด้วยคอร์สเรียนออนไลน์คุณภาพ ครอบคลุมทั้งการฟัง พูด อ่าน เขียน
        </p>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-[450px] bg-gray-100 rounded-[2rem] animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          {courses.map((course: any, index: number) => (
            <div key={course.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}