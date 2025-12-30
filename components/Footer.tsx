
import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const PRIVACY_POLICY_URL = "https://www.sellersprite.com/jp/v3/knowledge/feature/privacy-policy";

  // X (formerly Twitter) icon custom SVG
  const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
  );

  // LINE icon - Using bold text for maximum clarity as requested
  const LineIcon = () => (
    <span className="font-black text-[9px] tracking-tighter leading-none">LINE</span>
  );

  const snsLinks = [
    { icon: XIcon, href: "https://twitter.com/SellerSprite", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/sellersprite.jp", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@sellersprite6216/shorts", label: "YouTube" },
    { icon: LineIcon, href: "https://manager.line.biz/account/@707danrs", label: "LINE" },
  ];

  return (
    <footer className="bg-jp-navy text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://www.sellersprite.jp/assets/images/SellerSprite_logo_EN.svg" 
                alt="SellerSprite(セラースプライト)" 
                className="h-8 w-auto brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Amazon出品者のためのオールインワン分析ツール。<br/>
              データに基づいた意思決定で、あなたのECビジネスを次のステージへ.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {snsLinks.map((sns, idx) => (
                <a 
                  key={idx}
                  href={sns.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sns.label}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#ff9900] hover:text-white transition-all duration-300"
                >
                  <sns.icon />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-600 pb-2 inline-block">サービス</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.sellersprite.com/jp" className="hover:text-white transition-colors">ホームページ</a></li>
              <li><a href="https://www.sellersprite.com/jp/price" className="hover:text-white transition-colors">料金プラン</a></li>
              <li><a href="https://www.sellersprite.com/jp/v3/knowledge/feature/home" className="hover:text-white transition-colors">知識ペース</a></li>
              <li><a href="https://www.sellersprite.com/jp/v3/knowledge/experience" className="hover:text-white transition-colors">使用体験談</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 border-b border-gray-600 pb-2 inline-block">会社情報</h4>
             <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.sellersprite.com/jp/help/company-profile" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="https://www.sellersprite.com/jp/v3/knowledge/feature/terms" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-600 pb-2 inline-block">お問い合わせ</h4>
            <div className="space-y-4">
              <a 
                href="mailto:marketing-jp@sellersprite.com" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff9900] transition-colors group"
              >
                <Mail size={16} className="text-gray-500 group-hover:text-[#ff9900]" />
                marketing-jp@sellersprite.com
              </a>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                ※サービス導入、パートナー提携、取材等のご相談はこちらのメールアドレスまでお気軽にご連絡ください。
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} SellerSprite Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
