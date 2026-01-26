'use client'; // ⚠️ ต้องเปลี่ยนเป็น Client Component เพื่อเช็ค LocalStorage

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  // --- 🛡️ Guard Logic: ตรวจคนเข้าใช้งาน ---
  useEffect(() => {
    // เช็คว่ามีตราประทับ 'admin' ในเครื่องไหม?
    const role = localStorage.getItem("cathy_role");

    if (role !== "admin") {
      // ❌ ถ้าไม่มี: ดีดกลับไปหน้า Login
      router.push("/login");
    } else {
      // ✅ ถ้ามี: อนุญาตให้ดูเนื้อหาได้
      setIsAuthorized(true);
    }
  }, [router]);

  // ฟังก์ชัน Logout
  const handleLogout = () => {
    localStorage.removeItem("cathy_role"); // ลบตราประทับ
    router.push("/login"); // ดีดกลับหน้า login
  };

  // ถ้ายังเช็คไม่เสร็จ ห้ามโชว์เนื้อหา (ป้องกันภาพแวบ)
  if (!isAuthorized) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-orange"></div>
        </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-body">
      
      {/* --- Sidebar --- */}
      <aside className="w-64 bg-brand-black text-white flex-shrink-0 hidden md:flex flex-col justify-between fixed h-full">
        <div>
            <div className="p-6">
            <div className="text-2xl font-bold font-heading">
                Cathy<span className="text-brand-orange">Admin</span>
            </div>
            </div>
            <nav className="mt-2 px-4 space-y-2">
            <Link href="/admin" className="block px-4 py-3 rounded-xl hover:bg-gray-800 transition flex items-center gap-3">
                <span>📊</span> Dashboard
            </Link>
            <Link href="/admin/courses" className="block px-4 py-3 rounded-xl hover:bg-gray-800 transition flex items-center gap-3">
                <span>🎓</span> Courses
            </Link>
            <Link href="/admin/ebooks" className="block px-4 py-3 rounded-xl hover:bg-gray-800 transition flex items-center gap-3">
                <span>📚</span> E-Books
            </Link>
            <Link href="/admin/orders" className="block px-4 py-3 rounded-xl hover:bg-gray-800 transition flex items-center gap-3">
                <span>💰</span> Orders
            </Link>
            </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-800">
            <Link href="/" className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition mb-2 text-sm">
              🏠 Back to Website
            </Link>
            <button 
                onClick={handleLogout}
                className="w-full px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition text-sm font-bold"
            >
              Log Out
            </button>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 p-8 md:ml-64">
        {/* Mobile Header */}
        <div className="md:hidden mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
           <span className="font-bold text-brand-black">CathyAdmin</span>
           <button onClick={handleLogout} className="text-sm text-red-500 font-bold">Logout</button>
        </div>

        {children}
      </main>
    </div>
  );
}