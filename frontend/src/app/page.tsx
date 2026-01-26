import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-32">
        {/* Warm Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] -z-10 animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-orange border border-orange-100 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-sm font-bold text-brand-orange">Cathy Bilingual Club</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tight mb-8 leading-tight animate-fade-up delay-100">
            Learn with <br />
            <span className="text-gradient-warm">Passion.</span>
          </h1>

          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-up delay-200">
            ปลดล็อกศักยภาพภาษาของคุณด้วยความสนุกและพลังบวก 
            ที่ Cathy Bilingual Club เราเปลี่ยนเรื่องเรียนให้เป็นเรื่องเล่น
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link href="/courses" className="px-10 py-4 rounded-full bg-brand-black text-white font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all shadow-xl">
              Start Learning
            </Link>
            <Link href="/contact" className="px-10 py-4 rounded-full bg-white text-brand-black border border-gray-200 font-bold text-lg hover:border-brand-orange hover:text-brand-orange transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* --- Features --- */}
      <section className="py-24 bg-soft-gray relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
               <div className="w-14 h-14 bg-soft-red text-brand-red rounded-2xl flex items-center justify-center text-2xl mb-6">🔥</div>
               <h3 className="text-xl font-bold mb-3">Energy Class</h3>
               <p className="text-gray-500">บรรยากาศการเรียนที่สนุก ตื่นเต้น ไม่น่าเบื่อ ทำให้คุณกล้าพูด</p>
            </div>
             {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
               <div className="w-14 h-14 bg-soft-orange text-brand-orange rounded-2xl flex items-center justify-center text-2xl mb-6">💡</div>
               <h3 className="text-xl font-bold mb-3">Smart Tricks</h3>
               <p className="text-gray-500">เทคนิคจำศัพท์และไวยากรณ์แบบทางลัด เข้าใจง่ายใน 5 นาที</p>
            </div>
             {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
               <div className="w-14 h-14 bg-soft-green text-brand-green rounded-2xl flex items-center justify-center text-2xl mb-6">🌱</div>
               <h3 className="text-xl font-bold mb-3">Growth Mindset</h3>
               <p className="text-gray-500">เราไม่ได้สอนแค่ภาษา แต่สอนวิธีคิดให้คุณเก่งขึ้นทุกวัน</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Courses --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-heading mb-4">Popular Courses</h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
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