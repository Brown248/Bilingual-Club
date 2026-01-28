import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // ✅ เรียก Navbar ที่นี่ที่เดียว
import Footer from "@/components/Footer"; // ✅ เรียก Footer ที่นี่ที่เดียว
import { CartProvider } from "@/context/CartContext"; // ✅ เรียก Provider

const kanit = Kanit({
  weight: ['400', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-heading',
  display: 'swap',
});

const sarabun = Sarabun({
  weight: ['400', '500', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cathy Bilingual Club",
  description: "Learn English & Chinese with Cathy experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} ${sarabun.variable} font-body antialiased bg-gray-50`}>
        
        {/* ✅ หัวใจสำคัญ: ครอบทุกอย่างด้วย CartProvider */}
        <CartProvider>
          
          {/* ✅ ใส่ Navbar ตรงนี้ (มันจะอยู่ใต้ CartProvider เสมอ ไม่พังแน่นอน) */}
          <Navbar />
          
          <main className="min-h-screen pt-24 pb-10">
            {children}
          </main>
          
          {/* ✅ ใส่ Footer ตรงนี้ */}
          <Footer />

        </CartProvider>
      </body>
    </html>
  );
}