// src/components/FrequentlyBoughtTogether.jsx
import React from "react";

const leftCard = {
  bgImage:
    "https://s7ap1.scene7.com/is/image/ifb/about-ifb-content2-image7?ts=1751834255754&dpr=off",
  saleText: "SALE OFF 50% on 1 when you buy 2",
  title: "For everyday comfort and convenience.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  btnText: "Shop now",
  btnUrl: "#",
};

const rightItems = [
  {
    img: "https://s7ap1.scene7.com/is/image/ifb/about-ifb-content2-image3?ts=1751834101149&dpr=off",
    name: "Built to excel. Ready to perform.  ",
    price: "$69,99",
    stock: "In Stock",
    btnText: "Add to cart",
  },
  {
    img: "https://s7ap1.scene7.com/is/image/ifb/about-ifb-content2-image9?ts=1751834251670&dpr=off",
    name: "Automation at scale . Inclusion at heart. ",
    price: "$89,99",
    stock: "In Stock",
    btnText: "Add to cart",
  },
];

const FrequentlyBoughtTogether = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg p-6 md:p-12 flex flex-col md:flex-row gap-8">
      {/* Left Section */}
      <div className="flex-1 rounded-lg shadow-md overflow-hidden flex flex-col">
        {/* Image */}
        <div
          className="bg-center bg-no-repeat bg-cover h-64 md:h-full rounded-lg shadow-md"
          style={{ backgroundImage: `url(${leftCard.bgImage})` }}
        />
        {/* Text inside the image container but below image */}
        <div className="bg-white p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-red-600 text-xs font-semibold tracking-wide mb-2">
            {leftCard.saleText}
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {leftCard.title}
          </h2>
          <p className="text-gray-600 text-sm mt-2 max-w-md">
            {leftCard.description}
          </p>
          <a
            href={leftCard.btnUrl}
            className="inline-flex items-center justify-center mt-6 px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full transition"
          >
            {leftCard.btnText}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-neutral-50 rounded-lg p-8 shadow-md flex flex-col justify-between">
        <div>
          <span className="inline-block bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded mb-3">
            Set Dress SALE OFF 15%
          </span>
          <h3 className="text-2xl font-bold mb-1">
            Frequently Bought Together
          </h3>
          <p className="text-gray-600 mb-6 text-sm">
            Up to 50% off Lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </p>

          {/* Product List */}
          <ul className="space-y-4">
            {rightItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 flex-wrap md:flex-nowrap"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-20 object-contain rounded shadow-sm"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-red-600 font-bold">{item.price}</span>
                    <span className="text-green-700 text-xs font-semibold">
                      {item.stock}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                  {item.btnText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h18M3 7h18M7 11h10M7 15h10M7 19h10"
                    ></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Total price and button */}
        <div className="mt-6">
          <p className="text-center font-semibold mb-4">
            Total price: <span className="text-black">$51.00</span>
          </p>
          <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-md flex items-center justify-center gap-2 transition">
            ADD SET TO CART
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M3 7h18M7 11h10M7 15h10M7 19h10"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
