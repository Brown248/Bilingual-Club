'use client';

import { useCart } from '@/context/CartContext';

// ✅ แก้ Interface ให้ตรงกับข้อมูลจริง (ใช้ cover_image)
interface EbookCardProps {
  id: number;
  title: string;
  author: string;
  price: number;
  cover_image: string; // เปลี่ยนจาก image เป็น cover_image
  description?: string;
}

export default function EbookCard({ id, title, author, price, cover_image, description }: EbookCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-[300px] overflow-hidden bg-gray-100">
        <img
          src={cover_image} // ✅ เรียกใช้ cover_image ตรงนี้
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-bold text-brand-orange bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
            E-Book
          </span>
        </div>
        
        <h3 className="text-xl font-heading font-bold text-brand-black mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 font-medium flex items-center gap-2">
          <span>✍️</span> {author}
        </p>

        {/* Spacer to push button to bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-2xl font-bold text-brand-orange">
            ฿{price.toLocaleString()}
          </span>
          
          <button
            // ✅ ตอนส่งเข้าตะกร้า แปลง cover_image กลับเป็น image (เพราะตะกร้าอาจจะใช้ชื่อ image กลาง)
            onClick={() => addToCart({ id, title, price, image: cover_image, type: 'ebook' })} 
            className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-orange hover:scale-110 transition-all shadow-md active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}