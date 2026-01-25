import { CourseService } from '@/services/api';
import CourseCard from '@/components/CourseCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default async function Home() {
  const popularCourses = await CourseService.getPopular();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master a New Language,<br /> <span className="text-accent">Unlock the World.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Professional language courses and translation services tailored for your success.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses"><Button variant="accent">Find a Course</Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Contact Us</Button></Link>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary mb-4">Certified Translation Services</h2>
            <p className="text-gray-600 mb-6">
              We provide accurate, certified translations for legal documents, visas, and business contracts.
            </p>
            <Link href="/services"><Button>Learn More</Button></Link>
          </div>
        </div>
      </section>

      {/* Social / Embedded */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Student Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                
             </div>
             <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}