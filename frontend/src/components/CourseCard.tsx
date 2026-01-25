import { Course } from '@/types';
import Link from 'next/link';
import Button from './ui/Button';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
      <div className="h-48 bg-gray-200 w-full relative">
        {/* Replace with <Image> in production */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
           
        </div>
        <span className="absolute top-2 right-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">
          {course.type}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-sm text-secondary font-semibold mb-1">{course.language} • {course.level}</div>
        <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-primary">฿{course.price.toLocaleString()}</span>
          <Link href={`/contact?inquiry=${course.id}`}>
            <Button variant="outline" className="px-4 py-1 text-sm">Enroll</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}