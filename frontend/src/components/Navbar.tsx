'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`
        flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl w-full max-w-5xl border border-gray-200' 
          : 'bg-white/80 backdrop-blur-lg shadow-lg w-full max-w-6xl border border-white/50'}
      `}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:rotate-12 transition-transform">
            C
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-brand-black hidden sm:block">
            Cathy<span className="text-brand-orange">Club</span>.
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-brand-black text-white shadow-md' 
                    : 'text-gray-500 hover:text-brand-black hover:bg-white'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Button */}
        <Link 
          href="/login" 
          className="px-6 py-2.5 rounded-full bg-brand-orange text-white text-sm font-bold hover:bg-brand-red hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Log In
        </Link>

      </nav>
    </div>
  );
}