import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full sm:pt-20 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch mt-25 md:mt-0">
      {/* Left Div - Book Image */}
      <div className="bg-[#f9f9f7] rounded-2xl flex justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 h-full">
        <img
          src="https://ochaka.vercel.app/images/slider/slider-34.jpg"
          alt="Book Cover"
          className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
        />
      </div>

      {/* Right Div - Text Content */}
      <div className="bg-[#f8f2ed] w-full h-full rounded-xl flex flex-col justify-center items-center text-center md:text-left p-6 sm:p-8 md:p-10 lg:p-12 space-y-5 sm:space-y-6 md:space-y-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          New From The Author
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug text-center">
          National Security
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg sm:max-w-xl md:max-w-2xl text-center">
          Limited Edition Complete Journeys of the Strongest Family in History
        </p>

        {/* Button */}
        <div>
          <a
            href="#"
            className="inline-block bg-black text-white text-base sm:text-lg md:text-xl font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 rounded-full hover:bg-gray-800 transition-all"
          >
            Shop now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
