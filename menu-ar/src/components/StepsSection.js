import React from "react";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Scan QR Code",
      description:
        "Customers simply scan the QR code placed on your tables or menu cards",
      icon: "📱",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "View 3D Menu",
      description:
        "Explore your dishes in stunning 3D with detailed descriptions and pricing",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "See in AR",
      description:
        "Experience dishes in augmented reality right on their table",
      icon: "✨",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your menu experience in just three simple steps. No
            complex setup, no app downloads - just pure innovation.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="step-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center h-full">
                {/* Step Number */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white text-2xl font-bold mb-6`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="text-6xl mb-6 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-12 h-12 text-gray-300"
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
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Ready to get started?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
