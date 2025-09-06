// src/components/VoucherBanner.jsx
import { useState } from "react";

export default function DiscountBanner() {
  const [copied, setCopied] = useState(false);
  const voucherCode = "35%OFFVOUCHER";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-[#507550] rounded-2xl border border-dashed border-white/40 p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Left Side Text */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center md:text-left">
          Buy 2 Get 1 Free and Get 35% Off Voucher
        </h3>

        {/* Right Side Code Box */}
        <div className="flex items-center justify-center bg-white text-black rounded-full px-6 py-3 shadow w-full md:w-auto">
          <span className="font-semibold text-sm sm:text-base">
            {voucherCode}
          </span>
          <span className="mx-2 text-gray-400">|</span>
          <button
            onClick={copyToClipboard}
            className="text-[#507550] font-semibold hover:underline text-sm sm:text-base"
          >
            {copied ? "COPIED!" : "COPY"}
          </button>
        </div>
      </div>
    </div>
  );
}
