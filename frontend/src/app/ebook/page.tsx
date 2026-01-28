'use client';

import { useState, useEffect } from 'react';
import EbookCard from "@/components/EbookCard";
import api from '@/lib/api';

export default function EbookPage() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/v1/ebooks/')
       .then(res => setEbooks(res.data))
       .catch(err => console.error(err))
       .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-4">
          E-Book <span className="text-brand-orange">Store</span>
        </h1>
        <p className="text-gray-500">
          สรุปเนื้อหาภาษาอังกฤษและจีนฉบับเข้าใจง่าย พกพาสะดวก อ่านได้ทุกที่ทุกเวลา
        </p>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-[400px] bg-gray-100 rounded-[2rem] animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
          {ebooks.map((ebook: any, index: number) => (
            <div key={ebook.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <EbookCard {...ebook} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}