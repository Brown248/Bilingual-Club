'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/data/courses';
import { useCart } from '@/app/context/CartContext';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // กันไม่ให้ Link ทำงาน (เดี๋ยวจะเด้งไปหน้ารายละเอียดแทน)
    addToCart({
        id: course.id,
        title: course.title,
        price: course.price,
        image: course.image,
        type: 'course'
    });
  };

  return (
    <Link href={`/courses/${course.id}`} className="group block h-full">
      <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-black shadow-sm">
            {course.category}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold font-heading text-brand-black mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-50 mb-4">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-soft-orange flex items-center justify-center text-xs font-bold text-brand-orange">
                  {course.instructor ? course.instructor.charAt(0) : 'T'}
               </div>
               <span className="text-xs text-gray-500 font-medium">{course.instructor || 'Instructor'}</span>
            </div>
            <span className="text-lg font-bold text-brand-black">
              ฿{course.price.toLocaleString()}
            </span>
          </div>

          {/* Buttons Area */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
             <button 
                onClick={handleAddToCart}
                className="py-2.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-brand-black transition z-10"
             >
                Add to Cart
             </button>
             <button 
                onClick={(e) => {
                    e.preventDefault();
                    alert('ไปหน้าจ่ายเงินทันที!');
                }}
                className="py-2.5 rounded-full bg-brand-black text-white text-sm font-bold hover:bg-brand-orange hover:shadow-lg transition z-10"
             >
                Buy Now
             </button>
          </div>
        </div>
      </div>
    </Link>
  );
}