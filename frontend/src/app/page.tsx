// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center text-center lg:text-left">

          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary font-heading leading-tight mb-6">
              Master New Languages <br />
              <span className="text-secondary">Unlock New Opportunities</span>
            </h1>

            <p className="text-lg text-textGray mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              เรียนรู้ภาษาอังกฤษและจีนกับผู้เชี่ยวชาญ พร้อมคอร์ส IELTS
              และบริการแปลภาษาครบวงจร เริ่มต้นเส้นทางความสำเร็จของคุณวันนี้
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-800 transition shadow-lg"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white border border-gray-300 text-textDark font-semibold rounded-lg hover:border-primary hover:text-primary transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-96 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center text-gray-400">
              [ Hero Image Area ]
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-textDark mb-12 font-heading">
            Popular Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course Card */}
            {[
              {
                tag: "English",
                title: "IELTS Intensive Prep",
                desc: "ติวเข้ม IELTS ครบ 4 ทักษะ การันตีผลลัพธ์",
                price: "฿4,500",
              },
              {
                tag: "Chinese",
                title: "Chinese for Business",
                desc: "ภาษาจีนเพื่อการสื่อสารธุรกิจและเจรจาการค้า",
                price: "฿3,900",
              },
              {
                tag: "Self-Paced",
                title: "Grammar Masterclass",
                desc: "ปูพื้นฐานไวยากรณ์ให้แน่น เรียนได้ตลอดชีพ",
                price: "฿1,290",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="h-48 bg-gray-200 w-full" />
                <div className="p-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-wide">
                    {course.tag}
                  </span>
                  <h3 className="text-xl font-bold text-textDark mt-2 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-textGray text-sm mb-4">
                    {course.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">
                      {course.price}
                    </span>
                    <button className="text-sm text-secondary font-semibold hover:underline">
                      View Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
