import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

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
  // ✅ เพิ่มบรรทัดนี้: เพื่อเปลี่ยนโลโก้ตรงแท็บ Browser
  icons: {
    icon: '/logo.png', // ดึงรูปจาก public/logo.png มาแสดง
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} ${sarabun.variable} font-body antialiased bg-gray-50`}>
        {/* ใช้ MainLayout จัดการ Navbar/Footer */}
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}