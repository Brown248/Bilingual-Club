'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard";
import EbookCard from "@/components/EbookCard";
// ✅ ลบ import Navbar, Footer ออกแล้ว
import api from "@/lib/api";

// กำหนด Type ข้อมูลให้ชัดเจน (ป้องกัน Error)
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  instructor: string;
}

interface Ebook {
  id: number;
  title: string;
  price: number;
  cover_image: string;
  author: string;
  description: string;
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, ebooksRes] = await Promise.all([
          api.get('/api/v1/courses/'),
          api.get('/api/v1/ebooks/')
        ]);
        setCourses(coursesRes.data);
        setEbooks(ebooksRes.data);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-20">
      
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-r from-brand-orange to-orange-400 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden mx-4 md:mx-10 shadow-2xl shadow-orange-200/50 animate-fade-in-up">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float"></div>
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 animate-float-delayed"></div>

         <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold mb-6 border border-white/30 text-white">
               🚀 Start Learning Today
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow-sm">
              Unlock Your Potential with <span className="text-brand-yellow">Bilingual Skills</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-lg">
              เรียนภาษาอังกฤษและจีนแบบสนุก เข้าใจง่าย ใช้งานได้จริง กับคอร์สเรียนคุณภาพจาก Cathy Bilingual Club
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="px-8 py-4 bg-white text-brand-orange rounded-full font-bold hover:bg-brand-yellow hover:text-white transition-all shadow-lg transform hover:-translate-y-1 hover:shadow-xl">
                Explore Courses
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
         </div>
      </section>

      {/* --- Featured Courses --- */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-black relative inline-block">
              Popular Courses
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/30 -z-10 rounded-full"></span>
            </h2>
            <p className="text-gray-500 mt-2">คอร์สเรียนยอดฮิตที่นักเรียนเลือกเรียนมากที่สุด</p>
          </div>
          <Link href="/courses" className="text-brand-orange font-bold hover:text-brand-yellow transition-colors hidden md:block group">
            View All <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1,2,3].map(i => <div key={i} className="h-[400px] bg-gray-100 rounded-3xl animate-pulse"></div>)}
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, index) => (
              <div key={course.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- Best Selling E-Books --- */}
      <section className="bg-orange-50 py-20 rounded-[3rem] mx-4 border border-orange-100/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-heading font-bold text-brand-black">Best Selling E-Books</h2>
            <p className="text-gray-500 mt-2">หนังสืออิเล็กทรอนิกส์สรุปเนื้อหาเน้นๆ อ่านง่าย พกพาสะดวก</p>
          </div>

          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {[1,2,3,4].map(i => <div key={i} className="h-[350px] bg-white rounded-3xl animate-pulse"></div>)}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ebooks.slice(0, 4).map((ebook, index) => (
                <div key={ebook.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                  <EbookCard {...ebook} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- Features / Why Choose Us --- */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '👩‍🏫', title: 'Expert Tutors', desc: 'สอนโดยครูผู้เชี่ยวชาญที่มีประสบการณ์จริง' },
              { icon: '🎯', title: 'Practical Learning', desc: 'เน้นการนำไปใช้งานจริง ไม่ใช่แค่ท่องจำ' },
              { icon: '🕒', title: 'Lifetime Access', desc: 'ซื้อครั้งเดียว เรียนซ้ำได้ตลอดชีพ ไม่มีหมดอายุ' },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-brand-black">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
        </div>
      </section>

    </div>
  );
}