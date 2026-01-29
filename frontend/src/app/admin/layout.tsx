'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(true); // เพิ่ม State เปิด/ปิดเมนูได้ถ้าต้องการ

  // เมนู Admin
  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Courses', href: '/admin/courses', icon: '📚' },
    { name: 'E-Books', href: '/admin/ebooks', icon: '📖' },
    { name: 'Orders', href: '/admin/orders', icon: '🛍️' },
  ];

  const handleLogout = () => {
    if (confirm("Logout from Admin panel?")) {
      localStorage.removeItem('access_token');
      Cookies.remove('access_token');
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex font-body">
      
      {/* Sidebar */}
      <aside className={`bg-white w-64 shadow-xl fixed inset-y-0 left-0 z-50 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* ✅ Logo Header: แก้ตรงนี้ */}
        <div className="h-24 flex items-center justify-center border-b border-gray-100">
          <Link href="/admin" className="flex items-center gap-3">
            <img 
                src="/logo.png" 
                alt="Admin Logo" 
                className="w-10 h-10 object-contain"
            />
            <span className="font-heading font-bold text-xl text-brand-black">
              Admin <span className="text-brand-orange">Panel</span>
            </span>
          </Link>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                  isActive 
                    ? 'bg-brand-orange text-white shadow-md' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-brand-black'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-bold"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-8">
        {children}
      </main>

    </div>
  );
}