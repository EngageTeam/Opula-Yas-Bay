import { Button } from "../components/ui/button";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTrackingEvents } from "../hooks/use-tracking-events";

const ThankYou = () => {
  const { trackLeadEvent, trackPageView } = useTrackingEvents();
  
  useEffect(() => {
    // Track page view
    trackPageView('thank_you');
    
    // Track lead conversion event
    trackLeadEvent('form_submission');
    
    // You can also track specific events like:
    // trackLeadEvent('brochure_download');
  }, []);
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 sm:py-16 md:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg border border-sand-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
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
                className="text-primary sm:w-10 sm:h-10"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl text-primary mb-3 sm:mb-4">Thank You!</h1>
            
            <p className="text-primary/80 text-base sm:text-lg mb-6 sm:mb-8">
              Your information has been successfully submitted. We appreciate your interest in Opula Residences, Yas Bay.
            </p>
            
            <p className="text-primary/70 text-sm sm:text-base mb-8 sm:mb-10">
              Our team will share the brochure with you soon. In the meantime view our virtual tour.
            </p>
            
            <div className="space-y-4">
              <Button asChild className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base py-2 px-4 sm:py-2 sm:px-6">
                <Link to="/virtual-tour">Virtual Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThankYou;