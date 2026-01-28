'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '@/context/CartContext';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // ✅ เช็คดักไว้เลย: ถ้าเป็น admin หรือหน้า login ไม่ต้องโชว์ Navbar ของหน้าบ้าน
  const isHiddenPage = pathname?.startsWith('/admin') || pathname === '/login';

  return (
    <CartProvider>
      {/* ถ้าไม่ใช่หน้า Admin/Login ให้โชว์ Navbar */}
      {!isHiddenPage && <Navbar />}
      
      {/* ส่วนเนื้อหา (ถ้ามี Navbar ให้เว้นระยะด้านบน pt-24 แต่ถ้าไม่มีไม่ต้องเว้น) */}
      <main className={!isHiddenPage ? "min-h-screen pt-24 pb-10" : "min-h-screen"}>
        {children}
      </main>
      
      {/* ถ้าไม่ใช่หน้า Admin/Login ให้โชว์ Footer */}
      {!isHiddenPage && <Footer />}
    </CartProvider>
  );
}