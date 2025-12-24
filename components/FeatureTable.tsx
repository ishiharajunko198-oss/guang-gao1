import React, { useState, useMemo, useRef } from 'react';
import { Check, Minus, Search, ShoppingBag, Zap, BarChart3, ShieldCheck, ChevronDown, ChevronUp, Plus, LayoutGrid } from 'lucide-react';

interface FeatureItem {
  name: string;
  web: boolean;
  extension: boolean;
}

interface FeatureCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  items: FeatureItem[];
}

const FeatureTable: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [isGlobalExpanded, setIsGlobalExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleGlobalCollapse = () => {
    setIsGlobalExpanded(false);
    // 稍作延迟确保DOM高度更新后滚动到准确位置
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
  };

  const categories = useMemo((): FeatureCategory[] => [
    {
      id: "kw",
      title: "キーワード抽出 × 選定",
      icon: Search,
      items: [
        { name: "関連キーワード", web: true, extension: true },
        { name: "検索流入キーワード", web: true, extension: true },
        { name: "注文キーワード", web: true, extension: false },
        { name: "広告出稿キーワード", web: true, extension: false },
      ]
    },
    {
      id: "prod",
      title: "商品 × 売上分析",
      icon: ShoppingBag,
      items: [
        { name: "商品別売上・販売数", web: true, extension: true },
        { name: "子ASIN別データ", web: true, extension: true },
        { name: "親ASIN販売総数", web: true, extension: true },
        { name: "売れ筋SKU判定", web: true, extension: true },
        { name: "検索順位チェッカー", web: false, extension: true },
        { name: "流入経路分析", web: true, extension: false },
      ]
    },
    {
      id: "price",
      title: "価格 × 在庫 × 利益",
      icon: Zap,
      items: [
        { name: "在庫モニタリング", web: true, extension: true },
        { name: "keepa価格推移", web: false, extension: true },
        { name: "利益シミュレーター", web: true, extension: true },
        { name: "新入荷監視", web: true, extension: false },
        { name: "商品ページ変更履歴", web: false, extension: true },
      ]
    },
    {
      id: "market",
      title: "市場全体分析",
      icon: BarChart3,
      items: [
        { name: "価格分布", web: true, extension: true },
        { name: "市場ライフサイクル", web: true, extension: true },
        { name: "商品需給トレンド", web: true, extension: true },
        { name: "市場販売トレンド", web: true, extension: true },
        { name: "セラー所在地分布", web: true, extension: true },
        { name: "上位商品独占度", web: true, extension: true },
      ]
    },
    {
      id: "risk",
      title: "リスク管理・仕入れ",
      icon: ShieldCheck,
      items: [
        { name: "意匠検索", web: true, extension: false },
        { name: "Alibaba", web: true, extension: true },
        { name: "1688検索", web: true, extension: true },
        { name: "似た商品検索", web: false, extension: true },
        { name: "世界商標ライブラリー", web: true, extension: false },
      ]
    }
  ], []);

  const renderItemRow = (catId: string, item: FeatureItem, idx: number) => (
    <tr 
      key={`${catId}-${idx}`} 
      className="hover:bg-orange-50/20 transition-all duration-300 group border-b border-gray-100"
    >
      <td className="py-4 px-8 md:px-12 text-gray-700 font-bold text-sm md:text-base transition-colors group-hover:text-[#ff9900]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#ff9900] transition-colors"></div>
          {item.name}
        </div>
      </td>
      <td className="py-4 px-4 text-center transition-colors">
        <div className="flex justify-center">
          {item.web ? (
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shadow-sm border border-orange-200 transition-all group-hover:bg-[#ff9900] group-hover:text-white group-hover:border-[#ff9900] group-hover:shadow-md">
              <Check size={18} strokeWidth={3} />
            </div>
          ) : (
            <Minus size={18} className="text-gray-200 transition-colors group-hover:text-orange-200" />
          )}
        </div>
      </td>
      <td className="py-4 px-4 text-center bg-orange-50/10 transition-colors">
        <div className="flex justify-center">
          {item.extension ? (
            <div className="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:bg-[#e68a00] transition-all">
              <Check size={18} strokeWidth={3} />
            </div>
          ) : (
            <Minus size={18} className="text-gray-200 transition-colors group-hover:text-orange-200" />
          )}
        </div>
      </td>
    </tr>
  );

  const displayedCategories = isGlobalExpanded ? categories : categories.slice(0, 2);

  return (
    <section ref={sectionRef} id="feature-table" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#ff9900] font-bold tracking-[0.2em] text-sm uppercase block mb-3">Comparison</span>
          <h2 className="text-3xl md:text-5xl font-black text-jp-navy leading-tight">
            分析・機能一覧
          </h2>
          <div className="w-16 h-1 bg-[#ff9900] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Table Container */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(15,44,76,0.1)] overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr>
                    <th className="py-8 px-8 md:px-12 text-left bg-[#0F2C4C] text-white text-lg font-bold w-1/2">
                      分析・機能項目(一部表示)＊詳細はHPまで
                    </th>
                    <th className="py-8 px-4 text-center bg-[#0F2C4C] text-white w-1/4 border-l border-white/10">
                      <span className="block text-[10px] uppercase tracking-widest opacity-60 mb-1">Web Version</span>
                      ウェブ版
                    </th>
                    <th className="py-8 px-4 text-center bg-[#0F2C4C] text-white w-1/4 border-l border-white/10">
                      <span className="block text-[10px] uppercase tracking-widest opacity-60 mb-1">Extension</span>
                      拡張機能版
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  {displayedCategories.map((cat) => {
                    const isExpanded = expandedCategories[cat.id];
                    const initialItems = cat.items.slice(0, 4);
                    const hiddenItems = cat.items.slice(4);

                    return (
                      <React.Fragment key={cat.id}>
                        {/* Category Header Row */}
                        <tr className="bg-slate-50">
                          <td colSpan={3} className="py-6 px-8 md:px-10 border-b border-gray-200">
                            <div className="flex items-center gap-4">
                              <div className="p-2.5 bg-[#0F2C4C] rounded-xl text-white shadow-sm">
                                <cat.icon size={22} strokeWidth={2.5} />
                              </div>
                              <span className="text-jp-navy font-black text-xl tracking-tight">{cat.title}</span>
                            </div>
                          </td>
                        </tr>

                        {/* Items */}
                        {initialItems.map((item, idx) => renderItemRow(cat.id, item, idx))}
                        
                        {isExpanded && hiddenItems.map((item, idx) => renderItemRow(cat.id, item, idx + 4))}

                        {/* Inner Expand Toggle */}
                        {hiddenItems.length > 0 && (
                          <tr className="border-b border-gray-100">
                            <td colSpan={3} className="py-3 px-8 md:px-12">
                               <button 
                                 onClick={() => toggleCategory(cat.id)}
                                 className="flex items-center gap-1.5 text-xs font-bold text-jp-blue hover:text-[#ff9900] transition-colors"
                               >
                                  {isExpanded ? <ChevronUp size={14} /> : <Plus size={14} />}
                                  <span>{isExpanded ? '項目を閉じる' : `さらに ${hiddenItems.length} 項目を表示`}</span>
                               </button>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Global View More Button Overlay */}
          {!isGlobalExpanded ? (
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-12 z-10">
              <button 
                onClick={() => setIsGlobalExpanded(true)}
                className="group flex items-center gap-4 bg-[#ff9900] text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_15px_30px_rgba(255,153,0,0.3)] hover:bg-[#e68a00] transition-all transform hover:-translate-y-1"
              >
                <LayoutGrid size={22} className="group-hover:rotate-12 transition-transform" />
                <span>全機能を詳しく確認する</span>
                <ChevronDown size={20} className="animate-bounce" />
              </button>
            </div>
          ) : (
            <div className="mt-12 text-center">
              <button 
                onClick={handleGlobalCollapse}
                className="inline-flex items-center gap-2 text-gray-400 font-bold hover:text-jp-navy transition-colors border-b border-gray-200 pb-1"
              >
                <ChevronUp size={20} />
                <span>一部の機能を非表示にする</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureTable;