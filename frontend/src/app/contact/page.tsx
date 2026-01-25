// src/app/contact/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 font-body">
      <Navbar />

      {/* Header */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary font-heading mb-4">
            Contact Us
          </h1>
          <p className="text-textGray max-w-xl mx-auto">
            มีคำถามเกี่ยวกับคอร์สเรียน หรือต้องการคำปรึกษา? 
            ทีมงาน Cathy Bilingual Club พร้อมดูแลคุณ
          </p>
        </div>
      </section>

      {/* Contact Info Section (Center) */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-3xl mx-auto"> 
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-textDark font-heading mb-8">Get in Touch</h3>
            
            <div className="space-y-8">
              {/* Office Address */}
              <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold text-textDark">Our Office</h4>
                  <p className="text-textGray mt-1">
                    123 Education Tower, Floor 15<br />
                    Phaya Thai Road, Bangkok 10400
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold text-textDark">Email</h4>
                  <p className="text-textGray mt-1">hello@cathybilingual.com</p>
                  <p className="text-textGray">support@cathybilingual.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-bold text-textDark">Phone</h4>
                  <p className="text-textGray mt-1">02-123-4567 (Main)</p>
                  <p className="text-textGray">089-999-9999 (Hotline)</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}