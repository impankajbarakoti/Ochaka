import React, { useState } from "react";

// Dummy data for the books
const booksData = [
  {
    id: 1,
    title: "IFB 60 kg Tumble Dryer with Auto Cool Down Function (Gas Heating)",
    author: "Mel Robbins",
    price: 14.0,
    originalPrice: 28.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:9476212b-46ff-456a-9d97-63c7da412494/as/8903287807527-.webp?quality=60",
    rating: 4,
    sale: "50%",
  },
  {
    id: 2,
    title: "IFB 3 Burners Hybrid Hob with 3D Brass Burners",
    author: "Mel Robbins",
    price: 14.0,
    originalPrice: 19.99,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:54cd52f7-3b82-42a8-8ffa-5b97454415c8/as/8903287040399-.webp?quality=60",
    rating: 3,
  },
  {
    id: 3,
    title:
      "Colour & Dirt Catcher (2 Pack) + 1 Fabo IFB 60 Sheets + 100 ml Fabric Care",
    author: "Mel Robbins",
    price: 27.0,
    originalPrice: 35.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:854e87e8-0861-4e92-8725-3302836a6bfc/as/HOLI23COMBO01-colour-dirt-catcher-fabo.webp?quality=60",
    rating: 4,
  },
  {
    id: 4,
    title: "IFB Ocean Mist & Morning Dew Fabric Care",
    author: "Unknown",
    price: 28.5,
    originalPrice: 39.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:72525b3e-2495-424e-8485-e482f451906e/as/8903287081651-.webp?quality=60",
    rating: 5,
  },
  {
    id: 5,
    title: "Fluff Top Load + Fluff Fabric Conditioner",
    author: "Troy Besson",
    price: 10.4,
    originalPrice: 13.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:51da1d3a-f433-42fd-8f8b-76f7884f29f3/as/ID2022TLFABRC-.webp?quality=60",
    rating: 4,
    
  },

  // Add more books if needed
];

const BestFiction = () => {
  const [visibleBooks, setVisibleBooks] = useState(5);

  // Show next set of books
  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 5); // Show 5 more books
  };

  // Get the books to display
  const booksToDisplay = booksData.slice(0, visibleBooks);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
      {/* Header with Bestsellers and View More Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-left">Bestsellers</h2>
        <button
          onClick={loadMoreBooks}
          className="text-lg text-blue-500 hover:underline"
        >
          View More
        </button>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {booksToDisplay.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-xl transition duration-300"
          >
            {/* Book Image */}
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
            />

            {/* Book Info */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{book.title}</h3>
                  {book.sale && (
                    <span className="text-red-500 bg-yellow-100 px-2 py-1 text-xs rounded-full">
                      {book.sale} OFF
                    </span>
                  )}
                </div>

                <div className="flex items-center mb-2">
                  {/* Rating */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < book.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-5.878 3.09 1.123-6.56L1 6.427l6.564-.568L10 0l2.436 5.859 6.563.568-4.245 5.103 1.124 6.56L10 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-sm">By {book.author}</p>
              </div>

              <div className="mt-4">
                <div className="text-xl font-bold text-red-500">
                  ${book.price.toFixed(2)}
                </div>
                {book.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">
                    ${book.originalPrice.toFixed(2)}
                  </div>
                )}
              </div>

              {/* Countdown Timer */}
              <div className="text-sm text-gray-500 mt-4">
               
                <span className="font-bold">{book.countdown}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestFiction;
