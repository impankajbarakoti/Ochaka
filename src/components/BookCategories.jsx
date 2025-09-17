import React from "react";

const categories = [
  {
    name: "Stabilizer",
    count: 24,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:d1772a20-ac7e-495e-b823-f8241f09ed63/as/8903287080869-.webp?quality=60",
  },
  {
    name: "Chimney",
    count: 30,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:b312e672-58ce-478e-9a57-fbfc50bb999e/as/8903287040337-.webp?quality=60",
  },
  {
    name: "Oven",
    count: 18,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:2c2655e4-f254-4637-8a17-e9a3cd34cb8a/as/8903287003073-656-mtc-e-rct.webp?quality=60",
  },
  {
    name: "Washing Machine",
    count: 47,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:da9e1725-3d8e-41b2-9496-70157331e10e/as/8903287031335-.webp?quality=60",
  },
  {
    name: "Refrigerator ",
    count: 90,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:13313621-0454-4b84-b78d-4ae986349b9a/as/8905799101452-.webp?quality=60",
  },
  {
    name: "Burners Hybrid ",
    count: 86,
    image:
      "https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:54cd52f7-3b82-42a8-8ffa-5b97454415c8/as/8903287040399-.webp?quality=60",
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
