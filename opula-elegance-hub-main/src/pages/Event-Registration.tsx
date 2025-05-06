import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";
import { useTrackingEvents } from "../hooks/use-tracking-events";

const EventRegistration = () => {
  const navigate = useNavigate();
  const { trackPageView, trackLeadEvent } = useTrackingEvents();
  // No longer needed as registration is closed
  // Keeping state definition for tracking purposes
  const [formData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Track page view when component mounts
  useEffect(() => {
    trackPageView('event_registration');
  }, [trackPageView]);

  // These handlers are no longer needed as registration is closed

  return (
    <div className="min-h-screen text-white flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
          <div
            className="absolute inset-0 bg-[url('/images/Hero-Event-Reg.jpg')] bg-cover bg-center z-[-1]"
            style={{ backgroundImage: `url('/images/Hero-Event-Reg.jpg?v=${new Date().getTime()}')` }}
          ></div>
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          
          <div className="z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-xs md:max-w-sm text-center py-8 sm:py-0">
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-10 tracking-[0.1em] font-light">SAVE THE DATE</h1>
            
            <div className="mb-6 sm:mb-8">
              {/* AJYAL DHB Logo */}
              <div className="h-32 sm:h-36 flex items-center justify-center mt-6">
                <img
                  src="/images/dhb-ajyal-logo.png"
                  alt="AJYAL DHB GROUP"
                  className="h-auto max-h-28 xs:max-h-32 sm:max-h-36 md:max-h-40 w-auto"
                />
              </div>
            </div>
            
            <p className="text-sm sm:text-base mb-2 sm:mb-4 font-light">Invites you to an exclusive launch</p>
            
            <img
              src="/images/Opula logo.png"
              alt="OPULA"
              className="h-auto w-auto max-w-[85%] xs:max-w-[90%] md:max-w-[80%] max-h-20 xs:max-h-24 sm:max-h-32 md:max-h-40 mx-auto mb-8 sm:mb-10 md:mb-16"
            />
            
            <div className="flex flex-col xs:flex-row justify-center items-center gap-3 xs:gap-4 sm:gap-8 mb-8 sm:mb-10 md:mb-16">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white xs:w-4 xs:h-4 sm:w-5 sm:h-5">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-light">Wednesday, May 7th, 2025</span>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white xs:w-3 xs:h-3 sm:w-4 sm:h-4">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-xs sm:text-sm font-light">Starts 6:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white xs:w-4 xs:h-4 sm:w-5 sm:h-5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-xs sm:text-sm font-light">Hilton Yas Bay</span>
              </div>
            </div>
            
            <div className="mb-6 sm:mb-8 md:mb-12">
              <p className="text-sm sm:text-base mb-1 font-light">Discover Yas Bay</p>
              <p className="text-xs sm:text-sm opacity-80 font-light">Abu Dhabi's prime waterfront address.</p>
            </div>
            
            <Button
              className="bg-transparent hover:bg-white/20 text-white border border-white px-5 xs:px-6 sm:px-8 py-2 text-xs sm:text-sm font-light rounded-none w-full xs:w-auto"
              disabled
            >
              Event Registration Closed
            </Button>
          </div>
          
        </div>
        
        {/* Event Closed Message */}
        <div id="event-closed" className="py-10 sm:py-16 md:py-20 bg-[#2D5A6B]">
          <div className="container max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-10">Event Registration Closed</h2>
            
            <div className="bg-white/10 border border-white/20 rounded-md p-6 sm:p-8 md:p-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 sm:mb-6">
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                <path d="M14 6h0a6 6 0 0 1 6 6v3" />
              </svg>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">Thank you for your interest in our exclusive launch event.</p>
              <p className="text-sm sm:text-base opacity-80 mb-6 sm:mb-8">Registration for this event is now closed. Please check back for future events.</p>
              <p className="text-sm opacity-70">For any inquiries, please contact <span className="font-bold">800 DHBUAE</span></p>
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

export default EventRegistration;