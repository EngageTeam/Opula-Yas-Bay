
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-sand-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img 
              src="https://dhbholding.com/wp-content/uploads/2024/10/OPULA_Logo_Transparent.svg" 
              alt="Opula Logo" 
              className="h-12 mb-6"
            />
            <p className="text-sand-200 text-sm">
              A new standard of luxury living at Yas Bay, Abu Dhabi
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sand-200 hover:text-white text-sm">About</Link></li>
              <li><Link to="/gallery" className="text-sand-200 hover:text-white text-sm">Gallery</Link></li>
              <li><Link to="/location" className="text-sand-200 hover:text-white text-sm">Location</Link></li>
              <li><Link to="/contact" className="text-sand-200 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-sand-200">
              <li>Sales Center</li>
              <li>Yas Bay, Abu Dhabi</li>
              <li>United Arab Emirates</li>
              <li className="pt-2">
                <a href="tel:800678520" className="hover:text-white">800 OPULA</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-sand-200 hover:text-white">Instagram</a>
              <a href="#" className="text-sand-200 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-sand-200/20 text-center text-sm text-sand-300">
          <p>&copy; {new Date().getFullYear()} Opula Residences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
