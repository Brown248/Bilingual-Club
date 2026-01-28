'use client';

export default function ServicesPage() {
  const services = [
    {
      title: 'Personal Coaching',
      desc: 'เรียนแบบตัวต่อตัว เน้นแก้จุดอ่อนและพัฒนาจุดแข็งเฉพาะบุคคล',
      icon: '👤',
      color: 'bg-orange-50'
    },
    {
      title: 'Corporate Training',
      desc: 'อบรมภาษาสำหรับองค์กร เพื่อเพิ่มศักยภาพในการสื่อสารทางธุรกิจ',
      icon: '🏢',
      color: 'bg-blue-50'
    },
    {
      title: 'Translation Service',
      desc: 'รับแปลเอกสารและบทความ ไทย-อังกฤษ-จีน โดยผู้เชี่ยวชาญ',
      icon: '📄',
      color: 'bg-green-50'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-black mb-4">
          Our <span className="text-brand-orange">Services</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          นอกเหนือจากคอร์สเรียน เรายังมีบริการอื่นๆ เพื่อตอบโจทย์ทุกความต้องการด้านภาษาของคุณ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`${service.color} p-10 rounded-[3rem] border border-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}