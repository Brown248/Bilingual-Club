'use client';

import { useState } from 'react';

// สร้าง Types จำลอง
interface Order {
  id: string;
  customer: string;
  items: string[];
  total: number;
  date: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
  slip?: string; // URL รูปสลิป
}

export default function AdminOrdersPage() {
  // 1. Mock Data: จำลองรายการสั่งซื้อ
  const [orders, setOrders] = useState<Order[]>([
    { id: 'ORD-001', customer: 'สมชาย ใจดี', items: ['IELTS Intensive'], total: 4500, date: '2026-01-25', status: 'Pending', slip: 'https://placehold.co/300x500/gray/white?text=Slip+Image' },
    { id: 'ORD-002', customer: 'Alice Smith', items: ['Grammar Guide (E-book)'], total: 350, date: '2026-01-26', status: 'Completed', slip: '' },
    { id: 'ORD-003', customer: 'น้องบี ขยันเรียน', items: ['Basic Chinese', '5000 Vocab'], total: 4190, date: '2026-01-26', status: 'Pending', slip: 'https://placehold.co/300x500/gray/white?text=Slip+Image' },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); // สำหรับเปิดดูสลิป

  // ฟังก์ชันเปลี่ยนสถานะ
  const updateStatus = (id: string, newStatus: Order['status']) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    if (selectedOrder?.id === id) setSelectedOrder(null); // ปิด Modal ถ้าอนุมัติแล้ว
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 min-h-[80vh]">
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-brand-black">Order Management</h1>
          <p className="text-gray-500 text-sm">ตรวจสอบการชำระเงินและอนุมัติคำสั่งซื้อ</p>
        </div>
        <div className="flex gap-2">
            <span className="px-4 py-2 bg-yellow-50 text-brand-orange rounded-full text-sm font-bold">Pending: {orders.filter(o => o.status === 'Pending').length}</span>
            <span className="px-4 py-2 bg-green-50 text-brand-green rounded-full text-sm font-bold">Total: {orders.length}</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-gray-500 border-b border-gray-100">
              <th className="py-4 pl-4">Order ID</th>
              <th className="py-4">Customer</th>
              <th className="py-4">Items</th>
              <th className="py-4">Total</th>
              <th className="py-4">Date</th>
              <th className="py-4">Status</th>
              <th className="py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="py-4 pl-4 font-mono text-sm text-gray-500">{order.id}</td>
                <td className="py-4 font-bold text-brand-black">{order.customer}</td>
                <td className="py-4 text-sm text-gray-600">
                    {order.items.map(i => <div key={i}>• {i}</div>)}
                </td>
                <td className="py-4 font-bold text-brand-orange">฿{order.total.toLocaleString()}</td>
                <td className="py-4 text-sm text-gray-400">{order.date}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold 
                    ${order.status === 'Completed' ? 'bg-green-100 text-brand-green' : 
                      order.status === 'Pending' ? 'bg-yellow-100 text-brand-orange' : 'bg-red-100 text-brand-red'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-center">
                  {order.status === 'Pending' ? (
                    <button 
                        onClick={() => setSelectedOrder(order)}
                        className="text-sm bg-brand-black text-white px-4 py-2 rounded-full hover:bg-brand-orange transition shadow-md"
                    >
                        Verify Slip
                    </button>
                  ) : (
                    <span className="text-gray-300 text-sm">No action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Slip Verification Modal --- */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl rounded-[2rem] p-8 shadow-2xl flex flex-col md:flex-row gap-8 animate-scale-in">
            
            {/* Left: Slip Image */}
            <div className="md:w-1/2 bg-gray-100 rounded-xl overflow-hidden relative min-h-[300px] flex items-center justify-center">
                {selectedOrder.slip ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={selectedOrder.slip} alt="Slip" className="w-full h-full object-contain" />
                ) : (
                    <span className="text-gray-400">No Slip Uploaded</span>
                )}
            </div>

            {/* Right: Info & Actions */}
            <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-brand-black mb-1">Verify Payment</h3>
                    <p className="text-gray-500 text-sm mb-6">Order ID: {selectedOrder.id}</p>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500">Customer</span>
                            <span className="font-bold">{selectedOrder.customer}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500">Total Amount</span>
                            <span className="font-bold text-xl text-brand-orange">฿{selectedOrder.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500">Date</span>
                            <span>{selectedOrder.date}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <button 
                        onClick={() => updateStatus(selectedOrder.id, 'Completed')}
                        className="w-full py-3 bg-brand-green text-white rounded-xl font-bold hover:bg-green-600 transition shadow-lg"
                    >
                        ✅ Approve & Enroll
                    </button>
                    <button 
                        onClick={() => updateStatus(selectedOrder.id, 'Cancelled')}
                        className="w-full py-3 bg-red-50 text-red-500 rounded-xl font-bold hover:bg-red-100 transition"
                    >
                        ❌ Reject
                    </button>
                    <button 
                        onClick={() => setSelectedOrder(null)}
                        className="w-full py-2 text-gray-400 hover:text-gray-600 text-sm"
                    >
                        Close
                    </button>
                </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}