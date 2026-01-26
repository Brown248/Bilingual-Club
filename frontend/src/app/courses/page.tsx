import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 animate-fade-up">
          Explore <span className="text-gradient-warm">Premium Courses</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto animate-fade-up delay-100">
          คอร์สเรียนออนไลน์คุณภาพสูง ที่ออกแบบมาเพื่อให้คุณเก่งขึ้นจริง 
          เรียนได้ทุกที่ ทุกเวลา ตลอดชีพ
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-24">
        
        {/* (เอา Filter Bar ออกแล้วครับ) */}

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