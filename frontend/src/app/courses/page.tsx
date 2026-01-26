import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 animate-fade-up">
          Explore <span className="text-gradient">Premium Courses</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto animate-fade-up delay-100">
          คอร์สเรียนออนไลน์คุณภาพสูง ที่ออกแบบมาเพื่อให้คุณเก่งขึ้นจริง 
          เรียนได้ทุกที่ ทุกเวลา ตลอดชีพ
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-24">
        {/* Filter Bar (Mock) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up delay-200">
           {['All', 'English', 'Chinese', 'Business', 'Exam Prep'].map((tag, i) => (
             <button key={tag} className={`px-6 py-2 rounded-full text-sm font-bold border transition-all hover:-translate-y-1 ${i === 0 ? 'bg-brand-black text-white border-brand-black' : 'bg-white text-gray-600 border-gray-200 hover:border-brand-black'}`}>
               {tag}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={course.id} className="animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}