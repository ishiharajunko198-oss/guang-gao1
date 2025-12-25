import React, { useState, useEffect } from 'react';
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
import ExtensionDownloadButtons from './components/ExtensionDownloadButtons';
import RequestMaterials from './components/RequestMaterials';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'request'>('home');

  useEffect(() => {
    const handleRoute = () => {
      // 检查当前 URL 是否包含 #request
      if (window.location.hash.includes('#request')) {
        setView('request');
      } else {
        setView('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    // 初始执行一次
    handleRoute();

    // 监听哈希变化
    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setView('home');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#ff9900] selection:text-white">
      <Header onLogoClick={navigateToHome} />
      <main>
        {view === 'home' ? (
          <div className="animate-in fade-in duration-700">
            <Hero />
            <IntroPoints />
            <PainPoints />
            <ServiceFeatures />
            <MidSectionCTA />
            <FeatureTable />
            <ExtensionClickView />
            <ExtensionDownloadButtons />
            <InfluencerShowcase />
            <Testimonials />
            <Support />
            <MidSectionCTA />
            <Faq />
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
            <RequestMaterials />
          </div>
        )}
      </main>
      <Footer />
      {view === 'home' && <StickyCTA />}
    </div>
  );
};

export default App;