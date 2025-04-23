import { Button } from "../components/ui/button";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTrackingEvents } from "../hooks/use-tracking-events";

const EventThankYou = () => {
  const { trackLeadEvent, trackPageView } = useTrackingEvents();
  
  useEffect(() => {
    // Track page view
    trackPageView('event_thank_you');
    
    // Track lead conversion event
    trackLeadEvent('event_registration');
  }, [trackPageView, trackLeadEvent]);

  return (
    <div className="min-h-screen text-white flex flex-col">
      <div className="flex-1">
        {/* Hero Section with Background */}
        <div className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
          <div
            className="absolute inset-0 bg-[url('/images/Hero-Event-Reg.jpg')] bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url('/images/Hero-Event-Reg.jpg?v=${new Date().getTime()}')` }}
          ></div>
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          
          <div className="z-10 w-full max-w-md text-center py-8 sm:py-0">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-lg border border-white/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white sm:w-10 sm:h-10"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl text-white mb-3 sm:mb-4">Thank You!</h1>
              
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8">
                Your information has been successfully submitted. We appreciate your interest in Opula Residences.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Information */}
        <div className="bg-[#1D4A5B] py-6 sm:py-8 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col xs:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="text-xs sm:text-sm opacity-80">
                Exclusively Presented By <span className="font-bold">Betterhomes.</span>
              </div>
              
              <div className="text-xs sm:text-sm opacity-80">
                Call now <span className="font-bold">800 DHBUAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventThankYou;