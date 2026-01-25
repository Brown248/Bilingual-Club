// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-primary">
          Cathy <span className="text-accent">Bilingual Club</span>
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8 text-textDark font-medium">
          <Link href="/courses" className="hover:text-primary transition">Courses</Link>
          <Link href="/ebook" className="hover:text-primary transition">E-Books</Link>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <Link href="/blog" className="hover:text-primary transition">Blog</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </div>

        {/* Auth Button */}
        <div>
          <Link 
            href="/login" 
            className="px-5 py-2 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}