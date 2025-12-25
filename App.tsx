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
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#ff9900] selection:text-white">
      <Header />
      <main>
        <Hero />
        <IntroPoints />
        <PainPoints />
        <ServiceFeatures />
        
        {/* Comparison (FeatureTable) の直前に CTA を配置 */}
        <MidSectionCTA />
        
        <FeatureTable />
        <ExtensionClickView />
        <InfluencerShowcase />
        <Testimonials />
        <Support />
        
        {/* Q&A の前の位置は維持 */}
        <MidSectionCTA />
        
        <Faq />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;