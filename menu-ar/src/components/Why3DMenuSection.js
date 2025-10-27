import React from "react";
import {
  Sparkles,
  ClipboardCheck,
  TrendingUp,
  Star,
  Users,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,
    title: "Engage Instantly",
    description:
      "Let customers interact with dishes in 3D — zoom, rotate, and explore each meal like never before.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-indigo-600" />,
    title: "Simplify Ordering",
    description:
      "Visual menus make decisions quicker and reduce confusion, improving satisfaction and efficiency.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Drive Sales Up",
    description:
      "Highlight specials and upsell effectively with stunning AR visuals that increase customer spend.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Impress Instantly",
    description:
      "Create buzz-worthy moments that customers love to share — modern tech meets memorable dining.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Optimise Staff",
    description:
      "Free up your team from explaining dishes repeatedly and let them focus on delivering great service.",
  },
  {
    icon: <Trophy className="w-8 h-8 text-pink-500" />,
    title: "Competitive Edge",
    description:
      "Stand out from competitors with innovative dining technology that redefines your brand.",
  },
];

const Why3DMenuSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Why Restaurants are Switching to 3D Menus
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Deliver memorable dining experiences that engage customers, simplify
          operations, and boost sales — all through immersive 3D visualization.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 relative">
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white shadow-lg rounded-full">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why3DMenuSection;
