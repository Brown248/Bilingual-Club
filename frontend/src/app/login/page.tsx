'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api"; // ✅ เรียกใช้ API ที่เราเพิ่งสร้าง

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState(""); // เปลี่ยนชื่อตัวแปรให้ตรงกับ Backend (username)
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🚀 ยิงไปถาม Backend (ต้องใช้ Form Data ตามมาตรฐาน OAuth2 ของ FastAPI)
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const response = await api.post('/api/v1/auth/login', formData, {
        headers: { 'Content-Type': 'multipart/form-data' } // ⚠️ สำคัญมากสำหรับ FastAPI Login
      });

      // ✅ ถ้าผ่าน: เก็บ Token ลงเครื่อง
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("cathy_role", "admin"); // เก็บ Role ไว้เช็ค Guard

      alert("Login Success! ยินดีต้อนรับครับ 🎉");
      router.push("/admin");

    } catch (error) {
      // ❌ ถ้าไม่ผ่าน
      console.error(error);
      alert("Login Failed: ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-soft-gray font-body flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-sm bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
          
          <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl"></div>

          <div className="text-center mb-8 relative z-10">
            <div className="w-16 h-16 bg-brand-black text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h1 className="text-2xl font-heading font-bold text-brand-black">Login</h1>
            <p className="text-gray-400 text-sm mt-1">Please sign in to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 relative z-10">
            <div>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-6 py-3.5 rounded-full bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all outline-none text-sm"
              />
            </div>

            <div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-6 py-3.5 rounded-full bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all outline-none text-sm"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-brand-black text-white font-bold text-sm hover:bg-brand-orange hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <span className="animate-pulse">Signing in...</span> : "Sign In"}
            </button>
          </form>

          <div className="mt-8 text-center">
             <Link href="/" className="text-xs text-gray-400 hover:text-brand-black transition flex items-center justify-center gap-1">
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
               Back to Website
             </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}