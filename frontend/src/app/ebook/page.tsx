// src/app/ebook/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EbookCard from "@/components/EbookCard";
import { ebooks } from "@/data/ebooks";

export default function EbooksPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 font-body">
      <Navbar />

      {/* Header Section */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        {/* Background Pattern (Optional Decoration) */}
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
            <svg width="400" height="400" fill="currentColor" viewBox="0 0 200 200"><path d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.7,-11.7,85.2,2.5C82.7,16.7,73.5,30,63.1,41.2C52.7,52.4,41.1,61.5,28.3,68.4C15.5,75.3,1.5,80,-11.9,78.8C-25.3,77.6,-38.1,70.5,-49.4,61.5C-60.7,52.5,-70.5,41.6,-77.2,28.8C-83.9,16,-87.5,1.3,-84.6,-12.3C-81.7,-25.9,-72.3,-38.4,-61,-47.8C-49.7,-57.2,-36.5,-63.5,-23.4,-70.5C-10.3,-77.5,2.7,-85.2,16.2,-84.8C29.7,-84.4,43.7,-75.9,45.7,-76.3Z" transform="translate(100 100)" /></svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold font-heading mb-4">
            Digital Library & E-Books
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ดาวน์โหลดหนังสือและสื่อการเรียนรู้คุณภาพสูง ไวยากรณ์ คำศัพท์ และเทคนิคการสอบ 
            อ่านได้ทุกที่ทุกเวลา บนมือถือ แท็บเล็ต และคอมพิวเตอร์
          </p>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-16 container mx-auto px-6">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
           {["All", "Grammar", "Business", "Vocabulary", "Exam Prep"].map((cat) => (
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

        {/* Ebook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook.id} ebook={ebook} />
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}