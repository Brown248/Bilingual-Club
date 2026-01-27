'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  instructor?: string;
}

export default function CourseCard({ id, title, description, price, image, category, instructor = "Cathy" }: CourseCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: id,  // ✅ แก้ตรงนี้: ไม่ต้องมี .toString() แล้ว (ส่งเป็นตัวเลขเลย)
      title,
      price,
      image,
      type: 'course' as const // ✅ เพิ่ม as const เพื่อความชัวร์
    });
    alert(`Added "${title}" to cart!`);
  };

  return (
    <Link href={`/courses/${id}`} className="group block h-full">
      <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            unoptimized 
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-black shadow-sm">
            {category}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
             <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                {instructor.charAt(0)}
             </div>
             <span className="text-xs text-gray-500 font-medium">By {instructor}</span>
          </div>

          <h3 className="text-xl font-heading font-bold text-brand-black mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
            {description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
            <span className="text-2xl font-bold text-brand-orange">
              ฿{price.toLocaleString()}
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="px-4 py-2 bg-brand-black text-white text-sm font-bold rounded-full hover:bg-brand-orange transition-colors shadow-md active:scale-95"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}