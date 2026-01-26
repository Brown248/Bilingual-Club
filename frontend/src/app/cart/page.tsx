'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, cartCount } = useCart();

  // คำนวณราคารวม
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-soft-gray font-body">
      <Navbar />

      <section className="pt-40 pb-24 px-6 container mx-auto max-w-5xl">
        <h1 className="text-4xl font-heading font-extrabold mb-8 text-brand-black flex items-center gap-3">
          🛒 Your Cart <span className="text-xl text-gray-400 font-normal">({cartCount} items)</span>
        </h1>

        {cart.length === 0 ? (
          /* --- กรณีตะกร้าว่าง (Empty State) --- */
          <div className="text-center py-20 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="text-6xl mb-6">🛍️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">ยังไม่มีสินค้าในตะกร้า ไปช้อปกันเลย!</p>
            <Link href="/courses" className="px-8 py-3 rounded-full bg-brand-orange text-white font-bold hover:bg-brand-red transition shadow-lg">
              Browse Courses
            </Link>
          </div>
        ) : (
          /* --- กรณีมีของ (Cart List) --- */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* รายการสินค้า (ซ้าย) */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-4 p-4 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all items-center">
                  {/* รูปสินค้า */}
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  
                  {/* รายละเอียด */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                        <div>
                            <span className="text-xs font-bold text-brand-orange uppercase">{item.type}</span>
                            <h3 className="font-bold text-brand-black line-clamp-1">{item.title}</h3>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-brand-red transition p-1"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </div>
                    <div className="text-lg font-bold text-brand-black">฿{item.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* สรุปยอดเงิน (ขวา) */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 sticky top-28">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                
                <div className="space-y-3 text-gray-600 mb-6 border-b border-gray-100 pb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>฿{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span className="text-brand-green">-฿0</span>
                  </div>
                </div>

                <div className="flex justify-between text-2xl font-bold text-brand-black mb-8">
                  <span>Total</span>
                  <span>฿{totalPrice.toLocaleString()}</span>
                </div>

                <button 
                    onClick={() => alert('ไปหน้าชำระเงิน (Next Step)')}
                    className="w-full py-4 rounded-full bg-brand-black text-white font-bold hover:bg-brand-orange hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2"
                >
                    Proceed to Checkout
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                    Secure Payment by Stripe / PromptPay
                </p>
              </div>
            </div>

          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}