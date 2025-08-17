import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "📈",
      title: "Increase Sales by 40%",
      description:
        "Customers spend more when they can visualize dishes in 3D and AR, leading to higher average order values.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🎯",
      title: "Boost Customer Engagement",
      description:
        "Interactive 3D menus keep customers engaged longer, reducing wait time complaints and increasing satisfaction.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "⭐",
      title: "Premium Dining Experience",
      description:
        "Stand out from competitors with cutting-edge technology that positions your restaurant as innovative and modern.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "💰",
      title: "Reduce Operational Costs",
      description:
        "Eliminate printing costs, reduce menu updates, and streamline ordering with digital menus that update instantly.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🌍",
      title: "Global Accessibility",
      description:
        "Reach international customers with multilingual support and universal device compatibility.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description:
        "Track popular dishes, customer preferences, and peak ordering times to optimize your menu and operations.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Restaurant Owners Choose OrderIn3D
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful restaurants that have transformed their
            business with our innovative 3D and AR menu technology.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Restaurants
            </h3>
            <p className="text-gray-600 mb-6">
              From fine dining establishments to casual eateries, restaurants
              worldwide are choosing OrderIn3D
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">500+ Restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
