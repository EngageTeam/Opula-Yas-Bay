import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useTrackingEvents } from "../hooks/use-tracking-events";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Gallery images array with categories
const galleryImages = [
  {
    src: "/images/IMG001.jpg",
    alt: "Opula Exterior View 1",
    category: "exterior"
  },
  {
    src: "/images/IMG002.jpg",
    alt: "Opula Exterior View 2",
    category: "exterior"
  },
  {
    src: "/images/IMG003.jpg",
    alt: "Opula Exterior View 3",
    category: "exterior"
  },
  {
    src: "/images/IMG004.jpg",
    alt: "Opula Exterior View 4",
    category: "exterior"
  },
  {
    src: "/images/IMG005.jpg",
    alt: "Opula Exterior View 5",
    category: "exterior"
  },
  {
    src: "/images/IMG006.jpg",
    alt: "Opula Exterior View 6",
    category: "exterior"
  },
  {
    src: "/images/IMG007.jpg",
    alt: "Opula Exterior View 7",
    category: "exterior"
  },
  {
    src: "/images/IMG008.jpg",
    alt: "Opula Exterior View 8",
    category: "exterior"
  },
  {
    src: "/images/IMG009.jpg",
    alt: "Opula Exterior View 9",
    category: "exterior"
  },
  {
    src: "/images/POOL1.jpg",
    alt: "Opula Swimming Pool 1",
    category: "amenities"
  },
  {
    src: "/images/POOL2.jpg",
    alt: "Opula Swimming Pool 2",
    category: "amenities"
  },
  {
    src: "/images/3DR KITCHEN SHOT 01.jpg",
    alt: "Kitchen Design",
    category: "kitchen"
  },
  {
    src: "/images/3DR LIVING AREA + KITCHEN SHOT 01 copy.jpg",
    alt: "Living Area & Kitchen",
    category: "living"
  },
  {
    src: "/images/24-027A TOWER GYM copy.jpg",
    alt: "Fitness Center",
    category: "amenities"
  },
  {
    src: "/images/620316729648261.jpg",
    alt: "Opula Interior",
    category: "living"
  },
  {
    src: "/images/Doublex - Living area -Afternoon 2.jpg",
    alt: "Duplex Living Area - Afternoon View 2",
    category: "living"
  },
 
  {
    src: "/images/ELEVATOR LOBBY.jpg",
    alt: "Elevator Lobby",
    category: "amenities"
  },
  {
    src: "/images/ENTRANCE AREA  SHOT 01.jpg",
    alt: "Entrance Area 1",
    category: "amenities"
  },
  {
    src: "/images/ENTRANCE AREA  SHOT 02.jpg",
    alt: "Entrance Area 2",
    category: "amenities"
  },
  {
    src: "/images/Master bedroom.jpg",
    alt: "Master Bedroom",
    category: "bedroom"
  },
  {
    src: "/images/Penthouse - Living area.jpg",
    alt: "Penthouse Living Area",
    category: "living"
  },
  {
    src: "/images/POWDER 1.jpg",
    alt: "Powder Room 1",
    category: "bathroom"
  },
  {
    src: "/images/POWDER 2.jpg",
    alt: "Powder Room 2",
    category: "bathroom"
  },
  {
    src: "/images/Studio  (1).jpg",
    alt: "Studio Apartment 1",
    category: "studio"
  },
  {
    src: "/images/Studio  (2).jpg",
    alt: "Studio Apartment 2",
    category: "studio"
  },
  {
    src: "/images/Studio (3).jpg",
    alt: "Studio Apartment 3",
    category: "studio"
  },
  {
    src: "/images/Townhouse kitchen.jpg",
    alt: "Townhouse Kitchen",
    category: "kitchen"
  },
  {
    src: "/images/TOWNHOUSE MASTER BATHROOM.jpg",
    alt: "Townhouse Master Bathroom",
    category: "bathroom"
  },
  {
    src: "/images/Townhouse-Living & dining.jpg",
    alt: "Townhouse Living & Dining Area",
    category: "living"
  },
  
  {
    src: "/images/TYPICAL BATHROOM 2.jpg",
    alt: "Typical Bathroom 2",
    category: "bathroom"
  },
  {
    src: "/images/TYPICAL BATHROOM 3.jpg",
    alt: "Typical Bathroom 3",
    category: "bathroom"
  },
  {
    src: "/images/TYPICAL BEDROOM.jpg",
    alt: "Typical Bedroom",
    category: "bedroom"
  },
  {
    src: "/images/TYPICAL LOBBY.jpg",
    alt: "Typical Lobby",
    category: "amenities"
  },
];

const Index = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { trackPageView } = useTrackingEvents();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Extract unique categories for filter buttons
  const categories = ["all", ...Array.from(new Set(galleryImages.map(img => img.category)))].sort();
  
  // Filter images based on active filter
  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  useEffect(() => {
    // Track page view when component mounts
    trackPageView('home');
    
    // Play video
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [trackPageView]);

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
    
    toast({
      title: "Thank you for your interest",
      description: "The brochure will be sent to your email shortly.",
    });
    
    // Redirect to thank you page after a short delay
    setTimeout(() => {
      navigate('/thank-you');
    }, 1000);
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      
      <section className="relative h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/Opula-hb-updated.mp4" 
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl pt-16 md:pt-20"> {/* Added padding-top to ensure content is visible below navbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 sm:mb-6">
                <img
                  src="/images/Opula logo.png"
                  alt="Opula Residences Yas Bay"
                  className="h-16 xs:h-20 sm:h-24 md:h-28 object-contain"
                />
              </div>
              <p className="text-sand-100 text-base xs:text-lg md:text-xl mb-6 sm:mb-8">
                Discover a new living experience in Abu Dhabi's most prestigious waterfront address
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 mb-6 sm:mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                  <p className="text-2xl xs:text-3xl font-display text-white">192</p>
                  <p className="text-sand-100 text-xs xs:text-sm">Units</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                  <p className="text-2xl xs:text-3xl font-display text-white">15</p>
                  <p className="text-sand-100 text-xs xs:text-sm">Floors</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                  <p className="text-2xl xs:text-3xl font-display text-white">83</p>
                  <p className="text-sand-100 text-xs xs:text-sm">Duplexes</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                      <p className="text-lg xs:text-xl font-display text-white">Watch</p>
                      <p className="text-sand-100 text-xs xs:text-sm">The Video</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden">
                    <video
                      className="w-full aspect-video"
                      src="/images/Opula Intro.mp4"
                      controls
                      autoPlay
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-sand-100 text-lg leading-relaxed mb-6">
                Opula represents a balance of luxury, comfort, and modern living, perfect for those seeking a sophisticated yet understated lifestyle.
              </p>
              <div className="flex flex-col xs:flex-row gap-3">
                <Button
                  className="bg-primary text-white hover:bg-primary/90 px-6"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Register Now
                </Button>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="project" className="py-20" style={{ backgroundColor: "#144659" }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl xs:text-2xl text-sand-100 mb-3 sm:mb-4">About the Project</h2>
              <h3 className="font-display text-3xl xs:text-4xl md:text-5xl text-white mb-4 sm:mb-6 leading-tight">
                AT THE CENTRE OF OPULA IS THOUGHTFUL & <em className="italic">INSPIRED LIVING</em>
              </h3>
              <p className="text-sand-200 leading-relaxed text-sm xs:text-base">
                Opula sets a new benchmark for living standards through its creative design and thoughtful layouts. Opula offers a carefully curated living experience, blending sophistication and practicality. With 192 apartments, including 3 exclusive penthouses and 5 elegant townhouses, the project provides a variety of options tailored to different lifestyles.
              </p>
              <p className="text-sand-200 leading-relaxed mt-3 sm:mt-4 text-sm xs:text-base">
                Residents can enjoy breathtaking views of the ocean and parks, while an infinity pool offers a serene retreat. The development features 109 simplex units and 83 duplexes, ranging from 1 to 4-bedroom layouts, offering the flexibility to suit diverse needs—whether it's the efficiency of a simplex or the spaciousness of a duplex. Opula offers a lifestyle that blends comfort, sophistication and functionality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-primary mb-6">About Opula</h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                Opula combines modern architectural design with serene waterfront views for a unique living experience. Its minimalist lines and glass façades invite natural light and blend with the landscape.
              </p>
              <p className="text-primary/80 leading-relaxed">
                Outdoor spaces and terraces offer residents a calming connection to nature, while thoughtful interior layouts maximize functionality and comfort.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/ENTRANCE AREA  SHOT 01.jpg"
                alt="Opula Building Entrance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">192</h3>
                <p className="text-sm text-primary/60">Total Units</p>
              </div>
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">15</h3>
                <p className="text-sm text-primary/60">Floors</p>
              </div>
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">7</h3>
                <p className="text-sm text-primary/60">Duplexes</p>
              </div>
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">∞</h3>
                <p className="text-sm text-primary/60">Views</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-primary mb-6">A New Living Experience</h2>
              <p className="text-primary/80 leading-relaxed">
                Opula combines modern architectural design with serene waterfront views for a unique living experience. Its minimalist lines and glass façades invite natural light and blend with the landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section className="py-20" style={{ backgroundColor: "#144659" }}>
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl text-white text-center mb-12">Our Units</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12">
            {/* Row 1 */}
            <div className="flex flex-col items-center text-center relative">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M15 15H45V40H15V15Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M10 40H50V45H10V40Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M20 25H25V30H20V25Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M30 25H35V30H30V25Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M40 25H45V30H40V25Z" stroke="#D9D9D9" strokeWidth="2" />
              </svg>
              <p className="text-white text-xl">Cinema</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center relative">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <rect x="15" y="15" width="30" height="30" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M15 25L45 25" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M30 15L30 45" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M22.5 32.5L37.5 17.5" stroke="#D9D9D9" strokeWidth="2" />
              </svg>
              <p className="text-white text-xl mb-1">Smart Package &</p>
              <p className="text-white text-xl">Mailroom Lockers</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <rect x="10" y="25" width="40" height="20" stroke="#D9D9D9" strokeWidth="2" />
                <rect x="15" y="30" width="5" height="5" stroke="#D9D9D9" strokeWidth="2" />
                <rect x="25" y="30" width="5" height="5" stroke="#D9D9D9" strokeWidth="2" />
                <rect x="35" y="30" width="5" height="5" stroke="#D9D9D9" strokeWidth="2" />
                <rect x="15" y="15" width="5" height="5" stroke="#D9D9D9" strokeWidth="2" />
                <rect x="25" y="15" width="5" height="5" stroke="#D9D9D9" strokeWidth="2" />
                <rect x="35" y="15" width="5" height="5" stroke="#D9D9D9" strokeWidth="2" />
              </svg>
              <p className="text-white text-xl">3 Penthouses</p>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col items-center text-center relative">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M15 15H30V45H15V15Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M20 25H25V30H20V25Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M20 35H25V40H20V35Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M35 25H40V45H35V25Z" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M30 15L45 25" stroke="#D9D9D9" strokeWidth="2" />
              </svg>
              <p className="text-white text-xl">5 Townhouses</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center relative">
              <p className="text-white font-display text-6xl mb-1">38</p>
              <p className="text-white text-xl">Studios</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <p className="text-white font-display text-6xl mb-1">67</p>
              <p className="text-white text-xl">1 Bedroom</p>
            </div>
            
            {/* Row 3 */}
            <div className="flex flex-col items-center text-center relative">
              <p className="text-white font-display text-6xl mb-1">48</p>
              <p className="text-white text-xl">2 Bedrooms</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center relative">
              <p className="text-white font-display text-6xl mb-1">29</p>
              <p className="text-white text-xl">3 Bedrooms</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <p className="text-white font-display text-6xl mb-1">10</p>
              <p className="text-white text-xl">4 Bedrooms</p>
            </div>
            
            {/* Row 4 */}
            <div className="flex flex-col items-center text-center relative">
              <p className="text-white font-display text-6xl mb-1">109</p>
              <p className="text-white text-xl">Simplexes</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center relative">
              <p className="text-white font-display text-6xl mb-1">83</p>
              <p className="text-white text-xl">Duplexes</p>
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-4/5 bg-gray-500/30 -translate-y-1/2"></div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M45 35H15C13.8954 35 13 34.1046 13 33V30C13 28.8954 13.8954 28 15 28H45C46.1046 28 47 28.8954 47 30V33C47 34.1046 46.1046 35 45 35Z" stroke="#D9D9D9" strokeWidth="2"/>
                <path d="M42 28H18L20 20H40L42 28Z" stroke="#D9D9D9" strokeWidth="2"/>
                <path d="M18 35V38H22V35" stroke="#D9D9D9" strokeWidth="2"/>
                <path d="M38 35V38H42V35" stroke="#D9D9D9" strokeWidth="2"/>
                <circle cx="20" cy="32" r="2" stroke="#D9D9D9" strokeWidth="2"/>
                <circle cx="40" cy="32" r="2" stroke="#D9D9D9" strokeWidth="2"/>
                <path d="M25 24H35" stroke="#D9D9D9" strokeWidth="2"/>
              </svg>
              <p className="text-white text-xl">Yas Marina Circuit</p>
              <p className="text-white text-xl">Proximity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand-100" id="gallery">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl text-primary text-center mb-8">Gallery</h2>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-1 xs:gap-2 mb-6 sm:mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-primary text-white"
                    : "bg-sand-200 text-primary hover:bg-sand-300"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-sand-200 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => {
                  // Find the index in the original array for proper navigation
                  const originalIndex = galleryImages.findIndex(img => img.src === image.src);
                  openGallery(originalIndex);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12 text-primary/60">
              No images found in this category.
            </div>
          )}
        </div>

        {/* Full-page Gallery View */}
        <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
          <DialogContent className="max-w-7xl p-0 bg-black/95 border-none">
            <div className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center">
              <DialogClose className="absolute top-2 sm:top-4 right-2 sm:right-4 z-50">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10">
                  <X className="h-4 w-4 sm:h-6 sm:w-6" />
                </Button>
              </DialogClose>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-30 h-8 w-8 sm:h-10 sm:w-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5 sm:h-8 sm:w-8" />
              </Button>
              
              <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-30 h-8 w-8 sm:h-10 sm:w-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5 sm:h-8 sm:w-8" />
              </Button>
            </div>
            
            <div className="bg-black/80 p-2 sm:p-4 text-center">
              <p className="text-white text-xs sm:text-base md:text-lg">
                {galleryImages[currentImageIndex].alt} - {currentImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* DHB Holding Section */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/who-we-are-header-unopt.jpg" 
                alt="DHB Holding Luxury Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-primary mb-6">DHB Holding</h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                With a proven history of developing luxury residences in the UAE, DHB Holding is driven by core values of quality and integrity. At Opula Residences, this translates into meticulously crafted homes and strong, trustworthy relationships with future residents.
              </p>
              <p className="text-primary/80 leading-relaxed">
                Their focus on creativity ensures unique and thoughtful designs that prioritize comfort and style, creating living spaces that are both elegant and functional.
              </p>
              <div className="mt-8 h-px w-24 bg-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-primary text-sand-50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl xs:text-4xl mb-8 sm:mb-12 text-center">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl xs:text-3xl mb-4 sm:mb-6">Yas Bay</h3>
              <p className="text-sand-200 leading-relaxed mb-4 sm:mb-6 text-sm xs:text-base">
                Experience life at Yas Bay, a destination that offers everything for you, your family, and friends. With top-tier amenities, stunning views, and a thoughtfully designed environment, it's a place that combines convenience with quality living.
              </p>
              <ul className="space-y-2 sm:space-y-4 text-sand-200 text-sm xs:text-base">
                <li>• Minutes from Yas Marina Circuit</li>
                <li>• Close to world-class entertainment</li>
                <li>• Easy access to Abu Dhabi and Dubai</li>
                <li>• Waterfront dining and retail</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/IMG003.jpg"
                alt="Yas Bay Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-sand-100">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="font-display text-3xl xs:text-4xl text-primary mb-3 sm:mb-4">Download Brochure</h2>
            <p className="text-primary/80 text-sm xs:text-base">
              Complete the form below to receive our detailed project brochure and view our virtual tour.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-6 px-4 xs:px-0">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unitType">Interested In</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, unitType: value })}
              >
                <SelectTrigger className="bg-white border-primary/30 focus:ring-primary focus:border-primary">
                  <SelectValue placeholder="Select unit type" className="text-primary/80" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-primary/20 shadow-lg">
                  <SelectItem value="studio" className="text-primary font-medium hover:bg-primary/10">Studio</SelectItem>
                  <SelectItem value="1br" className="text-primary font-medium hover:bg-primary/10">1 Bedroom</SelectItem>
                  <SelectItem value="1br-duplex" className="text-primary font-medium hover:bg-primary/10">1 Bedroom Duplex</SelectItem>
                  <SelectItem value="2br" className="text-primary font-medium hover:bg-primary/10">2 Bedroom</SelectItem>
                  <SelectItem value="2br-duplex" className="text-primary font-medium hover:bg-primary/10">2 Bedroom Duplex</SelectItem>
                  <SelectItem value="3br-duplex" className="text-primary font-medium hover:bg-primary/10">3 Bedroom Duplex</SelectItem>
                  <SelectItem value="3br-townhouse" className="text-primary font-medium hover:bg-primary/10">3 Bedroom Townhouse</SelectItem>
                  <SelectItem value="4br-duplex" className="text-primary font-medium hover:bg-primary/10">4 Bedroom Duplex</SelectItem>
                  <SelectItem value="4br-penthouse" className="text-primary font-medium hover:bg-primary/10">4 Bedroom Penthouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Download Brochure
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
