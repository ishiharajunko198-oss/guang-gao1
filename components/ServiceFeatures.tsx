import React, { useState } from 'react';
import { Search, BarChart3, Users, Zap, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Cpu, ZoomIn, Target, FileText } from 'lucide-react';

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

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % feature.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + feature.images.length) % feature.images.length);
  };

  return (
    <article className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
      {/* Text Content */}
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
          
          <div className="w-12 h-1 bg-[#ff9900] mb-8 rounded-full"></div>
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
        
        {/* Button container removed as per user request */}
      </div>

      {/* Image Slider */}
      <div className="w-full lg:basis-[60%] flex-shrink-0">
        <div className="relative group">
            <div className={`absolute -inset-10 ${feature.reverse ? 'bg-gradient-to-tr' : 'bg-gradient-to-tl'} from-orange-50/20 to-transparent rounded-full opacity-30 blur-3xl -z-10`}></div>
            
            <div className="relative z-10 w-full overflow-hidden bg-transparent">
                <div className="relative aspect-[16/10] overflow-hidden group/slider cursor-zoom-in" onClick={() => feature.onImageClick(feature.images[activeIndex])}>
                    <div 
                      className="flex w-full h-full transition-transform duration-700 cubic-bezier(0.23, 1, 0.32, 1)" 
                      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {feature.images.map((img, idx) => (
                          <div key={idx} className="w-full h-full flex-shrink-0 relative flex items-center justify-center">
                              <img src={img} alt="Preview" className="w-full h-full object-contain" />
                              <div className="absolute inset-0 bg-transparent group-hover/slider:bg-orange-500/5 transition-colors duration-500 flex items-center justify-center">
                                <div className="bg-white/95 backdrop-blur-sm text-[#ff9900] flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl scale-0 group-hover/slider:scale-100 transition-all duration-300 transform -translate-y-6 group-hover/slider:translate-y-0 border border-gray-100">
                                  <ZoomIn size={20} />
                                  <span className="text-sm font-black">拡大表示</span>
                                </div>
                              </div>
                          </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:text-[#ff9900] opacity-0 group-hover/slider:opacity-100 z-20 transition-all">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:text-[#ff9900] opacity-0 group-hover/slider:opacity-100 z-20 transition-all">
                      <ChevronRight size={20} />
                    </button>

                    {/* Indicator Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {feature.images.map((_, idx) => (
                        <button key={idx} onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#ff9900] w-6' : 'bg-gray-300'}`} />
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
      desc: "月間検索ボリューム・競合状況・PPC入札額などを一括分析し、无駄な施策を減らし、購買につながるキーワード戦略を実現できます。感覚や経験に頼らない、データ主導のAmazon SEO・集客を今すぐ始められます。",
      icon: Search,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122311423206327.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122311422558901.jpg"
      ],
      color: "bg-orange-50 text-[#ff9900]",
      accentBorder: "border-orange-100",
      reverse: false
    },
    {
      id: "02",
      title: "人より先一歩で\n次のヒット商品をリサーチ",
      points: ["トレンド商品・急成長商品を選定", "ニッチなブルーオーシャン市場を即発見", "需要・競争・利益性を同時に分析"],
      desc: "「なぜ売れるのか」「今から参入できるのか」を数値で判断します。市場規模・成長性・競争難易度・利益余地をまとめて可視化し、失敗リスクを抑えながら、勝てる商品だけを選び抜きます。",
      icon: BarChart3,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024535802.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024642132.jpg"
      ],
      color: "bg-amber-50 text-amber-600",
      accentBorder: "border-amber-100",
      reverse: true
    },
    {
      id: "03",
      title: "ライバルの裏側を\nデータで完全可視化",
      points: ["販売数・売上・在庫推移をリアルタイム監視", "レビュー分析で顧客の不満点を抽出", "広告のキーワード戦略を把握"],
      desc: "竞合の売上データから広告の打ち方まで、丸裸にします。後発からでも勝てるポイントを見つけ出し、効率的な差別化を実現します。",
      icon: Users,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024542448.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122301024551066.jpg"
      ],
      color: "bg-orange-50 text-[#ff9900]",
      accentBorder: "border-orange-100",
      reverse: false
    },
    {
      id: "04",
      title: "無料機能・運営効率化",
      points: ["商品カタログ作成にAIが補助", "keepa API連携でkeepaデータを無料提供", "正規リンク、集合リンク、「カートに入れる」リンクを簡単作成"],
      desc: "商品カタログ作成の手間とミスを減らし、誰でも安定した品質のページを短時間で作成できます。さらに、keepa代替機能で価格推移・ランキング変動のチェックもスムーズ。",
      icon: Target,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122304295488924.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122401435498564.jpg"
      ],
      color: "bg-amber-50 text-amber-600",
      accentBorder: "border-amber-100",
      reverse: true
    },
    {
      id: "05",
      title: "AIを最強のアシスタントに！",
      points: ["竞合商品をAIが特定・提案", "市場全体の状況を自動分析", "Keepaグラフをまとめてテキスト解析"],
      desc: "初心者も安心！何時間もかけて行っていた競合探し、市場分析、グラフ読み取りをAI（Gemini搭載）が一瞬で代行。複雑なデータを整理し、「今見るべきポイント」だけをわかりやすく提示します。",
      icon: FileText,
      images: [
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122404453944341.jpg",
        "https://o.sellersprite.com/docs/202512/sellersprite-2025122404454110637.jpg"
      ],
      color: "bg-orange-50 text-[#ff9900]",
      accentBorder: "border-orange-100",
      reverse: false
    }
  ];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-28 relative">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[14rem] font-black text-orange-50/40 select-none -z-10">CORE</span>
          <div className="relative z-10">
            <span className="text-[#ff9900] font-bold tracking-[0.4em] text-sm uppercase mb-4 block">Functions</span>
            <h2 className="text-3xl sm:text-5xl font-black text-jp-navy mt-4 leading-tight">選ばれる「５つの強力な領域」</h2>
            <div className="w-16 h-1.5 bg-[#ff9900] mx-auto mt-10 rounded-full"></div>
          </div>
        </div>
        
        <div className="space-y-32 lg:space-y-48 max-w-7xl mx-auto">
          {features.map((f) => (
            <FeatureRow key={f.id} feature={{...f, onImageClick: (url) => setZoomedImage(url)}} />
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-jp-navy/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setZoomedImage(null)}
        >
          <img src={zoomedImage} alt="Zoom" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-500 bg-white" />
        </div>
      )}
    </section>
  );
};

export default ServiceFeatures;