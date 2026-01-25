// src/app/blog/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
        <p>บทความสาระน่ารู้ (Coming Soon)</p>
      </div>
      <Footer />
    </main>
  );
}