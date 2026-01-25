import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // อนุญาตให้โหลด SVG จากภายนอก
    dangerouslyAllowSVG: true,
    // ตั้งค่าความปลอดภัยเพิ่มเติมสำหรับ SVG
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // โดเมนที่อนุญาต (เดิมมีอยู่แล้ว)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;