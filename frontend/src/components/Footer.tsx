import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:w-1/3">
            <Link href="/" className="text-2xl font-bold font-heading text-brand-black mb-4 block">
              Cathy<span className="text-brand-blue">Club</span>.
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6">
              Empowering your language journey with modern learning techniques. 
              Join us to unlock global opportunities.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <div className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-blue hover:text-white transition flex items-center justify-center cursor-pointer">FB</div>
               <div className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-red hover:text-white transition flex items-center justify-center cursor-pointer">IG</div>
               <div className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-black hover:text-white transition flex items-center justify-center cursor-pointer">TT</div>
            </div>
          </div>

          {/* Links Group */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-2/3">
            <div>
              <h4 className="font-bold text-brand-black mb-4">Learn</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/courses" className="hover:text-brand-blue transition">All Courses</Link></li>
                <li><Link href="/ebook" className="hover:text-brand-blue transition">E-Books</Link></li>
                <li><Link href="/blog" className="hover:text-brand-blue transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-black mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/contact" className="hover:text-brand-blue transition">Contact Us</Link></li>
                <li><Link href="/services" className="hover:text-brand-blue transition">Services</Link></li>
                <li><Link href="#" className="hover:text-brand-blue transition">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-black mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Bangkok, Thailand</li>
                <li>hello@cathyclub.com</li>
                <li>+66 2 123 4567</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cathy Bilingual Club. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link href="#" className="hover:text-brand-black">Privacy Policy</Link>
             <Link href="#" className="hover:text-brand-black">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}