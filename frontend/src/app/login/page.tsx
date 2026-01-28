'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Cookies from 'js-cookie'; 

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

      // บันทึก Token
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("cathy_role", "admin");
      Cookies.set("access_token", access_token, { expires: 1 });

      // ดีดไปหน้า Admin
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
    // ✅ ใช้ relative และ min-h-screen เพื่อให้ครอบคลุมทั้งหน้า
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden p-6">
      
      {/* 🎭 Background Animations (ปรับ z-index เป็น 0 เพื่อไม่ให้บังฟอร์ม) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] animate-float-delayed"></div>
      </div>

      {/* 🔐 Card Container (ปรับ z-index เป็น 10 เพื่อให้ลอยอยู่เหนือพื้นหลัง) */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/50 animate-fade-in-up">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-tr from-brand-black to-gray-700 text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
              🔐
            </div>
            <h1 className="text-3xl font-heading font-bold text-brand-black mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Please login to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-3 uppercase tracking-wider">Username</label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-gray-100 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-100 transition-all outline-none text-brand-black font-medium"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-3 uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-gray-100 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-100 transition-all outline-none text-brand-black font-medium"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className={`
                w-full py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-black hover:bg-brand-orange'}
              `}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  Checking...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Back Link */}
          <div className="mt-8 text-center">
             <Link href="/" className="text-sm text-gray-400 hover:text-brand-black transition-colors font-bold">
               ← Back to Website
             </Link>
          </div>

      </div>
    </div>
  );
}