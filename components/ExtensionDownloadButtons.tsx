import React from 'react';
import { Download } from 'lucide-react';

const ExtensionDownloadButtons: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-4 md:mb-0">
             <p className="text-jp-navy font-black text-xl mb-2">今すぐ拡張機能を無料インストール</p>
             <p className="text-gray-500 text-sm font-medium">Amazonのページ上で直接データを分析できます</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://chromewebstore.google.com/detail/sellersprite-amazon-resea/lnbmbgocenenhhhdojdielgnmeflbnfb?hl=ja&utm_source=ext_sidebar" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-gray-700 border-2 border-gray-200 hover:border-[#ff9900] hover:text-[#ff9900] transition-all px-8 py-4 rounded-xl shadow-sm hover:shadow-md group min-w-[280px]"
            >
              <Download className="text-gray-400 group-hover:text-[#ff9900] transition-colors" />
              <div className="text-left">
                <span className="block text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">Chrome Web Store</span>
                <span className="block text-base font-black">Chromeに無料で追加</span>
              </div>
            </a>
            <a 
              href="https://microsoftedge.microsoft.com/addons/detail/sellersprite-%E3%82%AD%E3%83%BC%E3%83%AF%E3%83%BC%E3%83%89%E6%9C%80%E9%81%A9%E5%8C%96%E3%80%81%E3%83%93/ecanjpklimgeijdcdpdfoooofephbbln?hl=ja-JP&gl=JP" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-gray-700 border-2 border-gray-200 hover:border-[#ff9900] hover:text-[#ff9900] transition-all px-8 py-4 rounded-xl shadow-sm hover:shadow-md group min-w-[280px]"
            >
              <Download className="text-gray-400 group-hover:text-[#ff9900] transition-colors" />
              <div className="text-left">
                <span className="block text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">Microsoft Edge Add-ons</span>
                <span className="block text-base font-black">Edgeに無料で追加</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionDownloadButtons;