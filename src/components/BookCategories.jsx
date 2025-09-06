import React from "react";

const categories = [
  {
    name: "Romance",
    count: 24,
    image: "https://ochaka.vercel.app/images/category/cate-47.jpg",
  },
  {
    name: "Fiction",
    count: 30,
    image: "https://ochaka.vercel.app/images/category/cate-48.jpg",
  },
  {
    name: "Horror",
    count: 18,
    image: "https://ochaka.vercel.app/images/category/cate-49.jpg",
  },
  {
    name: "Mystery",
    count: 47,
    image: "https://ochaka.vercel.app/images/category/cate-50.jpg",
  },
  {
    name: "Literary",
    count: 90,
    image: "https://ochaka.vercel.app/images/category/cate-51.jpg",
  },
  {
    name: "Fantasy",
    count: 86,
    image: "https://ochaka.vercel.app/images/category/cate-52.jpg",
  },
];

const BookCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
      {/* Header with Shop by Category and View All Books */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-left">Shop by Category</h2>
        <a href="/all-books" className="text-lg text-blue-500 hover:underline">
          View All Books
        </a>
      </div>

      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative">
              {/* Category image with zoom effect */}
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 rounded-full object-cover mb-3 transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            {/* Category name */}
            <h4 className="text-lg font-semibold">{category.name}</h4>
            {/* Count of books */}
            <p className="text-sm text-gray-600">({category.count})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
