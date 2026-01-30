import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

// ตั้งค่าฟอนต์
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
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ จุดสำคัญ: ต้องมี <html lang="en"> และ <body> ครอบทั้งหมดเสมอ
    <html lang="en">
      <body className={`${kanit.variable} ${sarabun.variable} font-body antialiased bg-[#F4F7F6] text-[#2D3436]`}>
        {/* เรียกใช้ MainLayout เพื่อจัดการ Navbar/Footer ข้างใน body */}
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}