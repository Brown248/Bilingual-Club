'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Ebook {
  id: number;
  title: string;
  price: number;
  author: string;
  image: string;
}

export default function AdminEbooksPage() {
  // ✅ 1. เปลี่ยนเป็น Array ว่าง
  const [ebooks, setEbooks] = useState<Ebook[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ title: '', price: 0, author: '', image: '' });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData(prev => ({ ...prev, image: reader.result as string }));
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("ลบ E-book เล่มนี้?")) setEbooks(ebooks.filter(e => e.id !== id));
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ title: '', price: 0, author: '', image: '' });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (ebook: Ebook) => {
    setEditingId(ebook.id);
    setFormData({ ...ebook });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setEbooks(ebooks.map(e => e.id === editingId ? { ...e, ...formData, id: editingId } : e));
    } else {
      const newId = ebooks.length > 0 ? Math.max(...ebooks.map(e => e.id)) + 1 : 1;
      const finalImage = formData.image || 'https://placehold.co/400x550/gray/white?text=No+Cover';
      setEbooks([...ebooks, { ...formData, image: finalImage, id: newId }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 min-h-[80vh]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-brand-black">Manage E-Books</h1>
          <p className="text-gray-500 text-sm">จัดการหนังสือและไฟล์ PDF</p>
        </div>
        <button onClick={handleOpenAdd} className="bg-brand-orange text-white px-6 py-3 rounded-full font-bold hover:bg-brand-red transition shadow-lg flex items-center gap-2">
          <span>+</span> Add New E-Book
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ebooks.length === 0 ? (
            <div className="col-span-4 text-center py-20 text-gray-400">ยังไม่มีหนังสือ (รอเชื่อมต่อ Backend)</div>
        ) : (
            ebooks.map((ebook) => (
            <div key={ebook.id} className="group relative bg-gray-50 rounded-3xl p-4 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4 shadow-sm bg-white">
                    <Image src={ebook.image} alt={ebook.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button onClick={() => handleOpenEdit(ebook)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 text-blue-600">✏️</button>
                        <button onClick={() => handleDelete(ebook.id)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-50 text-red-600">🗑️</button>
                    </div>
                </div>
                <h3 className="font-bold text-brand-black line-clamp-1">{ebook.title}</h3>
                <p className="text-xs text-gray-500 mb-2">by {ebook.author}</p>
                <div className="text-lg font-bold text-brand-orange">฿{ebook.price.toLocaleString()}</div>
            </div>
            ))
        )}
      </div>

      {/* Modal (ส่วนนี้คงเดิม) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-[2rem] p-8 shadow-2xl animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">{editingId ? 'Edit E-Book' : 'New E-Book'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-sm font-bold text-gray-700 mb-1">Title</label><input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Price</label><input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none" /></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Author</label><input required type="text" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-orange outline-none" /></div>
              </div>
              <div><label className="block text-sm font-bold text-gray-700 mb-1">Cover Image</label><input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"/></div>
              <div className="flex gap-3 mt-6"><button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 font-bold text-gray-600">Cancel</button><button type="submit" className="flex-1 py-3 rounded-xl bg-brand-orange text-white hover:bg-brand-red font-bold shadow-md">Save</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}