import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 mt-10 rounded-t-[3rem]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          <div className="md:w-1/3">
            <Link href="/" className="text-2xl font-bold font-heading mb-4 block">
              Cathy<span className="text-brand-orange">Club</span>.
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              เรียนรู้ภาษาด้วยความสนุกและพลังบวก สร้างอนาคตใหม่ไปกับเรา
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-orange transition flex items-center justify-center cursor-pointer">FB</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-red transition flex items-center justify-center cursor-pointer">IG</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-yellow hover:text-black transition flex items-center justify-center cursor-pointer">TT</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-2/3">
            <div>
              <h4 className="font-bold text-brand-yellow mb-4">Learn</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/courses" className="hover:text-white transition">All Courses</Link></li>
                <li><Link href="/ebook" className="hover:text-white transition">E-Books</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-green mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-red mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Bangkok, Thailand</li>
                <li>hello@cathyclub.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cathy Bilingual Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}