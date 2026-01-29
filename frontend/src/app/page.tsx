'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard";
import EbookCard from "@/components/EbookCard";
import api from "@/lib/api";

// กำหนด Type ข้อมูล
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
    <div className="overflow-x-hidden">
      
      {/* --- 🌟 Hero Section --- */}
      <section className="relative mx-4 md:mx-8 mt-6 rounded-[3rem] bg-gradient-to-r from-brand-orange via-[#FF9F43] to-brand-yellow overflow-hidden shadow-2xl shadow-orange-200/50 min-h-[600px] flex items-center">
         
         {/* Background Elements */}
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl animate-float"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-green/30 rounded-full blur-3xl animate-float-delayed"></div>

         <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
            
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <span className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold border border-white/40 mb-6 animate-fade-in-up">
                   👋 Welcome to Cathy Bilingual Club
                </span>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Unlock Your <br/>
                  <span className="text-brand-black bg-brand-yellow px-4 py-1 rounded-2xl transform -rotate-2 inline-block shadow-lg mt-2">
                    Super Power
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  เรียนภาษาแบบไม่น่าเบื่อ สนุก เข้าใจง่าย ใช้งานได้จริง พร้อมคอร์สเรียนและอีบุ๊กคุณภาพเยี่ยม
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <Link href="/courses" className="px-8 py-4 bg-white text-brand-orange rounded-full font-bold text-lg hover:bg-brand-black hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform active:scale-95">
                    🚀 เริ่มเรียนเลย
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                    สอบถามข้อมูล
                  </Link>
                </div>
            </div>

            <div className="md:w-1/2 flex justify-center animate-float">
                <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-white/10 backdrop-blur-sm rounded-full border-4 border-white/20 flex items-center justify-center relative">
                    <div className="absolute inset-4 bg-white/20 rounded-full animate-pulse"></div>
                    <span className="text-9xl relative z-10 drop-shadow-2xl">🦜</span>
                </div>
            </div>
         </div>
      </section>

      {/* --- 📚 Popular Courses --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-3">
              Popular <span className="text-brand-orange">Courses</span>
            </h2>
            <p className="text-gray-500 text-lg">คอร์สเรียนยอดฮิตที่คนเรียนเยอะที่สุด</p>
          </div>
          <Link href="/courses" className="hidden md:flex items-center gap-2 text-brand-orange font-bold text-lg hover:text-brand-green transition-colors group">
            ดูทั้งหมด <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1,2,3].map(i => <div key={i} className="h-[450px] bg-gray-200 rounded-[2.5rem] animate-pulse"></div>)}
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.slice(0, 3).map((course, index) => (
              <div key={course.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="transform hover:-translate-y-3 transition-transform duration-500 hover:shadow-2xl rounded-3xl">
                  <CourseCard {...course} />
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center md:hidden">
           <Link href="/courses" className="inline-block px-8 py-3 rounded-full border-2 border-brand-orange text-brand-orange font-bold hover:bg-brand-orange hover:text-white transition-all">
             ดูคอร์สทั้งหมด
           </Link>
        </div>
      </section>

      {/* --- 💡 Why Choose Us --- */}
      <section className="bg-[#E9F7EF] py-24 relative overflow-hidden rounded-[3rem] mx-4 mb-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-black mb-4">Why Cathy Club?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              เราไม่ได้สอนแค่ภาษา แต่เราสอนให้คุณกล้าที่จะสื่อสารด้วยความมั่นใจ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '👩‍🏫', title: 'Expert Tutors', desc: 'ครูผู้สอนมีประสบการณ์จริง สอนสนุก เป็นกันเอง', color: 'text-brand-orange bg-orange-100' },
              { icon: '🎯', title: 'Practical Use', desc: 'เน้นนำไปใช้ได้จริงในชีวิตประจำวัน ไม่เน้นท่องจำ', color: 'text-brand-green bg-green-100' },
              { icon: '♾️', title: 'Lifetime Access', desc: 'ซื้อแล้วเรียนได้ตลอดชีพ กลับมาทบทวนเมื่อไหร่ก็ได้', color: 'text-brand-yellow bg-yellow-100' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2">
                  <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-5xl mb-6 ${feature.color} transform group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-black">{feature.title}</h3>
                  {/* ✅ แก้ไขบรรทัดที่เคย Error ตรงนี้ครับ */}
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 📖 Best Selling E-Books --- */}
      <section className="container mx-auto px-6 pb-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-heading font-bold text-brand-black mb-3">
            E-Books <span className="text-brand-green">Corner</span>
          </h2>
          <p className="text-gray-500 text-lg">สรุปเนื้อหาเน้นๆ อ่านง่าย พกไปเรียนได้ทุกที่</p>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[1,2,3,4].map(i => <div key={i} className="h-[350px] bg-gray-200 rounded-[2rem] animate-pulse"></div>)}
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ebooks.slice(0, 4).map((ebook, index) => (
              <div key={ebook.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                <EbookCard key={ebook.id} {...ebook} />
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}