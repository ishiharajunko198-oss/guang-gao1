import React from 'react';
import { Check, TrendingUp, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#f0f8ff] flex justify-center">
      {/* Network Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.1" />
            </linearGradient>
            <pattern id="tech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-grad)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16" style={{ maxWidth: '1280px' }}>
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left min-w-[300px] z-10 lg:max-w-[50%] flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-gray-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Amazon出品者向け 次世代分析ツール</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f2c4c] leading-[1.15] mb-6 tracking-tight">
              「売れない」悩みを<br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#005f99] to-[#00aaff]">AIデータで解決する</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ビッグデータ × AI技術で、競合分析、キーワード发掘、需要予測を完全自動化。<br className="hidden md:block"/>
              感覚に頼らない「勝てるAmazon運営」を実現します。
            </p>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center lg:justify-start items-center relative mb-12">
              <div className="relative group">
                <div className="absolute -top-[22px] -left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap z-20 flex items-center gap-1 border border-red-500">
                  <span>クレジットカード登録不要</span>
                </div>

                <a 
                  href="#register" 
                  title="7日間無料トライアルを始める"
                  className="bg-[#ff9900] hover:bg-[#e68a00] text-white font-bold rounded-full shadow-lg shadow-orange-200/50 transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg w-[220px] h-[58px] relative overflow-hidden group"
                >
                  <span className="relative z-10">7日間無料トライアル</span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:animate-shimmer"></div>
                </a>
              </div>
            </div>
            
            <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2"><Check size={16} className="text-[#00aaff]" strokeWidth={3} /><span>登録30秒</span></div>
              <div className="flex items-center gap-2"><Check size={16} className="text-[#00aaff]" strokeWidth={3} /><span>解約いつでもOK</span></div>
            </div>
          </div>

          {/* Laptop Visual */}
          <div className="flex-1 w-full max-w-[700px] mt-12 lg:mt-0 relative perspective-2000 group z-10">
            <div className="relative transform transition-transform duration-700 hover:rotate-x-2 animate-float-slow">
              <div className="bg-[#1a1a1a] rounded-t-2xl p-[10px] pb-1 shadow-2xl relative border border-gray-700 ring-1 ring-white/10 mx-auto w-[90%] md:w-full">
                <div className="bg-gray-900 rounded-lg overflow-hidden relative aspect-[16/10] mt-3 border border-gray-800">
                  <img 
                    src="https://picsum.photos/1000/625?random=tech_dashboard" 
                    alt="SellerSprite Amazon分析ダッシュボード画面イメージ" 
                    className="w-full h-full object-cover opacity-90"
                    width="1000"
                    height="625"
                  />
                </div>
              </div>
              <div className="relative mx-auto w-[90%] md:w-full">
                 <div className="h-4 bg-[#2a2a2a] rounded-b-xl border-t border-gray-600 shadow-2xl relative z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;