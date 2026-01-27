'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api'; // ✅ เรียก API
import Image from 'next/image';

// Interface ต้องตรงกับ Backend Schema
interface OrderItem {
  title: string;
  type: string;
  price: number;
}

interface Order {
  id: number;
  customer_name: string;
  contact_info: string;
  items: OrderItem[];
  total_price: number;
  created_at: string;
  status: 'Pending' | 'Completed' | 'Cancelled';
  slip_image: string;
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // --- 🔄 1. ดึงข้อมูลออเดอร์ทั้งหมดจาก Backend ---
  const fetchOrders = async () => {
    try {
      const res = await api.get('/api/v1/orders/');
      // เรียงลำดับให้ "ล่าสุด" อยู่บนสุด
      const sortedOrders = res.data.sort((a: Order, b: Order) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setOrders(sortedOrders);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      // alert("โหลดข้อมูลออเดอร์ไม่สำเร็จ กรุณาเช็ค Backend");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // --- 💾 2. อัปเดตสถานะ (Approve / Reject) ---
  const updateStatus = async (id: number, newStatus: string) => {
    try {
      await api.put(`/api/v1/orders/${id}`, { status: newStatus });
      
      // อัปเดตหน้าจอทันทีไม่ต้องโหลดใหม่
      setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus as any } : o));
      
      if (selectedOrder?.id === id) setSelectedOrder(null); // ปิด Modal
      alert(`อัปเดตสถานะเป็น ${newStatus} เรียบร้อย!`);

    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาดในการอัปเดต");
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 min-h-[80vh]">
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-brand-black">Order Management</h1>
          <p className="text-gray-500 text-sm">ตรวจสอบสลิปและอนุมัติคอร์สเรียน</p>
        </div>
        {/* Stats Badge */}
        {!loading && (
            <div className="flex gap-2">
                <span className="px-4 py-2 bg-yellow-50 text-brand-orange rounded-full text-sm font-bold shadow-sm">
                    Pending: {orders.filter(o => o.status === 'Pending').length}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-bold">
                    Total: {orders.length}
                </span>
            </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-gray-500 border-b border-gray-100">
              <th className="py-4 pl-4">ID</th>
              <th className="py-4">Customer</th>
              <th className="py-4">Items</th>
              <th className="py-4">Total</th>
              <th className="py-4">Date</th>
              <th className="py-4">Status</th>
              <th className="py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
                <tr><td colSpan={7} className="text-center py-10">⏳ Loading orders...</td></tr>
            ) : orders.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-10 text-gray-400">ยังไม่มีรายการสั่งซื้อ</td></tr>
            ) : (
                orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition group">
                    <td className="py-4 pl-4 font-mono text-sm text-gray-400">#{order.id}</td>
                    <td className="py-4">
                        <div className="font-bold text-brand-black">{order.customer_name}</div>
                        <div className="text-xs text-gray-400">{order.contact_info}</div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">
                        {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                                <span className="text-[10px] bg-gray-100 px-1 rounded text-gray-500">{item.type}</span>
                                <span className="truncate max-w-[150px]">{item.title}</span>
                            </div>
                        ))}
                    </td>
                    <td className="py-4 font-bold text-brand-orange">฿{order.total_price.toLocaleString()}</td>
                    <td className="py-4 text-sm text-gray-400">{order.created_at}</td>
                    <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                            order.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' : 
                            order.status === 'Pending' ? 'bg-yellow-50 text-orange-500 border-yellow-100' : 
                            'bg-red-50 text-red-500 border-red-100'
                        }`}>
                            {order.status}
                        </span>
                    </td>
                    <td className="py-4 text-center">
                        <button 
                            onClick={() => setSelectedOrder(order)} 
                            className="text-sm bg-brand-black text-white px-4 py-2 rounded-full hover:bg-brand-orange transition shadow-md active:scale-95"
                        >
                            Verify Slip
                        </button>
                    </td>
                </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      {/* --- Slip Verify Modal --- */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl rounded-[2rem] p-8 shadow-2xl flex flex-col md:flex-row gap-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            {/* Left: Slip Image */}
            <div className="md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden relative min-h-[400px] border border-gray-200">
                {selectedOrder.slip_image ? (
                    <Image 
                        src={selectedOrder.slip_image} 
                        alt="Transfer Slip" 
                        fill 
                        className="object-contain" 
                        unoptimized
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">No Slip Uploaded</div>
                )}
            </div>

            {/* Right: Details & Actions */}
            <div className="md:w-1/2 flex flex-col">
                <div className="flex-grow">
                    <h3 className="text-3xl font-heading font-bold text-brand-black mb-6">Verify Payment</h3>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-500">Order ID</span>
                            <span className="font-mono font-bold text-brand-black">#{selectedOrder.id}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-500">Customer</span>
                            <span className="font-bold text-brand-black text-right">{selectedOrder.customer_name}<br/><span className="text-xs font-normal text-gray-400">{selectedOrder.contact_info}</span></span>
                        </div>
                        <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-500">Date</span>
                            <span className="font-bold text-brand-black">{selectedOrder.created_at}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-gray-500 font-bold">Total Amount</span>
                            <span className="font-bold text-3xl text-brand-orange">฿{selectedOrder.total_price.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Order Items</h4>
                        <ul className="space-y-2">
                            {selectedOrder.items.map((item, idx) => (
                                <li key={idx} className="text-sm flex justify-between">
                                    <span className="text-gray-700">• {item.title}</span>
                                    <span className="text-gray-400">฿{item.price.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-3 mt-auto">
                    {selectedOrder.status === 'Pending' && (
                        <>
                            <button onClick={() => updateStatus(selectedOrder.id, 'Completed')} className="w-full py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition shadow-lg flex justify-center gap-2 items-center">
                                <span>✅</span> Approve Order
                            </button>
                            <button onClick={() => updateStatus(selectedOrder.id, 'Cancelled')} className="w-full py-4 bg-red-50 text-red-500 rounded-xl font-bold hover:bg-red-100 transition flex justify-center gap-2 items-center">
                                <span>❌</span> Reject Order
                            </button>
                        </>
                    )}
                    {selectedOrder.status !== 'Pending' && (
                        <div className="text-center py-4 text-gray-400 bg-gray-50 rounded-xl mb-2">
                            Order is already <strong>{selectedOrder.status}</strong>
                        </div>
                    )}
                    <button onClick={() => setSelectedOrder(null)} className="w-full py-3 text-gray-400 hover:text-gray-600 text-sm font-bold">
                        Close Window
                    </button>
                </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}