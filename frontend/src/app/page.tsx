'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard";
import EbookCard from "@/components/EbookCard";
import api from "@/lib/api";

// --- Type Definition ---
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  instructor: string;
  level?: string;
  rating?: number;
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
        
        setCourses(coursesRes.data || []);
        setEbooks(ebooksRes.data || []);

      } catch (error) {
        console.error("Failed to load data from API:", error);
        setCourses([]);
        setEbooks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-hidden font-body text-brand-black">
      
      {/* --- 🌟 1. Hero Section --- */}
      <section className="relative bg-[#FFF8F0] pt-24 pb-32 overflow-hidden">
         <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl animate-float"></div>
         <div className="absolute bottom-0 left-[-150px] w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-3xl animate-float-delayed"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-orange-100 mb-6 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    <span className="text-sm font-bold text-gray-600 tracking-wide uppercase">Cathy Bilingual Club</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-heading font-bold text-brand-black mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Master Languages <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">
                      With Confidence
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    ปลดล็อกศักยภาพทางภาษาของคุณกับคอร์สเรียนคุณภาพและอีบุ๊กที่คัดสรรมาอย่างดี สอนโดยผู้เชี่ยวชาญตัวจริง
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link href="/courses" className="px-8 py-4 bg-brand-black text-white rounded-full font-bold text-lg hover:bg-brand-orange transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                      ดูคอร์สเรียนแนะนำ
                    </Link>
                    <Link href="/ebook" className="px-8 py-4 bg-white text-brand-black border border-gray-200 rounded-full font-bold text-lg hover:border-brand-orange hover:text-brand-orange transition-all">
                      เลือกซื้อ E-Book
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div>
                    </div>
                    <div>
                    </div>
                  </div>
              </div>

              {/* Hero Image */}
              <div className="lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                      alt="Students Learning" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🏆</div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Certified</p>
                      <p className="text-sm font-bold text-brand-black">Professional Tutors</p>
                    </div>
                  </div>
              </div>
            </div>
         </div>
      </section>

      {/* --- 📚 2. Recommended Courses Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Premium Content</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black">
                Recommended <span className="relative inline-block">
                  Courses
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                  </svg>
                </span>
              </h2>
            </div>
            <Link href="/courses" className="hidden md:flex items-center gap-2 text-brand-black font-bold border-b-2 border-transparent hover:border-brand-orange hover:text-brand-orange transition-all pb-1">
              View All Courses <span className="text-xl">→</span>
            </Link>
          </div>

          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1,2,3].map(i => <div key={i} className="h-[450px] bg-gray-100 rounded-[2rem] animate-pulse"></div>)}
             </div>
          ) : courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {courses.slice(0, 3).map((course, index) => (
                <div key={course.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <CourseCard 
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    image={course.image}
                    category={course.category}
                    instructor={course.instructor}
                    level={course.level}
                    rating={course.rating}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
               <p className="text-gray-400 text-lg">ยังไม่มีข้อมูลคอร์สเรียนในขณะนี้</p>
            </div>
          )}
          
          <div className="mt-12 text-center md:hidden">
             <Link href="/courses" className="inline-block px-8 py-3 rounded-full border-2 border-brand-black text-brand-black font-bold hover:bg-brand-black hover:text-white transition-all">
               View All Courses
             </Link>
          </div>
        </div>
      </section>

      {/* --- 📖 3. Recommended E-Books Section --- */}
      <section className="py-24 bg-brand-gray relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2 block">Digital Library</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-6">
              Recommended E-Books
            </h2>
            <p className="text-gray-500 text-lg">
              คลังความรู้ฉบับพกพา สรุปเนื้อหาเน้นๆ อ่านเข้าใจง่าย ให้คุณเรียนรู้ได้ทุกที่ทุกเวลา
            </p>
          </div>

          {loading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[1,2,3,4].map(i => <div key={i} className="h-[350px] bg-white rounded-3xl animate-pulse"></div>)}
             </div>
          ) : ebooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ebooks.slice(0, 4).map((ebook, index) => (
                <div key={ebook.id} className="transform hover:-translate-y-2 transition-transform duration-300">
                  <EbookCard 
                    id={ebook.id}
                    title={ebook.title}
                    price={ebook.price}
                    cover_image={ebook.cover_image}
                    author={ebook.author}
                    description={ebook.description}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/50 rounded-3xl border border-gray-200">
               <p className="text-gray-400 text-lg">ยังไม่มีข้อมูล E-Book ในขณะนี้</p>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <Link href="/ebook" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all">
               Explore Book Store <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 📝 4. Translation Service Section --- */}
      {/* ✅ เปลี่ยนสีพื้นหลังเป็น Soft Mint Green (#F0FDF4) สบายตา */}
      <section className="py-24 bg-[#F0FDF4] relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-16">
             <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2 block">New Service</span>
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-4">
               บริการแปลภาษา <span className="text-brand-orange">ไทย - อังกฤษ</span>
             </h2>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
               ยกระดับงานเขียนของคุณด้วยบริการแปลภาษาจากผู้เชี่ยวชาญ แม่นยำ รวดเร็ว และเป็นธรรมชาติ
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { icon: '📄', title: 'Document Translation', desc: 'แปลเอกสารราชการ บทคัดย่อ และงานวิชาการต่างๆ' },
                { icon: '💼', title: 'Business & Marketing', desc: 'แปลอีเมล เว็บไซต์ และสื่อโฆษณาเพื่อการสื่อสารทางธุรกิจ' },
                { icon: '⚡', title: 'Fast & Accurate', desc: 'ส่งงานตรงเวลา รับประกันความถูกต้องตามหลักไวยากรณ์' },
              ].map((feature, idx) => (
                // ปรับการ์ดให้เป็นสีขาว ตัดกับพื้นหลังสีเขียวอ่อน
                <div key={idx} className="p-8 rounded-3xl bg-white border border-green-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-black">{feature.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
          </div>
          
          <div className="mt-12">
             <Link href="/contact" className="inline-block px-8 py-3 rounded-full bg-brand-green text-white font-bold hover:bg-brand-black hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
               สอบถามราคาแปลงาน
             </Link>
          </div>
        </div>
      </section>

      {/* --- 💌 5. CTA Section --- */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-brand-orange to-brand-red rounded-[3rem] p-12 md:p-20 shadow-2xl text-white relative overflow-hidden max-w-5xl mx-auto">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">พร้อมเริ่มต้นหรือยัง?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                สมัครสมาชิกวันนี้เพื่อรับสิทธิพิเศษและโปรโมชั่นคอร์สเรียนก่อนใคร
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-4 rounded-full text-brand-black w-full sm:w-80 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
                />
                <button className="px-8 py-4 bg-brand-black text-white rounded-full font-bold hover:bg-brand-yellow hover:text-brand-black transition-all shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
            
            {/* BG Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>

    </div>
  );
}