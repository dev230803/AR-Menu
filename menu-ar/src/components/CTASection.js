import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience the future of dining menus today. See how your dishes
            look in stunning 3D and AR.
          </p>
        </div>

        {/* Demo Button */}
        <div className="mb-12">
          <button
            onClick={() => navigate("/demo")}
            className="cta-button group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white rounded-full shadow-2xl animate-pulse-slow hover:animate-none"
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button Content */}
            <div className="relative flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span>Experience the Demo</span>
              <svg
                className="w-6 h-6 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 text-white/80">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Free Demo</h3>
            <p className="text-sm">No commitment required</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Instant Setup</h3>
            <p className="text-sm">Ready in minutes</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">AR Ready</h3>
            <p className="text-sm">Works on all devices</p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Trusted by restaurants worldwide • 99.9% Uptime • 24/7 Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
