'use client'; // ต้องใช้ client เพราะมีการเช็ค scroll

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // ตรวจจับการ Scroll เพื่อเปลี่ยนสี Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'E-Books', href: '/ebook' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-vivid-blue rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            C
          </div>
          <span className="text-2xl font-bold font-heading text-vivid-black tracking-tight">
            Cathy<span className="text-vivid-orange">Club</span>.
          </span>
        </Link>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`relative font-medium text-sm transition-colors duration-300 hover:text-vivid-blue ${
                pathname === link.href ? 'text-vivid-blue font-bold' : 'text-gray-600'
              }`}
            >
              {link.name}
              {/* Underline Animation */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-vivid-blue transition-all duration-300 group-hover:w-full ${
                 pathname === link.href ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <Link 
          href="/login" 
          className="hidden md:block px-6 py-2.5 bg-vivid-black text-white text-sm font-bold rounded-full shadow-lg hover:bg-vivid-blue hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          Get Started
        </Link>
        
        {/* Mobile Menu Button (Hamburger) - สามารถเพิ่ม Logic เปิดปิดได้ */}
        <button className="md:hidden text-vivid-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
}