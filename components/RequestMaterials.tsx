
import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ChevronRight, Loader2, Send, Download, FileText, AlertCircle, ShieldCheck, Lock, ChevronDown } from 'lucide-react';

const PRIVACY_POLICY_URL = "https://www.sellersprite.com/jp/v3/knowledge/feature/privacy-policy";

const RequestMaterials: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // SEO Optimization for the Request Materials page
  useEffect(() => {
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc?.getAttribute('content');

    // Update Title and Description as requested (Attractive wording)
    document.title = "【無料】Amazon専門家の成功資料を大放送！ | セラースプライト導入ガイド";
    if (metaDesc) {
      metaDesc.setAttribute('content', "この機会を逃さず、無料の限定資料をぜひお受け取りください。Amazon売上最大化の秘訣が詰まった全42ページのガイドです。");
    }

    return () => {
      // Restore original tags when navigating away
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get('name') as string;
    const kana = formData.get('kana') as string;
    const company = formData.get('company') as string;
    const dept = formData.get('dept') as string;
    const genre = formData.get('genre') as string;
    const email = formData.get('email') as string;
    const tel = formData.get('tel') as string;
    const agreed = formData.get('agreed') === 'on';

    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "氏名を入力してください";
    if (!kana.trim()) newErrors.kana = "フリガナを入力してください";
    if (!company.trim()) newErrors.company = "会社名を入力してください";
    if (!dept.trim()) newErrors.dept = "部署名を入力してください";
    if (!genre) newErrors.genre = "ジャンルを選択してください";
    if (!tel.trim()) newErrors.tel = "電話番号を入力してください";
    
    if (!email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!validateEmail(email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }
    
    if (!agreed) newErrors.agreed = "プライバシーポリシーへの同意が必要です";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const amazonCategories = [
    "ホーム＆キッチン", "家電＆カメラ", "おもちゃ", "ホビー", "ファッション", "ビューティー", "ドラッグストア", "食品・飲料・お酒", "ペット用品", "ベビー＆マタニティ", "スポーツ＆アウトドア", "車＆バイク用品", "DIY・工具・ガーデン", "楽器・音響機器", "文房具・オフィス用品", "パソコン・周辺機器", "本", "その他"
  ];

  const interestOptions = [
    "料金プランのお見積りがほしい", "サービスの詳細を知りたい", "お打ち合わせを希望する", "無料トライアルを試したい", "デモの実演を見たい", "その他（自由記入欄）"
  ];

  if (isSuccess) {
    return (
      <div className="pt-40 pb-32 min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 font-['Noto_Sans_JP']">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100 animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black text-jp-navy mb-4">送信が完了しました</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            ご入力いただき、誠にありがとうございます。資料の準備が整いました。<br />
            ご質問やご要望に対して、通常1営業日以内に担当者よりご連絡させていただきます。
          </p>
          <div className="p-8 bg-slate-50 rounded-2xl flex flex-col items-center border border-gray-100 mb-8">
             <FileText size={48} className="text-[#ff9900] mb-4" />
             <p className="font-bold text-jp-navy mb-6">セラースプライト会社紹介資料.pdf</p>
             <a 
               href="./sellersprite_materials.pdf" 
               download="セラースプライト会社紹介資料.pdf"
               className="bg-[#ff9900] hover:bg-[#ff7700] text-white px-10 py-4 rounded-full font-black flex items-center gap-3 shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
             >
                <Download size={20} />
                資料をダウンロードする
             </a>
          </div>
          <button onClick={() => window.location.hash = ''} className="text-gray-400 font-bold hover:text-jp-navy underline text-sm transition-colors">
            トップページに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#f8fafc] min-h-screen font-['Noto_Sans_JP']">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white shadow-[0_40px_100px_rgba(15,44,76,0.08)] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* 左侧: 资料内容介绍 (Introduction sections with H tags for SEO) */}
          <aside className="lg:w-1/3 bg-[#f1f5f9] p-8 lg:p-12 border-r border-gray-200">
            <h2 className="text-xl font-black text-jp-navy mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-jp-cta rounded-full"></span>
              資料請求のご案内
            </h2>
            
            <p className="text-gray-700 text-sm font-bold leading-loose mb-8">
              SellerSprite(セラースプライト)にご興味をお持ちいただきありがとうございます。
            </p>

            <div className="mb-10">
              <h3 className="font-black text-jp-navy text-sm mb-5 flex items-center gap-2">
                <div className="p-1 bg-white rounded shadow-sm">
                  <ChevronRight size={14} className="text-jp-cta" />
                </div>
                資料の内容（全42ページ）
              </h3>
              <ul className="space-y-4 text-gray-600 text-[13px] font-medium">
                {[
                  "開発会社について", 
                  "セラースプライトとは", 
                  "セラースプライトで解決できる課題", 
                  "コア機能及び活用方法", 
                  "セミナー開催など",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-jp-cta mt-0.5">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-[12px] text-gray-500 leading-relaxed border-t border-gray-200 pt-8">
              <p>※サービスに関するご質問や導入のご相談は、ここでもお気軽にお問い合わせください。専門のスタッフが通常1営業日以内にご連絡させていただきます。</p>
              <p>※弊社担当より製品説明会や勉強会などのご案内の連絡をさせていただくことがあります。</p>
              <p>
                ※ご記入いただいた情報につきましては、弊社からのご連絡の目的以外に利用することはありません。
                <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="text-jp-blue hover:underline font-bold ml-1">【プライバシーポリシー】</a>
              </p>
              <p className="bg-white/50 p-4 rounded-xl border border-gray-200 flex items-start gap-3">
                <ShieldCheck size={18} className="text-gray-400 shrink-0" />
                <span>
                  このサイトはGoogle reCAPTCHAによって保護されています。 
                  <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="text-jp-blue hover:underline ml-1">プライバシーポリシー</a>
                </span>
              </p>
            </div>
          </aside>

          {/* 右侧: 资料请求表单 (Main page H1 located here) */}
          <main className="lg:w-2/3 p-8 lg:p-16">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-2xl font-black text-jp-navy mb-2 tracking-tight">お問い合わせ・資料請求</h1>
              <p className="text-gray-400 text-xs">以下のフォームに必要事項をご記入ください。</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* 氏名 & フリガナ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-[13px] font-black text-jp-navy">氏名</label>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">必須</span>
                  </div>
                  <input name="name" type="text" placeholder="例：田中 太郎" className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-sm placeholder:text-[10px] xs:placeholder:text-[11px] sm:placeholder:text-sm ${errors.name ? 'border-red-400 ring-2 ring-red-50' : 'border-gray-200 focus:border-jp-cta focus:bg-white'}`} />
                  {errors.name && <p className="text-red-500 text-[11px] flex items-center gap-1 font-bold animate-pulse"><AlertCircle size={12} /> {errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-[13px] font-black text-jp-navy">フリガナ</label>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">必須</span>
                  </div>
                  <input name="kana" type="text" placeholder="例：タナカ タロウ" className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-sm placeholder:text-[10px] xs:placeholder:text-[11px] sm:placeholder:text-sm ${errors.kana ? 'border-red-400 ring-2 ring-red-50' : 'border-gray-200 focus:border-jp-cta focus:bg-white'}`} />
                  {errors.kana && <p className="text-red-500 text-[11px] flex items-center gap-1 font-bold animate-pulse"><AlertCircle size={12} /> {errors.kana}</p>}
                </div>
              </div>

              {/* 会社名 & 部署名 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-[13px] font-black text-jp-navy">会社名</label>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">必須</span>
                  </div>
                  <input name="company" type="text" placeholder="例：株式会社SellerSprite" className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-sm placeholder:text-[10px] xs:placeholder:text-[11px] sm:placeholder:text-sm ${errors.company ? 'border-red-400 ring-2 ring-red-50' : 'border-gray-200 focus:border-jp-cta focus:bg-white'}`} />
                  {errors.company && <p className="text-red-500 text-[11px] flex items-center gap-1 font-bold animate-pulse"><AlertCircle size={12} /> {errors.company}</p>}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-[13px] font-black text-jp-navy">部署名</label>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">必須</span>
                  </div>
                  <input name="dept" type="text" placeholder="例：EC事業部（なしの場合は「なし」）" className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-sm placeholder:text-[10px] xs:placeholder:text-[11px] sm:placeholder:text-sm ${errors.dept ? 'border-red-400 ring-2 ring-red-50' : 'border-gray-200 focus:border-jp-cta focus:bg-white'}`} />
                  {errors.dept && <p className="text-red-500 text-[11px] flex items-center gap-1 font-bold animate-pulse"><AlertCircle size={12} /> {errors.dept}</p>}
                </div>
              </div>

              {/* ジャンル (Genre Dropdown) */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <label className="text-[13px] font-black text-jp-navy">ジャンル</label>
                  <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">必須</span>
                </div>
                <div className="relative">
                  <select name="genre" className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-sm appearance-none pr-12 ${errors.genre ? 'border-red-400 ring-2 ring-red-50' : 'border-gray-200 focus:border-jp-cta focus:bg-white'}`} defaultValue="">
                    <option value="" disabled>販売ジャンルを選択してください</option>
                    {amazonCategories.map((cat, idx) => (
                      <option key={idx} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={20} />
                  </div>
                </div>
                {errors.genre && <p className="text-red-500 text-[11px] flex items-center gap-1 font-bold animate-pulse"><AlertCircle size={12} /> {errors.genre}</p>}
              </div>

              {/* メールアドレス & 電話番号 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-[13px] font-black text-jp-navy">メールアドレス</label>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">必須</span>
                  </div>
                  <input name="email" type="email" placeholder="例：sellersprite@example.com" className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-sm placeholder:text-[10px] xs:placeholder:text-[11px] sm:placeholder:text-sm ${errors.email ? 'border-red-400 ring-2 ring-red-50' : 'border-gray-200 focus:border-jp-cta focus:bg-white'}`} />
                  {errors.email && <p className="text-red-500 text-[11px] flex items-center gap-1 font-bold animate-pulse"><AlertCircle size={12} /> {errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-[13px] font-black text-jp-navy">電話番号</label>
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">必須</span>
                  </div>
                  <input name="tel" type="tel" placeholder="例：03-1234-5678" className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-sm placeholder:text-[10px] xs:placeholder:text-[11px] sm:placeholder:text-sm ${errors.tel ? 'border-red-400 ring-2 ring-red-50' : 'border-gray-200 focus:border-jp-cta focus:bg-white'}`} />
                  {errors.tel && <p className="text-red-500 text-[11px] flex items-center gap-1 font-bold animate-pulse"><AlertCircle size={12} /> {errors.tel}</p>}
                </div>
              </div>

              {/* 興味・関心のあるサービス (Checkboxes) */}
              <div className="space-y-4">
                <label className="block text-[13px] font-black text-jp-navy">資料請求以外、興味・関心のあるサービス（任意）</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((option, idx) => (
                    <label key={idx} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl cursor-pointer hover:bg-orange-50 transition-colors group">
                      <input type="checkbox" name="interests" value={option} className="w-4 h-4 accent-jp-cta rounded border-gray-300" />
                      <span className="text-[12px] sm:text-[13px] text-gray-700 font-medium group-hover:text-jp-navy">{option}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block text-[12px] text-gray-500 mb-2">その他（自由記入欄）</label>
                  <textarea name="message" rows={3} placeholder="具体的なご要望やご質問があればこちらにご記入ください（小規模なデモ希望など）" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-jp-cta focus:bg-white outline-none transition-all text-sm resize-none placeholder:text-[10px] xs:placeholder:text-[11px] sm:placeholder:text-sm"></textarea>
                </div>
              </div>

              {/* 同意事项 */}
              <div className="bg-[#fffbf2] p-6 rounded-2xl border border-[#ffecb3]">
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">
                   ご提供いただいた情報は当社の<a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="text-jp-blue underline font-bold">プライバシーポリシー</a>に基づき適切に管理いたします。内容をご確認いただき、同意される方のみ送信ボタンを押してください。
                </p>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input name="agreed" type="checkbox" className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white peer-checked:bg-jp-cta peer-checked:border-jp-cta transition-all"></div>
                    <CheckCircle2 size={12} className="absolute top-1 left-1 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-black text-jp-navy group-hover:text-jp-cta transition-colors">
                    個人情報の取扱いに同意します <span className="text-red-500 font-bold">*</span>
                  </span>
                </label>
                {errors.agreed && <p className="text-red-500 text-[11px] mt-2 font-bold animate-pulse">{errors.agreed}</p>}
              </div>

              {/* 送信按钮 */}
              <div className="flex flex-col items-center gap-4 pt-4">
                <button disabled={isSubmitting} type="submit" className="w-full md:w-[360px] bg-jp-cta hover:bg-jp-ctaHover text-white font-black py-5 rounded-full shadow-xl shadow-orange-500/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0 active:scale-95">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  <span className="text-xl">送 信</span>
                </button>
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-medium">
                  <Lock size={12} />
                  <span>SSL通信によりデータは暗号化されて送信されます。</span>
                </div>
              </div>

            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RequestMaterials;
