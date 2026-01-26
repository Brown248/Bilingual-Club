'use client';

import { useState, useEffect } from 'react';

// กำหนดโครงสร้างข้อมูล (Types)
interface DashboardStats {
  totalRevenue: number;
  activeStudents: number;
  coursesSold: number;
  pendingOrders: number;
}

interface RecentOrder {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'Completed' | 'Pending';
}

export default function AdminDashboard() {
  // ✅ 1. ตั้งค่าเริ่มต้นเป็น 0 (รอข้อมูลจาก Backend)
  const [stats, setStats] = useState<DashboardStats>({
    totalRevenue: 0,
    activeStudents: 0,
    coursesSold: 0,
    pendingOrders: 0
  });

  // ✅ 2. ตั้งรายการล่าสุดเป็นค่าว่าง
  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);

  // --- 🔄 Fetch Data (Future Backend) ---
  useEffect(() => {
    // TODO: เรียก API ตรงนี้ในอนาคต
    // fetch('http://localhost:8000/admin/stats').then(...)
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-brand-black mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Card 1: Total Sales */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Total Revenue</div>
          <div className="text-3xl font-bold text-brand-black">฿{stats.totalRevenue.toLocaleString()}</div>
          <div className="text-gray-400 text-xs mt-2">Waiting for data...</div>
        </div>

        {/* Card 2: Students */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Active Students</div>
          <div className="text-3xl font-bold text-brand-black">{stats.activeStudents.toLocaleString()}</div>
          <div className="text-gray-400 text-xs mt-2">Total users</div>
        </div>

        {/* Card 3: Courses Sold */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Courses Sold</div>
          <div className="text-3xl font-bold text-brand-black">{stats.coursesSold.toLocaleString()}</div>
          <div className="text-gray-400 text-xs mt-2">Lifetime sales</div>
        </div>

        {/* Card 4: Pending Orders */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Pending Orders</div>
          <div className={`text-3xl font-bold ${stats.pendingOrders > 0 ? 'text-brand-red' : 'text-brand-black'}`}>
            {stats.pendingOrders}
          </div>
          <div className="text-xs text-gray-400 mt-2">Requires attention</div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-brand-black mb-6">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 text-sm">
                <th className="pb-4 font-medium">Order ID</th>
                <th className="pb-4 font-medium">Customer</th>
                <th className="pb-4 font-medium">Product</th>
                <th className="pb-4 font-medium">Amount</th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {recentOrders.length === 0 ? (
                /* กรณีไม่มีข้อมูล */
                <tr>
                  <td colSpan={5} className="text-center py-10 text-gray-400">
                    - ยังไม่มีรายการสั่งซื้อล่าสุด -
                  </td>
                </tr>
              ) : (
                /* กรณีมีข้อมูล (Render Loop) */
                recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50 transition">
                    <td className="py-4 text-gray-600">#{order.id}</td>
                    <td className="py-4 font-medium text-brand-black">{order.customer}</td>
                    <td className="py-4 text-gray-600">{order.product}</td>
                    <td className="py-4 font-bold">฿{order.amount.toLocaleString()}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Completed' ? 'bg-green-100 text-brand-green' : 'bg-yellow-100 text-brand-orange'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}