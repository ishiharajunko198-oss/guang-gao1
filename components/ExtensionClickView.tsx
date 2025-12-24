import React, { useState } from 'react';
import { MousePointerClick, TrendingUp, Search, DollarSign, Package, Activity, Info } from 'lucide-react';

const ExtensionClickView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'detail'>('search');

  const tabs = [
    { id: 'search', label: '① 検索結果で即・分析', icon: Search },
    { id: 'detail', label: '② グラフで詳細トレンド', icon: TrendingUp },
  ] as const;

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#ff9900] px-4 py-1.5 rounded-full mb-4">
             <MousePointerClick size={18} aria-hidden="true" />
             <span className="font-bold text-sm tracking-wider">BROWSER EXTENSION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-jp-navy">
            拡張機能 クリックビュー
          </h2>
        </div>

        {/* Toggle Switch */}
        <nav className="flex justify-center mb-12" aria-label="機能の切り替え">
          <div className="bg-white p-1.5 rounded-full shadow-lg border border-gray-100 inline-flex relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#ff9900] text-white shadow-md transform scale-105'
                    : 'text-gray-500 hover:text-[#ff9900] hover:bg-gray-50'
                }`}
              >
                <tab.icon size={18} aria-hidden="true" />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main View Container */}
        <div className="relative max-w-5xl mx-auto perspective-1000">
          <div className="relative bg-white rounded-2xl shadow-2xl border-4 border-white overflow-hidden transition-all duration-500 min-h-[600px] md:min-h-[700px]">
            
            {/* Browser Header Bar */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white h-8 rounded border border-gray-300 flex items-center px-3 text-xs text-gray-400 font-mono">
                amazon.co.jp/{activeTab === 'search' ? 's?k=ladies+socks' : 'dp/B07Q6DW85S'}
              </div>
            </div>

            {/* SEARCH RESULTS VIEW */}
            <div className={`absolute inset-0 top-14 transition-opacity duration-500 ease-in-out ${activeTab === 'search' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-full h-full overflow-y-auto bg-gray-50">
                 <img 
                  src="https://o.sellersprite.com/docs/202512/sellersprite-2025122305295498034.jpg" 
                  alt="Amazon検索結果画面におけるSellerSprite拡張機能の分析オーバーレイ表示例" 
                  className="w-full h-auto object-cover opacity-90" 
                  loading="lazy"
                 />
                 
                 <div className="absolute top-[20%] left-[5%] animate-float-card z-20">
                   <div className="bg-white/95 backdrop-blur shadow-xl p-4 rounded-xl border-l-4 border-jp-cta max-w-[240px] border">
                     <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-bold text-gray-400 uppercase">最近1週間の検索数</span>
                       <div className="bg-orange-100 text-[#ff9900] p-1 rounded"><Package size={14} /></div>
                     </div>
                     <div className="text-2xl font-black text-gray-800 mb-1">1,325回</div>
                   </div>
                 </div>
              </div>
            </div>

            {/* DETAIL GRAPH VIEW */}
            <div className={`absolute inset-0 top-14 transition-opacity duration-500 ease-in-out ${activeTab === 'detail' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-full h-full overflow-y-auto bg-white">
                 <img 
                  src="https://o.sellersprite.com/docs/202512/sellersprite-2025122305293435299.jpg" 
                  alt="Amazon商品詳細ページでの価格推移と在庫状況の分析グラフ表示" 
                  className="w-full h-auto object-cover opacity-90" 
                  loading="lazy"
                 />
                 
                 <div className="absolute top-[25%] left-[8%] animate-float-card z-20">
                    <div className="bg-white/95 backdrop-blur shadow-xl p-4 rounded-xl border-l-4 border-[#ff9900] max-w-[260px] border">
                      <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-bold text-gray-400 uppercase">無料keepa代替</span>
                       <div className="bg-orange-100 text-[#ff9900] p-1 rounded"><Activity size={14} /></div>
                     </div>
                     <div className="text-sm font-bold text-gray-800 mb-1">価格推移をトラッキング</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionClickView;