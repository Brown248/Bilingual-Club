'use client';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2rem] shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-center text-gray-500 mb-8">
                มีคำถามหรือข้อสงสัย? ติดต่อเราได้เลย
            </p>
            {/* Form หรือข้อมูลติดต่อ */}
            <div className="space-y-4">
                <p>📍 123 Silom Road, Bangkok</p>
                <p>📞 02-123-4567</p>
                <p>✉️ hello@bilingualclub.com</p>
            </div>
        </div>
    </div>
  );
}