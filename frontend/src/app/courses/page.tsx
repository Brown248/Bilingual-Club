// src/app/courses/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses"; // ดึงข้อมูลมา

export default function CoursesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Explore Our Courses
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ค้นพบคอร์สเรียนที่เหมาะกับเป้าหมายของคุณ ไม่ว่าจะเป็นการสอบ IELTS, ภาษาจีนธุรกิจ หรือพัฒนาทักษะภาษาอังกฤษเพื่ออาชีพ
          </p>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-16 container mx-auto px-6">
        
        {/* Mock Filter Buttons (ยังกดไม่ได้จริงในขั้นตอนนี้ ใส่ไว้ให้สวยก่อน) */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
           {["All", "English", "Chinese", "IELTS", "Self-Paced"].map((cat) => (
             <button 
               key={cat}
               className={`px-6 py-2 rounded-full border text-sm font-semibold transition ${
                 cat === "All" 
                 ? "bg-primary text-white border-primary" 
                 : "bg-white text-textGray border-gray-300 hover:border-primary hover:text-primary"
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}