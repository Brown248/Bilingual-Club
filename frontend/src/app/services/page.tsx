import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Professional Translation Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            บริการแปลภาษาโดยผู้เชี่ยวชาญ รับรองความถูกต้อง แม่นยำ และรวดเร็ว 
            ครอบคลุมทั้งเอกสารธุรกิจ บทความวิชาการ และซับไตเติ้ล
          </p>
          <a href="#quote-form" className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-yellow-500 transition shadow-lg">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-textDark font-heading mb-4">Our Services</h2>
          <p className="text-textGray max-w-xl mx-auto">
            เราให้บริการแปลภาษาที่หลากหลาย เพื่อตอบโจทย์ทุกความต้องการของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition text-center group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-textDark mb-3">Business Documents</h3>
            <p className="text-textGray text-sm leading-relaxed">
              แปลเอกสารทางธุรกิจ สัญญา ใบเสนอราคา รายงานประจำปี ด้วยภาษาที่เป็นทางการและถูกต้องตามหลักไวยากรณ์
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition text-center group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-textDark mb-3">Subtitle & Media</h3>
            <p className="text-textGray text-sm leading-relaxed">
              แปลซับไตเติ้ลหนัง ซีรีส์ และวิดีโอ YouTube พร้อมฝังซับ (Hardsub) และจัดทำ Time code อย่างแม่นยำ
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition text-center group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-textDark mb-3">Academic & Research</h3>
            <p className="text-textGray text-sm leading-relaxed">
              แปลบทคัดย่อ บทความวิจัย และวิทยานิพนธ์ โดยผู้เชี่ยวชาญเฉพาะด้าน (Medical, Engineering, Law, etc.)
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-primary font-heading mb-6 text-center">Get a Free Quote</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="col-span-1">
                <label className="block text-sm font-medium text-textDark mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" placeholder="John Doe" />
              </div>
              
              <div className="col-span-1">
                <label className="block text-sm font-medium text-textDark mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" placeholder="john@example.com" />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-textDark mb-2">Service Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary bg-white">
                  <option>Document Translation</option>
                  <option>Subtitle Translation</option>
                  <option>Interpretation (Liaison)</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-textDark mb-2">Upload File (Optional)</label>
                <input type="file" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-textGray" />
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-textDark mb-2">Message / Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white" placeholder="Tell us more about your project..."></textarea>
              </div>

              <div className="col-span-full text-center mt-4">
                <button type="submit" className="px-10 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-900 transition shadow-md w-full md:w-auto">
                  Submit Request
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}