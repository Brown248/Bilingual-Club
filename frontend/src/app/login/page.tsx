'use client';

// ... imports อื่นๆ เหมือนเดิม
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
    // ... logic เดิม (ไม่ต้องแก้) ...
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
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("cathy_role", "admin");
      Cookies.set("access_token", access_token, { expires: 1 });
      setTimeout(() => router.push("/admin"), 500);
    } catch (error) {
      console.error(error);
      alert("Login Failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative overflow-hidden p-6">
      
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] animate-float-delayed"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/50 animate-fade-in-up">
          
          {/* ✅ ส่วนหัว LOGO: แก้ตรงนี้ครับ */}
          <div className="text-center mb-8">
            {/* ลบก้อน div แม่กุญแจ 🔐 เดิมออก แล้วใส่ img แทน */}
            <img 
              src="/logo.png" 
              alt="Cathy Bilingual Club Logo"
              className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-md hover:scale-110 transition-transform duration-500"
            />
            <h1 className="text-3xl font-heading font-bold text-brand-black mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Please login to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
             {/* ... (input username/password เหมือนเดิม) ... */}
             <div>
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-3 uppercase tracking-wider">Username</label>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-gray-100 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-100 transition-all outline-none text-brand-black font-medium" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-1 ml-3 uppercase tracking-wider">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-6 py-4 rounded-full bg-gray-50 border-2 border-gray-100 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-100 transition-all outline-none text-brand-black font-medium" />
            </div>
            <button type="submit" disabled={loading} className={`w-full py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-black hover:bg-brand-orange'}`}>
              {loading ? "Checking..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 text-center">
             <Link href="/" className="text-sm text-gray-400 hover:text-brand-black transition-colors font-bold">
               ← Back to Website
             </Link>
          </div>

      </div>
    </div>
  );
}