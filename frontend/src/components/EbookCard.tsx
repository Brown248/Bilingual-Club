import Image from 'next/image';
import { Ebook } from '@/data/ebooks';

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  return (
    <div className="group bg-white rounded-[2rem] border border-gray-100 p-4 hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-yellow/10">
      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-5 bg-soft-yellow">
        <Image
          src={ebook.image}
          alt={ebook.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute bottom-3 right-3 bg-brand-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
          PDF
        </div>
      </div>

      <div className="px-2">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">{ebook.category}</span>
        <h3 className="text-lg font-bold text-brand-black mt-1 mb-2 leading-tight group-hover:text-brand-orange transition-colors">
            {ebook.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{ebook.description}</p>
        
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-brand-black">฿{ebook.price.toLocaleString()}</span>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </button>
        </div>
      </div>
    </div>
  );
}