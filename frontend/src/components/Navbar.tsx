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
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl w-full max-w-5xl border border-gray-100/50' 
          : 'bg-white/70 backdrop-blur-lg shadow-lg w-full max-w-6xl border border-white/20'}
      `}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-green flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
            C
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-brand-black hidden sm:block">
            Cathy<span className="text-brand-blue">Club</span>.
          </span>
        </Link>

        {/* Links (Desktop) */}
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
                    ? 'bg-white text-brand-blue shadow-sm scale-105' 
                    : 'text-gray-500 hover:text-brand-black hover:bg-gray-200/50'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link 
          href="/login" 
          className="px-6 py-2.5 rounded-full bg-brand-black text-white text-sm font-bold hover:bg-brand-blue hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          Login
        </Link>

      </nav>
    </div>
  );
}