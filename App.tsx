import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroPoints from './components/IntroPoints';
import PainPoints from './components/PainPoints';
import ServiceFeatures from './components/ServiceFeatures';
import FeatureTable from './components/FeatureTable';
import ExtensionClickView from './components/ExtensionClickView';
import InfluencerShowcase from './components/InfluencerShowcase';
import Testimonials from './components/Testimonials';
import Support from './components/Support';
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import MidSectionCTA from './components/MidSectionCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-jp-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <IntroPoints />
        <PainPoints />
        <ServiceFeatures />
        <FeatureTable />
        <MidSectionCTA />
        <ExtensionClickView />
        <InfluencerShowcase />
        <Testimonials />
        <Support />
        <MidSectionCTA />
        <Faq />
        {/* Final CTA Section before Footer */}
        <section className="py-24 bg-gradient-to-br from-jp-blue to-jp-navy text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Amazonでの成功を、<br/>ここから始めましょう。
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              まずは7日間の無料トライアルで、<br className="md:hidden"/>その効果を実感してください。<br/>
              クレジットカードの登録は不要です。
            </p>
            <a 
              id="register"
              href="#" 
              className="inline-block bg-jp-cta hover:bg-jp-ctaHover text-white text-xl font-bold py-4 px-12 rounded-full shadow-2xl transform transition hover:-translate-y-1 hover:shadow-orange-500/50"
            >
              今すぐ無料でスタート
            </a>
            <p className="text-blue-200 text-sm mt-4">
              ※ 無料期間終了後、自動で課金されることはありません。
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;