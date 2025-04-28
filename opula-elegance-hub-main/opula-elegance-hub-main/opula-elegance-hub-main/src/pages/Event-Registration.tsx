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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Track page view when component mounts
  useEffect(() => {
    trackPageView('event_registration');
  }, [trackPageView]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission event
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    
    // Track Spotify alias (email collection)
    if (window.spdt && formData.email) {
      window.spdt('alias', {
        email: formData.email,
        phone_number: formData.phone || undefined,
      });
    }
    
    // Track AdRoll identify email
    if (window.adroll && formData.email) {
      window.adroll.identify_email({
        email: formData.email
      });
    }
    
    // Track lead event
    trackLeadEvent('event_registration');
    
    toast({
      title: "Registration Successful",
      description: "Thank you for registering for the exclusive launch event.",
    });
    
    // Redirect to event thank you page after a short delay
    setTimeout(() => {
      navigate('/event-thank-you');
    }, 1000);
  };

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
              {/* DHB Logo */}
              <div className="h-10 sm:h-12 flex items-center justify-center">
                <img
                  src="/images/DHB-Logo-New.png" 
                  alt="DHB"
                  className="h-auto max-h-8 xs:max-h-10 sm:max-h-12 w-auto"
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
                <span className="text-xs sm:text-sm font-light">Wednesday, May 7, 2025</span>
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
              onClick={() => {
                const formElement = document.getElementById('registration-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Register Now
            </Button>
          </div>
          
        </div>
        
        {/* Registration Form Section */}
        <div id="registration-form" className="py-10 sm:py-16 md:py-20 bg-[#2D5A6B]">
          <div className="container max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-10 md:mb-12">Register for the Event</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="name" className="text-white text-sm sm:text-base">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="email" className="text-white text-sm sm:text-base">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="phone" className="text-white text-sm sm:text-base">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="company" className="text-white text-sm sm:text-base">Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 sm:h-12 text-sm sm:text-base"
                />
              </div>
              
              <div className="pt-2 sm:pt-4">
                <Button type="submit" className="w-full bg-[#D4C1A8] hover:bg-[#C4B198] text-[#2D5A6B] font-medium py-3 sm:py-4 md:py-6 rounded-none text-sm sm:text-base">
                  Confirm Registration
                </Button>
              </div>
            </form>
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