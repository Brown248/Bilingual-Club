'use client'; // ต้องมีเพราะใช้ onClick

import Image from 'next/image';
import { Ebook } from '@/data/ebooks';
import { useCart } from '@/context/CartContext'; // Import Hook

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  const { addToCart } = useCart(); // เรียกใช้ฟังก์ชัน

  const handleAddToCart = () => {
    addToCart({
        id: ebook.id,
        title: ebook.title,
        price: ebook.price,
        image: ebook.image,
        type: 'ebook'
    });
  };

  return (
    <div className="group bg-white rounded-[2rem] border border-gray-100 p-4 hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-yellow/10 flex flex-col h-full">
      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4 bg-soft-yellow">
        <Image
          src={ebook.image}
          alt={ebook.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 right-3 bg-brand-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
          PDF
        </div>
      </div>

      <div className="px-2 flex-grow">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">{ebook.category}</span>
        <h3 className="text-lg font-bold text-brand-black mt-1 mb-2 leading-tight group-hover:text-brand-orange transition-colors">
            {ebook.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{ebook.description}</p>
      </div>
      
      {/* Price & Buttons */}
      <div className="mt-auto px-2">
        <div className="text-xl font-bold text-brand-black mb-3">฿{ebook.price.toLocaleString()}</div>
        
        <div className="grid grid-cols-2 gap-2">
            {/* Add to Cart */}
            <button 
                onClick={handleAddToCart}
                className="py-2 rounded-full border border-gray-200 text-sm font-bold hover:bg-gray-50 text-gray-600 transition"
            >
                Add to Cart
            </button>
            {/* Buy Now */}
            <button 
                onClick={() => alert('ไปหน้าจ่ายเงินทันที! (Mockup)')}
                className="py-2 rounded-full bg-brand-black text-white text-sm font-bold hover:bg-brand-orange transition shadow-md"
            >
                Buy Now
            </button>
        </div>
      </div>
    </div>
  );
}