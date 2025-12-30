import React from 'react';

const MidSectionCTA: React.FC = () => {
  return (
    <section className="bg-[#0f2c4c] py-8 sm:py-12 border-y border-[#0d2540] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 max-w-6xl mx-auto">
          
          {/* Left: Simplified Laptop Graphic */}
          <div className="hidden md:flex w-1/4 justify-center items-end relative h-32">
             <div className="relative z-10 w-48 h-28 bg-gray-800 rounded-t-lg border-4 border-gray-700 border-b-0 shadow-2xl flex flex-col items-center p-1">
                {/* Camera */}
                <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
                {/* Screen */}
                <div className="w-full h-full bg-white overflow-hidden relative rounded-sm">
                   {/* Fake UI */}
                   <div className="absolute top-0 w-full h-4 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                   </div>
                   <div className="p-3 mt-4 space-y-2">
                      <div className="flex gap-2">
                         <div className="w-1/3 h-12 bg-blue-50 border border-blue-100 rounded"></div>
                         <div className="w-2/3 h-12 bg-gray-50 border border-gray-100 rounded"></div>
                      </div>
                      <div className="w-full h-8 bg-gray-50 rounded border border-gray-100"></div>
                   </div>
                </div>
             </div>
             {/* Base */}
             <div className="absolute bottom-0 z-20 w-56 h-3 bg-gray-700 rounded-b-lg shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-b-sm"></div>
             </div>
          </div>

          {/* Center: CTA Text & Button */}
          <div className="flex-1 text-center px-2 sm:px-4 flex flex-col items-center min-w-0">
             <div className="text-white text-[13px] xs:text-[16px] sm:text-[20px] md:text-2xl font-bold mb-8 tracking-wide drop-shadow-md flex items-center justify-center flex-wrap leading-relaxed">
               <span className="font-light opacity-50 text-xl sm:text-2xl md:text-3xl mr-1 sm:mr-3 flex-shrink-0 hidden xs:inline">\</span>
               <span className="px-1 whitespace-normal md:whitespace-nowrap text-center max-w-full">
                 SellerSpriteで機能・画面を確認！
               </span>
               <span className="font-light opacity-50 text-xl sm:text-2xl md:text-3xl ml-1 sm:mr-3 flex-shrink-0 hidden xs:inline">/</span>
             </div>
             <a 
               href="#register"
               className="inline-block bg-[#ffc600] hover:bg-[#e6b200] text-[#0f2c4c] font-bold text-base sm:text-lg py-3.5 px-8 sm:px-12 rounded-full shadow-lg shadow-black/10 transition-transform transform hover:-translate-y-1 whitespace-nowrap active:scale-95"
             >
               無料で7日間試してみる
             </a>
          </div>

          {/* Right: Documents Stack Graphic */}
          <div className="hidden md:flex w-1/4 justify-center items-end relative h-32">
             <div className="relative w-28 h-36">
                 {/* Paper 3 (Bottom) */}
                 <div className="absolute inset-0 bg-white rounded shadow border border-gray-200 transform rotate-6 origin-bottom-right"></div>
                 {/* Paper 2 (Middle) */}
                 <div className="absolute inset-0 bg-white rounded shadow border border-gray-200 transform rotate-3 origin-bottom-right"></div>
                 {/* Paper 1 (Top) */}
                 <div className="absolute inset-0 bg-white rounded shadow-lg border border-gray-200 flex flex-col items-center pt-6 p-2">
                    <div className="w-10 h-10 rounded-full bg-[#ff9900]/10 flex items-center justify-center mb-2">
                       <span className="text-[#ff9900] font-bold text-sm">S</span>
                    </div>
                    <div className="text-xs font-bold text-gray-700 text-center mb-3">操作ガイド</div>
                    <div className="space-y-1.5 w-full px-2">
                       <div className="h-1 w-full bg-gray-100 rounded"></div>
                       <div className="h-1 w-5/6 bg-gray-100 rounded"></div>
                       <div className="h-1 w-full bg-gray-100 rounded"></div>
                       <div className="h-1 w-4/6 bg-gray-100 rounded"></div>
                    </div>
                    <div className="mt-auto mb-2 text-[8px] text-gray-400">Ver 5.0</div>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MidSectionCTA;