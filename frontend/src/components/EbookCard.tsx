// src/components/EbookCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Ebook } from '@/data/ebooks';

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group flex flex-col h-full">
      {/* Image Area - ปรับเป็น Aspect Ratio แนวตั้งเพื่อให้เหมือนหนังสือ */}
      <div className="relative h-64 w-full bg-gray-100 flex justify-center items-center pt-4">
        <div className="relative h-56 w-40 shadow-md group-hover:scale-105 transition duration-500">
             <Image
              src={ebook.image}
              alt={ebook.title}
              fill
              className="object-cover rounded-md"
            />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-accent uppercase tracking-wide">
            {ebook.category}
            </span>
            <span className="text-xs text-textGray bg-gray-100 px-2 py-1 rounded-full">
                PDF / ePub
            </span>
        </div>
        
        <h3 className="text-lg font-bold text-textDark mb-1 line-clamp-2">
          {ebook.title}
        </h3>
        <p className="text-sm text-primary font-medium mb-3">By {ebook.author}</p>
        
        <p className="text-textGray text-sm mb-4 line-clamp-2 flex-grow">
          {ebook.description}
        </p>
        
        {/* Footer Area */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-primary font-bold text-xl">฿{ebook.price.toLocaleString()}</span>
          <button 
            className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-900 transition flex items-center gap-2"
          >
            {/* Icon ตะกร้าสินค้า */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}