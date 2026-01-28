import './globals.css';
import { Kanit, Sarabun } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// ✅ 1. เพิ่มบรรทัดนี้เพื่อเรียกใช้ระบบตะกร้า
import { CartProvider } from '@/context/CartContext'; 

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

export const metadata = {
  title: 'Bilingual Club',
  description: 'Learn English with fun!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${kanit.variable} ${sarabun.variable}`}>
      <body className="bg-white text-brand-black font-body flex flex-col min-h-screen">
        
        {/* ✅ 2. เอา CartProvider มาครอบทุกอย่างไว้ใน Body */}
        <CartProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </CartProvider>
        
      </body>
    </html>
  );
}