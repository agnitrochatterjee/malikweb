"use client";

import Banner from "../assets/Banner.jpg";

const InfoBanner: React.FC = () => {
  return (
    <div className="relative max-w-5xl mx-auto h-60 rounded-xl overflow-hidden mb-10">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${Banner.src})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-white/0 z-10" />
      <div className="relative z-20 flex flex-col justify-center h-full pl-10 text-white font-poppins">
        <h2 className="text-4xl mb-2">
          WANT MORE <br />
          INFORMATION?
        </h2>
        <button className="mt-6 bg-[#B2DC18] text-black font-medium px-5 py-2 rounded w-[160px] h-[40px] text-[15px] cursor-pointer">
          Book a Meeting
        </button>
      </div>
    </div>
  );
};

export default InfoBanner;