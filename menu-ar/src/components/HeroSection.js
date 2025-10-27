import React from "react";
import { Link, useNavigate } from "react-router-dom";
import landing_page_image from "../images/landing_page_image_4.png";
const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToMenu = () => {
    navigate("/demo");
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-4"
      style={{
        backgroundImage: "linear-gradient(to bottom left,#000080,black 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
              Where Menus Come ALIVE
            </h1>

            {/* Subheading */}
            <p
              className="text-white leading-relaxed font-light"
              style={{ fontSize: "24px" }}
            >
              {/* Bring your food to life with immersive 3D menus—because taste
              begins with the eyes. */}
              Boost engagement and sales by letting customers explore your
              dishes from every angle.
            </p>

            {/* Additional Subheading */}
            <p
              className="leading-relaxed font-light"
              style={{ fontSize: "22px" }}
            >
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Happier customers. Faster decisions. Higher revenue. All with
                interactive 3D menus.
              </span>
            </p>

            {/* CTA Buttons - Side by Side */}
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              {/* Contact Us Button */}
              <button
                onClick={scrollToContact}
                className="flex-1 max-w-sm h-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-xl font-semibold text-gray-800"
              >
                Get a Free Demo
              </button>

              {/* See Demo Button */}
              <button
                onClick={goToMenu}
                className="flex-1 max-w-sm h-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-xl font-semibold text-gray-800 gap-3"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Try the 3D Experience
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center">
            <div className="relative z-10">
              <img
                src={landing_page_image}
                alt="3D Menu Experience"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>

            {/* Floating Elements for Premium Feel */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-400/30 rounded-full animate-float blur-sm"></div>
            <div
              className="absolute -bottom-8 -left-8 w-12 h-12 bg-purple-400/30 rounded-full animate-float blur-sm"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-12 w-8 h-8 bg-green-400/30 rounded-full animate-float blur-sm"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
