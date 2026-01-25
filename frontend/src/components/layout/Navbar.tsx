'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navs = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Translation', path: '/services' },
    { name: 'E-Books', path: '/ebook' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-primary">
            Ascend<span className="text-accent">.</span>
          </Link>
          
          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navs.map((nav) => (
              <Link 
                key={nav.path} 
                href={nav.path}
                className={`${pathname === nav.path ? 'text-secondary font-bold' : 'text-gray-600 hover:text-primary'} transition-colors`}
              >
                {nav.name}
              </Link>
            ))}
            <Link href="/login" className="text-primary font-semibold">Login</Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4">
          {navs.map((nav) => (
            <Link key={nav.path} href={nav.path} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-primary">
              {nav.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}