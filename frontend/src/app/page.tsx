'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import api from "@/lib/api";

// กำหนด Type ของข้อมูลที่จะดึงมาจาก Backend
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor: string;
  category: string;
  image: string;
}

export default function Home() {
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔄 ดึงข้อมูลคอร์สจาก API (เอาแค่ 3 คอร์สแรกมาโชว์เป็นตัวอย่าง)
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await api.get('/api/v1/courses/');
        setFeaturedCourses(res.data.slice(0, 3)); // ตัดมาแค่ 3 อัน
      } catch (error) {
        console.error("Failed to load courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />

      {/* --- 1. Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-brand-orange text-xs font-bold mb-6 tracking-wide uppercase">
            Unlock Your Potential
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-brand-black mb-8 leading-tight">
            Master Languages <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">
              Build Your Future
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            เรียนรู้ภาษาอังกฤษและจีนกับผู้เชี่ยวชาญ ตัวจริง เสียงจริง 
            พร้อมหลักสูตรที่ออกแบบมาเพื่อการนำไปใช้ได้จริงในชีวิตประจำวันและการทำงาน
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses" className="px-8 py-4 bg-brand-black text-white rounded-full font-bold hover:bg-brand-orange transition-all shadow-lg hover:-translate-y-1">
              Explore Courses
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-brand-black border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. Featured Courses Section (ดึงจาก Backend) --- */}
      <section className="py-20 bg-gray-50 rounded-[3rem]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-black">Popular Courses</h2>
              <p className="text-gray-500 mt-2">คอร์สเรียนยอดนิยมที่น้องๆ เลือกเรียนมากที่สุด</p>
            </div>
            <Link href="/courses" className="hidden md:block text-brand-orange font-bold hover:text-brand-black transition-colors">
              View All Courses →
            </Link>
          </div>

          {loading ? (
             <div className="text-center py-20 text-gray-400">Loading courses...</div>
          ) : featuredCourses.length === 0 ? (
             <div className="text-center py-20 text-gray-400">ยังไม่มีคอร์สแนะนำในขณะนี้</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <div key={course.id} className="h-full">
                  {/* ✅ ส่งค่าแยกกันตามที่ CourseCard ต้องการ */}
                  <CourseCard
                    id={course.id}
                    title={course.title}
                    description={course.description || "No description available"}
                    price={course.price}
                    image={course.image}
                    category={course.category}
                    instructor={course.instructor}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Link href="/courses" className="text-brand-orange font-bold hover:text-brand-black transition-colors">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* --- 3. Features Section --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-3">Goal Oriented</h3>
              <p className="text-gray-500">เน้นผลลัพธ์ที่จับต้องได้ เรียนจบแล้วต้องพูดได้จริง</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-3">Expert Tutors</h3>
              <p className="text-gray-500">สอนโดยทีมงานคุณภาพที่มีประสบการณ์การสอนยาวนาน</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">📚</div>
              <h3 className="text-xl font-bold mb-3">Modern Materials</h3>
              <p className="text-gray-500">บทเรียนทันสมัย อัปเดตใหม่เสมอ ไม่ตกยุค</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}