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
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-heading font-bold text-brand-black mb-8 text-center animate-fade-in-up">E-Books Store</h1>
      
      {loading ? (
        <div className="text-center py-20 text-gray-400">Loading e-books...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
          {ebooks.map((ebook: any) => (
            <EbookCard key={ebook.id} {...ebook} />
          ))}
        </div>
      )}
    </div>
  );
}