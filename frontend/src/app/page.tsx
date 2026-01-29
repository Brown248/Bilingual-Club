import Link from 'next/link';
import Image from 'next/image';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-brand-gray">
      
      {/* ================= 1. Hero Section (สวยงาม มีมิติ) ================= */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-40 px-6 overflow-visible">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        {/* Blob ใหญ่สีส้มทางขวา */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-brand-yellow/40 to-brand-orange/40 rounded-full blur-3xl -z-10 opacity-60 animate-float-organic"></div>
        {/* Blob เล็กสีเขียวทางซ้าย */}
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Content (Text) - span 6 cols */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left animate-fade-scale">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-orange/20 shadow-sm">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              <span className="text-sm font-bold text-brand-orange tracking-wide">#1 Bilingual Community</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-brand-black leading-[1.1]">
              ปลดล็อกศักยภาพ <br/>
              ด้วยพลังแห่ง <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-2 h-4 bg-brand-yellow/60 -z-10 skew-x-6"></span>
                ภาษา
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              เรียนรู้ภาษาอังกฤษและจีนในรูปแบบใหม่ ที่เข้าใจง่าย สนุก และนำไปใช้ได้จริง พร้อม Community ที่จะซัพพอร์ตให้คุณเก่งขึ้นทุกวัน
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link href="/courses" className="group relative w-full sm:w-auto px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg shadow-brand-orange/30 overflow-hidden hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  เริ่มเรียนทันที 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-brand-orange-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/70 backdrop-blur-sm text-brand-black font-bold rounded-full border-2 border-white hover:border-brand-orange/50 hover:bg-white shadow-sm transition-all duration-300 text-center">
                 ทดลองเรียนฟรี
              </Link>
            </div>

            {/* Simple Stats */}
            <div className="pt-8 border-t border-brand-black/5 flex items-center justify-center lg:justify-start gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                   <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                   <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                   <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold border-2 border-white">1k+</div>
                </div>
                <span className="text-sm font-medium">นักเรียนที่ไว้วางใจ</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition (ซ้อนทับกันให้ดูแพง) - span 6 cols */}
          <div className="lg:col-span-6 relative hidden lg:block h-[600px] animate-fade-scale delay-300">
            {/* Main Image Frame */}
            <div className="absolute top-10 left-10 right-0 bottom-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden rotate-3 border-4 border-white/50">
                 {/* Placeholder รูปหลัก (ใส่รูปคนสอนสวยๆ ตรงนี้) */}
                 <div className="w-full h-full bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <Image src="/hero-placeholder.png" alt="Hero" fill className="object-cover opacity-20 mix-blend-overlay" />
                    <span className="text-gray-400 font-bold">YOUR HERO IMAGE</span>
                 </div>
            </div>

            {/* Floating Card 1 (Top Left) */}
            <div className="absolute top-0 left-0 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-glow animate-float-organic z-20 -rotate-6 border border-white/50">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">🇬🇧🇨🇳</span>
                    <div>
                        <p className="text-xs text-gray-500 font-bold">Double Language</p>
                        <p className="font-bold text-brand-black">English & Chinese</p>
                    </div>
                </div>
            </div>

            {/* Floating Card 2 (Bottom Right) */}
            <div className="absolute bottom-20 right-[-20px] p-5 bg-brand-orange text-white rounded-2xl shadow-lg animate-float-organic z-20 rotate-6" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                       🎓
                    </div>
                    <div>
                        <p className="text-sm opacity-80 font-medium">Certified by</p>
                        <p className="font-bold text-lg">Cathy Experts</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. Features Section (Glassmorphism Cards) ================= */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-16 animate-fade-scale">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black mb-4">
                    ทำไมถึงแตกต่าง?
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    เราไม่ได้แค่สอนภาษา แต่เราสร้างสภาพแวดล้อมที่จะทำให้คุณรักการเรียนรู้
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: 'Curriculum ที่ออกแบบมาเพื่อคุณ', desc: 'เนื้อหาทันสมัย เน้นการใช้งานจริง ไม่เน้นท่องจำแบบเดิมๆ', icon: '🎯', bg: 'bg-brand-yellow/10', text: 'text-brand-yellow' },
                    { title: 'เรียนสนุก เหมือนเล่นเกม', desc: 'ระบบการเรียนแบบ Interactive ที่ทำให้คุณอยากกลับมาเรียนทุกวัน', icon: '🎮', bg: 'bg-brand-orange/10', text: 'text-brand-orange' },
                    { title: 'Community คุณภาพ', desc: 'แลกเปลี่ยนความรู้และฝึกฝนไปพร้อมกับเพื่อนๆ ที่มีเป้าหมายเดียวกัน', icon: '🤝', bg: 'bg-brand-green/10', text: 'text-brand-green' },
                ].map((item, index) => (
                    <div key={index} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} rounded-bl-[2.5rem] -z-10 opacity-50 group-hover:scale-110 transition-transform duration-700`}></div>
                        <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:rotate-6 transition-transform duration-300`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= 3. Featured Courses (Staggered Animation) ================= */}
      <section className="py-24 px-6 bg-white relative">
         {/* Decorative curve top */}
         <div className="absolute top-0 inset-x-0 h-24 -translate-y-full bg-white rounded-t-[50px] hidden md:block"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="animate-fade-scale">
                <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Premium Courses</span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black">
                    คอร์สเรียนแนะนำประจำสัปดาห์
                </h2>
            </div>
            <Link href="/courses" className="group flex items-center gap-2 text-brand-black font-bold bg-gray-100 px-6 py-3 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300">
                ดูคอร์สทั้งหมด
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredCourses.map((course, index) => (
              // ใช้ style animationDelay เพื่อให้การ์ดขึ้นมาไม่พร้อมกัน (Stagger effect)
              <div key={course.id} className="animate-fade-scale" style={{ animationDelay: `${index * 150}ms` }}>
                 <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CTA Section (More Dynamic) ================= */}
      <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] shadow-2xl">
              {/* Background with pattern and gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange to-brand-yellow"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
              
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse-soft"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10 p-12 lg:p-20 text-center text-white">
                  <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                      เริ่มต้นการเดินทาง<br/>สู่การเป็นคนใหม่ที่ดีกว่าเดิม
                  </h2>
                  <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium">
                      อย่ารอช้า! สมัครสมาชิกวันนี้เพื่อรับสิทธิพิเศษและเข้าถึงคลังความรู้ที่จะเปลี่ยนชีวิตคุณ
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/login" className="px-12 py-5 bg-white text-brand-orange font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-50 transition-all duration-300">
                        สมัครสมาชิกเลย
                    </Link>
                    <Link href="/courses" className="px-12 py-5 bg-brand-orange-hover/30 backdrop-blur-md text-white border-2 border-white/30 font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300">
                        ดูคอร์สตัวอย่าง
                    </Link>
                  </div>
              </div>
          </div>
      </section>

    </main>
  );
}