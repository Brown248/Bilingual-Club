// src/app/template.tsx
'use client';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    // ใช้ Class "animate-fade-scale" ที่เราเพิ่งเพิ่มไปใน tailwind.config.ts
    // เพื่อให้ทุกหน้าค่อยๆ ขยายและลอยขึ้นมาตอนโหลด
    <div className="animate-fade-scale">
      {children}
    </div>
  );
}