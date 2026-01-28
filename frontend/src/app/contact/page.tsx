'use client';

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Facebook',
      value: 'Cathy Bilingual Club',
      // ใช้ Logo Official
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg',
      link: 'https://facebook.com', // แก้เป็นลิงก์เพจของคุณ
      color: 'group-hover:border-blue-500'
    },
    {
      name: 'Instagram',
      value: '@cathy_bilingual',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      link: 'https://instagram.com', // แก้เป็นลิงก์ IG ของคุณ
      color: 'group-hover:border-pink-500'
    },
    {
      name: 'Line Official',
      value: '@cathy_club',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg',
      link: 'https://line.me', // แก้เป็นลิงก์ Line ของคุณ
      color: 'group-hover:border-green-500'
    },
    {
      name: 'Email',
      value: 'hello@bilingualclub.com',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
      link: 'mailto:hello@bilingualclub.com',
      color: 'group-hover:border-brand-orange'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-4">
            Contact <span className="text-brand-orange">Us</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-body">
            สนใจคอร์สเรียนหรือมีข้อสงสัย? เลือกติดต่อเราผ่านช่องทางที่คุณสะดวกได้เลยค่ะ
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white p-6 rounded-[2.5rem] shadow-sm border-2 border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex items-center gap-6 ${method.color}`}
            >
              {/* Logo Container */}
              <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-3xl p-4 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <img 
                  src={method.logo} 
                  alt={method.name} 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {method.name}
                </h3>
                <p className="text-lg md:text-xl font-bold text-brand-black transition-colors">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 relative bg-brand-black rounded-[3rem] p-10 md:p-16 text-center shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              ต้องการคำปรึกษาเพิ่มเติม?
            </h2>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto font-body">
              ทีมงานของเราพร้อมแนะนำคอร์สเรียนที่เหมาะสมกับพื้นฐานของคุณที่สุด เพื่อการเรียนรู้ที่มีประสิทธิภาพ
            </p>
            <button className="px-10 py-4 bg-brand-orange text-white rounded-full font-bold hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95">
              สอบถามผ่าน Line ทันที
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}