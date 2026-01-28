'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from '@/context/CartContext';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // เช็คว่าถ้าลิงก์ขึ้นต้นด้วย /admin ให้ถือว่าเป็นหน้าหลังบ้าน
  const isAdmin = pathname.startsWith('/admin');

  return (
    // ✅ ย้าย CartProvider มาไว้ตรงนี้ เพื่อครอบคลุมทั้งหมด
    <CartProvider>
      
      {/* ถ้าไม่ใช่ Admin ให้โชว์ Navbar */}
      {!isAdmin && <Navbar />}
      
      {/* เนื้อหาหลักของหน้า */}
      {/* ถ้าเป็นหน้า Admin เราลบ padding-top ออกเพื่อให้ Sidebar ชิดขอบ */}
      <main className={!isAdmin ? "min-h-screen pt-24 pb-10" : "min-h-screen"}>
        {children}
      </main>
      
      {/* ถ้าไม่ใช่ Admin ให้โชว์ Footer */}
      {!isAdmin && <Footer />}

    </CartProvider>
  );
}