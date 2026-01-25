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
            ทีมงานของเราพร้อมดูแลคุณตลอด 24 ชั่วโมง
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-textDark font-heading mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-textDark">Our Office</h4>
                    <p className="text-textGray text-sm mt-1">
                      123 Education Tower, Floor 15<br />
                      Phaya Thai Road, Bangkok 10400
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-textDark">Email</h4>
                    <p className="text-textGray text-sm mt-1">hello@languageacademy.com</p>
                    <p className="text-textGray text-sm">support@languageacademy.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-textDark">Phone</h4>
                    <p className="text-textGray text-sm mt-1">02-123-4567 (Main)</p>
                    <p className="text-textGray text-sm">089-999-9999 (Hotline)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center text-gray-500 shadow-inner">
              [ Google Maps Integration Here ]
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 h-fit">
            <h3 className="text-2xl font-bold text-textDark font-heading mb-6">
              Send us a Message
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-textDark mb-1">
                    First Name
                  </label>
                  <input id="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-textDark mb-1">
                    Last Name
                  </label>
                  <input id="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textDark mb-1">
                  Email
                </label>
                <input id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-textDark mb-1">
                  Subject
                </label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary">
                  <option>General Inquiry</option>
                  <option>Course Support</option>
                  <option>Payment Issue</option>
                  <option>Business Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textDark mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>

              <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-900 transition shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
