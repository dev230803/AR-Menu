import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import final_logo from "../images/final_logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={final_logo} alt="OrderIn3D" />
              </div>
              <span className="text-xl ">OrderIn3D.store</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("scrollstack")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            {/* <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Pricing
            </button> */}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate("/demo")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              See Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection("scrollstack")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Features
              </button>
              {/* <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Pricing
              </button> */}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Contact
              </button>
              <div className="pt-2">
                <button
                  onClick={() => navigate("/demo")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  See Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
