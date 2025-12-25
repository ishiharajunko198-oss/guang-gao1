import React from 'react';
import { HeadphonesIcon, BookOpen, Video } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
         <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            導入後も安心の充実サポート
          </h2>
          <p className="text-gray-600 mt-2">
            ツールを使いこなしていただくため、万全の体制を整えています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-jp-blue/30 transition-colors">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-jp-blue">
              <HeadphonesIcon size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">無料相談</h3>
            <p className="text-sm text-gray-600">
              Googleミーティング、ZOOMなどにてお打ち合わせを対応させていただきます。お気軽にご連絡ください。
            </p>
          </div>

          <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-jp-blue/30 transition-colors">
             <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-jp-blue">
              <BookOpen size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">充実のマニュアル完備</h3>
            <p className="text-sm text-gray-600">
              機能ごとの詳細な図解マニュアルと動画をご用意。初心者の方でも迷わずご操作いただけます。
            </p>
          </div>

          <div className="text-center p-6 rounded-lg border border-gray-100 hover:border-jp-blue/30 transition-colors">
             <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-jp-blue">
              <Video size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">定期ウェビナー開催</h3>
            <p className="text-sm text-gray-600">
            ツールの活用方法だけでなく、最新のAmazon運用ノウハウなどを解説する限定セミナーもご用意しております。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;