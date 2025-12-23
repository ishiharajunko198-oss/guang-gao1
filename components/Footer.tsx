import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jp-navy text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://www.sellersprite.jp/assets/images/SellerSprite_logo_EN.svg" 
                alt="SellerSprite(セラースプライト)" 
                className="h-8 w-auto brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Amazon出品者のためのオールインワン分析ツール。<br/>
              データに基づいた意思決定で、あなたのECビジネスを次のステージへ。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 border-b border-gray-600 pb-2 inline-block">サービス</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">機能一覧</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">料金プラン</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">導入事例</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 border-b border-gray-600 pb-2 inline-block">会社情報</h4>
             <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">運営会社</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
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