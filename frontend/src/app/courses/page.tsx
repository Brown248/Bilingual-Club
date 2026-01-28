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
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-heading font-bold text-brand-black mb-8 text-center animate-fade-in-up">All Courses</h1>
      
      {loading ? (
        <div className="text-center py-20 text-gray-400">Loading courses...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {courses.map((course: any) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
}