import React from 'react';
import { Search, TrendingUp, Eye, ArrowDown, XCircle, CheckCircle2 } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="reasons" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0f2c4c] font-bold tracking-widest text-sm uppercase">Pain Points</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Amazon運営で、<br className="md:hidden"/>こんな<span className="text-red-600 bg-red-50 px-2 py-1 rounded mx-1">お悩み</span>ありませんか？
          </h2>
          <div className="w-16 h-1 bg-[#ff9900] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 1. The Problems (Gray Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {/* Problem 1 */}
          <div className="bg-gray-100 p-8 rounded-xl relative">
            <div className="flex justify-center mb-4 text-gray-400">
              <XCircle size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-center text-gray-700 mb-3">
              リサーチに時間がかかりすぎる
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              ヒット商品のリサーチや市場調査に多くの時間を取られ、本来注力すべき業務に手が回らなくなっている。
            </p>
            {/* Down Triangle for box */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rotate-45"></div>
          </div>

          {/* Problem 2 */}
          <div className="bg-gray-100 p-8 rounded-xl relative">
            <div className="flex justify-center mb-4 text-gray-400">
              <XCircle size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-center text-gray-700 mb-3">
              競合が売れている理由が不明
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              なぜライバル商品は売れるのか？競合の売上や販売戦略が気になっていて、どう差をつければいいかわからない。
            </p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rotate-45"></div>
          </div>

          {/* Problem 3 */}
          <div className="bg-gray-100 p-8 rounded-xl relative">
            <div className="flex justify-center mb-4 text-gray-400">
              <XCircle size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-center text-gray-700 mb-3">
              商品ページがなかなか上位に表示されない
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              本当に効果的なキーワードが分からないまま感覚で運用してしまい、SEO対策がうまくいかず、商品が埋もれてしまう…
            </p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 rotate-45"></div>
          </div>
        </div>

        {/* 2. Transition / Solution Proposition */}
        <div className="text-center py-8 relative">
           <div className="flex justify-center gap-16 md:gap-32 mb-6 text-red-400/50">
             <ArrowDown size={40} className="animate-bounce" style={{ animationDelay: '0s' }} />
             <ArrowDown size={40} className="animate-bounce" style={{ animationDelay: '0.2s' }} />
             <ArrowDown size={40} className="animate-bounce" style={{ animationDelay: '0.4s' }} />
           </div>
           
           <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
             そのお悩み、<span className="text-[#ff9900] text-3xl md:text-4xl mx-2">SellerSprite</span> で解決できます！
           </h3>
        </div>

        {/* 3. The Solutions (Featured Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {/* Solution 1 */}
          <div className="bg-orange-50/50 border-2 border-orange-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-[#ff9900]">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4 border-b border-orange-200 pb-3">
              SEO対策はもう悩まない
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-[#ff9900] flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700 text-sm font-medium">注文につながるキーワードを数秒でゲット</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-[#ff9900] flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700 text-sm font-medium">リサーチ作業時間を<span className="text-red-500 font-bold">1/10</span>に短縮</p>
              </div>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="bg-blue-50/50 border-2 border-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-500">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4 border-b border-blue-200 pb-3">
              競合データを丸裸に
            </h3>
            <div className="space-y-3">
               <div className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700 text-sm font-medium">販売状況や在庫数を完全可視化</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700 text-sm font-medium">ライバルの販売戦略を簡単に把握</p>
              </div>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="bg-green-50/50 border-2 border-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-green-500">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4 border-b border-green-200 pb-3">
              データに基づく収益化
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700 text-sm font-medium">正確なデータで低リスク市場を選定</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700 text-sm font-medium">高利益率商品を一括リサーチ</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PainPoints;