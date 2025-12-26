import React from 'react';

const IntroPoints: React.FC = () => {
  return (
    <section className="bg-[#fff7ed] py-16 relative z-20 overflow-hidden">
      {/* Background decorations for depth without clutter */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 opacity-40 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 opacity-40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Headline - Centered */}
        <h2 className="text-[1.15rem] xs:text-[1.25rem] sm:text-2xl md:text-3xl font-bold text-[#0f2c4c] mb-10 tracking-wide text-center whitespace-nowrap">
          <span className="text-[#ff9900]">SellerSprite</span>（セラースプライト）とは
        </h2>

        {/* Description Text - Left Aligned with specific width approx 1033px */}
        <div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white mb-12 w-full flex flex-col justify-center"
          style={{ maxWidth: '1033px', minHeight: '180px' }}
        >
          <div className="p-6 md:px-12 md:py-8">
            <div className="text-gray-700 text-base md:text-lg leading-loose font-medium space-y-4 text-left">
              <p>
                Amazon出品者向けの多機能リサーチ・分析ツールです。
                10年以上蓄積してきた膨大なデータをもとに、商品リサーチ、キーワード解析、競合分析、販売戦略立案などを強力にサポートします。
                </p>
              <p>
                WebページとChrome拡張機能が提供されており、Amazonページ上で各商品の情報や販売数などを即時に確認することができます。
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge / Highlight - Dark Blue Pill */}
        <div className="text-center w-full">
          <div className="inline-flex items-center justify-center bg-[#0f2c4c] text-white px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 max-w-full">
            <p className="text-lg md:text-xl font-bold tracking-wider flex items-center flex-wrap justify-center gap-x-3 gap-y-1">
              <span>世界中の</span>
              <span className="text-[#ff9900] font-black text-3xl md:text-4xl">100万人以上</span>
              <span>のAmazonセラー利用中！</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPoints;