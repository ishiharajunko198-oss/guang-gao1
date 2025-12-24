
import React from 'react';
import { Check, FileDown, ArrowRight, TrendingUp, Search, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white flex justify-center">
      {/* Background with Grid Pattern to match reference image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf5] via-white to-[#fff5e6] -z-20"></div>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#ffd8a8 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

      {/* Advanced Animated Data Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#ff9900" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <pattern id="tech-lines-orange" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 50 L 100 50" fill="none" stroke="url(#line-grad-orange)" strokeWidth="0.5">
               <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="4s" repeatCount="indefinite" />
            </path>
            <circle cx="50" cy="50" r="0.5" fill="#ff9900" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tech-lines-orange)" />
        </svg>
      </div>

      {/* Decorative Professional Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16" style={{ maxWidth: '1280px' }}>
          
          {/* Text Content Area */}
          <div className="flex-1 text-center lg:text-left min-w-[320px] z-10 lg:max-w-[55%] flex flex-col items-center lg:items-start">
            {/* Upper Badge - Updated to match image style */}
            <div className="inline-flex items-center gap-3 mb-10 bg-white/90 shadow-[0_2px_15px_rgba(255,153,0,0.1)] backdrop-blur-sm px-6 py-2.5 rounded-full border border-orange-100 transform hover:scale-105 transition-transform cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff9900]"></span>
              <p className="text-gray-600 font-bold text-sm tracking-widest uppercase">AMAZON出品者向け リサーチ・せどり分析ツール</p>
            </div>
            
            {/* High Impact Headline - Adjusted sizes for better fit and visibility */}
            <h1 className="font-black leading-[1.2] mb-10 tracking-tight w-full">
              {/* Row 1: Pain Point - Reduced size as requested */}
              <span className="text-3xl sm:text-5xl lg:text-[4.2rem] text-jp-navy block whitespace-nowrap font-black mb-2">
                「売れない」悩みを
              </span>
              
              {/* Row 2: Solution with High-Tech Glow - Reduced size as requested */}
              <span className="relative block">
                <span className="text-4xl sm:text-5xl lg:text-[5.4rem] bg-clip-text text-transparent bg-gradient-to-r from-[#ff9900] via-[#ffb347] to-[#ff9900] block whitespace-nowrap font-black leading-tight drop-shadow-[0_4px_10px_rgba(255,153,0,0.35)]">
                  データで解決する
                </span>
              </span>
            </h1>
            
            {/* Updated Description based on image */}
            <p className="text-gray-500 text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              ビッグデータ × AI技術で、競合分析、キーワード発掘、需要予測を完全自動化。<br className="hidden md:block"/>
              感覚に頼らない「勝てるAmazon運営」を実現します。
            </p>

            {/* CTA Buttons Row - Unchanged */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center lg:justify-start items-center relative mb-14 w-full">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -top-[28px] left-1/2 sm:left-4 -translate-x-1/2 sm:translate-x-0 bg-[#e60012] text-white text-[11px] font-black px-3 py-1 rounded shadow-[0_4px_10px_rgba(230,0,18,0.3)] whitespace-nowrap z-20 animate-bounce">
                  クレジットカード登録不要
                </div>

                <a 
                  href="#register" 
                  className="bg-[#ff9900] hover:bg-[#ff7700] text-white font-black rounded-full shadow-[0_15px_30px_rgba(255,153,0,0.3)] transition-all transform hover:-translate-y-1.5 flex items-center justify-center text-xl w-full sm:w-[280px] h-[72px] relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    無料で試してみる <ArrowRight strokeWidth={3} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:animate-shimmer"></div>
                </a>
              </div>

              <a 
                href="#download" 
                className="bg-transparent hover:bg-gray-50 text-jp-navy border-2 border-jp-navy font-black rounded-full transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg w-full sm:w-[240px] h-[72px]"
              >
                <FileDown size={22} />
                <span>資料を請求する</span>
              </a>
            </div>
            
            {/* Minimal Features List - Unchanged */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              {['全機能アクセス', '登録だっだ30秒', 'いつでも解約OK'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-black text-jp-navy/70">
                  <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center">
                    <Check size={12} className="text-[#ff9900] stroke-[4px]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Optimized Premium Tech Visual Container - Unchanged */}
          <div className="flex-1 w-full max-w-[720px] mt-12 lg:mt-0 relative perspective-2000 group z-10">
            
            {/* Floating Cards - Unchanged */}
            <div className="absolute -top-10 -left-6 lg:-left-20 z-30 animate-float-card pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_rgba(255,153,0,0.12)] border border-white flex flex-col gap-1 w-[160px] sm:w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-orange-500 text-white flex items-center justify-center">
                    <Search size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Efficiency</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-jp-navy">50%以上</span>
                  <span className="text-[10px] font-bold text-jp-navy/60">売上UP</span>
                </div>
                <p className="text-[10px] font-bold text-gray-500 mt-1">初心者から上級者まで完全運用</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 lg:-right-16 z-30 animate-float-card-delayed pointer-events-none hidden md:block">
              <div className="bg-[#0f2c4c]/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/10 flex flex-col gap-1 w-[180px] sm:w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center">
                    <TrendingUp size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Growth</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white">100%＋</span>
                  <span className="text-[10px] font-bold text-white/60">販売数成長率</span>
                </div>
                <p className="text-[10px] font-bold text-white/60 mt-1">多種多様な指標から分析をサポート</p>
              </div>
            </div>

            {/* Laptop Visual - Unchanged */}
            <div className="relative transform transition-all duration-1000 group-hover:rotate-x-2 animate-float-slow">
              <div className="relative mx-auto w-full">
                <div className="bg-[#0a0a0a] rounded-t-[2.5rem] p-2 shadow-[0_50px_100px_rgba(255,153,0,0.15)] relative border-x border-t border-gray-800">
                  <div className="relative rounded-[1.8rem] overflow-hidden border-[4px] border-[#ff9900] shadow-[0_0_30px_rgba(255,153,0,0.3),inset_0_0_20px_rgba(255,153,0,0.2)] bg-[#050505]">
                    <div className="p-1 md:p-2 bg-black">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0c1421]">
                        <img 
                          src="https://o.sellersprite.com/docs/202512/sellersprite-2025122404013273327.jpg" 
                          alt="SellerSprite Dashboard" 
                          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-[104%] -translate-x-[2%] mt-[-4px]">
                <div className="h-[24px] bg-gradient-to-b from-[#2a2a2a] via-[#111] to-black rounded-b-[2.5rem] border-t border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative z-20"></div>
                <div className="absolute -bottom-16 inset-x-0 h-16 bg-orange-400/10 blur-[80px] rounded-full -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
