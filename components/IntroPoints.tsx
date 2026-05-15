
import React from 'react';

const IntroPoints: React.FC = () => {
  return (
    <section className="bg-[#fff7ed] py-10 relative z-20 overflow-hidden">
      {/* Background decorations for depth without clutter */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 opacity-40 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 opacity-40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Headline - Centered */}
        <h2 className="text-[1.15rem] xs:text-[1.25rem] sm:text-2xl md:text-3xl font-bold text-[#0f2c4c] mb-6 tracking-wide text-center whitespace-nowrap">
          <span className="text-[#ff9900]">SellerSprite</span>（セラースプライト）とは
        </h2>

        {/* Description Text - Left Aligned with specific width approx 1033px */}
        <div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white mb-2 w-full flex flex-col justify-center"
          style={{ maxWidth: '1033px', minHeight: '180px' }}
        >
          <div className="p-6 md:px-12 md:py-8">
            <div className="text-gray-700 text-base md:text-lg leading-loose font-medium space-y-4 text-left">
              <p>
                Amazon出品者向けの多機能リサーチ・分析ツールです。8年以上にわたり蓄積された日本Amazon業界最大級のビッグデータを基に、商品リサーチ、キーワード解析、競合分析を完全サポートします。Web版とChrome拡張機能がシームレスに連携し、販売戦略の立案から最適化まで、あなたのビジネスを劇的に加速させます。
              </p>
            </div>
          </div>
        </div>

        {/* Trust Data - Style updated to match section background and remove "button-like" signals */}
        <div className="text-center w-full mt-4">
          <div className="inline-flex items-center justify-center py-4 px-2 max-w-full cursor-default">
            <div className="text-lg md:text-xl font-bold tracking-wider text-[#0f2c4c] flex items-center flex-wrap justify-center gap-x-4 gap-y-2">
              <span className="opacity-70">世界</span>
              <div className="flex items-baseline gap-1 border-b-2 border-[#ff9900]/30 pb-1">
                <span className="text-[#ff9900] font-black text-4xl md:text-5xl">100万人以上</span>
              </div>
              <span className="opacity-70">のセラーが信頼を寄せる、Amazon運用の必須ツール。</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPoints;
