'use client';
import React, { useEffect } from 'react';
import LiveClaimsNotification from '@/components/ui/LiveClaimsNotification';
import TrafficCounter from '@/components/ui/TrafficCounter';
import SettlementCarousel from '@/components/ui/SettlementCarousel';
import CustomFaqSection from '@/components/ui/CustomFaqSection';

function QuizWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://quiz-widget.netlify.app/embed.js';
    script.async = true;
    
    script.onload = () => {
      if (typeof window.qw === 'function') {
        window.qw('init', {
          quizId: '5f1d1994-5338-4d75-a58a-01ed5d4f0aaf',
          apiUrl: window.location.origin + '/api',
          debug: true,
          onQuestionChange: (questionNumber) => {
            window.dispatchEvent(
              new CustomEvent('quizProgress', { detail: { questionNumber } })
            );
          }
        });
      }
    };
    
    script.onerror = (error) => {
      console.error('Error loading quiz widget script:', error);
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="quiz-widget" className="w-full h-full" />;
}

export default function QuizPage() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonStyle = "bg-[#d31516] text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity";

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Fixed Header */}
<div className="fixed w-full top-0 z-50 bg-white">
  <div className="border-b">
    <div className="w-full">
      <div className="h-[60px] px-6 flex items-center">
        <button className="p-1 absolute left-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className={`flex-1 flex ${isScrolled ? 'justify-start pl-12' : 'justify-center'}`}>
          <div className="h-12">
            <img 
              src="/images/pj-logo1.png" 
              alt="PJ Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
        {isScrolled && (
          <button className={`${buttonStyle} mr-2`}>
            Call Now
          </button>
        )}
      </div>
    </div>
  </div>
  <div className="border-b shadow-sm">
    <TrafficCounter />
  </div>
</div>

      <main className="flex flex-col items-center w-full">
        {/* Combined Quiz and Logos Section with white background */}
        <div className="w-full bg-white">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="pt-[120px]">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-800">
                Join Thousands Pursuing Justice 
              </h1>
              
              <div className="w-full">
                <QuizWidget />
              </div>

              <div className="pt-8">
                <h2 className="text-lg font-semibold text-center mb-6 text-slate-800">As Seen On:</h2>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 max-w-4xl mx-auto pb-8">
                  <img src="/images/bbc.png" alt="BBC" className="h-8 md:h-10 object-contain" />
                  <img src="/images/nyt.png" alt="The New York Times" className="h-8 md:h-10 object-contain" />
                  <img src="/images/forbes.png" alt="Forbes" className="h-8 md:h-10 object-contain" />
                  <img src="/images/usa.png" alt="USA Today" className="h-8 md:h-10 object-contain" />
                  <img src="/images/foxnews.png" alt="Fox News" className="h-8 md:h-10 object-contain" />
                  <img src="/images/yahoo.png" alt="Yahoo!" className="h-8 md:h-10 object-contain" />
                  <img src="/images/abc.png" alt="ABC" className="h-8 md:h-10 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settlement Section */}
        <div className="w-full bg-[#0098d9]">
          <div className="max-w-[900px] mx-auto px-4 py-8">
            <SettlementCarousel />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full bg-slate-50 py-16">
          <div className="w-full max-w-4xl mx-auto px-4">
            <CustomFaqSection />
            <div className="mt-8 text-center">
              <button className={buttonStyle}>
                Chat With Us Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <LiveClaimsNotification />
    </div>
  );
}