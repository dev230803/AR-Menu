import React from "react";

const ClientLogosSection = () => {
  const clients = [
    { name: "Asia Kitchen", logo: "🍜" },
    { name: "Beirut Sea", logo: "🐟" },
    { name: "Broadwalk by Flamboyant", logo: "🏖️" },
    { name: "Epitome", logo: "✨" },
    { name: "Firuzeh", logo: "🌸" },
    { name: "Helen's Bakery", logo: "🥖" },
    { name: "Just Kerala", logo: "🌶️" },
    { name: "Sante Spa", logo: "🧘" },
    { name: "Veggie Delight", logo: "🥗" },
    { name: "Mainland China", logo: "🥢" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading restaurants and food chains worldwide
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <div className="text-sm font-medium text-gray-700 text-center">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Restaurants</div>
            <div className="text-sm text-gray-500 mt-1">Worldwide</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Weekly Users</div>
            <div className="text-sm text-gray-500 mt-1">Active</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Rating</div>
            <div className="text-sm text-gray-500 mt-1">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
