import React, { useState } from "react";

// Dummy data for the books
const booksData = [
  {
    id: 1,
    title: "IFB 187 L 5 Star Direct Cool Refrigerator with Thick Insulation",
    author: "Mel Robbins",
    price: 14.0,
    originalPrice: 28.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:13313621-0454-4b84-b78d-4ae986349b9a/as/8905799101452-.webp?quality=60",
    rating: 4,
    sale: "50%",
   
  },
  {
    id: 2,
    title: "IFB DeepClean® 10 kg Front Load Washing Machine with Oxyjet®",
    author: "Mel Robbins",
    price: 14.0,
    originalPrice: 19.99,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:da9e1725-3d8e-41b2-9496-70157331e10e/as/8903287031335-.webp?quality=60",
    rating: 3,
  
  },
  {
    id: 3,
    title: "58 L Built-in Oven with Top and Bottom Heaters",
    author: "Mel Robbins",
    price: 27.0,
    originalPrice: 35.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:2c2655e4-f254-4637-8a17-e9a3cd34cb8a/as/8903287003073-656-mtc-e-rct.webp?quality=60",
    rating: 4,
    
  },
  {
    id: 4,
    title: "IFB 60 cm Wall Mounting Chimney with 10 Speed Motor",
    author: "Unknown",
    price: 28.5,
    originalPrice: 39.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:b312e672-58ce-478e-9a57-fbfc50bb999e/as/8903287040337-.webp?quality=60",
    rating: 5,
  
  },
  {
    id: 5,
    title: "IFB 130 - 305 Volts Washing Machine Stabilizer",
    author: "Troy Besson",
    price: 10.4,
    originalPrice: 13.0,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:d1772a20-ac7e-495e-b823-f8241f09ed63/as/8903287080869-.webp?quality=60",
    rating: 4,
 
  },
];

const Bestsellers = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {booksToDisplay.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-xl transition duration-300"
          >
            {/* Book Image with hover zoom */}
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
                    <span className="text-red-500 bg-yellow-100 px-2 py-1 text-xs rounded-full transform hover:bg-yellow-300 transition duration-300">
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

export default Bestsellers;
