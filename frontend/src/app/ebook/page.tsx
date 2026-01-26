import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EbookCard from "@/components/EbookCard";
import { ebooks } from "@/data/ebooks";

export default function EbooksPage() {
  return (
    <main className="min-h-screen bg-soft-yellow/30">
      <Navbar />

      <section className="pt-40 pb-16 px-6 text-center">
        <div className="inline-block p-3 rounded-2xl bg-brand-yellow/10 mb-4 animate-fade-up">
           📚 Digital Library
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 text-brand-black animate-fade-up delay-100">
          Curated <span className="text-brand-orange">E-Books</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto animate-fade-up delay-200">
          คลังความรู้พกพา สรุปเน้นๆ อ่านง่าย เข้าใจไว 
          ดาวน์โหลดแล้วอ่านได้ทันทีบนทุกอุปกรณ์
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ebooks.map((ebook, idx) => (
              <div key={ebook.id} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                 <EbookCard ebook={ebook} />
              </div>
            ))}
         </div>
      </section>

      <Footer />
    </main>
  );
}