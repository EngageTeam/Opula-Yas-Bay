
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-sand-50 py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="col-span-1 xs:col-span-2 md:col-span-1">
            <img
              src="https://dhbholding.com/wp-content/uploads/2024/10/OPULA_Logo_Transparent.svg"
              alt="Opula Logo"
              className="h-10 sm:h-12 mb-4 sm:mb-6"
            />
            <p className="text-sand-200 text-xs sm:text-sm">
              A new standard of luxury living at Yas Bay, Abu Dhabi
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-sand-200">
              <li>Sales Center</li>
              <li>Yas Bay, Abu Dhabi</li>
              <li>United Arab Emirates</li>
              <li className="pt-1 sm:pt-2">
                <a href="tel:800342823" className="hover:text-white">800 DHBUAE</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dhbholding?igsh=MWRvbTdxaWY1azZhNQ==" className="text-sand-200 hover:text-white text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/dhbholding/" className="text-sand-200 hover:text-white text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-sand-200/20 text-center text-xs sm:text-sm text-sand-300">
          <p>&copy; {new Date().getFullYear()} Opula Residences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
