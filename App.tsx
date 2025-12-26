
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
      const hash = window.location.hash;
      const isRequestView = hash.includes('#request');
      
      // 路由视图切换判断
      if (isRequestView) {
        setView('request');
        // 进入资料请求页面时，始终滚动回顶部
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setView('home');
        
        /**
         * 极致 SEO 优化与交互体验修复：
         * 如果当前哈希是一个有效的锚点（如 #features, #testimonials, #faq），
         * 我们必须跳过强制滚动到顶部的代码，否则会干扰浏览器的原生锚点跳转行为。
         * 只有当哈希为空（回首页）或非锚点跳转时，才执行回顶操作。
         */
        const isInternalAnchor = hash && hash.startsWith('#') && hash !== '#request' && hash !== '#';
        
        if (!isInternalAnchor) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
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
