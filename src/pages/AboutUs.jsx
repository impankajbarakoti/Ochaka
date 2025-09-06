import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Countdown from "../components/Countdown";

import OurBest from "../components/OurBest";
import CustomerReviews from "../components/CustomerReviews";
import DiscountBanner from "../components/DiscountBanner";
// Assuming HeroSection is in the same folder

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}

      {/* About Us Section */}
      <section className="py-16 px-4 mt-10 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Welcome to Ochaka, your ultimate bookstore. We provide a wide range
            of books, from bestsellers to niche genres. Our goal is to promote
            reading and make quality literature available to everyone.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Established in 2020, we have become a leading name in the online
            book market, known for our excellent customer service and fast
            delivery. Our team is passionate about reading and we aim to inspire
            others with every book we offer.
          </p>
        </div>
      </section>
      <OurBest />

      {/* Countdown Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Upcoming Sale
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our biggest sale of the year is just around the corner! Don’t miss
            out on huge discounts. The offer ends soon!
          </p>

          {/* Countdown Timer */}
          <Countdown targetDate="2025-12-31T23:59:59" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <FeaturesSection />
          <DiscountBanner />
          <CustomerReviews />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
