'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface EbookCardProps {
  id: number; 
  title: string;
  price: number;
  author: string;
  image: string;
}

export default function EbookCard({ id, title, price, author, image }: EbookCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: id, // ✅ แก้ตรงนี้: ส่งเป็นตัวเลข (ไม่ต้องมี .toString())
      title,
      price,
      image,
      type: 'ebook' as const
    });
    alert(`Added "${title}" to cart!`);
  };

  return (
    <div className="group relative bg-white rounded-[2rem] p-4 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4 shadow-sm bg-gray-200">
        <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
            unoptimized 
        />
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
                onClick={handleAddToCart}
                className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-brand-red"
            >
                Add to Cart
            </button>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-heading font-bold text-brand-black text-lg leading-tight line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500">by {author}</p>
        <div className="text-xl font-bold text-brand-orange">฿{price.toLocaleString()}</div>
      </div>
    </div>
  );
}