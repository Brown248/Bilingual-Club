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
    // 👇 ใส่ className="scroll-smooth" ตรงนี้ครับ
    <html lang="en" className="scroll-smooth"> 
      <body className={`${kanit.variable} ${sarabun.variable} font-body antialiased bg-brand-gray text-brand-black`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}