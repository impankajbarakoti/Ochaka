import React from "react";

const cards = [
  {
    img: "https://ochaka.vercel.app/images/section/box-image-16.jpg",
    title: "Book Your Summer",
    subtitle: "Get a voucher for any order over $150",
    btn: "DISCOVER MORE",
    bg: "bg-blue-100",
    text: "text-black",
    btnUrl: "#",
  },
  {
    img: "https://ochaka.vercel.app/images/section/box-image-17.jpg",
    title: "Good books every day",
    subtitle: "SALE upto 50%",
    btn: "SHOP NOW",
    bg: "bg-neutral-100",
    text: "text-black",
    btnUrl: "#",
    sale: true,
  },
  {
    img: "https://ochaka.vercel.app/images/section/box-image-18.jpg",
    title: "By readers",
    subtitle: "The best and most meaningful books recommended by readers",
    btn: "GET A VOUCHER",
    bg: "bg-green-200",
    text: "text-black",
    btnUrl: "#",
  },
];

const PromoSection = () => {
  return (
    <div className="w-full py-8 px-4 bg-white">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl shadow-lg overflow-hidden ${c.bg} min-h-[330px] w-full sm:w-[350px] md:w-[400px] h-full flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl`}
          >
            {/* Image fills the card */}
            <img
              src={c.img}
              alt="card visual"
              className="absolute inset-0 w-full h-full object-fill z-0"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between bg-black/40 transition-all duration-300 transform hover:bg-black/50">
              <div>
                {c.sale && (
                  <span className="text-red-500 font-semibold mb-2 inline-block">
                    {c.subtitle}
                  </span>
                )}
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 text-white transition-colors duration-300 hover:text-yellow-400">
                  {c.title}
                </h2>
                {!c.sale && (
                  <p className="text-lg font-medium mb-4 text-white">
                    {c.subtitle}
                  </p>
                )}
              </div>
              <a
                href={c.btnUrl}
                className="font-semibold underline text-lg text-white mt-4 transition-colors duration-300 hover:text-yellow-300"
              >
                {c.btn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
