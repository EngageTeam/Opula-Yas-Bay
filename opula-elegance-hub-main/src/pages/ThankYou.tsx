import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white p-10 rounded-lg shadow-lg border border-sand-200">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            
            <h1 className="font-display text-4xl text-primary mb-4">Thank You!</h1>
            
            <p className="text-primary/80 text-lg mb-8">
              Your information has been successfully submitted. We appreciate your interest in Opula Residences.
            </p>
            
            <p className="text-primary/70 mb-10">
              Our team will be in touch with you shortly. The brochure has been sent to your email address.
            </p>
            
            <div className="space-y-4">
              <Button asChild className="bg-primary text-white hover:bg-primary/90">
                <Link to="/">Return to Homepage</Link>
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