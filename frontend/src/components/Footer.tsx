import Link from 'next/link';

export default function Footer() {
  // ข้อมูล Social Media และ Logo
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
    },
    {
      name: 'Line',
      href: 'https://line.me/R/ti/p/@280hhgup?ts=10151343&oat_content=url',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg'
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
               <img 
                src="/logo.png" 
                alt="Cathy Bilingual Club Logo" 
                className="w-12 h-12 object-contain group-hover:-rotate-12 transition-transform duration-300"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-brand-black">
                Cathy<span className="text-brand-orange">Club</span>.
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering your language skills with fun and effective learning methods. Join our community today!
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brand-black mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/courses" className="hover:text-brand-orange transition-colors">All Courses</Link></li>
              <li><Link href="/ebook" className="hover:text-brand-orange transition-colors">E-Books</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* ✅ Contact: เหลือแค่ เบอร์, อีเมล, ไลน์ */}
          <div>
            <h4 className="font-bold text-brand-black mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">📞</span>
                <span>093-130-5336</span>
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">✉️</span>
                <span>dankedoky2000@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors font-bold">L</span>
                <span>Cathy Bilingual Club</span>
              </li>
            </ul>
          </div>

          {/* ✅ Follow Us: ใส่ Logo ของจริง */}
          <div>
            <h4 className="font-bold text-brand-black mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 hover:-translate-y-1"
                  title={social.name}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cathy Bilingual Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}