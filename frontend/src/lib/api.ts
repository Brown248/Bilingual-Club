import axios from 'axios';

// 1. ตั้งค่า Base URL ให้ชี้ไปที่ Backend (FastAPI)
const api = axios.create({
  baseURL: 'http://localhost:8000', // Port ของ FastAPI
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. ตัวดักจับ (Interceptor): แนบบัตรผ่าน (Token) ไปทุกครั้งถ้ามี
api.interceptors.request.use((config) => {
  // ดึง Token ที่เราเก็บไว้ตอน Login
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;