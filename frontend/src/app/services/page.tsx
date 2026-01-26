import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 animate-fade-up">
          Our <span className="text-brand-red">Services</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto animate-fade-up delay-100">
          บริการทางภาษาครบวงจรสำหรับธุรกิจและการศึกษา
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Box 1 */}
           <div className="md:col-span-2 bg-soft-orange rounded-[2.5rem] p-10 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500 animate-scale-in">
              <div>
                 <div className="w-16 h-16 bg-brand-orange text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-brand-orange/20">📝</div>
                 <h3 className="text-3xl font-bold mb-4 text-brand-black">Translation</h3>
                 <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                    บริการแปลเอกสารที่รวดเร็ว ถูกต้อง และแม่นยำ
                 </p>
              </div>
              <div className="mt-10">
                 <button className="px-6 py-3 bg-brand-black text-white rounded-full font-bold hover:bg-brand-orange transition-colors">Get Quote</button>
              </div>
           </div>

           {/* Box 2 */}
           <div className="bg-brand-black rounded-[2.5rem] p-10 text-white hover:scale-[1.02] transition-transform duration-500 animate-scale-in delay-100">
               <div className="text-4xl mb-4">🎬</div>
               <h3 className="text-2xl font-bold mb-3">Subtitle</h3>
               <p className="text-gray-400 text-sm">แปลซับไตเติ้ลสำหรับสื่อทุกประเภท</p>
           </div>

           {/* Box 3 */}
           <div className="bg-soft-green rounded-[2.5rem] p-10 hover:scale-[1.02] transition-transform duration-500 animate-scale-in delay-200">
               <div className="text-4xl mb-4">🗣️</div>
               <h3 className="text-2xl font-bold mb-3">Interpreter</h3>
               <p className="text-gray-600 text-sm">ล่ามแปลภาษาสำหรับงานประชุม</p>
           </div>

           {/* Box 4 */}
           <div className="md:col-span-2 bg-soft-red rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 hover:scale-[1.01] transition-transform duration-500 animate-scale-in delay-300">
               <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-brand-black">Corporate Training</h3>
                  <p className="text-gray-600">อบรมภาษาสำหรับองค์กร เพื่อยกระดับทีมงานของคุณ</p>
               </div>
               <button className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg hover:bg-red-600 transition-colors">
                  Contact Sales
               </button>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}