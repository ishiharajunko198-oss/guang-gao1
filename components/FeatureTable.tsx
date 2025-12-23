import React, { useState, useMemo } from 'react';
import { Check, Minus, Search, ShoppingBag, Zap, BarChart3, ShieldCheck, PieChart, ChevronDown, ChevronUp, Plus, LayoutGrid } from 'lucide-react';

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
  metrics?: FeatureItem[]; // キーワードカテゴリー専用のサブ要素
}

const FeatureTable: React.FC = () => {
  const [showKeywordMetrics, setShowKeywordMetrics] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [isGlobalExpanded, setIsGlobalExpanded] = useState(false); // 全体展開ステータス

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 1. キーワード抽出 × 選定 (主要4タイプ + 分析指標を子要素に)
  const keywordCategory: FeatureCategory = {
    id: "kw",
    title: "キーワード抽出 × 選定",
    icon: Search,
    items: [
      { name: "関連キーワード", web: true, extension: true },
      { name: "検索流入キーワード", web: true, extension: true },
      { name: "注文キーワード", web: true, extension: false },
      { name: "広告出稿キーワード", web: true, extension: true },
    ],
    metrics: [
      { name: "需要比", web: true, extension: false },
      { name: "転換率", web: true, extension: false },
      { name: "PPC入札額", web: true, extension: true },
      { name: "ABA集中度", web: true, extension: false },
      { name: "検索トレンド", web: true, extension: true },
      { name: "検索数ボリューム", web: true, extension: true },
      { name: "Googleトレンド", web: true, extension: true },
      { name: "検索頻度ランキング", web: true, extension: true },
    ]
  };

  // 2. 商品 × 売上分析
  const productCategory: FeatureCategory = {
    id: "prod",
    title: "商品 × 売上分析",
    icon: ShoppingBag,
    items: [
      { name: "商品別売上", web: true, extension: true },
      { name: "子ASIN販売数", web: true, extension: true },
      { name: "親ASIN販売総数", web: true, extension: true },
      { name: "流入経路分析", web: true, extension: false },
      { name: "売れ筋SKU自動判定", web: true, extension: true },
      { name: "検索順位チェッカー", web: true, extension: false },
      { name: "カテゴリー別商品検索", web: true, extension: false },
      { name: "レビュー分析・ダウンロード", web: true, extension: true },
      { name: "基本情報一覧 (商品名、サイズ等)", web: true, extension: true },
    ]
  };

  // 3. 価格 × 在庫 × 利益
  const priceCategory: FeatureCategory = {
    id: "price",
    title: "価格 × 在庫 × 利益",
    icon: Zap,
    items: [
      { name: "新入荷監視", web: true, extension: false },
      { name: "keepa価格推移", web: false, extension: true },
      { name: "在庫モニタリング", web: true, extension: true },
      { name: "利益シミュレーター", web: true, extension: true },
      { name: "商品ページ変更履歴追跡", web: true, extension: false },
    ]
  };

  // 4. 市場全体分析
  const marketCategory: FeatureCategory = {
    id: "market",
    title: "市場全体分析",
    icon: BarChart3,
    items: [
      { name: "価格分布", web: true, extension: false },
      { name: "市場サイクル", web: true, extension: false },
      { name: "商品需給トレンド", web: true, extension: false },
      { name: "市場販売トレンド", web: true, extension: true },
      { name: "セラー所在地分布", web: true, extension: false },
      { name: "市場規模 (上位100商品データ)", web: true, extension: true },
      { name: "上位商品独占度 (商品・ブランド等)", web: true, extension: false },
    ]
  };

  // 5. リスク管理・仕入れ
  const riskCategory: FeatureCategory = {
    id: "risk",
    title: "リスク管理・仕入れ",
    icon: ShieldCheck,
    items: [
      { name: "意匠検索", web: true, extension: false },
      { name: "Alibaba検索", web: false, extension: true },
      { name: "似た商品検索", web: true, extension: true },
      { name: "1688商品検索", web: false, extension: true },
      { name: "世界商標ライブラリー", web: true, extension: false },
    ]
  };

  const categories = useMemo(() => [
    keywordCategory,
    productCategory,
    priceCategory,
    marketCategory,
    riskCategory,
  ], []);

  // 単一行データのレンダリング
  const renderItemRow = (catId: string, item: FeatureItem, idx: number, isHidden: boolean = false) => (
    <tr 
      key={`${catId}-${idx}`} 
      className={`hover:bg-blue-50/30 transition-all duration-300 group ${isHidden ? 'hidden' : ''} ${expandedCategories[catId] && idx >= 4 ? 'animate-in fade-in slide-in-from-top-1 duration-300' : ''}`}
    >
      <td className="py-5 px-20 text-gray-700 font-bold group-hover:text-jp-navy text-base relative">
        <span className="absolute left-12 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-jp-blue/30 group-hover:bg-jp-blue group-hover:scale-125 transition-all"></span>
        {item.name}
      </td>
      <td className="py-5 px-4">
        <div className="flex justify-center">
          {item.web ? (
            <div className="w-9 h-9 rounded-2xl bg-blue-50/50 flex items-center justify-center text-jp-blue shadow-sm ring-1 ring-blue-100/50">
              <Check size={22} strokeWidth={3.5} />
            </div>
          ) : (
            <Minus size={22} className="text-gray-200" />
          )}
        </div>
      </td>
      <td className="py-5 px-4 bg-yellow-50/5">
        <div className="flex justify-center">
          {item.extension ? (
            <div className="w-9 h-9 rounded-2xl bg-jp-gold flex items-center justify-center text-white shadow-lg ring-4 ring-yellow-200/50 transform group-hover:rotate-6 transition-transform">
              <Check size={22} strokeWidth={3.5} />
            </div>
          ) : (
            <Minus size={22} className="text-gray-200" />
          )}
        </div>
      </td>
    </tr>
  );

  // 表示ロジック：全体展開か部分展開か
  const visibleCategories = isGlobalExpanded ? categories : [categories[0]];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-jp-blue font-bold tracking-[0.2em] text-sm uppercase block mb-3">Function List</span>
          <h2 className="text-3xl md:text-5xl font-black text-jp-navy leading-tight">
            分析・機能一覧
          </h2>
          <div className="w-16 h-1 bg-jp-cta mx-auto mt-8 rounded-full"></div>
          <p className="text-gray-500 mt-8 text-lg font-medium italic">
            信頼のデータ精度。デバイスごとの対応状況をご確認ください。
          </p>
        </div>

        <div className="relative">
          <div className={`bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 transition-all duration-700 ease-in-out ${!isGlobalExpanded ? 'max-h-[700px]' : 'max-h-[5000px]'}`}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="bg-jp-navy text-white">
                    <th className="py-10 px-12 text-left text-xl font-bold w-1/2">分析・機能項目</th>
                    <th className="py-10 px-4 text-center w-1/4 bg-jp-navy/95 border-l border-white/5">
                      <div className="text-[11px] font-bold opacity-40 uppercase mb-2 tracking-[0.2em]">Platform</div>
                      <span className="text-lg">ウェブ版</span>
                    </th>
                    <th className="py-10 px-4 text-center w-1/4 bg-jp-gold text-jp-navy font-bold border-l border-white/5 relative">
                      <span className="absolute -top-1 right-0 bg-jp-red text-white text-[11px] px-6 py-2 rounded-bl-2xl font-black tracking-tighter shadow-xl z-20 uppercase">Recommended</span>
                      <div className="text-[11px] font-bold opacity-60 uppercase mb-2 tracking-[0.2em]">Extension</div>
                      <span className="text-lg">拡張機能版</span>
                    </th>
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-50">
                  {visibleCategories.map((cat, catIdx) => {
                    const isKeyword = cat.id === 'kw';
                    const displayedItems = isKeyword ? cat.items : cat.items.slice(0, 4);
                    const hiddenItems = isKeyword ? [] : cat.items.slice(4);
                    const hasMore = hiddenItems.length > 0;
                    const isExpanded = expandedCategories[cat.id];

                    return (
                      <React.Fragment key={cat.id}>
                        <tr className="bg-slate-100/40">
                          <td colSpan={3} className="py-8 px-10">
                            <div className="flex items-center gap-5">
                              <div className="p-3.5 bg-white rounded-2xl shadow-sm text-jp-blue border border-gray-100 ring-4 ring-slate-100/50">
                                <cat.icon size={26} strokeWidth={2.5} />
                              </div>
                              <span className="text-jp-navy font-black text-2xl tracking-tight">{cat.title}</span>
                            </div>
                          </td>
                        </tr>

                        {displayedItems.map((item, idx) => renderItemRow(cat.id, item, idx))}
                        {!isKeyword && isExpanded && hiddenItems.map((item, idx) => renderItemRow(cat.id, item, idx + 4))}

                        {!isKeyword && hasMore && (
                          <tr className="bg-white">
                            <td colSpan={3} className="py-4 px-12">
                               <button 
                                 onClick={() => toggleCategory(cat.id)}
                                 className="flex items-center gap-2 text-jp-blue hover:text-jp-navy transition-colors font-bold text-sm bg-blue-50/50 px-4 py-2 rounded-lg border border-blue-100/50"
                               >
                                  {isExpanded ? <ChevronUp size={16} /> : <Plus size={16} />}
                                  <span>{isExpanded ? '表示を減らす' : `さらに ${hiddenItems.length} 項目を表示`}</span>
                               </button>
                            </td>
                          </tr>
                        )}

                        {isKeyword && cat.metrics && (
                          <>
                            <tr className="bg-white">
                              <td colSpan={3} className="py-4 px-12 border-b border-slate-100">
                                 <button 
                                   onClick={() => setShowKeywordMetrics(!showKeywordMetrics)}
                                   className="flex items-center gap-3 text-jp-blue hover:text-jp-navy transition-colors group/btn"
                                 >
                                    <div className={`p-1.5 rounded-lg border border-blue-100 transition-all ${showKeywordMetrics ? 'bg-jp-blue text-white' : 'bg-blue-50'}`}>
                                      {showKeywordMetrics ? <ChevronUp size={16} strokeWidth={3} /> : <ChevronDown size={16} strokeWidth={3} />}
                                    </div>
                                    <PieChart size={18} className="opacity-60" />
                                    <span className="text-sm font-black tracking-widest">
                                      {showKeywordMetrics ? '分析指標（詳細）を閉じる' : '詳細な分析指標を展開'}
                                    </span>
                                 </button>
                              </td>
                            </tr>
                            
                            {showKeywordMetrics && cat.metrics.map((metric, mIdx) => (
                              <tr key={`metric-${mIdx}`} className="bg-slate-50/30 group hover:bg-blue-50/20 transition-all border-t border-slate-100/50 animate-in slide-in-from-top-2 duration-300">
                                <td className="py-4 px-28 text-slate-500 text-[15px] font-bold flex items-center gap-4 group-hover:text-jp-navy transition-colors">
                                   <span className="text-jp-blue/30 text-2xl font-light">└</span>
                                   <span className="bg-white text-jp-blue text-[9px] px-2 py-0.5 rounded border border-blue-100 shadow-xs opacity-80 uppercase tracking-tighter">Metric</span>
                                   {metric.name}
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex justify-center">
                                    {metric.web ? <Check size={18} className="text-jp-blue/60" strokeWidth={4} /> : <Minus size={18} className="text-slate-200" />}
                                  </div>
                                </td>
                                <td className="py-4 px-4 bg-yellow-50/10">
                                  <div className="flex justify-center">
                                    {metric.extension ? <Check size={18} className="text-jp-gold/70" strokeWidth={4} /> : <Minus size={18} className="text-slate-200" />}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}

                        {isGlobalExpanded && catIdx !== visibleCategories.length - 1 && (
                          <tr className="h-10 bg-transparent">
                            <td colSpan={3}></td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {isGlobalExpanded && (
              <div className="bg-jp-navy/5 p-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
                 <div className="flex gap-12 text-[13px] text-slate-600 font-bold">
                    <div className="flex items-center gap-4 group cursor-help">
                       <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-jp-blue border border-blue-100 shadow-sm transition-transform group-hover:scale-110"><Check size={14} strokeWidth={4} /></div>
                       <span>ウェブ版利用可能</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-help">
                       <div className="w-6 h-6 rounded-lg bg-jp-gold flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"><Check size={14} strokeWidth={4} /></div>
                       <span>拡張機能版利用可能</span>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-xs text-slate-400 font-medium leading-relaxed italic">
                      ※ 掲載情報は2024年現在の最新仕様に基づいています。<br/>
                      ユーザーニーズに応じて、新機能および分析項目は随時追加・更新されます。
                    </p>
                 </div>
              </div>
            )}
          </div>

          {!isGlobalExpanded && (
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent flex items-end justify-center pb-8 z-20">
              <button 
                onClick={() => setIsGlobalExpanded(true)}
                className="group relative inline-flex items-center gap-3 bg-jp-navy text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-jp-blue transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <div className="p-1.5 bg-white/10 rounded-lg group-hover:rotate-12 transition-transform">
                  <LayoutGrid size={24} />
                </div>
                <span>全機能を詳しく確認する</span>
                <ChevronDown size={24} className="animate-bounce" />
              </button>
            </div>
          )}

          {isGlobalExpanded && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => {
                  setIsGlobalExpanded(false);
                  const tableElement = document.getElementById('feature-table-top');
                  tableElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-jp-navy font-bold text-sm transition-colors border-b border-gray-200 pb-1"
              >
                <ChevronUp size={16} />
                <span>表示を少なくする</span>
              </button>
            </div>
          )}
          <div id="feature-table-top" className="absolute -top-32"></div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTable;