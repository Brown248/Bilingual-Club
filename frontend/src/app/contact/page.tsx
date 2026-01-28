'use client';

export default function ContactPage() {
  // ข้อมูลการติดต่อ
  const contactMethods = [
    {
      name: 'Facebook',
      value: 'Cathy Bilingual Club',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', // Logo Facebook
      link: 'https://facebook.com', // เปลี่ยนเป็นลิงก์ของคุณ
      color: 'hover:bg-blue-50'
    },
    {
      name: 'Instagram',
      value: '@cathy_bilingual',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', // Logo IG
      link: 'https://instagram.com', // เปลี่ยนเป็นลิงก์ของคุณ
      color: 'hover:bg-pink-50'
    },
    {
      name: 'Line Official',
      value: '@cathy_club',
      icon: 'https://cdn-icons-png.flaticon.com/512/124/124027.png', // Logo Line
      link: 'https://line.me', // เปลี่ยนเป็นลิงก์ของคุณ
      color: 'hover:bg-green-50'
    },
    {
      name: 'Email',
      value: 'hello@bilingualclub.com',
      icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png', // Logo Email
      link: 'mailto:hello@bilingualclub.com',
      color: 'hover:bg-orange-50'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* ส่วนหัวข้อ */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-4">
            Contact <span className="text-brand-orange">Us</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-body">
            สนใจคอร์สเรียนหรือมีข้อสงสัย? ติดต่อสอบถามเราได้ผ่านช่องทางด้านล่างนี้เลยค่ะ
          </p>
        </div>

        {/* รายการช่องทางติดต่อ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 flex items-center gap-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${method.color}`}
            >
              <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={method.icon} 
                  alt={method.name} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {method.name}
                </h3>
                <p className="text-lg font-bold text-brand-black font-heading">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ส่วนท้ายหน้า Contact */}
        <div className="mt-20 bg-gradient-to-br from-brand-orange to-brand-red rounded-[3rem] p-10 md:p-16 text-white text-center shadow-xl relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-3xl font-heading font-bold mb-4 relative z-10">
            เริ่มต้นเก่งภาษาไปกับเรา
          </h2>
          <p className="mb-8 text-white/90 relative z-10 max-w-lg mx-auto font-body">
            สมัครเรียนวันนี้เพื่อรับโปรโมชั่นพิเศษและคำแนะนำจากผู้เชี่ยวชาญฟรี
          </p>
          <button className="px-10 py-4 bg-white text-brand-orange rounded-full font-bold hover:bg-brand-yellow hover:text-white transition-all shadow-lg relative z-10 active:scale-95">
            สอบถามรายละเอียดเพิ่มเติม
          </button>
        </div>

      </div>
    </div>
  );
}