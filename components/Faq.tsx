import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "無料トライアル期間中に解約した場合、料金はかかりませんか？",
      answer: "いいえ、一切かかりません。7日間の無料期間中に解約していただければ、費用は0円です。トライアル終了後、無料会員として引き続きご利用いただけます。"
    },
    {
      question: "どの端末でご利用できますか？",
      answer: "セラースプライトは、主にパソコンのブラウザでご利用いただくツールです。拡張機能はChrome、Edge、Firefox、Safariなどブラウザに無料対応。2024年以降、iPad・Macでのご利用もサポート可能。【ご注意】大変恐縮ですが、スマートフォンにはまだ対応しておりません。"
    },
    {
      question: "Amazonの初心者でも使いこなせますか？",
      answer: "はい、無料プランをご用意しています。キーワード順位チェッカー、keepa代替など一部機能は無料でご利用いただけます。まずは7日間無料トライアルをお試しください。"
    },
    {
      question: "個人での契約は可能ですか？",
      answer: "はい、個人・法人問わずご契約いただけます。領収書の発行も可能です。"
    },
    {
      question: "どのような人におすすめですか？",
      answer: "これからAmazonで販売を始める初心者の方、リサーチに時間がかかっている方、効率的に売れるキーワードやトレンドを見つけたい方、競合の売上状況を正確に把握したい中級者以上の方など、Amazonでビジネスを行うすべての方におすすめです。"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-[#ff9900] font-bold tracking-widest text-sm uppercase">Q&A</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-gray-800 text-lg pr-8">
                  <span className="text-[#ff9900] mr-2">Q.</span>{faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-[#ff9900] flex-shrink-0" aria-hidden="true" />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0" aria-hidden="true" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-600 bg-white border-t border-gray-100">
                  <span className="text-red-500 font-bold mr-2">A.</span>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;