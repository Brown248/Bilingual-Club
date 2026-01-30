'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import Cookies from 'js-cookie'; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount } = useCart();

  useEffect(() => {
    // เช็ค Token เพื่อแสดงสถานะ Login/Logout บนปุ่ม
    const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleLogout = () => {
    if (confirm("คุณต้องการออกจากระบบใช่หรือไม่?")) {
      // ✅ ลบให้เกลี้ยงทั้ง Cookies และ LocalStorage
      localStorage.removeItem('access_token'); 
      Cookies.remove('access_token');
      
      setIsLoggedIn(false);
      
      // ✅ ใช้ replace เพื่อไม่ให้ Back กลับมาได้ง่ายๆ และ refresh หน้าเพื่อเคลียร์ State
      router.replace('/'); 
      
      // ใช้ setTimeout เล็กน้อยเพื่อให้ router ทำงานก่อนแล้วค่อย reload (ถ้าจำเป็น)
      setTimeout(() => {
        window.location.reload(); 
      }, 100);
    }
  };

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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className={`
        pointer-events-auto
        flex items-center justify-between px-6 py-3 rounded-full transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-soft w-full max-w-5xl border border-white/40' 
          : 'bg-white/60 backdrop-blur-md shadow-sm w-full max-w-6xl border border-white/20'}
      `}>
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Cathy Bilingual Club Logo" 
            className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform duration-500 ease-out drop-shadow-sm"
          />
          <span className="font-heading font-bold text-xl tracking-tight text-brand-black hidden sm:block">
            Cathy<span className="text-brand-orange">Club</span>.
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1 bg-brand-gray/50 p-1.5 rounded-full border border-white/30 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out
                  ${isActive 
                    ? 'bg-white text-brand-orange shadow-sm scale-105' 
                    : 'text-gray-500 hover:text-brand-black hover:bg-white/50'}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
            <Link href="/cart" className="relative p-2 rounded-full hover:bg-white/80 transition-all duration-300 group">
                <svg className="w-6 h-6 text-brand-black group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                {cartCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-brand-orange text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-slight shadow-sm">
                        {cartCount}
                    </span>
                )}
            </Link>

            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="px-6 py-2.5 rounded-full bg-red-50 text-red-500 border border-red-100 text-sm font-bold hover:bg-red-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hidden sm:block"
              >
                Log Out
              </button>
            ) : (
              <Link 
                href="/login" 
                className="px-6 py-2.5 rounded-full bg-brand-black text-white text-sm font-bold hover:bg-brand-orange hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 hidden sm:block"
              >
                Log In
              </Link>
            )}
        </div>

      </nav>
    </div>
  );
}