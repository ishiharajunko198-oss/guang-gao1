import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      name: "田中 様",
      role: "法人 Amazon運営担当",
      image: "https://picsum.photos/100/100?random=30",
      content: "導入前はリサーチに1日3時間かかっていましたが、今では30分で完了します。浮いた時間で商品開発に注力でき、売上が昨対比200%になりました。",
      rating: 5
    },
    {
      name: "佐藤 様",
      role: "個人事業主",
      image: "https://picsum.photos/100/100?random=31",
      content: "競合分析機能が凄いです。ライバルがどんなキーワードで集客しているか丸わかりなので、後発でも勝てる商品ページが作れました。",
      rating: 5
    },
    {
      name: "鈴木 様",
      role: "D2Cブランド マネージャー",
      image: "https://picsum.photos/100/100?random=32",
      content: "初心者にも分かりやすい画面で、データ分析が苦手な私でも直感的に使えました。サポートも手厚く、困った時はすぐに返信が来るので安心です。",
      rating: 4
    }
  ];

  useEffect(() => {
    // Inject AggregateRating & Individual Reviews
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "SellerSprite",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "reviewCount": reviews.length.toString()
      },
      "review": reviews.map(r => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewBody": r.content,
        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() }
      }))
    };
    script.innerHTML = JSON.stringify(reviewsSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-jp-navy text-white relative">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-jp-gold font-bold tracking-widest text-sm uppercase">Voice</span>
          <h2 className="text-3xl font-bold mt-2">
            導入企業様・ユーザー様の声
          </h2>
          <p className="text-gray-300 mt-4">
            3,000名以上のセラー様にご利用いただいています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <article key={idx} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div className="flex items-center gap-1 mb-4 text-jp-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <img src={review.image} alt={`${review.name} - ${review.role}のプロフィール写真`} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100" loading="lazy" />
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;