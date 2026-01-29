'use client';

import Link from 'next/link';
import Image from 'next/image';

// ✅ กำหนด Interface ให้ชัดเจน
interface CourseProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  level?: string;
  rating?: number;
  instructor?: string; // เพิ่มเผื่อไว้
}

// ✅ แก้บรรทัดนี้: รับ props ทีละตัว (ไม่ต้องมี { course })
export default function CourseCard({ id, title, description, price, image, category, level, rating, instructor }: CourseProps) {
  return (
    // ✅ แก้บรรทัด 17: เรียกใช้ id ตรงๆ (ไม่ต้อง course.id)
    <Link href={`/courses/${id}`} className="block h-full">
      <div className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        
        {/* Image Cover */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          <Image 
            src={image || '/course-placeholder.jpg'} // ใช้ image ตรงๆ
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {category && (
              <span className="bg-white/95 backdrop-blur-md text-brand-black text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  🏷️ {category}
              </span>
            )}
            <span className="bg-brand-orange/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              🔥 Popular
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
            {/* Rating & Level */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <div className="flex items-center gap-1 text-yellow-400">
                    {'★'.repeat(5)} <span className="text-gray-400 ml-1">({rating || 4.9})</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 font-medium">
                    {level || 'All Levels'}
                </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-brand-black mb-3 line-clamp-2 leading-tight group-hover:text-brand-orange transition-colors">
                {title}
            </h3>
            
            <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow font-body">
                {description}
            </p>
            
            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange to-brand-yellow"></div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{instructor || 'Cathy Team'}</span>
                </div>
                <span className="text-xl font-bold text-brand-black group-hover:text-brand-green transition-colors">
                    ฿{price.toLocaleString()}
                </span>
            </div>
        </div>
      </div>
    </Link>
  );
}