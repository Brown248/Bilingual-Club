'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Cookies from 'js-cookie'; // ✅ 1. เพิ่ม Import นี้

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const response = await api.post('/api/v1/auth/login', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      const { access_token } = response.data;

      // ✅ 2. บันทึกลง localStorage (เหมือนเดิม)
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("cathy_role", "admin");

      // ✅ 3. บันทึกลง Cookie (เพิ่มใหม่ เพื่อให้ Middleware เห็น)
      Cookies.set("access_token", access_token, { expires: 1 }); // หมดอายุใน 1 วัน

      setTimeout(() => {
        router.push("/admin");
      }, 500);

    } catch (error) {
      console.error(error);
      alert("Login Failed: ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-body flex flex-col relative overflow-hidden">
      <Navbar />

      {/* --- 🎭 Background Animations --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] animate-float-delayed"></div>
      </div>

      {/* ✅ ปรับตรงนี้: เพิ่ม min-h-screen และลบ pt-24 ออก เพื่อให้ Flex จัดกลางหน้าจอจริงๆ */}
      <section className="flex-grow flex items-center justify-center px-6 z-10 min-h-screen py-20">
        
        {/* Card Container */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 animate-fade-in-up relative">
          
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-tr from-brand-black to-gray-700 text-white rounded-3xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              🔐
            </div>
            <h1 className="text-3xl font-heading font-bold text-brand-black mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Please enter your credentials to access.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="group">
              <label className="block text-xs font-bold text-gray-400 mb-1 ml-4 uppercase tracking-wider group-focus-within:text-brand-orange transition-colors">Username</label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-8 py-4 rounded-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-orange/30 focus:ring-4 focus:ring-brand-orange/10 focus:scale-[1.02] transition-all duration-300 outline-none text-brand-black font-medium shadow-inner"
              />
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-400 mb-1 ml-4 uppercase tracking-wider group-focus-within:text-brand-orange transition-colors">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-8 py-4 rounded-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-orange/30 focus:ring-4 focus:ring-brand-orange/10 focus:scale-[1.02] transition-all duration-300 outline-none text-brand-black font-medium shadow-inner"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`
                w-full py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-black hover:bg-gradient-to-r hover:from-brand-black hover:to-brand-orange animate-gradient'}
              `}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
             <Link href="/" className="text-sm text-gray-400 hover:text-brand-black transition-colors flex items-center justify-center gap-2 group">
               <span className="group-hover:-translate-x-1 transition-transform">←</span>
               Back to Website
             </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}