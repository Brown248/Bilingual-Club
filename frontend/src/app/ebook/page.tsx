'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EbookCard from "@/components/EbookCard"; // ตรวจสอบว่ามีไฟล์นี้อยู่
import { useState, useEffect } from "react";
import api from "@/lib/api";

interface Ebook {
  id: number;
  title: string;
  description: string;
  price: number;
  author: string;
  image: string;
}

export default function EbooksPage() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const res = await api.get('/api/v1/ebooks/');
        setEbooks(res.data);
      } catch (error) {
        console.error("Error fetching ebooks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEbooks();
  }, []);

  return (
    <main className="min-h-screen bg-soft-gray font-body flex flex-col">
      <Navbar />
      
      <section className="bg-brand-black text-white py-20 rounded-b-[3rem] mb-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">E-Books Store</h1>
          <p className="text-gray-300">คลังความรู้พกพา อ่านได้ทุกที่ ทุกเวลา</p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20 flex-grow">
        {loading ? (
          <div className="text-center py-20">
             <div className="animate-spin w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full mx-auto mb-4"></div>
             <p className="text-gray-400">Loading library...</p>
          </div>
        ) : ebooks.length === 0 ? (
          <div className="text-center py-20 text-gray-400">ยังไม่มีหนังสือในขณะนี้</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ebooks.map((ebook) => (
              <EbookCard
                key={ebook.id}
                id={ebook.id}
                title={ebook.title}
                price={ebook.price}
                image={ebook.image}
                author={ebook.author}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}