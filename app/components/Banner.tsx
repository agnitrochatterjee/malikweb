"use client";

import Image from "next/image";
import bannerImage from "../assets/Group 27.jpg";

export const Banner = () => {
  return (
    <div className="relative min-w-screen h-[500px] overflow-auto">
      <Image
        src={bannerImage}
        alt="Banner Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-white/0 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-24 max-w-3xl">
        <h1 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
          Simplifying Your Finances,<br />
          Empowering Your Future
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Gold Coast&apos;s Trusted Accounting Experts
        </p>
        <button className="mt-6 bg-[#B2DC18] text-black font-medium px-5 py-2 rounded w-[160px] h-[40px] text-[15px] cursor-pointer">
          Book a Meeting
        </button>
      </div>
    </div>
  );
};