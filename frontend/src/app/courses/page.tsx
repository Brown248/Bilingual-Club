'use client';
import { useState, useEffect } from 'react';
import { CourseService } from '@/services/api';
import { Course } from '@/types';
import CourseCard from '@/components/CourseCard';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CourseService.getAll().then(data => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(c => c.language === filter);

  const languages = ['All', ...Array.from(new Set(courses.map(c => c.language)))];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Our Courses</h1>
      
      {/* Filters */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => setFilter(lang)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              filter === lang 
                ? 'bg-secondary text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20">Loading courses...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}