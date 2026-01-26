'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext'; // Import ตะกร้า

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart(); // ดึงจำนวนสินค้ามาโชว์

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

        {/* Right Side: Cart + Login */}
        <div className="flex items-center gap-3">
            {/* Cart Button */}
            <Link href="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                {cartCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-brand-red text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                        {cartCount}
                    </span>
                )}
            </Link>

            {/* Login Button */}
            <Link 
            href="/login" 
            className="px-6 py-2.5 rounded-full bg-brand-orange text-white text-sm font-bold hover:bg-brand-red hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hidden sm:block"
            >
            Log In
            </Link>
        </div>

      </nav>
    </div>
  );
}