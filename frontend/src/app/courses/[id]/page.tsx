// src/app/courses/[id]/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Next.js 13+ App Router: รับ params เป็น Promise
interface PageProps {
  params: { id: string };
}

export default function CourseDetailPage({ params }: PageProps) {
  // แปลง id จาก string เป็น number แล้วค้นหาใน Mock Data
  const course = courses.find((c) => c.id === Number(params.id));

  // ถ้าหาไม่เจอ ให้เด้งไปหน้า 404
  if (!course) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 font-body">
      <Navbar />

      {/* Breadcrumb (แถบนำทาง) */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-6 text-sm text-textGray">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/courses" className="hover:text-primary">Courses</Link>
          <span className="mx-2">/</span>
          <span className="text-textDark font-medium">{course.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-textGray mb-8 leading-relaxed">
              {course.description}
            </p>

            {/* Course Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-md mb-12">
              <Image 
                src={course.image} 
                alt={course.title} 
                fill 
                className="object-cover"
              />
            </div>

            {/* Course Overview (Mock Content) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm mb-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-textDark font-heading mb-6">Course Overview</h2>
              <div className="space-y-4 text-textGray">
                <p>
                  หลักสูตรนี้ออกแบบมาอย่างเข้มข้นเพื่อให้คุณบรรลุเป้าหมายทางภาษาได้อย่างรวดเร็ว 
                  สอนโดยอาจารย์ผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 10 ปี 
                  เนื้อหาครอบคลุมทั้งทฤษฎีและการปฏิบัติจริง
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>เรียนรู้เทคนิคเฉพาะที่หาไม่ได้จากหนังสือทั่วไป</li>
                  <li>แบบฝึกหัดเสมือนจริงพร้อมเฉลยละเอียด</li>
                  <li>ใบประกาศนียบัตรเมื่อเรียนจบ (Certificate of Completion)</li>
                  <li>เข้าถึงบทเรียนได้ตลอดชีพ (Lifetime Access)</li>
                </ul>
              </div>
            </div>

            {/* Curriculum (Mock Accordion) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-textDark font-heading mb-6">Curriculum</h2>
              <div className="space-y-3">
                {['Introduction & Orientation', 'Chapter 1: Foundations', 'Chapter 2: Advanced Techniques', 'Final Exam & Certificate'].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <span className="font-medium text-textDark flex items-center">
                      <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                        {index + 1}
                      </span>
                      {item}
                    </span>
                    <span className="text-textGray text-sm">Preview</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="mb-6">
                <span className="text-textGray text-sm line-through">฿{(course.price * 1.5).toLocaleString()}</span>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-primary">฿{course.price.toLocaleString()}</span>
                  <span className="text-accent font-bold mb-2">33% OFF</span>
                </div>
              </div>

              <button className="w-full py-4 bg-accent text-white font-bold text-lg rounded-xl hover:bg-yellow-500 transition shadow-lg mb-4">
                Enroll Now
              </button>
              
              <button className="w-full py-3 border border-primary text-primary font-bold rounded-xl hover:bg-blue-50 transition">
                Add to Cart
              </button>

              <div className="mt-6 space-y-3 text-sm text-textGray">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Duration: 12 Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                  <span>Full Lifetime Access</span>
                </div>
                <div className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Certificate of Completion</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}