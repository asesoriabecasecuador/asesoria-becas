import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import BotFlowExplanation from './components/BotFlowExplanation';
import EnfoqueInternacional from './components/EnfoqueInternacional';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const [conversionCount, setConversionCount] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Load conversions from memory if page refreshes
  useEffect(() => {
    const saved = localStorage.getItem('ecuadorglobal_conversion_clicks');
    if (saved) {
      setConversionCount(parseInt(saved, 10));
    }
  }, []);

  const handleConversionTrigger = () => {
    const nextCount = conversionCount + 1;
    setConversionCount(nextCount);
    localStorage.setItem('ecuadorglobal_conversion_clicks', nextCount.toString());
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('como-funciona');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBot = (serviceName: string) => {
    setSelectedService(serviceName);
    handleScrollToSimulator();
    
    // Auto-reset selection after a brief delay so they can re-trigger it
    setTimeout(() => {
      setSelectedService(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] selection:bg-[#0E3572] selection:text-white relative">
      
      {/* Dynamic top progress line indicating scroll position */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-100 bg-[#E6B51E]" />

      {/* Global Navigation bar */}
      <Navigation 
        onSimulateClick={handleScrollToSimulator} 
        onConversion={handleConversionTrigger}
        conversionCount={conversionCount}
      />

      {/* Premium value propositions */}
      <Hero 
        onSimulateClick={handleScrollToSimulator} 
        onConversion={handleConversionTrigger}
        conversionCount={conversionCount}
      />

      {/* Services Detailed Breakdown with interactive diagnostics */}
      <Services 
        onSelectServiceForBot={handleSelectServiceForBot}
      />

      {/* ELI5 Bot Flow Explanation */}
      <BotFlowExplanation 
        initialService={selectedService}
        onConversion={handleConversionTrigger}
      />

      {/* Underlining the Target: Ecuadorians and academic generalities */}
      <EnfoqueInternacional onConversion={handleConversionTrigger} />

      {/* Case studies / Testimonials Carousel */}
      <Testimonials />

      {/* Complete collapsible FAQs accordion */}
      <FAQs />

      {/* Pure conversion CTA driving directly to https://t.me/asesordebecas_bot */}
      <CTASection 
        onConversion={handleConversionTrigger}
      />

      {/* Independent advisory cabinet Footer with SVG emblems */}
      <Footer />

    </div>
  );
}
