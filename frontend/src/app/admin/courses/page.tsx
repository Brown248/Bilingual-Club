'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  price: number;
  instructor: string;
  image: string;
  category: string;
}

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, title: "IELTS Intensive", price: 4500, instructor: "Kru Cathy", category: "English", image: "https://placehold.co/600x400/orange/white" },
    { id: 2, title: "Basic Chinese", price: 3900, instructor: "Lao Shi Ming", category: "Chinese", image: "https://placehold.co/600x400/red/white" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({ title: '', price: 0, instructor: '', category: 'English', image: '' });

  // --- 📸 ฟังก์ชันแปลงไฟล์รูปเป็น Base64 ---
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // เมื่อแปลงเสร็จ ให้เก็บ String ยาวๆ ลงในตัวแปร image
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file); // เริ่มแปลงไฟล์
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("ยืนยันการลบคอร์สนี้?")) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ title: '', price: 0, instructor: '', category: 'English', image: '' });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (course: Course) => {
    setEditingId(course.id);
    setFormData({ ...course });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setCourses(courses.map(c => c.id === editingId ? { ...c, ...formData, id: editingId } : c));
    } else {
      const newId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
      // ถ้าไม่ได้อัปโหลดรูป ให้ใส่รูป Default
      const finalImage = formData.image || 'https://placehold.co/600x400/gray/white?text=No+Image';
      setCourses([...courses, { ...formData, image: finalImage, id: newId }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 min-h-[80vh]">
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-brand-black">Manage Courses</h1>
          <p className="text-gray-500 text-sm">จัดการข้อมูลคอร์สเรียนทั้งหมด</p>
        </div>
        <button onClick={handleOpenAdd} className="bg-brand-black text-white px-6 py-3 rounded-full font-bold hover:bg-brand-orange transition shadow-lg flex items-center gap-2">
          <span>+</span> Add New Course
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-gray-500 border-b border-gray-100">
              <th className="py-4 pl-4">ID</th>
              <th className="py-4">Course Name</th>
              <th className="py-4">Price</th>
              <th className="py-4">Instructor</th>
              <th className="py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b border-gray-50 hover:bg-gray-50 group transition">
                <td className="py-4 pl-4 font-mono text-xs text-gray-400">#{course.id}</td>
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-gray-200 border border-gray-100">
                        {/* รูปตัวอย่าง */}
                        <Image src={course.image} alt={course.title} fill className="object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-brand-black">{course.title}</div>
                        <div className="text-xs text-brand-orange bg-orange-50 px-2 py-0.5 rounded-full inline-block">{course.category}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 font-bold text-brand-black">฿{course.price.toLocaleString()}</td>
                <td className="py-4 text-gray-600 text-sm">{course.instructor}</td>
                <td className="py-4 text-center">
                  <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button onClick={() => handleOpenEdit(course)} className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100">✏️</button>
                    <button onClick={() => handleDelete(course.id)} className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-[2rem] p-8 shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">{editingId ? 'Edit Course' : 'Add New Course'}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Course Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Price (THB)</label>
                    <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                    <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none">
                        <option value="English">English</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Instructor</label>
                <input required type="text" value={formData.instructor} onChange={e => setFormData({...formData, instructor: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none" />
              </div>

              {/* --- 📸 ส่วนอัปโหลดรูป --- */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Course Image</label>
                <div className="flex items-center gap-4">
                    {/* ปุ่มเลือกไฟล์ */}
                    <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-bold transition">
                        Choose File
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                    <span className="text-xs text-gray-400">
                        {formData.image ? 'Image Selected ✅' : 'No file chosen'}
                    </span>
                </div>
                
                {/* Preview รูปภาพ */}
                {formData.image && (
                    <div className="mt-3 relative w-full h-40 rounded-xl overflow-hidden border border-gray-200">
                        <Image src={formData.image} alt="Preview" fill className="object-cover" />
                    </div>
                )}
              </div>

              <div className="flex gap-3 mt-8 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200">Cancel</button>
                <button type="submit" className="flex-1 py-3 rounded-xl bg-brand-black text-white font-bold hover:bg-brand-orange shadow-lg transition">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}