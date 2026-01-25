// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Info */}
        <div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Cathy <span className="text-accent">Bilingual Club</span>
          </h3>
          <p className="text-gray-300 text-sm">
            ยกระดับทักษะภาษาของคุณสู่ระดับสากล ด้วยคอร์สเรียนคุณภาพและผู้สอนผู้เชี่ยวชาญจาก Cathy Bilingual Club
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/courses" className="hover:text-accent">All Courses</Link></li>
            <li><Link href="/ebook" className="hover:text-accent">E-Books</Link></li>
            <li><Link href="/services" className="hover:text-accent">Translation</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-accent">FAQs</Link></li>
            <li><Link href="#" className="hover:text-accent">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300 mb-2">123 Education Road, Bangkok</p>
          <p className="text-sm text-gray-300 mb-2">Email: hello@cathybilingual.com</p>
          <p className="text-sm text-gray-300">Tel: 02-123-4567</p>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Cathy Bilingual Club. All rights reserved.
      </div>
    </footer>
  );
}