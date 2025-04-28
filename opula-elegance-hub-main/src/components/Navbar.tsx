
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = window.location.pathname;
  const isVirtualTourPage = location === '/virtual-tour';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-md shadow-sm"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://dhbholding.com/wp-content/uploads/2024/10/OPULA_Logo_Transparent.svg"
              alt="Opula Logo"
              className="h-8 xs:h-10 sm:h-12 md:h-14"
            />
          </Link>
          <div className="hidden items-center space-x-8">
            <NavLink href="/#project">About Project</NavLink>
            <NavLink href="/#gallery">Gallery</NavLink>
            <NavLink href="/#location">Location</NavLink>
            <NavLink href="/#contact">
              Virtual Tour
            </NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>
          <Sheet>
            <SheetTrigger className="p-1 sm:p-2">
              <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            </SheetTrigger>
            <SheetContent className="bg-black p-0 w-full max-w-[300px] sm:max-w-[350px]">
              <div
                className="h-full w-full relative bg-black"
                style={{
                  height: "100%",
                  width: "100%"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-black/95"></div>
                <div className="flex flex-col space-y-4 sm:space-y-6 mt-8 sm:mt-12 relative z-10 p-6 sm:p-8">
                  <div className="mb-4">
                    <img
                      src="https://dhbholding.com/wp-content/uploads/2024/10/OPULA_Logo_Transparent.svg"
                      alt="Opula Logo"
                      className="h-8 sm:h-10 mb-6 sm:mb-8"
                    />
                  </div>
                  <MobileNavLink href="/#project">About Project</MobileNavLink>
                  <MobileNavLink href="/#gallery">Gallery</MobileNavLink>
                  <MobileNavLink href="/#location">Location</MobileNavLink>
                  <MobileNavLink href="/#contact">
                    Virtual Tour
                  </MobileNavLink>
                  <MobileNavLink href="/#contact">Contact</MobileNavLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-primary/90 hover:text-primary transition-colors text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-lg xs:text-xl font-display text-white hover:text-sand-200 transition-colors py-2 border-b border-white/10"
  >
    {children}
  </a>
);
