import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useTrackingEvents } from "../hooks/use-tracking-events";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const VirtualTour = () => {
  const navigate = useNavigate();
  const { trackPageView, trackLeadEvent } = useTrackingEvents();
  const tourUrl = "https://dpg.dev/opula/1/?state=yas_island&lang=en&vr=VR01&theme=dark";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
  });

  useEffect(() => {
    // Track page view when component mounts
    trackPageView('virtual-tour');
  }, [trackPageView]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      unitType: value,
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
      window.adroll.identify_email(formData.email);
    }
    
    // Track lead event
    trackLeadEvent('brochure_download');
    
    // Redirect to thank you page after a short delay
    setTimeout(() => {
      navigate('/thank-you');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-20 bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl xs:text-4xl md:text-5xl text-white mb-4">
                Opula Residences Virtual Tour
              </h1>
              <p className="text-sand-100 text-base xs:text-lg md:text-xl mb-6">
                Experience the elegance and luxury of Opula Residences, Yas Bay from every angle
              </p>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="pt-32 pb-8 md:pt-40 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="w-full mx-auto">
              <div className="virtual-tour-container">
                <iframe
                  src={tourUrl}
                  title="Opula Residences 360 Virtual Tour"
                  style={{
                    width: '100%',
                    height: '80vh', /* Fixed height instead of aspect ratio */
                    border: '0',
                    display: 'block', /* Ensures no extra space */
                    pointerEvents: 'auto' /* Explicitly enable pointer events */
                  }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              
              <div className="mt-8 bg-sand-100 p-6 rounded-lg max-w-4xl mx-auto">
                <h2 className="font-display text-2xl text-primary mb-4">Tour Instructions</h2>
                <ul className="text-primary/80 space-y-2">
                  <li>• Use your mouse to click and drag to look around in 360°</li>
                  <li>• Click on hotspots to navigate between different areas</li>
                  <li>• Use the navigation menu to jump to specific locations</li>
                  <li>• Toggle fullscreen mode for an immersive experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Download Brochure Section */}
        <section className="py-12 md:py-16 bg-sand-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl text-primary mb-4 text-center">Download Brochure</h2>
              <p className="text-primary/80 mb-6 text-center">
                Complete the form below to receive our detailed project brochure.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-xl mx-auto">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name" className="text-primary text-sm sm:text-base">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="border-sand-200 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-primary text-sm sm:text-base">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="border-sand-200 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="phone" className="text-primary text-sm sm:text-base">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="border-sand-200 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="unitType" className="text-primary text-sm sm:text-base">Interested In</Label>
                  <Select onValueChange={handleSelectChange} value={formData.unitType} required>
                    <SelectTrigger className="border-sand-200 h-10 sm:h-12 text-sm sm:text-base">
                      <SelectValue placeholder="Select unit type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1br">1 Bedroom</SelectItem>
                      <SelectItem value="1br-duplex">1 Bedroom Duplex</SelectItem>
                      <SelectItem value="2br">2 Bedroom</SelectItem>
                      <SelectItem value="2br-duplex">2 Bedroom Duplex</SelectItem>
                      <SelectItem value="3br-duplex">3 Bedroom Duplex</SelectItem>
                      <SelectItem value="3br-townhouse">3 Bedroom Townhouse</SelectItem>
                      <SelectItem value="4br-duplex">4 Bedroom Duplex</SelectItem>
                      <SelectItem value="4br-penthouse">4 Bedroom Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-2 sm:pt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 sm:py-4 text-sm sm:text-base">
                    Download Brochure
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VirtualTour;