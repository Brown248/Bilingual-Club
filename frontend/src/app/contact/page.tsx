import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-gray-200/50 animate-fade-up">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-brand-black">
              Let's <span className="text-brand-blue">Talk.</span>
            </h1>
            <p className="text-gray-500 text-lg">
              มีคำถามหรือข้อสงสัย? เราพร้อมช่วยเหลือคุณเสมอ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-6 rounded-3xl bg-soft-blue hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center text-xl mb-4">📞</div>
               <h3 className="font-bold text-lg mb-2">Call Us</h3>
               <p className="text-gray-600 text-sm">02-123-4567</p>
               <p className="text-gray-400 text-xs mt-1">Mon-Fri, 9am-6pm</p>
            </div>

            {/* Email */}
            <div className="text-center p-6 rounded-3xl bg-soft-green hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 mx-auto bg-brand-green text-white rounded-full flex items-center justify-center text-xl mb-4">✉️</div>
               <h3 className="font-bold text-lg mb-2">Email Us</h3>
               <p className="text-gray-600 text-sm">hello@cathyclub.com</p>
               <p className="text-gray-400 text-xs mt-1">Reply within 24h</p>
            </div>

            {/* Location */}
            <div className="text-center p-6 rounded-3xl bg-soft-red hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 mx-auto bg-brand-red text-white rounded-full flex items-center justify-center text-xl mb-4">📍</div>
               <h3 className="font-bold text-lg mb-2">Visit Us</h3>
               <p className="text-gray-600 text-sm">123 Education Tower</p>
               <p className="text-gray-400 text-xs mt-1">Bangkok, Thailand</p>
            </div>
          </div>

          {/* Simple Form */}
          <div className="mt-16 pt-12 border-t border-gray-100">
             <h3 className="text-2xl font-bold text-center mb-8">Send a Message</h3>
             <form className="max-w-lg mx-auto space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-blue focus:bg-white transition-all" />
                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-blue focus:bg-white transition-all" />
                <textarea rows={4} placeholder="How can we help?" className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-blue focus:bg-white transition-all resize-none"></textarea>
                <button className="w-full py-4 bg-brand-black text-white rounded-full font-bold hover:bg-brand-blue hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300">
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