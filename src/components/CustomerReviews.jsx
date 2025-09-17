// src/components/CustomerReviews.jsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const reviews = [
  {
    id: 1,
    title: "Plant and Microwaves in Kitchen",
    price: "$14.99",
    image: "https://images.pexels.com/photos/7614540/pexels-photo-7614540.jpeg",
    review:
      "The support from ACIS has been outstanding. Anytime we had a question or needed help, their team responded quickly and professionally.",
    name: "Brooklyn Simmons",
    rating: 5,
  },
  {
    id: 2,
    title: "A Man in Plaid Long Sleeves Pouring a Drink",
    price: "$39.99",
    image: "https://images.pexels.com/photos/8294755/pexels-photo-8294755.jpeg",
    review:
      "No surprises, just consistent and dependable performance every single time without fail.",
    name: "Mas Shin",
    rating: 5,
  },
  {
    id: 3,
    title: "A Woman Putting a Vacuum Robot on the Floor",
    price: "$24.99",
    image: "https://images.pexels.com/photos/7641262/pexels-photo-7641262.jpeg",
    review:
      "A really inspiring story that motivates me to take action every day.",
    name: "Alex Morgan",
    rating: 4,
  },
  {
    id: 4,
    title: "A Man Putting His Clothes in a Laundromat",
    price: "$19.99",
    image: "https://images.pexels.com/photos/8774363/pexels-photo-8774363.jpeg",
    review:
      "This book gave me new perspective on how to stay strong during tough times.",
    name: "Sophia Lee",
    rating: 5,
  },
];

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 2 >= reviews.length ? 0 : prev + 2));
  const prevSlide = () =>
    setCurrent((prev) => (prev - 2 < 0 ? reviews.length - 2 : prev - 2));

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        What Our Customers Says!
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        {reviews.slice(current, current + 2).map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start"
          >
            {/* Book image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 sm:w-36 md:w-40 lg:w-48 rounded-lg  shadow-lg"
              />
            </div>

            {/* Review content */}
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-600 font-medium mt-1 text-sm sm:text-base">
                {item.price}
              </p>
              <p className="mt-3 sm:mt-4 text-gray-700 italic text-sm sm:text-base">
                “ {item.review} ”
              </p>
              <div className="mt-4 sm:mt-6 flex justify-center sm:justify-start items-center space-x-2">
                <p className="font-semibold text-sm sm:text-base">
                  {item.name}
                </p>
                <HiCheckCircle className="text-green-500 text-lg" />
              </div>
              <div className="flex justify-center sm:justify-start mt-2">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-10 space-x-4">
        <button
          onClick={prevSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
        >
          →
        </button>
      </div>
    </div>
  );
}
