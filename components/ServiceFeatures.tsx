import React, { useState } from 'react';
import { Search, BarChart3, Users, Zap, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Cpu, ZoomIn, X, ImageIcon } from 'lucide-react';

interface FeatureProps {
  id: string;
  title: string;
  points: string[];
  desc: string;
  icon: React.ElementType;
  images: string[];
  color: string;
  accentBorder: string;
  reverse: boolean;
  onImageClick: (url: string) => void;
}

const FeatureRow: React.FC<{ feature: FeatureProps }> = ({ feature }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <article className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
      {/* Text Content - Adjusted to 40% */}
      <div className="w-full lg:basis-[40%] flex-shrink-0">
        <div className="mb-8">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} shadow-sm mb-6 ring-1 ring-black/5`}>
            <feature.icon size={24} strokeWidth={2.5} aria-hidden="true" />
          </div>
          
          <div className="flex items-center gap-3 mb-4">
             <span className={`text-xs font-black tracking-widest uppercase px-2 py-0.5 rounded ${feature.color.replace('bg-', 'text-').replace('-50', '-600')} bg-white border border-current opacity-70`}>
              Feature {feature.id}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-jp-navy leading-tight mb-6 whitespace-pre-line tracking-tight">
            {feature.title}
          </h3>
          
          <div className="w-12 h-1 bg-gray-200 mb-8 rounded-full"></div>
        </div>
        
        <ul className="space-y-5 mb-10">
          {feature.points.map((point, i) => (
            <li key={i} className="flex items-start gap-4 group">
              <div className="mt-1 flex-shrink-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${feature.color}`}>
                  <CheckCircle2 size={14} className="stroke-[3px]" aria-hidden="true" />
                </div>
              </div>
              <span className="font-bold text-gray-700 text-base md:text-lg leading-snug group-hover:text-jp-navy transition-colors">{point}</span>
            </li>
          ))}
        </ul>
        
        <p className="text-gray-500 leading-relaxed text-base mb-10 pl-6 border-l-2 border-gray-100">
          {feature.desc}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#register" className="inline-flex items-center text-white bg-jp-navy px-10 py-4 rounded-full font-bold hover:bg-jp-blue transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group">
            詳細をチェック <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Image Showcase - Adjusted to 60% */}
      <div className="w-full lg:basis-[60%] flex-shrink-0">
        <div className="relative group">
            {/* Soft decorative background element */}
            <div className={`absolute -inset-10 ${feature.reverse ? 'bg-gradient-to-tr' : 'bg-gradient-to-tl'} from-gray-50/50 to-transparent rounded-full opacity-40 blur-3xl -z-10`}></div>
            
            {/* Main Image Slider Container */}
            <div className="relative z-10 w-full overflow-hidden transition-all duration-700">
                <div className="relative aspect-[16/10] overflow-hidden group/slider cursor-zoom-in" onClick={() => feature.onImageClick(feature.images[activeIndex])}>
                    <div className="flex w-full h-full transition-transform duration-700 cubic-bezier(0.23, 1, 0.32, 1)" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {feature.images.map((img, idx) => (
                          <div key={idx} className="w-full h-full flex-shrink-0 relative">
                              <img 
                                src={img} 
                                alt={`${feature.title} - イメージ ${idx + 1}`} 
                                className="w-full h-full object-contain" 
                                loading="lazy" 
                              />
                              
                              {/* Interaction Overlay */}
                              <div className="absolute inset-0 bg-transparent group-hover/slider:bg-jp-navy/[0.02] transition-colors duration-500 flex items-center justify-center">
                                <div className="bg-white/95 backdrop-blur-sm text-jp-navy flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl scale-0 group-hover/slider:scale-100 transition-all duration-300 transform -translate-y-6 group-hover/slider:translate-y-0 border border-gray-100">
                                  <ZoomIn size={20} className="text-jp-blue" />
                                  <span className="text-sm font-black tracking-tight">クリックで拡大表示</span>
                                </div>
                              </div>
                          </div>
                        ))}
                    </div>
                    
                    {/* Minimalist Navigation Controls */}
                    <button 
                      onClick={toggleImage} 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-jp-navy hover:text-white z-20 border border-gray-100"
                      aria-label="前へ"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={toggleImage} 
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-jp-navy hover:text-white z-20 border border-gray-100"
                      aria-label="次へ"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Clean Bottom Navigation Dots */}
                    <div className="absolute bottom-2 inset-x-0 flex justify-center items-center gap-2 z-20">
                      {feature.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                          className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === idx ? 'w-10 bg-jp-navy' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                        />
                      ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </article>
  );
};

const ServiceFeatures: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const features = [
    {
      id: "01",
      title: "「売れるキーワード」を\n逃さず見つける",
      points: ["数百・数千の関連ワードを瞬時に抽出", "競合の流入ワード・注文ワードまで把握可能", "SEO対策に必要な検索順位を自動追跡"],
      desc: "Amazonでの集客に欠かせないキーワードを多角的に分析。ビッグデータに基づいた正確な検索ボリュームで、确実なSEO戦略を立てられます。",
      icon: Search,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122311423206327.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122311422558901.jpg"
      ],
      color: "bg-blue-50 text-blue-600",
      accentBorder: "border-blue-100",
      reverse: false
    },
    {
      id: "02",
      title: "次のヒット商品を\n一歩先取りする市場分析",
      points: ["トレンド商品・急成長商品を自動選定", "ニッチなブルーオーシャン市場を即発見", "需要・競争・利益性を同時にスコアリング"],
      desc: "どのカテゴリーが今伸びているのか、参入余地はあるのか。市場の「今」と「未来」を数据で可視化し、仕入れの失敗を防ぎます。",
      icon: BarChart3,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024535802.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024642132.jpg"
      ],
      color: "bg-green-50 text-green-600",
      accentBorder: "border-green-100",
      reverse: true
    },
    {
      id: "03",
      title: "ライバルの裏側を\nデータで完全可視化",
      points: ["販売数・売上・在庫推移をリアルタイム監視", "レビュー分析で顧客の不満点を抽出", "広告戦略・キーワードの入札倾向を把握"],
      desc: "競合の売上数据から広告の打ち方まで、丸裸にします。後発からでも勝てるポイントを見つけ出し、効率的な差別化を実現します。",
      icon: Users,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024542448.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024551066.jpg"
      ],
      color: "bg-purple-50 text-purple-600",
      accentBorder: "border-purple-100",
      reverse: false
    },
    {
      id: "04",
      title: "運営を加速させる\nAIカタログ作成補助",
      points: ["商品紹介文をAIが最適化して自動生成", "Keepa API連携で詳細な波形データを統合", "利益計算・関税シミュレーター搭載"],
      desc: "魅力的な商品ページをわずか数秒で作成。数据に裏打ちされたキーワードを盛り込み、AIが「売れる」構成をご提案します。",
      icon: Zap,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122304295488924.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122304300763278.jpg"
      ],
      color: "bg-amber-50 text-amber-600",
      accentBorder: "border-amber-100",
      reverse: true
    },
    {
      id: "05",
      title: "AIがあなたの\n最強分析アシスタントに",
      points: ["膨大なデータをAIが要約・アドバイス", "複雑なKeepa曲線を瞬時にテキスト解析", "次に打つべき施策をAIが論理的に提案"],
      desc: "分析の仕方がわからなくても大丈夫。AIが数据から重要な倾向を読み取り、あなたが次に何をすべきか具体的なアクションを提示します。",
      icon: Cpu,
      images: [
        "https://picsum.photos/1200/800?random=ai_1",
        "https://picsum.photos/1200/800?random=ai_2"
      ],
      color: "bg-red-50 text-red-600",
      accentBorder: "border-red-100",
      reverse: false
    }
  ];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-28 relative">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[14rem] font-black text-gray-50/60 opacity-60 select-none -z-10">CORE</span>
          <div className="relative z-10">
            <span className="text-jp-blue font-bold tracking-[0.4em] text-sm sm:text-base uppercase mb-4 block">Functions</span>
            <h2 className="text-3xl sm:text-5xl font-black text-jp-navy mt-4 leading-tight">
              Amazon運営を加速する<br className="sm:hidden"/>5つのコア機能
            </h2>
            <div className="w-16 h-1.5 bg-jp-cta mx-auto mt-10 rounded-full"></div>
          </div>
        </div>
        
        {/* Features Content */}
        <div className="space-y-32 lg:space-y-56 max-w-7xl mx-auto">
          {features.map((f) => (
            <FeatureRow key={f.id} feature={{...f, onImageClick: (url) => setZoomedImage(url)}} />
          ))}
        </div>
      </div>

      {/* Image Zoom Modal - Higher contrast for detailed viewing */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-jp-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setZoomedImage(null)}
        >
          <div className="absolute top-8 right-8 flex items-center gap-6">
            <span className="text-white/30 text-xs font-bold tracking-widest hidden md:inline">CLOSE BY CLICKING BACKGROUND</span>
            <button 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-90"
              onClick={() => setZoomedImage(null)}
            >
              <X size={28} />
            </button>
          </div>
          
          <div className="relative max-w-full max-h-full flex items-center justify-center p-4">
            <img 
              src={zoomedImage} 
              alt="拡大画像" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_120px_rgba(0,0,0,0.6)] animate-in zoom-in-95 duration-500 bg-white" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceFeatures;
