'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { useState, useEffect } from "react";
import api from "@/lib/api";

// กำหนด Type ให้ตรงกับ Backend
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor: string;
  category: string;
  image: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get('/api/v1/courses/');
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // ระบบ Filter
  const categories = ["All", "English", "Chinese", "Business"];
  const filteredCourses = selectedCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50 font-body flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-brand-black text-white py-20 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Explore Our Courses</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">พัฒนาทักษะภาษาของคุณกับคอร์สเรียนคุณภาพที่ออกแบบมาเพื่อผลลัพธ์จริง</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-16 flex-grow">
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-orange text-white shadow-lg scale-105"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading / Empty / Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400">Loading courses...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No courses found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description || "No description available"}
                price={course.price}
                image={course.image}
                category={course.category}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}