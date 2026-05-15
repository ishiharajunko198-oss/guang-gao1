import React, { useState, useEffect, useCallback } from 'react';
// import Header from './components/Header';
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
// import Footer from './components/Footer';
// import StickyCTA from './components/StickyCTA';
import MidSectionCTA from './components/MidSectionCTA';
import ExtensionDownloadButtons from './components/ExtensionDownloadButtons';
import RequestMaterials from './components/RequestMaterials';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpenModal(false)
  }, [openModal, setOpenModal])

  useEffect(() => {
    if (openModal) {
      document.addEventListener("keydown", handleKey)
    }
    return () => {
      document.removeEventListener("keydown", handleKey)
    }
  }, [openModal, handleKey])

  return (
    <div
      className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#ff9900] selection:text-white">
      {/*<Header onLogoClick={navigateToHome} />*/}
      <main>
        <Hero {...{setOpenModal}}/>
        <RequestMaterials isOpen={openModal} onClose={() => setOpenModal(false)}/>
        <Marquee/>
        <PainPoints/>
        <ServiceFeatures/>
        <MidSectionCTA/>
        <FeatureTable/>
        <ExtensionClickView/>
        <ExtensionDownloadButtons/>
        <InfluencerShowcase/>
        <Testimonials/>
        <Support/>
        <MidSectionCTA/>
        <Faq/>
        <IntroPoints/>
      </main>
      {/*<Footer />*/}
      {/*{view === 'home' && <StickyCTA />}*/}
    </div>
  );
};

export default App;
