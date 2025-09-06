import React from "react";
import { FaBox, FaCalendarAlt, FaShieldAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaBox className="text-4xl mb-3" />,
    title: "30 days return",
    desc: "30 day money back guarantee",
  },
  {
    icon: <FaCalendarAlt className="text-4xl mb-3" />,
    title: "3 year warranty",
    desc: "Manufacturer's defect",
  },
  {
    icon: <FaShieldAlt className="text-4xl mb-3" />,
    title: "Free shipping",
    desc: "Free Shipping for orders over $150",
  },
  {
    icon: <FaHeadset className="text-4xl mb-3" />,
    title: "Online support",
    desc: "24 hours a day, 7 days a week",
  },
];

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-9 rounded-lg bg-white shadow-md overflow-hidden flex flex-col items-center justify-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:text-yellow-400"
          >
            {/* Card Content */}
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-center sm:text-base md:text-lg text-gray-600">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
