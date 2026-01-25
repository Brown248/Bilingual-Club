// src/components/CourseCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/data/courses'; // เรียกใช้ Interface ที่เราทำไว้

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group flex flex-col h-full">
      {/* Image Area */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {course.level}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-2">
          {course.category}
        </span>
        <h3 className="text-lg font-bold text-textDark mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-textGray text-sm mb-4 line-clamp-2 flex-grow">
          {course.description}
        </p>
        
        {/* Footer Area: Price & Button */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
             <span className="text-xs text-gray-400 block">Price</span>
             <span className="text-primary font-bold text-xl">฿{course.price.toLocaleString()}</span>
          </div>
          <Link 
            href={`/courses/${course.id}`} 
            className="px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-primary transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}