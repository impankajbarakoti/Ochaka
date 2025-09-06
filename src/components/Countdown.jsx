import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  // Function to calculate the remaining time
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 3, hours: 4, minutes: 35, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, );

  return (
    <div className="border-2 border-dashed max-w-6xl sm:ml-14 border-red-400 bg-red-50 rounded-md p-4 flex flex-col sm:flex-row justify-center items-center sm:gap-8 gap-4">
      {/* Left side text */}
      <div className="flex items-center text-red-600 font-semibold text-base sm:text-lg mb-4 sm:mb-0 justify-center sm:justify-start">
        <span role="img" aria-label="fire" className="mr-2">
          🔥
        </span>
        Hurry up offer ends in:
      </div>

      {/* Timer */}
      <div className="flex justify-between items-center gap-4 w-full sm:w-auto">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-center min-w-[30px]"
          >
            <div className="text-base flex justify-center font-bold">
              {timeLeft[unit].toString().padStart(2, "0")}
            </div>
            <div className="text-[10px] flex justify-center uppercase">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
