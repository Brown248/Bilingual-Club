import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 animate-fade-up">
          Our <span className="text-brand-blue">Services</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto animate-fade-up delay-100">
          มากกว่าแค่คอร์สเรียน เรามีบริการทางภาษาครบวงจรสำหรับธุรกิจและการศึกษา
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Box 1: Large Left */}
           <div className="md:col-span-2 bg-soft-blue rounded-[2.5rem] p-10 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500 animate-scale-in">
              <div>
                 <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-brand-blue/20">📝</div>
                 <h3 className="text-3xl font-bold mb-4 text-brand-black">Professional Translation</h3>
                 <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                    บริการแปลเอกสารทางธุรกิจ กฎหมาย และการแพทย์ โดยทีมงานผู้เชี่ยวชาญ รับรองความถูกต้องแม่นยำ 100%
                 </p>
              </div>
              <div className="mt-10">
                 <button className="px-6 py-3 bg-brand-black text-white rounded-full font-bold hover:bg-brand-blue transition-colors">Get a Quote</button>
              </div>
           </div>

           {/* Box 2: Right Top */}
           <div className="bg-brand-black rounded-[2.5rem] p-10 text-white hover:scale-[1.02] transition-transform duration-500 animate-scale-in delay-100">
               <div className="text-4xl mb-4">🎬</div>
               <h3 className="text-2xl font-bold mb-3">Subtitle & Dubbing</h3>
               <p className="text-gray-400 text-sm">แปลซับไตเติ้ลและพากย์เสียงสำหรับสื่อโฆษณา หนัง และ YouTube</p>
           </div>

           {/* Box 3: Bottom Left */}
           <div className="bg-soft-yellow rounded-[2.5rem] p-10 hover:scale-[1.02] transition-transform duration-500 animate-scale-in delay-200">
               <div className="text-4xl mb-4">🗣️</div>
               <h3 className="text-2xl font-bold mb-3">Interpreter</h3>
               <p className="text-gray-600 text-sm">ล่ามแปลภาษา สด/ออนไลน์ สำหรับงานประชุมและเจรจาธุรกิจ</p>
           </div>

           {/* Box 4: Bottom Right (Large) */}
           <div className="md:col-span-2 bg-soft-red rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 hover:scale-[1.01] transition-transform duration-500 animate-scale-in delay-300">
               <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-brand-black">Corporate Training</h3>
                  <p className="text-gray-600">
                     ออกแบบหลักสูตรอบรมภาษาสำหรับองค์กร เพื่อพัฒนาศักยภาพบุคลากรให้พร้อมสู่ระดับสากล
                  </p>
               </div>
               <button className="px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-600 transition-colors whitespace-nowrap">
                  Contact Sales
               </button>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}