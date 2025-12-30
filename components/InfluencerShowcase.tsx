import React from 'react';
import { Play, Youtube, Instagram, ExternalLink } from 'lucide-react';

interface Influencer {
  id: number;
  name: string;
  handle: string;
  platform: 'YouTube' | 'Instagram' | 'TikTok';
  thumbnail: string;
  avatar: string; // 新增头像字段
  quote: string;
  videoUrl: string;
}

const InfluencerShowcase: React.FC = () => {
  const influencers: Influencer[] = [
    {
      id: 1,
      name: "Tasチャンネル【ネット物販情報お届け】",
      handle: "@tas_buppan",
      platform: 'YouTube',
      avatar: "https://o.sellersprite.com/docs/202512/sellersprite-2025122305001195437.jpg",
      thumbnail: "https://img.youtube.com/vi/B-PmCzFqEPY/maxresdefault.jpg",
      quote: "「【たった１動画で全てわかる】セラースプライトの全機能と活用方法を完全解説」",
      videoUrl: "https://www.youtube.com/watch?v=B-PmCzFqEPY&t"
    },
    {
      id: 2,
      name: "HIRAIの副業お役立ち講座",
      handle: "@hirai1666",
      platform: 'YouTube',
      avatar: "https://o.sellersprite.com/docs/202512/sellersprite-2025122305001154226.jpg",
      thumbnail: "https://img.youtube.com/vi/QcOAHIeYf2M/maxresdefault.jpg",
      quote: "「セラースプライトを使った最強のOEMリサーチ法【データ分析で売上2倍】」",
      videoUrl: "https://www.youtube.com/watch?v=QcOAHIeYf2M&t"
    },
    {
      id: 3,
      name: "海外物販講師の呟き【日米アマゾンで売る】",
      handle: "@kaigaibuppan",
      platform: 'YouTube',
      avatar: "https://o.sellersprite.com/docs/202512/sellersprite-2025122305001188694.jpg",
      thumbnail: "https://img.youtube.com/vi/HUjQWS7WAyc/maxresdefault.jpg",
      quote: "「まず使いたい機能10選！商品リサーチツール「セラースプライト」で中国輸入＆米国アマゾン物販を効率化」",
      videoUrl: "https://www.youtube.com/watch?v=HUjQWS7WAyc"
    }
  ];

  // 无限滚动用
  const scrollItems = [...influencers, ...influencers];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="text-[#ff9900] font-bold tracking-[0.2em] text-sm uppercase block mb-3">Influencer Review</span>
        <h2 className="text-3xl md:text-4xl font-black text-jp-navy leading-tight">
          物販専門家に<br className="md:hidden"/>ご紹介いただいています
        </h2>
        <div className="w-16 h-1 bg-[#ff9900] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradients to hide edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap">
          {scrollItems.map((item, idx) => (
            <article 
              key={`${item.id}-${idx}`} 
              className="inline-block px-4 w-[320px] md:w-[420px] flex-shrink-0"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Thumbnail / Video Link */}
                <a 
                  href={item.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-video overflow-hidden cursor-pointer"
                  title={`${item.name}の解説動画を視聴する`}
                >
                  <img 
                    src={item.thumbnail} 
                    alt={`${item.name}によるSellerSprite解説動画`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-jp-navy ml-1 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="bg-[#ff9900] text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                      <Play size={10} fill="currentColor" /> VIDEO
                    </span>
                  </div>
                </a>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar Upload / Customization Point */}
                      <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden flex-shrink-0 ring-1 ring-gray-100">
                        <img 
                          src={item.avatar} 
                          alt={`${item.name}のアイコン`} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=f0f4f8&color=0f2c4c&bold=true`;
                          }}
                        />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-black text-jp-navy truncate max-w-[120px] md:max-w-none">{item.name}</p>
                        <p className="text-[11px] text-gray-500 font-medium">{item.handle}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-[10px] text-[#ff9900] font-black tracking-widest border border-[#ff9900]/20 px-2 py-0.5 rounded">
                        {item.platform}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative pt-2 min-h-[60px]">
                    <div className="absolute -top-1 -left-1 text-amber-500 opacity-30 text-4xl font-serif">“</div>
                    <p className="text-gray-700 font-bold text-sm md:text-base leading-relaxed italic relative z-10 line-clamp-2">
                      {item.quote}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <a 
                      href={item.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#ff9900] text-xs font-bold hover:underline"
                    >
                      <ExternalLink size={14} />
                      動画をチェックする
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm font-medium">
          ※ 詳細の情報は各チャンネルにてご確認ください。
        </p>
      </div>
    </section>
  );
};

export default InfluencerShowcase;