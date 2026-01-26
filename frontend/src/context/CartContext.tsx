// src/context/CartContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// กำหนดหน้าตาของของในตะกร้า
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  type: 'course' | 'ebook';
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // (Optional) โหลดข้อมูลจาก LocalStorage ตอนเปิดเว็บ
  useEffect(() => {
    const savedCart = localStorage.getItem('cathy_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // (Optional) บันทึกลง LocalStorage ทุกครั้งที่ตะกร้าเปลี่ยน
  useEffect(() => {
    localStorage.setItem('cathy_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    // เช็คว่ามีของชิ้นนี้อยู่แล้วหรือยัง
    const exists = cart.find((i) => i.id === item.id && i.type === item.type);
    if (!exists) {
      setCart([...cart, item]);
      alert(`เพิ่ม "${item.title}" ลงตะกร้าแล้ว! 🛒`);
    } else {
      alert('สินค้านี้อยู่ในตะกร้าแล้วครับ 😊');
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}