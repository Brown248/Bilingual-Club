import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* --- 🌟 Hero Section (High Impact) --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 right-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-soft-blue via-transparent to-transparent -z-20"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[100px] -z-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[80px] -z-10 animate-float-fast"></div>

        <div className="container mx-auto px-6 text-center max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">New Courses Available 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tight mb-8 leading-[1.1] animate-fade-up delay-100">
            Master Languages <br />
            <span className="text-gradient">Beyond Limits.</span>
          </h1>

          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
            Cathy Bilingual Club เปลี่ยนเรื่องยากให้เป็นเรื่องง่าย 
            ด้วยเทคนิคการสอนที่สนุก ทันสมัย และใช้งานได้จริงในชีวิตประจำวัน
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link href="/courses" className="px-10 py-4 rounded-full bg-brand-blue text-white font-bold text-lg shadow-xl shadow-brand-blue/30 hover:bg-blue-600 hover:scale-105 transition-all">
              Explore Courses
            </Link>
            <Link href="/contact" className="px-10 py-4 rounded-full bg-white text-brand-black border border-gray-200 font-bold text-lg hover:border-brand-black hover:bg-gray-50 transition-all">
              Contact Us
            </Link>
          </div>
          
          {/* Hero Image / Video Placeholder */}
          <div className="mt-20 relative mx-auto w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 animate-scale-in delay-300">
             <div className="absolute inset-0 bg-gray-900 flex items-center justify-center group cursor-pointer">
                {/* Mockup Image */}
                <div className="text-center text-white">
                   <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                   <span className="font-bold tracking-widest uppercase text-sm">Watch Intro Video</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 🚀 Features Grid (Bento Box Style) --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-soft-blue border border-blue-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-brand-blue/20">🎓</div>
               <h3 className="text-xl font-bold mb-3">Expert Teachers</h3>
               <p className="text-gray-600 leading-relaxed">เรียนกับตัวจริง ผู้เชี่ยวชาญที่มีประสบการณ์สอนกว่า 10 ปี การันตีผลลัพธ์</p>
            </div>
             {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-soft-yellow border border-yellow-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 bg-brand-yellow text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-brand-yellow/20">⚡</div>
               <h3 className="text-xl font-bold mb-3">Fast Learning</h3>
               <p className="text-gray-600 leading-relaxed">เทคนิคลัดที่ช่วยให้คุณเข้าใจไว จำแม่น และนำไปใช้ได้ทันที ไม่ต้องท่องจำแบบเดิมๆ</p>
            </div>
             {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-soft-red border border-red-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 bg-brand-red text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-brand-red/20">❤️</div>
               <h3 className="text-xl font-bold mb-3">Lifetime Access</h3>
               <p className="text-gray-600 leading-relaxed">สมัครครั้งเดียวเรียนได้ตลอดชีพ กลับมาทบทวนเมื่อไหร่ก็ได้ ไม่มีวันหมดอายุ</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 🔥 Courses Section --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
              <div>
                 <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Explore</span>
                 <h2 className="text-4xl font-bold font-heading mt-2">Popular Courses</h2>
              </div>
              <Link href="/courses" className="hidden md:block px-6 py-2 rounded-full border border-gray-300 font-bold hover:bg-black hover:text-white transition">View All</Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCourses.map((course, idx) => (
                 <div key={course.id} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <CourseCard course={course} />
                 </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}