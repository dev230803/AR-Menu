import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "Monthly",
      description: "Perfect for small restaurants and cafes",
      features: [
        "Up to 25 menu items",
        "Basic 3D models",
        "QR code generation",
        "Email support",
        "Basic analytics",
        "Mobile responsive",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Professional",
      price: "$199",
      period: "Monthly",
      description: "Ideal for growing restaurants and chains",
      features: [
        "Unlimited menu items",
        "Premium 3D models",
        "AR experience",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Order management",
        "Multi-language support",
      ],
      popular: true,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact Us",
      description: "For large restaurant chains and franchises",
      features: [
        "Everything in Professional",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "API access",
        "Advanced reporting",
        "Multi-location management",
        "24/7 phone support",
      ],
      popular: false,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your restaurant. No hidden fees, no
            surprises. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-purple-200 ring-2 ring-purple-100"
                  : "border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} hover:shadow-lg hover:scale-105`
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free Setup & Training</span>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No Long-term Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
