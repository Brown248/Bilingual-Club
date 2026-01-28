'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // เมนู Admin
  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Courses', href: '/admin/courses', icon: '📚' },
    { name: 'E-Books', href: '/admin/ebooks', icon: '📖' },
    { name: 'Orders', href: '/admin/orders', icon: '🛍️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-body">
      
      {/* Sidebar (แถบเมนูซ้าย) */}
      <aside className="w-64 bg-white border-r border-gray-100 fixed h-full z-10 hidden md:flex flex-col shadow-sm">
        <div className="p-8">
          <h1 className="text-2xl font-heading font-bold text-brand-orange mb-1">Admin Panel</h1>
          <p className="text-xs text-gray-400">Manage your content</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold ${
                pathname === item.href
                  ? 'bg-brand-orange text-white shadow-md translate-x-1'
                  : 'text-gray-500 hover:bg-orange-50 hover:text-brand-orange'
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ปุ่ม Logout ใน Sidebar */}
        <div className="p-4 border-t border-gray-100">
            <button
                onClick={() => {
                    if(confirm('ยืนยันการออกจากระบบ?')) {
                        localStorage.removeItem('access_token');
                        Cookies.remove('access_token');
                        router.push('/login');
                    }
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all font-bold text-red-500 bg-red-50 hover:bg-red-100 hover:shadow-sm"
            >
                <span>🚪</span> Log Out
            </button>
        </div>
      </aside>

      {/* Main Content (เนื้อหาขวา) */}
      <main className="flex-1 md:ml-64 p-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
}