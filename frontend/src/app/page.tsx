import Link from 'next/link';
import Image from 'next/image';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

export default function Home() {
  // เลือกคอร์สมาแสดง 3 คอร์ส
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-brand-gray selection:bg-brand-orange selection:text-white">
      
      {/* ================= 1. Hero Section (ปรับลดความสูงและ Padding) ================= */}
      {/* ปรับ pt-36 -> pt-28 (mobile), pt-48 -> pt-36 (desktop) เพื่อดึง Content ขึ้นมา */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 overflow-visible">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        {/* ลดขนาด Blob ลงเล็กน้อยเพื่อไม่ให้กวนสายตา */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-yellow/40 to-brand-orange/40 rounded-full blur-3xl -z-10 opacity-50 animate-float-organic"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-3xl -z-10 opacity-40"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left animate-fade-scale">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-orange/20 shadow-sm hover:shadow-md transition-shadow">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
              </span>
              <span className="text-xs font-bold text-brand-orange tracking-wide uppercase">#1 Bilingual Community</span>
            </div>
            
            {/* Headline: ปรับลดจาก 7xl -> 6xl เพื่อความพอดีในจอ Laptop */}
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-black leading-[1.15] tracking-tight">
              ปลดล็อกศักยภาพ <br className="hidden lg:block" />
              ด้วยพลังแห่ง <span className="relative inline-block whitespace-nowrap">
                <span className="absolute inset-x-0 bottom-2 h-3 lg:h-4 bg-brand-yellow/60 -z-10 skew-x-6"></span>
                ภาษา
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              เรียนรู้ภาษาอังกฤษและจีนในรูปแบบใหม่ เข้าใจง่าย สนุก นำไปใช้ได้จริง พร้อม Community ที่จะซัพพอร์ตให้คุณเก่งขึ้นทุกวัน
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link href="/courses" className="group relative w-full sm:w-auto px-8 py-3.5 bg-brand-orange text-white font-bold rounded-full shadow-lg shadow-brand-orange/20 overflow-hidden hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  เริ่มเรียนทันที 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-white/60 backdrop-blur-sm text-brand-black font-bold rounded-full border border-gray-200 hover:border-brand-orange/50 hover:bg-white shadow-sm transition-all duration-300 text-center">
                  ทดลองเรียนฟรี
              </Link>
            </div>

            {/* Simple Stats */}
            <div className="pt-6 border-t border-brand-black/5 flex items-center justify-center lg:justify-start gap-4 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                   <div className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white"></div>
                   <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
                   <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">1k+</div>
                </div>
                <span className="text-xs font-semibold text-gray-400">นักเรียนที่ไว้วางใจเรา</span>
              </div>
            </div>
          </div>

          {/* Right Image: ปรับความสูงลงจาก 600px -> 500px */}
          <div className="lg:col-span-6 relative hidden lg:block h-[500px] animate-fade-scale delay-200">
            <div className="absolute top-4 left-8 right-0 bottom-0 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden rotate-2 border-4 border-white/60">
                 {/* Placeholder Image */}
                 <div className="w-full h-full bg-gradient-to-tr from-gray-50 to-gray-100 flex items-center justify-center relative group">
                    {/* ใช้ placeholder="blur" ถ้ามี blurDataURL จะดีมาก */}
                    <Image 
                      src="/hero-placeholder.png" 
                      alt="Bilingual Learning Hero" 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-30 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                    />
                    <span className="text-gray-300 font-bold tracking-widest text-sm border-2 border-gray-200 px-4 py-2 rounded uppercase z-10">Hero Image Area</span>
                 </div>
            </div>

            {/* Floating Card 1 (Top Left) */}
            <div className="absolute top-0 left-0 p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-xl animate-float-organic z-20 -rotate-3 border border-white/50">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🇬🇧🇨🇳</span>
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Dual Language</p>
                        <p className="font-bold text-sm text-brand-black">English & Chinese</p>
                    </div>
                </div>
            </div>

            {/* Floating Card 2 (Bottom Right) */}
            <div className="absolute bottom-12 -right-4 p-4 bg-brand-orange text-white rounded-xl shadow-lg animate-float-organic z-20 rotate-3" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🎓</div>
                    <div>
                        <p className="text-xs opacity-80 font-medium">Certified by</p>
                        <p className="font-bold text-base">Cathy Experts</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. Features Section (ลด Gap และ Padding) ================= */}
      {/* ปรับ py-24 -> py-16 */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-12 animate-fade-scale">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black mb-3">
                    ทำไมถึงแตกต่าง?
                </h2>
                <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
                    เราสร้างสภาพแวดล้อมที่จะทำให้คุณรักการเรียนรู้มากกว่าเดิม
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                    { title: 'Curriculum คุณภาพ', desc: 'เนื้อหาทันสมัย เน้นการใช้งานจริง ไม่เน้นท่องจำแบบเดิมๆ', icon: '🎯', bg: 'bg-brand-yellow/10', text: 'text-brand-yellow' },
                    { title: 'เรียนสนุกเหมือนเล่นเกม', desc: 'ระบบ Interactive ที่ทำให้คุณอยากกลับมาเรียนทุกวัน', icon: '🎮', bg: 'bg-brand-orange/10', text: 'text-brand-orange' },
                    { title: 'Community ที่อบอุ่น', desc: 'แลกเปลี่ยนความรู้และฝึกฝนไปพร้อมกับเพื่อนๆ เป้าหมายเดียวกัน', icon: '🤝', bg: 'bg-brand-green/10', text: 'text-brand-green' },
                ].map((item, index) => (
                    // ปรับ p-8 -> p-6 ให้การ์ดกระชับขึ้น
                    <div key={index} className="group p-6 lg:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} rounded-bl-[2.5rem] -z-10 opacity-60 group-hover:scale-125 transition-transform duration-500`}></div>
                        <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.text} flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:rotate-6 transition-transform duration-300`}>
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-brand-black mb-2">{item.title}</h3>
                        <p className="text-sm lg:text-base text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= 3. Featured Courses (ปรับ Layout ให้ Compact) ================= */}
      <section className="py-16 px-6 bg-white relative">
         <div className="absolute top-0 inset-x-0 h-16 -translate-y-full bg-white rounded-t-[40px] hidden md:block"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <span className="text-brand-orange font-bold tracking-wider uppercase text-xs mb-1 block">Premium Courses</span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black">
                    คอร์สเรียนแนะนำ
                </h2>
            </div>
            <Link href="/courses" className="group flex items-center gap-2 text-sm text-brand-black font-bold bg-gray-50 px-5 py-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300 border border-gray-100">
                ดูคอร์สทั้งหมด
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredCourses.map((course, index) => (
              <div key={course.id} className="animate-fade-scale" style={{ animationDelay: `${index * 100}ms` }}>
                 <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CTA Section (กระชับความสูง) ================= */}
      {/* ลด py-24 -> py-16 */}
      <section className="py-16 px-4 lg:px-6 bg-white">
          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange to-brand-yellow"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
              
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse-soft"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
              
              {/* ลด Padding ภายใน: p-12/p-20 -> p-10/p-16 */}
              <div className="relative z-10 p-10 lg:p-16 text-center text-white">
                  <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
                      พร้อมเปลี่ยนแปลงตัวเอง<br className="hidden sm:block"/>หรือยัง?
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto font-medium">
                      สมัครสมาชิกวันนี้เพื่อรับสิทธิพิเศษและเข้าถึงคลังความรู้แบบ Unlimited
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <Link href="/login" className="px-10 py-4 bg-white text-brand-orange font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300">
                        สมัครสมาชิกเลย
                    </Link>
                    <Link href="/courses" className="px-10 py-4 bg-brand-orange-hover/20 backdrop-blur-md text-white border border-white/40 font-bold text-base rounded-full hover:bg-white/10 transition-all duration-300">
                        ดูตัวอย่าง
                    </Link>
                  </div>
              </div>
          </div>
      </section>

    </main>
  );
}