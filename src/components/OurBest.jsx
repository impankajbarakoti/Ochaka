import React, { useState } from "react";

// Dummy data for the books
const booksData = [
  {
    id: 1,
    title: "The 5 Second Rule",
    author: "Mel Robbins",
    price: 14.0,
    originalPrice: 28.0,
    image: "https://ochaka.vercel.app/images/products/book/product-13.jpg",
    rating: 4,
    sale: "50%",
    countdown: "00d : 06h : 47m : 54s",
  },
  {
    id: 2,
    title: "The Let Them Theory",
    author: "Mel Robbins",
    price: 14.0,
    originalPrice: 19.99,
    image: "https://ochaka.vercel.app/images/products/book/product-14.jpg",
    rating: 3,
    countdown: "00d : 05h : 30m : 25s",
  },
  {
    id: 3,
    title: "Do The Hard Things First",
    author: "Mel Robbins",
    price: 27.0,
    originalPrice: 35.0,
    image: "https://ochaka.vercel.app/images/products/book/product-15.jpg",
    rating: 4,
    countdown: "00d : 05h : 47m : 54s",
  },
  {
    id: 4,
    title: "Maui - The Courage Chihuahua",
    author: "Unknown",
    price: 28.5,
    originalPrice: 39.0,
    image: "https://ochaka.vercel.app/images/products/book/product-16.jpg",
    rating: 5,
    countdown: "00d : 03h : 50m : 22s",
  },
  {
    id: 5,
    title: "Ghost Stories",
    author: "Troy Besson",
    price: 10.4,
    originalPrice: 13.0,
    image: "https://ochaka.vercel.app/images/products/book/product-17.jpg",
    rating: 4,
    countdown: "00d : 05h : 30m : 10s",
  },

  // Add more books if needed
];

const OurBest = () => {
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
        <h2 className="text-3xl font-bold text-left">Our Best Fiction Books</h2>
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
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            {/* Book Image with Hover Zoom */}
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
            />

            {/* Book Info */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg transition-colors duration-300 hover:text-yellow-400">
                    {book.title}
                  </h3>
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
                <span className="text-red-600 font-semibold">
                  Hurry up offer ends in:{" "}
                </span>
                <span className="font-bold">{book.countdown}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBest;
