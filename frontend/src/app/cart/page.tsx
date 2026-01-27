'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  // คำนวณยอดรวม
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // State สำหรับฟอร์ม
  const [formData, setFormData] = useState({ name: '', contact: '', slip: '' });
  const [loading, setLoading] = useState(false);

  // แปลงรูปสลิปเป็น Base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData(prev => ({ ...prev, slip: reader.result as string }));
      reader.readAsDataURL(file);
    }
  };

  // ส่งคำสั่งซื้อ
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return alert("ตะกร้าว่างเปล่า!");
    if (!formData.slip) return alert("กรุณาแนบสลิปโอนเงินครับ");

    setLoading(true);
    try {
      const payload = {
        customer_name: formData.name,
        contact_info: formData.contact,
        total_price: totalPrice,
        items: cart,
        slip_image: formData.slip
      };

      await api.post('/api/v1/orders/', payload);
      
      alert("✅ สั่งซื้อสำเร็จ! แอดมินจะตรวจสอบและยืนยันเร็วๆ นี้ครับ");
      clearCart();
      router.push('/'); // กลับหน้าแรก

    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาดในการสั่งซื้อ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-soft-gray font-body flex flex-col">
      <Navbar />
      
      <section className="container mx-auto px-6 py-24 flex-grow">
        <h1 className="text-4xl font-heading font-bold text-brand-black mb-8 text-center">Your Cart 🛒</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2rem] shadow-sm border border-gray-100">
            <p className="text-gray-400 text-lg mb-6">Your cart is currently empty.</p>
            <Link href="/courses" className="px-8 py-3 bg-brand-orange text-white rounded-full font-bold hover:bg-brand-red transition">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 items-center">
                  <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" unoptimized />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-brand-black">{item.title}</h3>
                    <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                    <div className="text-brand-orange font-bold mt-1">฿{item.price.toLocaleString()}</div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-400 hover:text-red-500 transition">
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Right: Checkout Form */}
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 h-fit sticky top-24">
              <h2 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
              
              <div className="flex justify-between mb-2 text-gray-600"><span>Subtotal</span><span>฿{totalPrice.toLocaleString()}</span></div>
              <div className="flex justify-between mb-6 text-xl font-bold text-brand-black"><span>Total</span><span>฿{totalPrice.toLocaleString()}</span></div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 ml-2">NAME</label>
                    <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-orange outline-none text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 ml-2">CONTACT (Email/Line)</label>
                    <input required type="text" placeholder="Contact Info" value={formData.contact} onChange={e => setFormData({...formData, contact: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-brand-orange outline-none text-sm" />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
                    <p className="text-xs text-gray-500 mb-2">Scan QR to Pay (Mockup)</p>
                    <div className="w-24 h-24 bg-gray-200 mx-auto rounded-lg mb-2"></div>
                    <label className="block text-xs font-bold text-brand-orange cursor-pointer hover:underline">
                        Upload Slip
                        <input type="file" accept="image/*" required onChange={handleImageUpload} className="hidden" />
                    </label>
                    {formData.slip && <p className="text-[10px] text-green-600 mt-1">Slip Attached ✅</p>}
                </div>

                <button type="submit" disabled={loading} className="w-full py-4 bg-brand-black text-white rounded-xl font-bold hover:bg-brand-orange transition shadow-lg disabled:opacity-50">
                  {loading ? 'Processing...' : `Pay ฿${totalPrice.toLocaleString()}`}
                </button>
              </form>
            </div>

          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}